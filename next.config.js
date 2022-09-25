/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // async rewrites() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             destination: `https://kr.api.riotgames.com/lol/:path*`,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
