/*------------------ Check Two Arrays are Equal--------------------- */

const arr1 = [1,2,3,4,5]
const arr2 = [1,2,3,4]

const CheckArray = (arr1, arr2) => {
    return arr1.every((curr, index) => curr === arr2[index]);
}

console.log(CheckArray(arr1,arr2));
