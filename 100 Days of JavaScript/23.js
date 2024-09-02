/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Count Occurences ------------------ */

const arr = [9,3,1,3,1,5,1,6,1];


const CountOccur = (arr) => {
    const myObj = {};
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i];

        if(myObj[ele]){
            myObj[ele]++;
        }
        else{
            myObj[ele] = 1;
        }
    }
    return myObj;
}

console.log(CountOccur(arr));

