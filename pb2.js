
function  validEmail( email ) {
    if(typeof email !=='string'){
        return   "Invalid" 
    }
    // console.log(email)
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