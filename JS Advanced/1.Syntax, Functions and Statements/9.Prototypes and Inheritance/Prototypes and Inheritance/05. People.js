function solution(){

    class Employee{
          counter = 0;
        constructor(name,age){
            if(new.target == Employee){
                throw new Error("Cannot make instance of abstract class Employee.");
            }
                this.name = name;
                this.age = age;
                this.salary = 0;
                this.tasks = [];
              
        }
        getSalary(){
              return this.salary;
        }
        work(){
            if (this.counter > this.tasks.length - 1) {
                this.counter = 0;
            }
            for (let i = this.counter; i < this.tasks.length; i++) {
              console.log(this.tasks[i]);
              this.counter++;
              break;
            }
        }
        collectSalary(){
            return console.log(`${this.name} received ${this.getSalary()} this month.`);
        }
    };

    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }

    };

    class Senior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks = [ `${this.name} is working on a complicated task.`,
                           `${this.name} is taking time off work.`,
                           `${this.name} is supervising junior wthis.`];
    }
} 

class Manager extends Employee{
    constructor(name,age){
        super(name,age);
        this.dividend = 0;
        this.tasks = [`${this.name} scheduled a meeting.`,
                      `${this.name} is preparing a quarterly report.`];

    }
    collectSalary(){
        return console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }
    getSalary(){
        return super.getSalary() + this.dividend;
    }
}
    return{
        Employee,Junior,Senior,Manager
    }
}
const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
junior.work();  
junior.work();  
junior.salary = 5811; 
junior.collectSalary();  

const sinior = new classes.Senior('Alex', 31); 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
sinior.salary = 12050; 
sinior.collectSalary(); 

const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary(); 
console.log(manager.getSalary());
sinior.work();  
 