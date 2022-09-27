export const getChampName: any = (id: number) => {
    var data;
    fetch(`http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json`)
        .then((res) => {
            return res.json();
        })
        .then((jsondata) => {
            data = jsondata;
        });
    return data;
};

// import { request } from "https";

// export function getChampName(id: number) {
//     request("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json", function (error: any, response: any, body: string) {
//         let list = JSON.parse(body);
//         let championList = list.data;

//         for (var i in championList) {
//             if (championList[i].key == id) {
//                 console.log(championList[i].id);
//             }
//         }

//         //console.log(championList[i].id + " | " + championList[i].key);
//     });
// }
