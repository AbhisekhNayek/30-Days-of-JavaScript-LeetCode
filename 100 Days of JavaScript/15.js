/*------------------ Sum of Squares -------------------------- */

const arr = [1,2,3]

const sumofArray = (arr) => {
    sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i] ** 2;
        }
    return sum;
}

console.log(sumofArray(arr));
