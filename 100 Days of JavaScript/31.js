/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Password Validator  ------------------ */


const PasswordValidator = (str) => {
    // Check if the password is longer than 8 characters
    if (str.length <= 8) return false;

    // Check if the password contains only lowercase letters
    if (str === str.toLowerCase()) return false;

    // Check if the password contains only uppercase letters
    if (str === str.toUpperCase()) return false;

    // Check if the password contains only numbers
    if (/^\d+$/.test(str)) return false;

    // If none of the above conditions are met, the password is valid
    return true;
}

const pass = "Abhisekh@175";
console.log(PasswordValidator(pass)); // Output: false






