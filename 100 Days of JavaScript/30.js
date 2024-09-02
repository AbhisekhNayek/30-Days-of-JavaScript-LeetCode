/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Recursive Number Generator   ------------------ */


const NumberGenerator = (a,b) => {

    if(a > b){
        return [];
    }
    else{
        const ans = NumberGenerator(a+1, b);
        return [a].concat(ans);
    }
}

console.log(NumberGenerator(-1,6));




