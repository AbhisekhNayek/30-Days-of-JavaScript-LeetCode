/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Bar Chart From Array Data ------------------ */

const BarChart = (arr) => {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i]; j++) {
            result += '*';
        }
        result += '\n'; // Move to the next line after each bar
    }

    return result;
}

const arr = [3, 5, 2, 7]; // Example input array
console.log(BarChart(arr));
