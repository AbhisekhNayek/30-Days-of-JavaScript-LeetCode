/*-------------------- Find Longest Word in a String------------------------------*/

const findLongestWord = (str) => {

    if(str.length === 0)
    {
        return false;
    }

    const words = str.split(" ");
    words.sort( (a,b) => b.length - a.length);
    return words[0];
}

const str = "My Name is Abhisekh Nayek";

console.log(findLongestWord(str));
