function validate(){
var Name = document.getElementById("name").value
    var errorMsg = document.getElementById("errorMsg")
    var Email = document.getElementById("email").value
    var message=document.getElementById("message").value

    if(Name == ''){
        errorMsg.innerHTML = "*Name must be filled!*"
    }
    else if(Name.charCodeAt(0)<65 || Name.charCodeAt(0)>90){
        errorMsg.innerHTML = "*Name must start with capital letter!*"
    }
    else if(!angka(Name)){
        errorMsg.innerHTML="*Name cannot contain number!*"
    }
    
    else if(Email == ''){
        errorMsg.innerHTML = "*Email must be filled!*"
    }
    else if(!Email.endsWith("@gmail.com")){
        errorMsg.innerHTML = "*Email ends with @gmail.com*"
    }
    
    
    else if(message==''){
        errorMsg.innerHTML="*Message must be filled!*"
    }
    else if(message.length > 200){
        errorMsg.innerHTML = "*Message cannot be more than 200 characters!*"
    }
    else{
        errorMsg.innerHTML = ""
    }

    if(Name.length<4){
        errorMsg.innerHTML = "*Minimum 4 Characters"
    }
}


function angka(Name){
    var temp=0
    for(var i=0;i<Name.length;i++){
        if(Name.charCodeAt(i)>=48 && Name.charCodeAt(i) <=57){
            temp=1
        }
    }

    if(temp==1){
        return false
    }
    else{
        return true
    }
}


