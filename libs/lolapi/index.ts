import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";

const RIOTapi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RIOT_API,
    params: {
        api_key: process.env.NEXT_PUBLIC_RIOT_KEY,
    },
});

const Ddragon = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DDRAGON_API,
});

export const LOLapi = {
    searchByName: (searchTerm: string) => RIOTapi.get(`summoner/v4/summoners/by-name/${searchTerm}`),
    searchByAccountID: (id: string) => RIOTapi.get(`summoner/v4/summoners/by-name/${id}`), //닉네임검색 시 나오는 id parameter 사용
    rotation: () => RIOTapi.get("platform/v3/champion-rotations"),
    serverStatus: () => RIOTapi.get("status/v4/platform-data"),
    getRecentMatches: (puuid: string) => RIOTapi.get(`match/v5/matches/by-puuid/${puuid}/ids`), //user puuid로 최근 경기의 경기코드 찾기
};

export const DDragonapi = {
    championName: () => Ddragon.get("champion.json"),
    //championName 메소드에 id:String의 형태로 param을 넣어 해당하는 챔피언의 정보만 가져오려 했으나 axios 사용하는 함수에서 string값이 반환이 안되는 이유로(only Promise) 전체 챔피언 목록을 가져옴
};
