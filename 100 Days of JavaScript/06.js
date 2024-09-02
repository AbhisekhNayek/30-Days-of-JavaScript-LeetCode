/*------------------- Plaindrome Check ------------------ */

const isPalindrome = (str) => {
    str = str.toLowerCase();
    let rev = str.split('').reverse().join('');

    return str === rev;
        
}


console.log(isPalindrome("Abhisekh"));
console.log(isPalindrome("Madam")); // true

