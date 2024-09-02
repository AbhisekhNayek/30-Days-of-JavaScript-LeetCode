/*------------------- Power of Two ---------------------- */

const isPowerTwo = (num) => {
    for (let i = 1; i <= num; i++) {
        if (Math.pow(2,i) === num) {
            return true;
        }
    }
    return false;
}

console.log(isPowerTwo(8));
console.log(isPowerTwo(3));
console.log(isPowerTwo(10));
console.log(isPowerTwo(16));
console.log(isPowerTwo(12));

