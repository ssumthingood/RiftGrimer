export const getChampName = (id: string) => {
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
