import { getChampStatByName } from "@libs/client/utils";
import { DDragonapi } from "@libs/lolapi";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ChampionDetail: NextPage = () => {
    const router = useRouter();
    const [champ, setchamp] = useState([]);
    console.log(router);
    useEffect(() => {
        //router.query.id가 undefined가 아니란 걸 확실히 할 방법이 없을까?
        DDragonapi.championStatusByName(router.query.id).then((res) => {
            setchamp(getChampStatByName(router.query.id, res.data.data));
            console.log(champ);
        });
    }, []);
    return <>ChampionDetail</>;
};

export default ChampionDetail;
