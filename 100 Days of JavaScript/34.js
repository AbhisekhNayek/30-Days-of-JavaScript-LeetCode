/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Remove Duplicate in an Array   ------------------ */


const arr  = [1,2,1,2,2,3];

const RemoveDuplicate = (arr)=>{
    return [...new Set(arr)];
}


console.log(RemoveDuplicate(arr));


