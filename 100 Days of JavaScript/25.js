/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Factorial Using Recursion ------------------ */


const Factorial = (num)=>{
    if(num === 0 || num === 1){
        return 1;
    }
    else{
        return num * Factorial(num-1);
    }
}

const num = 5;

console.log(`Factorial of ${num} is : `,Factorial(num));
