import type { NextPage } from "next";
import { LOLapi, DDragonapi } from "@libs/lolapi";
import { useState } from "react";
import { useEffect } from "react";
import { cls } from "@libs/client/utils";
import Layout from "@components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
    const [server, setServer] = useState([]);
    const [rotation, setRotation] = useState<string[]>([]);
    const [championList, setChamps] = useState<any[]>([]);

    const searchChampById = (id: string): string => {
        for (var i in championList) {
            if (championList[i].key === id.toString()) {
                return championList[i].id;
            }
        }
        return "undef";
    };

    useEffect(() => {
        // const champname = "Aatrox";

        LOLapi.serverStatus().then((res) => {
            setServer(res.data.incidents);
        });

        LOLapi.rotation().then((res) => {
            setRotation(res.data.freeChampionIds);
        });

        DDragonapi.championName().then((res) => {
            setChamps(res.data.data);
        });

        // DDragonapi.championStatusByName(champname).then((res) => {
        //     // const { Aatrox } = res.data.data;
        //     // console.log(Aatrox.name);
        //     console.log(getChampStatByName(champname, res.data.data));
        // });
    }, []);

    return (
        <Layout>
            <div>한섭 서버 상태 : {server.length > 0 ? "NOT FINE" : "FINE"}</div>
            금주의 로테이션 챔피언
            <div className={cls("w-96")}>
                <div className={cls("grid grid-cols-8 gap-2 w-300")}>
                    {rotation.map((id) => (
                        <Link href={`/champion/${searchChampById(id)}`}>
                            <img key={searchChampById(id)} className={cls("")} src={`https://opgg-static.akamaized.net/images/lol/champion/${searchChampById(id)}.png?image=c_crop,h_100,w_100`} />
                        </Link>
                        // op.gg 사진으로 가져올시 이런 방법으로 사진크기 조절가능
                        // <img className={cls("")} src={`https://opgg-static.akamaized.net/images/lol/champion/${searchChampById(id)}.png?image=c_crop,h_100,w_100`} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Home;
