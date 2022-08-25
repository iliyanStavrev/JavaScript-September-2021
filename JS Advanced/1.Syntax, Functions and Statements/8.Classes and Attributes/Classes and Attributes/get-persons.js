function getPersons(){

    class Person{
        constructor(firstName,lastName,age,email){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString(){
          return  `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    
        }
    }
    let array = [];
    let person1 = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let person2 = new Person('SoftUni');
    let person3 = new Person('Stephan', 'Johnson', 25);
    let person4 = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    array.push(person1);
    array.push(person2);
    array.push(person3);
    array.push(person4);

    return array;
}