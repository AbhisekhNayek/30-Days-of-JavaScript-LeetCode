/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Mean Find ------------------ */

const arr = [1,2,3];

const FindMean = (arr) => {
    
    if(arr.length === 0)
        return 0;

    let sum = arr.reduce((acc, curr) => acc + curr, 0);

    return sum / arr.length;

} 


console.log(FindMean(arr));





