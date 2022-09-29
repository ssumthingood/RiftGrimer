import { getChampStatByName } from "@libs/client/utils";
import { DDragonapi } from "@libs/lolapi";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ChampionDetail: NextPage = () => {
    const router = useRouter();
    const [champ, setchamp] = useState<any>();
    useEffect(() => {
        if (!router.isReady) return;
        // console.log(router.query.id);
        //useEffect 시작하기 전에 router.query.id가 undefined가 아니란 걸 확실히 할 방법이 없을까?
        DDragonapi.championStatusByName(router.query.id?.toString()).then((res) => {
            setchamp(getChampStatByName(router.query.id?.toString(), res.data.data));
        });
    }, [router.isReady]);
    return (
        <>
            ChampionDetail
            <div>
                {champ ? (
                    <>
                        {champ.id}
                        <img src={`https://opgg-static.akamaized.net/images/lol/champion/${champ.id}.png?image=c_crop,h_100,w_100`} />
                    </>
                ) : (
                    <>Wrong API</>
                )}
            </div>
        </>
    );
};

export default ChampionDetail;
