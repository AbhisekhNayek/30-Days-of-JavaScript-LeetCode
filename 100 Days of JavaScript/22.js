/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ---------------- Median Find ------------------ */

const arr = [9,3,1,3,1,5,1,6,1];

const FindMedian = (arr)=>{

    // arr = arr.sort()
    let size = arr.length;
    let low = 0;
    let high = size - 1;
    let mid = 0;

    if(size === 0)
        return 0;

    if(size % 2 !== 0)
    {
        while(low<=high)
        {
            mid = (low+high)/2;
            return arr[mid];
        }
    }
    else if(size % 2 === 0)
        {
            while(low<=high)
            {
                mid = (low+high)/2;
                low++;
                high--;
                return (arr[low] + arr[high]) / 2;
            }
        }
}

console.log(FindMedian(arr));
