const arr = [1,2,3,4,1,4,2,5];

const RemoveDuplicate = (arr) => {
    let newarr = new Set(arr);
    return [...newarr];
}

console.log(RemoveDuplicate(arr));
