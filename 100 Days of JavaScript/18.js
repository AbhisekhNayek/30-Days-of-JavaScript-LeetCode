//* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Check Uppercase Letter or Lower case letter ------------------

const isUpperCase = (char) => {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
        return true;
    }
    return false;
}


const isLowerCase = (char) => {
    if(char === char.toUpperCase()){
        return false;
    }
    return true;
}

console.log(isUpperCase('b'));
console.log(isLowerCase('A'));

