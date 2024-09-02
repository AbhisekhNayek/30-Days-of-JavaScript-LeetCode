/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Check Substring ------------------ */

const StartWith = (str, sub) => {
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
       if(str[i] === sub){
        return true;
       }
    }
    return false;

}


/* Second Method */

//  return str.slice(0, substr.length) === substr;

console.log(StartWith("Abhisekh nayek", "Abhisekh"));

