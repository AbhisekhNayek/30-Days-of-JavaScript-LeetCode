/*--------------------- Count Words Occurence ------------------------------- */

const countWordsOccur = (str, count) => {
    
    let ct = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === count) {
            ct++;
        }
    }
    return ct;
}

word = "AbhisekhanbajbAAAAA"
console.log(countWordsOccur(word, "A"));
