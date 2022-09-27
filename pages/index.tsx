import axios from "axios";
import type { NextPage } from "next";
import { championNameById, LOLapi } from "@libs/lolapi";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "@components/Layout";

const Home: NextPage = () => {
    const [server, setServer] = useState([]);
    const [rotation, setRotation] = useState<string[]>([]);

    useEffect(() => {
        LOLapi.serverStatus().then((res) => {
            setServer(res.data.incidents);
        });

        LOLapi.rotation().then((res) => {
            setRotation(res.data.freeChampionIds);
        });
    }, []);

    return (
        <Layout>
            <div>한섭 서버 상태 : {server.length > 0 ? "NOT FINE" : "FINE"}</div>
            <div>
                금주의 로테이션 챔피언 :
                {rotation.map((id) => (
                    <>
                        {" "}
                        {id}
                        {championNameById(id.toString())}
                    </> // <span key={champ}> {championNameById(champ)}</span>
                ))}
            </div>
        </Layout>
    );
};

export default Home;
