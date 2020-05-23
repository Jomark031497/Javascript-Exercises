

/* Exercise 2
--------------

Write a program to get the current date with format:

1. mm-dd-yyyy

*/

const showCurrentDate = () => {
    date = new Date();
    const day = date.getDate()+1;
    const month = date.getMonth()+1;
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
}


const a = showCurrentDate();    
console.log(a);






