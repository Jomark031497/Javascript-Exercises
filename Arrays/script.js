

/* Exercise 1
--------------

Write a program to find the number of even digits in an array of integers

*/

const findEvenNumbers = (numlist) => {
    let output = [];
    for (let i = 0; i < numlist.length; i++) {
        if (numlist[i] % 2 == 0) {
            output.push(numlist[i]);
        }
    }
    return output;

};


//let a = findEvenNumbers([23, 12, 14, 4, 7, 6, 75, 66, 89]);



/* Exercise 2
--------------

Write a program to find the number of even digits in an array of integers

*/



const findEven = num => {
    let output = [];
    while (num > 0) {
        if (num % 2 == 0) {
            output.push(num);
        }
        num--;
    }
    return output;
};

//let a = findEven(7);



/* Exercise 3
--------------

Write a program to check wether the given array of integers is sorted in ascending order

*/

const isAscendingOrder = arr => {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;

};

//let a = isAscendingOrder([1,3,2,4,5]);


/* Exercise 4
--------------

Write a program to get the largest even number from an array of integers

*/


const getBiggestEven = arr => {

    let output;
    let currentBiggest = 0;
    for (let i = 0; i < arr.length; i++) {


        if (arr[i] % 2 == 0 && arr[i] > currentBiggest) {
            currentBiggest = arr[i];
        }
    }

    return currentBiggest;
};

//let a = getBiggestEven([66, 75, 666, 7000, 8, 4, 232, 54, 900,97]);


/* Exercise 5
--------------

Write a program to replace the first digit in a string (should contain atleast a digit)
with $ character

*/

const replaceDigit = str => {

    let strArr = str.split("");

    let output = str.replace(/[0-9]/, '$');

    return output;
};


//console.log(replaceDigit("alus1on"));


/* Exercise 6
--------------

 Given a year, report if it is a leap year

*/

const isLeapYear = year => year % 4 == 0;


//console.log(isLeapYear(2016));



/* Exercise 7
--------------

 Compare if two objects have the same property.

*/


let obj1 = {

    name1: "Jomark",
    hobbies: ["Vaping", "Coding", "Playing Guitar"],
    age: 23
};

let obj2 = {

    name: "tetet",
    breed: "Askal",
    legs: 4
};

const compareObjects = (object1,object2) => {

    let firstObj = Object.keys(object1);
    let secondObj = Object.keys(object2);

    for(let i = 0; i < firstObj.length; i++){

        if (secondObj.includes(firstObj[i])){
            return "The objects have the same properties";
        }
    }

    return "No same properties";
}

//let a = compareObjects(obj1,obj2);


/* Exercise 8
--------------

 Write a program to convert Comma Separated Values to 2d Array

*/


const convertCSVtoArray = sampleCSV => {

    let sampleCSVArr = sampleCSV.split(",");

    let output = [];

    output.push(sampleCSVArr);

    return output;

};

//console.log(convertCSVtoArray("abc,def,ghi,123"));


