
function  electionResult( votes ) {
   if(!Array.isArray(votes)){
    return  "Invalid"
   }
    let mangoVote = 0;
    let bananaVote = 0;
    for(item of votes){
        // console.log(item)
        if(item === 'mango'){
            mangoVote ++
        }
        else if(item ==='banana'){
            bananaVote ++
        }
        
    }
    if(mangoVote > bananaVote){
        return 'Mango'
    }
    else if(bananaVote > mangoVote){
        return 'Banana'
    }
  else{
    return 'Draw'
  }

}

const votes = electionResult(["banana", "banana", "age e valo chilam" , "no"]);
console.log(votes);