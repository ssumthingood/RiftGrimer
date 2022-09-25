import axios from "axios";

const lolapi = axios.create({
    baseURL: "https://kr.api.riotgames.com/lol",
    params: {
        api_key: process.env.NEXT_PUBLIC_RIOT_KEY,
    },
});

export const userApi = {
    searchbyName: () => lolapi.get("/summoner/v4/summoners/by-name/버튼을눌러지금딱"),
    rotation: () => lolapi.get("/platform/v3/champion-rotations"),
};
