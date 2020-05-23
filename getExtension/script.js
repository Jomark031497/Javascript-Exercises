

/* Exercise 2
--------------

Write a program to get the extension of a filename

*/

//My first solution
const getFileExtension = (str) => {

    return str.slice(str.lastIndexOf("."));

};

console.log(getFileExtension("index.html"));
