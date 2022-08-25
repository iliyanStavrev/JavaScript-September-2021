function toStringExtension() {
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
        toString(){
           return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
        }
    }
    class Student extends Person{
         constructor(name,email,course){
             super(name,email);
             this.course = course;
         }
         toString(){
            return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
         }
    }
    return { 
        Person, 
        Teacher,
        Student
       
 }
}
let result = toStringExtension();
let Teacher =  result.Teacher;
let t = new Teacher('pesho','stamat','eho'); 
   Teacher.prototype.collect = function(){
       console.log('hiiiii');
   }
   t.collect();