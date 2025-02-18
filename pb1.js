
function cashOut( money ) {
    if(typeof money !=='number' || money<0){
        return "Invalid"
    }
    // console.log(money)
    const totalTk = money * 1.75 / 100
    return totalTk;
}


const money = cashOut(999);
console.log(money);