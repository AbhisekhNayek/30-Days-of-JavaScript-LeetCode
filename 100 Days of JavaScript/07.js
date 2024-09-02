const arr = [1,2,3,4,3,6,2,1,7,8,10]

// const findMaxMin = (arr) => {
//     max = arr[0];
//     min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > max)
//         {
//             max = arr[i];
//         }

//         if(arr[i] < min)
//         {
//             min = arr[i];
//         }
//     }
//     return {max, min};
// }


/*------------------- Using Spread operator -------------*/

const findMaxMin = (arr) => {

    // return Math.max(arr) //NaN

    return Math.max(...arr) //10
}
console.log(findMaxMin(arr));


