function checkGrade() {
    const a1 = document.querySelector("#answer1");
    console.log(a1.value);
    const a2 = document.querySelector("#answer2");
    console.log(a2.value);
    // let total = parseFloat(a1.value) + parseFloat(a2.value);
    let a1Value = parseFloat(a1.value)
    let a2Value = parseFloat(a2.value)
    let sum = calculateTotal(a1Value, a2Value)
    console.log("sum is", sum);
    sendReport(sum)
}

function calculateTotal(a, b) {
    let total = a + b;
    return total;
}

function sendReport(score) {
    const report = document.querySelector("#report");
    console.log(report);
    if (score > 30) {
        console.log("you good");
        report.textContent = "you good";
    } else if (score > 20 && score <= 30 ) {
        console.log("you shit");
        report.textContent = "you shit";
    } else if (score > 1 && score <= 20 ) {
        console.log("you totally shit");
        report.textContent = "you totally shit";
    } else {
        console.log("you exactly totally shit");
        report.textContent = "you exactly totally shit";
    }
}

const question1 = document.querySelector("#question1")
console.log(question1.textContent)
question1.textContent = "Question 1 ?"

const question2 = document.querySelector("#question2")
console.log(question2.textContent)
question2.textContent = "Question 2 ?"

const myCat = document.querySelector("#my-cat")
console.log(myCat)
myCat.classList.add("round")

function toggleMe() {
    myCat.classList.toggle("round")
}

const header = document.querySelector("header")
console.log(header)
console.log(header.innerHTML)
console.log(header.textContent)
header.textContent = "my cat 2"
let personality = "boring"
let doubt = "doubt"
// header.innerHTML += `<p class="blue-style">is the ${personality}!</p>
//  <p class="red-style">do you have any ${doubt}? </p>`

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

// const h1 = document.querySelector("h1");
// console.log(h1);

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

// const allAbcd = document.querySelectorAll(".abcd");
// console.log(allAbcd);

// const report = document.querySelector("#report");
// console.log(report);