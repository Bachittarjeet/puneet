
let a
function test(){
    a = 10
     b= 20
    b 
}
test()

a
b


{
    var abc = "something"
    abc
}
abc





// hoisting


hoisting = "working"
var hoisting

hoisting



// Const

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";
cars


//

let x = "John"
let y = "Doe"
let z = 20

console.log(x+y+z)

z<10 ? console.log("z i smaller than 10") : console.log("Z is bigger than 10")




let final_var = 20 + 40
console.log(final_var)


x = true; // 1
y = false; // 0


if (0){
    console.log("This")
}
else{
    console.log("That")

}


// Objects

const person1 = {firstName:"John", lastName:"Doe", address:"123 abc st bengaluru India"};
const person2 = {firstName:"John", address:"456 abc st bengaluru India"};
const company = {name:"Google", address:"123 abc st SF US"};


console.log(person1.firstName)




function addressCheck({address}){
    // check on google map
    console.log(address + "is correct")
}

addressCheck(person1)
addressCheck(person2)
addressCheck(company)



const [p1,p2,p3,p4] = ["Ram", "Sham", "seeta","Geeta"]

console.log(p1)



// Function 

// Function is called, the return value will end up in x
let res = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

res


//Strings 
const wordOfTheDay = '"Happy"'

let message = "The word of the day is "+ wordOfTheDay +"."

message

message = `The word of the day is ${wordOfTheDay}.`
message

console.log(message.length) 

let text= "It's alright.";
text