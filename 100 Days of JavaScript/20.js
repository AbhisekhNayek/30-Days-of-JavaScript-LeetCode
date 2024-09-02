/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Reverse String ------------------ */

const ReverseString = (str) => {
    str = str.split("")
    let rev = "";
    for (let i = str.length-1; i >= 0; i--) {
        rev += str[i]
    }
    return rev;
}

console.log(ReverseString("Abhi"));



