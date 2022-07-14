const CryptoJS = require("crypto-js");
const readlineSync = require('readline-sync');

while(true){
    const secretKey = readlineSync.question('please input secret key : ');
    const mode = readlineSync.question('please input mode : ');

    if(mode==="e"){
        console.log("encrypt mode");
        const str = readlineSync.question('please input str : ');
        const encrypted = CryptoJS.AES.encrypt(str,secretKey).toString(); 

        console.log(encrypted);
    }
    else if(mode==="d"){
        console.log("decrypt mode");
        const str = readlineSync.question('please input str : ');
        const decrypted= CryptoJS.AES.decrypt(str,secretKey).toString(CryptoJS.enc.Utf8);  
        
        console.log(decrypted);
        
    }
    else{
        console.log("wrong mode");
    }
}
