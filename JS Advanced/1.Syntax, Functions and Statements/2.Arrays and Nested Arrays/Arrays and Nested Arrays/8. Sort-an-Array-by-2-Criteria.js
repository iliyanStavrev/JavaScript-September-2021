function solve (arr){
     arr.sort();
    arr.sort(function(a,b){return a.length - b.length});
   
    console.log(arr.join('\n'));
}
solve(['test', 
'Deny', 
'omen', 
'Default']);