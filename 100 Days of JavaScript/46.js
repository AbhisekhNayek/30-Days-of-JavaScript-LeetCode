/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Phone Number Validation  ------------------ */


function isValidIndianPhoneNumber(phoneNumber) {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(phoneNumber);
}

// Test the function
console.log(isValidIndianPhoneNumber("9876543210")); // true
console.log(isValidIndianPhoneNumber("1234567890")); // false
console.log(isValidIndianPhoneNumber("09876543210")); // false (11 digits)
console.log(isValidIndianPhoneNumber("98765-43210")); // false (contains a hyphen)
