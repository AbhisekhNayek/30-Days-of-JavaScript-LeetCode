/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Number Generator   ------------------ */


const NumberGenerator = (a,b) => {
    let arr = [];

    while(a <= b){
        arr.push(a);
        a++;
    }
    return arr;
}

console.log(NumberGenerator(6,9));



