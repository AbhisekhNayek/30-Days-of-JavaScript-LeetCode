/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Truncate String  ------------------ */


const TruncateString = (str, len)=>{
    
    if(len === 0){
        return str;
    }
    else{
        return str.slice(0,len).concat('...');
    }
}

const str = "Abhisekh Nayek is my name"
const len = 9;

console.log(TruncateString(str, len));


