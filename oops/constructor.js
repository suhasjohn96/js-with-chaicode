                                            // ----------------- function-------------------
function greet(name){
// console.log("Hello ",name);
}

function Person(name,age){
this.name=name
this.age=age 
}

function Car(maker,model){
    this.maker=maker;
    this.model=model;
}

function Van(maker,model){
    let manufacturer=maker;
    let newmodel=model;

    return manufacturer,newmodel;
}

    // ---------------------------------------------------constructor-----------------------------------

let car= new Car("Hyundai","Verna");
// console.log(car);


let newVan= Van("Tata","Harrier");
// console.log(newVan);


// -----------------------------------------------------Nested function------------------------

function Burger(type){
    this.type=type
    this.describe=function(){
        return `this is a ${this.type} `
    }
}

let cheeseburger= new Burger("Cheese burger");
// console.log(cheeseburger.describe());


// -------------------------------------------------constructor functtion and its prototype--------------------

 function Animal(species){
 this.species=species
 }

 Animal.prototype.sound = function() {
    return `${this.species} makes a sound`;
 };

let dog = new Animal("Dog");
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat.sound());