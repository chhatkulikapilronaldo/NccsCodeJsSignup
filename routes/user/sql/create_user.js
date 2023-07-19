(()=>{
    module.exports=async(username,phone,email,address,usertypeid,status)=>{
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("INSERT INTO users (username,phone,email,adress,usertypeid,status) VALUES ('"+username+"','"+phone+"','"+email+"','"+address+"','"+usertypeid+"','"+status+"')");
        console.log(output[0].affectedRows>0)
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()