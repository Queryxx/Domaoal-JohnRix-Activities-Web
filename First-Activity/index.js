console.log("Hello, World!");

var name = "Joshua Garcia";
console.log("My name is ", name);
console.log("My name is " + name);

let fname = "John Rix";
fname = "Daniel"
const lname = "Domaoal";
console.log("My full name is " + fname + " " + lname);

const first = 20;
const second = 50;
const sum = first + second;
const difference = first - second;
const product = first * second;
const quotient = first / second;
console.log("The sum of is " + sum);
console.log("The difference is " + difference);
console.log("The product is " + product);
console.log("The quotient is " + quotient);

for (let a = 0; a < 5; a++) {
    console.log(a);
}

let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}

const students = ["John Rix", "Abi", "Arvin"];
students.forEach((s) => {
    console.log("Hello", s);
});

const age = 18;
if (age >= 18) {
    console.log("You are legal age.");
} else {
    console.log("You are minor.");
}

 const ages = [18, 20, 17, 12, 16];
ages.forEach((a) => {
    if (a >= 18) {
        console.log(a + " is legal age");
    }else{
        console.log(a + " is minor");
    }
});
 
for (let a = 6; a < 30; a++) {
    if (a >= 18){
    console.log(a, " is Legal Age");
    }else{
    console.log (a, " is minor");
    }
}




