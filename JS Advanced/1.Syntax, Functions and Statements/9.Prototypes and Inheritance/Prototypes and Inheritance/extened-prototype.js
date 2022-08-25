function extendProrotype(classToExtend) {   
     
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`;
    }
    }
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
        toString(){
            return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`
        }
    }
    let person = new Person('name','email');
    extendProrotype(Person);

    console.log(person.toSpeciesString());
