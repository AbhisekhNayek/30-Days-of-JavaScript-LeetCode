/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------   Check an object is empty or not  ------------------ */


const EmptyObject = (obj) => {
    for(let key in obj){
        if(obj.hasOwnProperty(key))
        {
            return `It is Not Empty`;
        }
        return `It is Empty`;
    }
}

console.log(EmptyObject({name : "Abhi"}));
console.log(EmptyObject({ }));







