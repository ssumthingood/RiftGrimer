import { getChampStatByName } from "@libs/client/utils";
import { DDragonapi } from "@libs/lolapi";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ChampionDetail: NextPage = () => {
    const router = useRouter();
    const [champ, setchamp] = useState([]);
    console.log(router.query.id);
    useEffect(() => {
        const champname = router.query.id!.toString();
        DDragonapi.championStatusByName(champname).then((res) => {
            setchamp(getChampStatByName(champname, res.data.data));
            console.log(champ);
        });
    }, []);
    return <>ChampionDetail</>;
};

export default ChampionDetail;
