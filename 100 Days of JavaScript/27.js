/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Generate Repreatted String  ------------------ */


const Repeat = (str, ocr)=>{

    if(ocr === 0)
        return str;
    else
        return str.repeat(ocr);

}

const str = "abc";
const ocr = 5;

console.log(Repeat(str, ocr));

