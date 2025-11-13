

// interface User{
//     name :String;
//     age : number;
//     location : String;
//     mentor : Boolean;
// }

// let userOne : User = {
//     name : "Eloheeka",
//     age : 17,
//     location: "Nyabihu",
//     mentor : false

// }

// let userTwo : User = {
//     name : "Kelly",
//     age : 20,
//     location: "Kigali,Rwanda",
//     mentor : true

// }

// let userThree : User = {
//     name : "Zion",
//     age : 30,
//     location: "NewYork,USA",
//     mentor : true

// }

// let userFour : User = {
//     name : "Manzi",
//     age : 188,
//     location: "Toronto,Canada",
//     mentor : false

// }

// const users : User[] = [userOne, userTwo, userThree];

// for(let user of users){
//     console.log(`${user.name} is from ${user.location} and is a ${user.mentor ? 'mentor' : 'learner'}`)
// }


// const mentors = users.filter(user => user.mentor === true);
// console.log(`Number of mentors : ${mentors.length}`);

// const rwandans = users.filter(user => user.location.includes("Rwanda"));
// console.log(`Number of Rwandans : ${rwandans.length}`);

// function introduceUser(user: string, age? : number, location :string = "Kigali"){
//     console.log(age ? `${user} is ${age} and lives in ${location}` : `${user} prefers to keep age a secret. and lives in ${location}`)
// }

// console.log(introduceUser("Eloheeka",17,"Nyabihu"));
// console.log(introduceUser("Manzi",undefined,"Toronto"   ));

// let calc: (x:number, y:number) => number;
//  calc = (a,b) => a+b;
//  console.log(calc(5,10));

//  function format(value:string) :string;
//  function format(value:number) :number;
//  function format(value: number | string) : number | string {
//     return value.toString();
//  }

//  console.log(format("Eloheeka"));
//  console.log(format(12345));

//  let converter : (x: number) => string;
//  converter =  (num) => `Value: ${num}`;
//  console.log(converter(100));

//  interface person{
//     name : string;
//     age : number;
//     intro() : void;
//  }

//  let individual : person ={
//     name : "Zion",
//     age:17,
//     intro(){
//         console.log(`Hi my name is ${individual.name} and I am ${individual.age} years old.`);
//     }
//  }

//     individual.intro();

//      let persona : person ={
//     name : "Eloheeka",
//     age:17,
//     intro(){
//       console.log(`person ${persona.name} does not talk about their age`);
//     }
//  }

//  persona.intro();

//  type ID = number | string;
//  type Gender = "Male" | "Female" | "Other";

//  interface profile {
//     id:ID,
//     name : string,
//     gender: Gender
//  }

//  let person1 : profile = {
//     id:1,
//     name:"Kelly",
//     gender: "Female"
//  }

//  console.log(`Name : ${person1.name} ID: ${person1.id} Gender: ${person1.gender}`);

//  type Address = {city: string, country: string};
//  type contact = { email: string, phone: string};

//  type Details = Address & contact;

//  const user: Details = {
//     city: "Kigali",
//     country: "Rwanda",
//     email: "m.eloheeka12@gmail.com",
//     phone: "+250788123456"
//  }

//  console.log(`City: ${user.city}, Country: ${user.country}, Email: ${user.email}, Phone: ${user.phone}`);


//  interface Car{
//     brand: string,
//     model: string,
//     year: number,
//     start() : void;
//  }

//  type EletricCar = Car & {batteryCapacity:number, charge():void};

//  let tesla :EletricCar = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2022,
//     batteryCapacity: 100,
//     start(){
//         console.log(`The ${this.brand} ${this.model} is starting.`);
//     },
//     charge() {
//         console.log(`Charging the ${this.brand} ${this.model} with a capacity of ${this.batteryCapacity} kWh.`);
//     },
//  }

//     tesla.start();
//     tesla.charge();

type Book = {
    title: string,
    author: string,
    readonly isbn: number,
    price: number;
} 

const MoreThanACrown : Book = {
    title: "More Than A Crown",
    author: "Nishimwe Naomie",
    isbn: 9789963535220,
    price: 20.5,
};

const{title, author} = MoreThanACrown;
console.log(`Title: ${title}, Author: ${author}`);

class Person {
    name: string;
    className: string;

    constructor(name: string, className: string) {
        this.name = name;
        this.className = className;
    }

    greet() : void{
        console.log(`Hello, my name is ${this.name} and I am in ${this.className}`)
    }
}

const student = new Person("Eloheeka", "Year 2A")
student.greet();

class Box<T>{
    contents : T
    

    constructor(value : T){
        this.contents = value
    }

    display(){
        console.log(`This box contains ${this.contents}`)
    }

}

const solid = new Box<string>("books");
const liquids = new Box<number>(1234);

function WrapInArray<T>(value : T) {
    return [value];
}

    type Pet = "Dog" | "Cat" | "Fish";
    function logsPet  (value: Pet){
        if( value === "Dog"){
            console.log("Type is a dog")
        }
        if( value === "Cat"){
            console.log("Type is cat")
        }
        if( value === "Fish"){
            console.log("Type is a Fish");
        }
    }