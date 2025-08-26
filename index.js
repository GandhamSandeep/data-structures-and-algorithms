// Programming 101
let a = 8;
let b= 9;

let sumOfNumber = a + b;
console.log(sumOfNumber);

// Boolean True of False

let firstName = 'Gandham';
let lastName = 'Sandeep';

let sum = firstName + " " + lastName;

console.log(sum);


let array = [2, 3, 5, 7, 9, 19, 20];
let arrayOfStrings = ["mango", "banana", "apple", "orange", "grape", "kiwi", "peach", ["watermelon", "pineapple"]];

let sumOfArray = array[3] + array[0];
let sumOfFruits = arrayOfStrings[1] + " " + arrayOfStrings[3];

console.log(sumOfArray);
console.log(sumOfFruits);
console.log(arrayOfStrings[7][0]);

let obj = {
  a: 9,
  name: "Sandep",
  b: 10, 
  bool: true
}
console.log(obj.a);



// Functions, If Else, loops -> for loop & while loop and example programs

function greet(){
  console.log("sandeep")
}
greet();

function greet(name){
  console.log("sandeep" + name)
}
greet(" Gandham");

function sumOfTwoNumbers(a, b){
  return a + b;
}
const result = sumOfTwoNumbers(5, 6);
console.log(result);


function multiplication(a,b){
  let result = a * b;
  console.log(result);
}
multiplication(2,9);

// Create a funcation which accepts the age and tells wether a person is eligible for vote or not
function voteElgibleCriteria(age){
  if(age < 0 ){
    console.log("age cannot be negative");
  }
  else if(age >= 18){
    console.log("you are eligble for vote");
  }else{
    console.log("you are not eligble for vote");
  }
}
voteElgibleCriteria(17);
voteElgibleCriteria(20);
voteElgibleCriteria(-20);


// Create a function to check wether the number is even or odd
function evenOrOdd(num){

  let rem = num % 2

  if(rem === 0){
    console.log("even number");
  }else{
    console.log("odd number");
  }
}
evenOrOdd(22);
evenOrOdd(3);


// Loops
for(let i = 0; i < 20 ; i++){
  console.log(i);
}

for(let i=0; i<5; i++){
  console.log(i + " " +'sandeep')
}

for(let i=3; i<5; i++){
  console.log(i + ' ' +"sandeep");
}

for(let i = 2; i < 9; i=i+2 ){
  console.log(i)
}

for(let i = 5; i > 0; i-- ){
  console.log(i)
}

for(let i = 5; i < 4; i++){
  console.log(i)
}
// OutPut: the above for will never be true the condition is fails 

// for(let i = 1; i > 0; i++){
//   console.log(i)
// }
// OutPut: the above for will never be stops it will run infinite times

function greet(){
  console.log("sandeep")
}

for(let i = 0; i < 5; i++){
  greet();
}

let arr = [2, 3, 5, 7, 9, 19, 20, 6, 8];

console.log(arr.length);
console.log(arr[0])

for(let i = 0; i< arr.length;i++){
  console.log(arr[i]+ " " +"sandeep")
}


// print all the even numbers from 1 to 100

for(let i=0; i<arr.length; i++){
  if(arr[i] % 2 == 0){
    console.log('even number' + " " + arr[i]);
  }
  // else{
  //   console.log('odd number' + " " + arr[i]);
  // }
}

// while loop
let i = 0;
while(i < 5){
  console.log(i);
  i++;
}
