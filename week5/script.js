// console.log("welcome to my world");
// let count = 10;
// console.log(count);
//let name = prompt("What is your name");
//console.log("Hello", name);
// const myName = "Axin";
// const myCity = "Harbin";
// console.log(myName, "live in", myCity);
//{
//    let b = 10;
//    console.log(b)
//}

// let isItRaining = false;
// console.log(isItRaining);
// if(isItRaining === true) {
//     console.log("Bring umbrella")
// } else {
//     console.log("No umbrella")
// };
// let isItOARTClass = true;
// console.log(isItOARTClass)

// const studentRecord = {
//     name: "Axin",
//     id: 4038371,
//     class: "OART1013",
//     amIScienceStudent: false,
//     amIDesignStudent: true,
// };

// if(studentRecord.amIDesignStudent === true){
//     console.log("Welcome")
// } else {
//     console.log("Wrong")
// };

// let myGrade = 80;
// if (myGrade >= 90) {
//     console.log("Great")
// } else if (myGrade < 90 && myGrade >= 70) {
//     console.log("Good")
// } else if (myGrade < 70 && myGrade >= 50) {
//     console.log("Not Bad")
// } else {
//     console.log("Nt Good")
// };

// console.log(studentRecord.name);
// console.log(studentRecord.name, "is a", studentRecord.class, "student");
// console.log(`${studentRecord.name} 
//     is a ${studentRecord.class} student`);

// let studentName = ["Tangseng", "Wukong", "Bajie", "Shaseng"];
// console.log(studentName);
// console.log(studentName[2]);

// let numArray = [4, 0, 3, 8, 7];
// console.log(numArray);


// console.log("");

let names =["A", "B", "C", "D", "E"];
console.log(names.length);
for(let i = 0; i< names.length; i++) {
    console.log("Hello", names[i]);
}

let shoppingCart = [
  {name:"X", price: 10},
  {name:"Y", price: 20},
  {name:"Z", price: 30},
  {name:"S", price: 40},
];

let total =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log("my shopping total", total);

let sum = 0;
for (let i = 0; i < 4; i++) {
    sum = sum + shoppingCart[i].price;
    console.log("intermediate sum", sum);
}

console.log("my shopping total", sum);