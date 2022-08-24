function solve(input,string){
    if (string ==='asc') {
        input.sort((a,b) => a - b);
    }
    else if (string === 'desc') {
        input.sort((a,b) => b - a);
    }
    return input;
}
console.log(solve([14, 7, 17, 6, 8], 'desc'));