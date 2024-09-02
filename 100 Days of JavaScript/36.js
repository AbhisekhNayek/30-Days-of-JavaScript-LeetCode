/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------   Object To Array & Array To Object ------------------ */



const obj = {
    name : "Abhisekh",
    age : 21,
    city : "Kolkata"
}


const ObjToArray = (obj)=> {
    let entry = Object.entries(obj);
    return entry.flat();
}




// +++++++++++++++++++++++++++++++++++++++++++

const arr = [ 'name', 'Abhisekh', 'age', 21, 'city', 'Kolkata' ];

const ArrayToObj = (arr) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i += 2) {
        pairs.push([arr[i], arr[i + 1]]);
    }
    return Object.fromEntries(pairs);
}

console.log(ArrayToObj(arr));









