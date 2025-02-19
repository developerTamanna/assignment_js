
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