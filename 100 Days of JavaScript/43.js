/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Fizz Buzz  ------------------ */


const FizzBuzz = (start, end)=>{
    for (let i = start; i <= end; i++) {
        let output = '';
    
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
    
        console.log(output || i);
    }
    
}


FizzBuzz(1,15)