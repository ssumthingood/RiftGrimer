import { isBooleanObject } from "util/types";

export function cls(...classnames: string[]) {
    return classnames.join(" ");
}

export function getChampStatByName(name: string, status: any): any {
    const filtered = status[name];
    //함수에 param 넣어서 그 param으로 JSON내의 필드를 찾고 싶을 때는 json[찾으려는 필드] 이런 식으로 찾으면 된다
    return filtered;
}
