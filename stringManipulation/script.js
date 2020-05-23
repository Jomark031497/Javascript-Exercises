

/* Exercise 2
--------------

Write a program to shift to n every character in a given
string

*/

//My first solution


let letters = "abcdefghijklmnopqrstuvwxyza";
let lettersArr = letters.split("");

const caesarCipher = (str) => {

    //Lower case or letters for uniformity
    let strToLowerCase = str.toLowerCase();
    //convert the string into array
    let strArr = strToLowerCase.split("");
    //declare a variable to store the output
    let output = "";

    //iterate to the array to check all letters
    for (let i = 0; i < strArr.length; i++) {
   
        let currentLetter = strArr[i];

        if(lettersArr.includes(currentLetter)){
            let newLetter = lettersArr.indexOf(currentLetter) + 1;
            output += lettersArr[newLetter];
        }
        else{
            console.log("not");
        }

    }

    return output;

};


const a = caesarCipher("Maxi");
console.log(a);
