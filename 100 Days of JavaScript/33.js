/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Hex Color generator  ------------------ */



const RandomColor = ()=> {
    return `#${Math.random().toString(16).toUpperCase().slice(2, 8)}`;
}


console.log(RandomColor());
