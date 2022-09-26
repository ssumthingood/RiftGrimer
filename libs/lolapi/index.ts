import axios from "axios";

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
