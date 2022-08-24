function area() {
        return Math.abs(this.x * this.y);
    }
    function vol() {
            return Math.abs(this.x * this.y * this.z);
        }    

function solve(area,vol,input){
    let arrayInput = JSON.parse(input);
    let newArray = [];
    let obj = {};
  for (const coordinate of arrayInput) {
      newArray.push({
        area: area.call(coordinate),
        volume: vol.call(coordinate)
      });
  }
  return newArray;
}
console.log(solve(area, vol, `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`));