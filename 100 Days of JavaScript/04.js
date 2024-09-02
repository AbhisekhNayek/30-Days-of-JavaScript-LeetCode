/*----------------Check Triangle Type--------------*/

const TriangleType = (a,b,c) => {
    if((a===b) && (b===c)){
        return `Equilateral Triangle`;
    }
    else if((a===b) || (b===c) || (a==c)){
        return `Isosceles`;
    }
    else if((a != b) && (b != c)){
        return `Scalene`;
    }
}

console.log(TriangleType(1,2,3));
console.log(TriangleType(3,3,3));
console.log(TriangleType(4,4,3));


