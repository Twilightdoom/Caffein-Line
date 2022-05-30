

function validateNama(){
    var Name = document.getElementById('name').value;
    var errorMsg = document.getElementById('nameErr');
    if(Name == ''){
        errorMsg.innerHTML = '*Name must be filled!*';
        return false;
    }
    else if(!Alphabetical(Name)){
        errorMsg.innerHTML = '*Name must be alphabet only!*';
        return false;
    }
    else if(!angka(Name)){
        errorMsg.innerHTML="*Name cannot contain number!*"
        return false;
    }
    else if(Name.charCodeAt(0)<65 || Name.charCodeAt(0)>90){
        errorMsg.innerHTML = "*Name must start with capital letter!*"
        return false
    }
    errorMsg.innerHTML = '';
    return true;
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


function validateEmail(){
    var Email = document.getElementById('email').value;
    var errorMsg = document.getElementById('emailErr');
    var checked = 0;

    if(Email ==''){
        errorMsg.innerHTML = '*Email must be filled!';
        return false;
    }for (var i=0 ; i<Email.length ; i++){
        if(Email.charAt(i) == '@'){
            checked = 1;
        }
    }if(checked == 1){
        errorMsg.innerHTML = '';
        return true;
    }else if (check == 0){
        errorMsg.innerHTML = '*Email must be valid*';
        return false;
    }
}

function validateCity(){
    var City = document.getElementById('city').value;
    var errorMsg = document.getElementById('cityErr');
    if(City == ''){
        errorMsg.innerHTML ='*City must be filled!*';
        return false;
    }else{
        errorMsg.innerHTML = '';
        return true;
    } 
}

function validateAddress(){
    var Address = document.getElementById('address').value;
    var errorMsg = document.getElementById('addrErr');
    if(Address == ''){
        errorMsg.innerHTML = '*Address must be filled!*';
        return false;
    }else if(Address.split(' ').length < 2){
        errorMsg.innerHTML = '*Address must be more than 2 words!*';
        return false;
    }else {
        errorMsg.innerHTML = '';
        return true;
    }
}



$(".visa").hide();

$("#form_method_visa").click(function(){
    $(".visa").fadeIn();
})

$("#form_method_paypal").click(function(){
    $(".visa").fadeOut();
})

function validatePayment(){
    var Visa = document.getElementById('form_method_visa').checked;
    var Pay = document.getElementById('form_method_paypal').checked;
    var errorMsg = document.getElementById('radioErr');
    if(!Visa && !Pay){
        errorMsg.innerHTML = 'Payment Method must be chosen!';
        return false;
    }
    else if(Visa){
        if(!validateNumber()){
            return false;
        }else if(!validateValidity()){
            return false;
        }else if(!validateCvv()){
            return false;
        }else{
            errorMsg.innerHTML ='';
            return true;
        }
    }else{
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateNumber(){
    var Card = document.getElementById('cardNum').value;
    var errorMsg = document.getElementById('cardErr');
    if(Card == ''){
        errorMsg.innerHTML = 'Card number must be filled!';
    }
    else if(Alphabetical(Card)){
            errorMsg.innerHTML = 'Card number must be numeric!';
            return false;
        }
    else{
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateValidity(){
    var Validity = document.getElementById('validity').value;
    var errorMsg = document.getElementById('validityErr');
    if(Validity == ''){
        errorMsg.innerHTML = 'Validity must be filled!';
    }else if(Alphabetical(Validity)){
            errorMsg.innerHTML = 'Validity must be numeric!(MM/YY)';
            return false;
    }else{
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateCvv(){
    var Cvv = document.getElementById('cvv').value;
    var errorMsg = document.getElementById('cvvErr');
    if(Cvv == ''){
        errorMsg.innerHTML = 'CVV must be filled!';
    }else if(Alphabetical(Cvv)){
            errorMsg.innerHTML = 'CVV must be numeric!';
            return false;
        }else{
            errorMsg.innerHTML = '';
            return true;
        }
}


function validateAgree(){
    var Agree = document.getElementById('for-agree');
    var errorMsg = document.getElementById('agreeErr');
    if (!Agree.checked){
        errorMsg.innerHTML = '*You must checked agree with terms and conditions!*'
        return false;
    }
    errorMsg.innerHTML = '';
    return true;

}

function Alphabetical(Name){
    for(var i = 0; i<Name.length ; i++){
        if(!(Name.charAt(i) >= 'a' && Name.charAt(i)<= 'z') && !(Name.charAt(i) >= 'A' && Name.charAt(i)<= 'Z')){
            if(Name.charAt(i) == ' '){
                continue;
            }
            else return false;
        }
    }
    return true;
}

function Validateall(){
    if(!validateNama()){
        return;
    }
    else if(!validateEmail()){
        return;
    }
    else if(!validateCity()){
        return;
    }
    else if(!validateAddress()){
        return;
    }
    
    else if(!validatePayment()){
        return;
    }
    else if(!validateAgree()){
        return;
    }
    alert("Payment Success! Thanks for Your purchase !!!");
    
    window.location.href = "../HTML/Home.html";
  };