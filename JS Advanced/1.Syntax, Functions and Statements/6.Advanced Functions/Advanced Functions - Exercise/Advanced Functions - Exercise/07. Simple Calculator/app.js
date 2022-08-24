function calculator() {
         let numOne;
         let numTwo;
         let total;
    return {
          init: (num1,num2,result) =>{
           numOne = document.querySelector(num1);
          numTwo = document.querySelector(num2);
           total = document.querySelector(result);
          
          },
         add: function(){
      let sum  = Number(numOne.value) + Number(numTwo.value);
      total.value = sum;

    },
    subtract: () => {
        let sum  = Number(numOne.value) - Number(numTwo.value);
        total.value = sum;
  
    }     
  }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
calculate.add();
calculate.subtract();




