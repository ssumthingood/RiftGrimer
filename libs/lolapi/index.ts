import axios from "axios";

const api = axios.create({
    baseURL: "https://kr.api.riotgames.com/lol/",
    params: {
        api_key: process.env.NEXT_PUBLIC_RIOT_KEY,
    },
});

export const LOLapi = {
    searchByName: () => api.get("summoner/v4/summoners/by-name/버튼을눌러지금딱"),
    rotation: () => api.get("platform/v3/champion-rotations"),
};
