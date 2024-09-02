/*------------------ factorial -----------------*/

const factorial = (num) => {
    let fact = 1;
    if(num === 1 || num === 0)
    {
        return 1;
    }
    else{
        for (let i = num; i >= 1; i--) {
            fact = fact * i;
        }
        return fact;
    }
}

console.log(factorial(5));
