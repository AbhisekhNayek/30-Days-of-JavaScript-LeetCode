/* _________________________________
//*         Coding Challenge
//* _________________________________

//* ----------------  Date Object  ------------------ */

const FindDays = (date1, date2)=>{
    let d1 = new Date(date1);
    let d2 = new Date(date2);

   let diff = Math.abs((d2 - d1) / (24*60*60*1000));

   return diff;
    
}


console.log(FindDays('2024-01-01', '2024-01-31'));















