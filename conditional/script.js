

/* Exercise 1
--------------

Write a program to check to numbers and return true if one of the number is 100
or if the sum of the two numbers is 100

*/


//My first solution
const checkNumbers = (num1, num2) => {

    let sum = num1 + num2;
    if(num1 == 100 || num2 == 100){
        return true;
    }
    else if(sum == 100){
        return true;
    }
    else{
        return false;
    }
};

//Short Version
const checkNumbersSV = (num1,num2) => num1 === 100 || num2 === 100 || (num1+num2) === 100;

console.log(checkNumbers(100,0));
console.log(checkNumbers(0,100));
console.log(checkNumbers(50,50));
console.log(checkNumbers(20,80));
console.log(checkNumbers(30,30));
console.log(checkNumbers(70,20));

console.log(checkNumbersSV(100,0));
console.log(checkNumbersSV(0,100));
console.log(checkNumbersSV(50,50));
console.log(checkNumbersSV(20,80));
console.log(checkNumbersSV(30,30));
console.log(checkNumbersSV(70,20));