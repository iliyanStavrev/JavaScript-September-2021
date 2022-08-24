function solve(array){
      let result = [];
    for (const iterator of array.slice(1)) {
        let[empty,town,Latitude,Longitude] = iterator.split(/\s*\|\s*/gim);
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        let obj = {Town:town,Latitude: Latitude,Longitude: Longitude};
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);