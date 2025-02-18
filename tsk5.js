


function  calculateWatchTime( times ) {
   if(!Array.isArray(times)){
    return "Invalid"
   }
    // console.log(times);
    let sum = 0
    for(let value of times){
        if( typeof value !=='number'){
            return "Invalid"
        }
        // console.log(value)
        sum = sum + value;
        // console.log(sum)
    }
   
    
    const hours = Math.floor(sum/3600)
    const minutes = Math.floor((sum % 3600)/60)
     const second = sum % 60;
    
    return { hours, minutes, second };
}
const result = calculateWatchTime([100, 3800])
console.log(result);