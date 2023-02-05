

function findLeapYear(year){
     
    let yearCount=year;
    let leapYear = [ ];
      
    for (let y = 0; y < yearCount.length; y++) {
        const years = yearCount[y];
          if (years%4==0) {
             leapYear.push(years)
          }
    }

    // console.log(leapYear)
 
     return leapYear;
  

}
 // findLeapYear([2023,2024,2025,2026,2027,2028,2029,2030])

   let yearsCount = [2023,2024,2025,2026,2027,2028,2029,2030];
  
   let foundLeapYear = findLeapYear(yearsCount);
   console.log(foundLeapYear)



