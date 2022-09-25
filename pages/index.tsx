import axios from "axios";
import type { NextPage } from "next";
import { userApi } from "./api";
import photos from "./api/photos";

const Home: NextPage = () => {
    console.log(process.env.NEXT_PUBLIC_RIOT_KEY);
    const fetchPhotos = async () => {
        const res = await fetch("/api/photos");
        const { photos } = await res.json();
        console.log(photos);
    };

    const fetchPhotos2 = async () => {
        axios.get("/api/photos").then((res) => {
            console.log(res.data.photos);
        });
    };

    fetchPhotos();
    fetchPhotos2();

    // console.log(userApi.rotation());
    return <></>;
};

export default Home;
