

interface User{
    name :String;
    age : number;
    location : String;
    mentor : Boolean;
}

let userOne : User = {
    name : "Eloheeka",
    age : 17,
    location: "Nyabihu",
    mentor : false

}

let userTwo : User = {
    name : "Kelly",
    age : 20,
    location: "Kigali,Rwanda",
    mentor : true

}

let userThree : User = {
    name : "Zion",
    age : 30,
    location: "NewYork,USA",
    mentor : true

}

let userFour : User = {
    name : "Manzi",
    age : 188,
    location: "Toronto,Canada",
    mentor : false

}

const users : User[] = [userOne, userTwo, userThree];

for(let user of users){
    console.log(`${user.name} is from ${user.location} and is a ${user.mentor ? 'mentor' : 'learner'}`)
}


const mentors = users.filter(user => user.mentor === true);
console.log(`Number of mentors : ${mentors.length}`);

const rwandans = users.filter(user => user.location.includes("Rwanda"));
console.log(`Number of Rwandans : ${rwandans.length}`);

function introduceUser(user: string, age? : number, location :string = "Kigali"){
    console.log(age ? `${user} is ${age} and lives in ${location}` : `${user} prefers to keep age a secret. and lives in ${location}`)
}

console.log(introduceUser("Eloheeka",17,"Nyabihu"));
console.log(introduceUser("Manzi",undefined,"Toronto"   ));

let calc: (x:number, y:number) => number;
 calc = (a,b) => a+b;
 console.log(calc(5,10));

 function format(value:string) :string;
 function format(value:number) :number;
 function format(value: number | string) : number | string {
    return value.toString();
 }

 console.log(format("Eloheeka"));
 console.log(format(12345));

 let converter : (x: number) => string;
 converter =  (num) => `Value: ${num}`;
 console.log(converter(100));

