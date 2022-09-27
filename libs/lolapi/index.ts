import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RIOT_API,
    params: {
        api_key: process.env.NEXT_PUBLIC_RIOT_KEY,
    },
});

export const LOLapi = {
    searchByName: (searchTerm: string) => api.get(`summoner/v4/summoners/by-name/${searchTerm}`),
    searchByAccountID: (id: string) => api.get(`summoner/v4/summoners/by-name/${id}`), //닉네임검색 시 나오는 id parameter 사용
    rotation: () => api.get("platform/v3/champion-rotations"),
    serverStatus: () => api.get("status/v4/platform-data"),
    getRecentMatches: (puuid: string) => api.get(`match/v5/matches/by-puuid/${puuid}/ids`), //user puuid로 최근 경기의 경기코드 찾기
};

export const championNameById = (ID: string): string => {
    var mydata: string = "undef";
    axios
        .get("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json")
        .then((res) => {
            const championList = res.data.data;
            for (var i in championList) {
                if (championList[i].key === ID) {
                    // console.log(championList[i].id);
                    console.log(championList[i].id);
                    mydata = championList[i].id;
                    break;
                }
            }
        })
        .catch((err) => {
            return err;
        });
    return mydata;
};
