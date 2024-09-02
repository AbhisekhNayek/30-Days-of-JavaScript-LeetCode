/*----------------------- Counts Vowel In a String ---------------------- */

const countVowel = (str) => {
    str = str.toLowerCase();
    str = str.split('')
    let ct = 0;
    console.log(str);
    
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
            {
                ct++;
            }
    }
    return ct;    
}


const str = "I am abhi"
console.log(countVowel(str));
