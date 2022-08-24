function createSortedList(){
    
    let obj = {
         numberList: [],  
        add(num){
            
            this.numberList.push(num);
           this.size++;
           this.numberList.sort((a,b) => a - b);
        },
        remove(index){
            if (index < this.numberList.length){
              this.numberList.splice(index,1);
         this.size--;   
         this.numberList.sort((a,b) => a - b);
            }
        
        },
        get(index){
            if (index < this.numberList.length) {
                 return this.numberList[index];
            }
        },
        size:0,

    };

   
    return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(2);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
