export const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app: { use: (arg0: string, arg1: any) => void }) {
//     app.use(
//         "/api",
//         createProxyMiddleware({
//             target: process.env.NEXT_PUBLIC_RIOT_API,
//             changeOrigin: true,
//         }),
//     );
// };
