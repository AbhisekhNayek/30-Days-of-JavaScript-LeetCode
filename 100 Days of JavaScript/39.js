/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Find age  ------------------ */

const FindAge = (dob, today) => {
    let d1 = new Date(dob);
    let d2 = new Date(today);

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    // Adjust if the birth date hasn't occurred yet in the current month
    if (days < 0) {
        months--;
        days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate(); // Get the days in the previous month
    }

    // Adjust if the birth month hasn't occurred yet in the current year
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} years, ${months} months, and ${days} days`;
}

console.log(FindAge('2001-02-15', '2024-11-29')); // Example: 23 years, 9 months, 14 days
