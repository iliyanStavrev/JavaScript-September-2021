class Company{

    constructor(){
        this.departments = new Map;
    }
    static Employee = class Employee{
        constructor(name,salary,position){
            this.name = name;
            this.salary = salary;
            this.position = position;
        }
        get name(){
            return this.name;
        }
        set name(value){
             if (value === '' || value === undefined || value === null) {
            throw new Error("Invalid input!");
        } 
        this._name = value;
        }
        get salary(){
            return this.salary;
        }
        set salary(value){
             if (value === '' || value === undefined || value === null || value < 0) {
            throw new Error("Invalid input!");
        } 
        this._salary = Number(value);
        }
        get position(){
            return this.position;
        }
        set position(value){
             if (value === '' || value === undefined || value === null) {
            throw new Error("Invalid input!");
        } 
        this._position = value;
        }
    }

    addEmployee(name, salary, position, department){
        if (department === '' || department === undefined || department === null) {
            throw new Error("Invalid input!");
        } 
        if (!this.departments.has(department)) {
           this.departments.set(department,[]); 
        }
   
        let employee = new Company.Employee(name, salary, position);
       this.departments.get(department).push(employee);
       return `New employee is hired. Name: ${name}. Position: ${position}`  
    }
    bestDepartment(){
     let sorted = [...this.departments].sort(([aName,aWorkers],[bName,bWorkers]) => {
         return this._getAverageSalary(bName) - this._getAverageSalary(aName)});

         let[bestDepartmentName, bestDepartmentWorkers] = sorted[0];
            bestDepartmentWorkers.sort((a,b) =>   b._salary - a._salary === 0 
            ? a._name.localeCompare(b._name) :  b._salary - a._salary);
            
    

       // bestDepartmentWorkers.sort((a,b) => b._salary - a._salary);
       
        
        
        let bestDepartmentString = `Best Department is: ${bestDepartmentName}
Average salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;
        let workersString = '';
 for (const i of bestDepartmentWorkers) {
     workersString += `${i._name} ${i._salary} ${i._position}\n`;
 }
        return `${bestDepartmentString.trim()}\n${workersString.trim()}`;

 }
 _getAverageSalary(name){
    let current = this.departments.get(name);
    let average = 0;
    for (const i of current) {
        average += i._salary;
    }
    average = average / current.length;
      return average;
 }

 tostring(){
     return `${this._name} ${this._salary} ${this._position}`;
 }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());