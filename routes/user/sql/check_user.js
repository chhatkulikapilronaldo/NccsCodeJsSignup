(()=>{
    module.exports=async(username,password)=>{
        let obj="";
        const helper = require("./../../../common/index")
        const NodeCache = require( "node-cache" );
        const output=await helper.mysqlHelper.query("Select password from users where username='"+username+"'");
        console.log (output[0]);
        let pass=output[0][0].password;
        const val=helper.hashHelper.comparePassword(password,pass);
        success = myCache.set( "islogin", true, 10000 );
    //  console.log(val);
        if(val){
            return "login sucessful";
        }
        else{
            return "Not Login";
        }
        
    }
})()