/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------   Currency Converter   ------------------ */

const rates = {
    USD: 1,
    EUR: 0.9,
    GBP: 0.8,
    INR: 83.89,
};

const CurrencyConvert = (amt, fc, tc) => {
    // Convert the amount to USD first
    const amtUSD = amt / rates[fc];

    // Convert the USD amount to the target currency
    const convertedAmt = amtUSD * rates[tc];

    return convertedAmt;
};

// Example usage:
console.log(CurrencyConvert(1, 'USD', 'INR')); // Converts 100 GBP to INR

