/*----------------- average Find ------------ */

const arr = [1,2,3,6]

// const Average = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     let avg = sum / arr.length;
//     return avg;
// }



/*------------------------- Using Reduce ------------------- */

const Average = (arr) => {
    let sum = arr.reduce((acc, curr) => acc + curr, 0)
    let avg = sum / arr.length;
    return avg;
}


console.log(Average(arr));
