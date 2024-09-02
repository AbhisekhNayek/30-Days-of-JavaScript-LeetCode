const arr = [1,4,2,3,5,6,9,7,8];

const SortArray = (arr) => {

    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length-i-1; j++) {
            if(arr[j]>arr[j+1])
                {
                    swap = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = swap;
                }
        }
    }
    return arr;
}

console.log(`Before Sorting : `,arr);
console.log(`After Sorting : `,SortArray(arr));

