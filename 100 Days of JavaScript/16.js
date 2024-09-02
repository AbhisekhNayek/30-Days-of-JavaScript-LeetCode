/*--------------------- Find Minimum in an Array ------------------- */

const arr = [-1,-2,0,1,2,3,4,5,6,7,8,9]


const FindMin = (arr) => {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }
    return min;
}

console.log(FindMin(arr));
