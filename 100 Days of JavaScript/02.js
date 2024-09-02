/*----------------------Generate Hash--------------*/

const generateHash = (str) => {

    if(str.length === 0)
    {
        return false;
    }

    str = str.split(" ");
    str = str.map( (curr)=> curr.replace(curr[0], curr[0].toUpperCase()))
    str = `#${str.join("")}`;
    return str;
    
}

const str = "My name is abhisekh nayek"

console.log(generateHash(str));
