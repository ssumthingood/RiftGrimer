import axios from "axios";
import type { NextPage } from "next";
import { LOLapi } from "@libs/lolapi";

const Home: NextPage = () => {
    console.log(process.env.NEXT_PUBLIC_RIOT_KEY);
    const fetchPhotos = async () => {
        const res = await fetch("/api/photos");
        const { photos } = await res.json();
        console.log(photos);
    };

    const fetchPhotos2 = () => {
        axios.get("/api/photos").then((res) => {
            console.log(res.data.photos);
        });
    };

    axios
        .get(
            "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%B2%84%ED%8A%BC%EC%9D%84%EB%88%8C%EB%9F%AC%EC%A7%80%EA%B8%88%EB%94%B1?api_key=RGAPI-85b816bc-9566-4732-98be-e5dff215b7d9",
        )
        .then((res) => {
            console.log(res);
        });

    fetchPhotos();
    fetchPhotos2();

    return <></>;
};

export default Home;
