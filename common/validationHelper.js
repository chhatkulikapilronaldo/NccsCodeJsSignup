((validationHelper)=>{
    let pattern = /@gmail.com/;
    validationHelper.uservalidation = async(name,phone,email) =>{
        if (name == "" || phone == "" || email == "" ) {
            return false;
        }
        else if (phone.substring(0, 2) != "98") {
            return false;
        }
       
        else if (pattern.test(email) == false) {
            return false;
        }
        else{
            return true;
        }
    };
})(module.exports);
