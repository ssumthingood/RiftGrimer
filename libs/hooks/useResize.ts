import { useEffect, useState } from "react";
import { debounce } from "lodash";

//반응형 요소를 위한 브라우저 reSize Hook
const useResize = () => {
    // if (typeof window !== "undefined") {
    const [windowSize, setWindowSize] = useState(
        typeof window !== "undefined"
            ? //SSR의 특성상 시작부터 window를 가지는 것이 아니므로 windowSize undefined를 막기 위해 미리 초기화한다.
              //width, height가 0으로 초기화되어도 window 렌더링 시 useEffect에 의해 올바른 값을 가지게 됨
              {
                  width: window.innerWidth,
                  height: window.innerHeight,
              }
            : { width: 0, height: 0 },
    );

    useEffect(() => {
        const handleResize = debounce(() => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, 1);
        //성능 개선을 위한 debounce함수 이용 렌더링에 텀 발생

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
    // }
};

export default useResize;
