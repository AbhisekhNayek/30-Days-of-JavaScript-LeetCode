/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Fibonacci Using Recursion ------------------ */


const Fibonacci = (n)=>{
    if(n === 0 || n === 1){
        return n;
    }
    else{
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
}

const num = 10;

for (let i = 0; i < num; i++) {
    console.log(Fibonacci(i));
}
