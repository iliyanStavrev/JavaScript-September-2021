function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let input = document.querySelector("#inputs textarea").value;

     let inputArr = JSON.parse(input);
     let restaurants ={};
      for (let i = 0; i < inputArr.length; i++) {
       let [restaurantName,workersString] = inputArr[i].split(" - ");
           let workersInput = workersString.split(', ').map(w =>{
              let[name,salary] = w.split(' ');
              return {name,salary:Number(salary)}
           });
     
               let sum = 0;
        for (let i = 0; i < workersInput.length; i++) {
            sum +=  workersInput[i].salary;
        }
        let average = sum / workersInput.length;
         workersInput = workersInput.sort((a,b) => b.salary - a.salary);
        
         restaurants[restaurantName] = {
            workers:workersInput,
            averageSalary:average
         }
        
      }
        let sortedRestaurants = Object.entries(restaurants).sort((a,b) => b[1].averageSalary - a[1].averageSalary);
         let bestRestaurant = sortedRestaurants[0];
        let outputRestaurant = document.querySelector("#bestRestaurant p");
        outputRestaurant.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].averageSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].workers[0].salary.toFixed(2)}`;
        
        
        let outputWorkers = document.querySelector("#workers p");
        let workerString = bestRestaurant[1].workers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ');
        outputWorkers.textContent = workerString;

   }
}