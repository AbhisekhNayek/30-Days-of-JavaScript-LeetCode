/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Extract Number Validation  ------------------ */

const extractNum = (str)=>{
    let regex = /\d+/g;
    return str.match(regex);
}

console.log(extractNum("abc123def456ghi789"));
