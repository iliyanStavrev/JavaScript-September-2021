(function solve(){
    Array.prototype.last = function(){
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n){
        let newOne = [];
        for (let i = n ; i < this.length; i++) {
            newOne.push(this[i]);
        }
        return newOne;
    }
    Array.prototype.take = function(n){
        let newOne = [];
        for (let i = 0; i < n; i++) {
           newOne.push(this[i]);
            
        }
        return newOne;
    }
    Array.prototype.sum = function(){
        return this.reduce((a,b) => a + b, 0);
    }
    Array.prototype.average = function(){
        return this.reduce((a,b) => a + b, 0) / this.length;
    }
})();
let arr = [1,2,3,4,5];

console.log(arr.last());
console.log(arr.skip(2));
console.log(arr.take(3));
console.log(arr.sum());
console.log(arr.average());