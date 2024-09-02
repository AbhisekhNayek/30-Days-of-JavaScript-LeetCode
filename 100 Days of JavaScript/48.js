/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Hex Color Code Validation    ------------------ */


const HexCodeValidator = (code) => {
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(code);
}

// Test the function
console.log(HexCodeValidator("#A3C"));      // true
console.log(HexCodeValidator("#A3C4"));     // false
console.log(HexCodeValidator("#A3C9E2"));   // true
console.log(HexCodeValidator("A3C9E2"));    // false (missing #)
console.log(HexCodeValidator("#G3C9E2"));   // false (contains invalid character G)
