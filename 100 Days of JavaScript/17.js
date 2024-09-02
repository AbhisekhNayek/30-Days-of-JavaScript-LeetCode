//* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Cammel Case & Snake Case --------------

const toCamelCase = (str) => {
    str = str.trim().split(" ");

    str = str.map((curr, index) => {
        if(index === 0){
            return curr.toLowerCase();
        }
        else{
            return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
        }
    });
    return str.join("");
}

console.log(toCamelCase("hello world  abhi"));
