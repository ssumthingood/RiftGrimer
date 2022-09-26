import axios from "axios";
import type { NextPage } from "next";
import { LOLapi } from "@libs/lolapi";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "@components/Layout";

const Home: NextPage = () => {
    const [server, setServer] = useState("loading...");
    const [rotation, setRotation] = useState([]);
    // console.log(process.env.NEXT_PUBLIC_RIOT_KEY);
    // const fetchPhotos = async () => {
    //     const res = await fetch("/api/photos");
    //     const { photos } = await res.json();
    //     console.log(photos);
    // };

    // const fetchPhotos2 = () => {
    //     axios.get("/api/photos").then((res) => {
    //         console.log(res.data.photos);
    //     });
    // };

    //이렇게 하면 cors가 안뜨는데... 일단 이런 식으로 따로 모듈화해두는게 좋을듯
    // axios
    //     .get(`${process.env.NEXT_PUBLIC_RIOT_API}summoner/v4/summoners/by-name/%EB%B2%84%ED%8A%BC%EC%9D%84%EB%88%8C%EB%9F%AC%EC%A7%80%EA%B8%88%EB%94%B1?api_key=${process.env.NEXT_PUBLIC_RIOT_KEY}`)
    //     .then((res) => {
    //         console.log(res.data);
    //     });

    // axios.get(`${process.env.NEXT_PUBLIC_RIOT_API}platform/v3/champion-rotations?api_key=${process.env.NEXT_PUBLIC_RIOT_KEY}`).then((res) => {
    //     console.log(res.data.freeChampionIds);
    // });
    //이렇게 보내면 cors가 뜬다
    // axios
    //     .get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B2%84%ED%8A%BC%EC%9D%84%EB%88%8C%EB%9F%AC%EC%A7%80%EA%B8%88%EB%94%B1", {
    //         params: {
    //             api_key: process.env.NEXT_PUBLIC_RIOT_API,
    //         },
    //     })
    //     .then((res) => {
    //         console.log(res);
    //     });

    //모듈화 해야됨 - api 설계 자체는 성공
    // LOLapi.rotation().then((res) => {
    //     console.log(res.data);
    // });

    // LOLapi.searchByName("버튼을눌러지금딱").then((res) => {
    //     console.log(res.data);
    // });

    useEffect(() => {
        LOLapi.serverStatus().then((res) => {
            setServer(res.data.incidents[0].incident_severity);
        });

        LOLapi.rotation().then((res) => {
            setRotation(res.data.freeChampionIds);
        });
    }, []);

    return (
        <Layout>
            <div>한섭 서버 상태 : {server}</div>
            <div>
                금주의 로테이션 챔피언 :
                {rotation.map((champ) => (
                    <span key={champ}>{champ} </span>
                ))}
            </div>
        </Layout>
    );
};

export default Home;
