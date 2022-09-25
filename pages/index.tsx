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

    console.log(LOLapi.searchByName());

    fetchPhotos();
    fetchPhotos2();

    // console.log(userApi.rotation());
    return <></>;
};

export default Home;
