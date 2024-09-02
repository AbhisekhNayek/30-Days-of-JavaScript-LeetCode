/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Email Validation  ------------------ */


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Example usage:
console.log(validateEmail("example@example.com")); // true
console.log(validateEmail("invalid-email@.com"));  // false
