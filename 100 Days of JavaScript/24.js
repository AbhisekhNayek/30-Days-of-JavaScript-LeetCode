/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Find Mode ------------------ */


const arr = [9,3,1,3,1,5,1,6,1,6,6,6,6,6];

const FindMode = (arr) => {
    const frequencyMap = {};
    
    // Build frequency map
    for (const ele of arr) {
        if (frequencyMap[ele]) {
            frequencyMap[ele]++;
        } else {
            frequencyMap[ele] = 1;
        }
    }

    let mode = null;
    let maxFrequency = 0;

    // Find the mode
    for (const [key, value] of Object.entries(frequencyMap)) {
        if (value > maxFrequency) {
            maxFrequency = value;
            mode = parseInt(key, 10); 
        }
    }

    return mode;
}

console.log(FindMode(arr));
