/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Date Validation    ------------------ */


const isValidDate = (dateString) => {
    // Check if the format is correct (YYYY-MM-DD)
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        return false;
    }

    // Parse the date parts to integers
    const [year, month, day] = dateString.split('-').map(Number);

    // Check if the date is a valid calendar date
    const date = new Date(year, month - 1, day); // Month is 0-indexed in JS

    return (
        date.getFullYear() === year &&
        date.getMonth() + 1 === month &&
        date.getDate() === day
    );
};

// Test the function
console.log(isValidDate("2024-09-01")); // true
console.log(isValidDate("2024-02-29")); // true (leap year)
console.log(isValidDate("2023-02-29")); // false (not a leap year)
console.log(isValidDate("2024-13-01")); // false (invalid month)
console.log(isValidDate("2024-09-31")); // false (invalid day)
console.log(isValidDate("2024/09/01")); // false (wrong format)
