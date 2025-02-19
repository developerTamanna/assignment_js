// Problem-01 : Calculate the cash-out Charge 


function cashOut( money ) {
    if(typeof money !=='number' || money<0){
        return "Invalid";
    }
    const totalTk = money * 1.75 / 100;
    return totalTk;
}


const money = cashOut(999);
console.log(money);


// console(................................)





// Problem-02 : Detect email  valid or not


function  validEmail( email ) {
    if(typeof email !=='string'){
        return   "Invalid";
    }
    
    let check = ".-_+@"
    if(check.includes(email[0]) || !email.includes('@') || email.includes(' ') || !email.endsWith('.com')){
        return false;
    }
    else{
        return true;
    }
}



const result = validEmail("Tamanna@gmail.com");
console.log(result)


// console.log(............................)




// Problem-03 : Who will Win  ( Mango / Banana ) 



function  electionResult( votes ) {
    if(!Array.isArray(votes)){
     return  "Invalid";
    }
     let mangoVote = 0;
     let bananaVote = 0;
     for(let item of votes){

         if(item === 'mango'){
             mangoVote ++;
         }
         else if(item ==='banana'){
             bananaVote ++;
         }
         
     }
     if(mangoVote > bananaVote){
         return 'Mango';
     }
     else if(bananaVote > mangoVote){
         return 'Banana';
     }
   else{
     return 'Draw';
   }
 
 }
 
 const votes = electionResult(["banana", "banana", "age e valo chilam" , "no"]);
 console.log(votes);



// console.log(............................)




// Problem-04: Detect The Perfect Best Friend 


function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !=='object' || typeof f2 !== 'object'){
        return "Invalid";
    }
    
        if(f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
            return true;
        }
        else{
            return false;
        }
        
    }
    
    const bestFriend = isBestFriend(
        { name: "hashem", roll: 21, bestFriend: 1},
    { name: "kashem", roll: 1, bestFriend: 2 }
    
     );
    console.log(bestFriend);

    // console.log(.........................)

    // Problem-05: Let’s Calculate Video watch Time

function  calculateWatchTime( times ) {
    if(!Array.isArray(times)){
     return "Invalid";
    }
     
     let sum = 0
     for(let value of times){
         if( typeof value !=='number'){
             return "Invalid";
         }
         sum = sum + value;
     }
    
     
     const hours = Math.floor(sum/3600)
     const minutes = Math.floor((sum % 3600)/60)
      const second = sum % 60;
     
     return { hours, minutes, second };
 }
 const resultCalc = calculateWatchTime([100, 3800])
 console.log(resultCalc);