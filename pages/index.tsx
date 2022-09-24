import type { NextPage } from "next";
import { userApi } from "./lolapi";

const Home: NextPage = () => {
    console.log(process.env.NEXT_PUBLIC_RIOT_KEY);
    console.log(userApi.rotation());
    return <></>;
};

export default Home;
