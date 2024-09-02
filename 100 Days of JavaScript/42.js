/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------   Credit Card Validation   ------------------ */

function validateCreditCard(number) {
    // Convert the number to a string and reverse it
    const reversedNumber = number.toString().split('').reverse();

    let sum = 0;

    for (let i = 0; i < reversedNumber.length; i++) {
        let digit = parseInt(reversedNumber[i]);

        // Double every second digit (even index in the reversed array)
        if (i % 2 !== 0) {
            digit *= 2;
            // If the result is greater than 9, subtract 9
            if (digit > 9) {
                digit -= 9;
            }
        }

        // Add the digit to the sum
        sum += digit;
    }

    // The number is valid if the sum modulo 10 is 0
    return sum % 10 === 0;
}

// Example usage:
const cardNumber = "4532015112830366"; // Replace with a valid credit card number
console.log(validateCreditCard(cardNumber)); // Output: true or false


