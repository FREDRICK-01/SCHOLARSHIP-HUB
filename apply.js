let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let academicField=document.getElementById("txtAcademicField");
let residenceCountry=document.getElementById("txtResidenceCountry");
let city=document.getElementById("txtCity");
let address=document.getElementById("txtAddress");
let form=document.querySelector("form");

function validateInput(){

    //check user name
    if(userName.value.trim()===""){
        onError(userName, "Username cannot be empty");

    }else{
        onSuccess(userName);
    }

    //check email
    if(email.value.trim()===""){
        onError(eamil,"email cannot be empty");

    }else{ 
        if(!isValidEmail(email.value.trim())){
            onError(email, "Email is not valid")
        
    }else{
        onSuccess(email);
    }
}


    //check academic field
    if(academicField.value.trim()===""){
        onError(academicField, "");

    }else{
        onSuccess(academicField);
    }



    //check country
    if(residenceCountry.value.trim()===""){
        onError(residenceCountry, "");

    }else{
        onSuccess(residenceCountry);
    }



    //check city
    if(city.value.trim()===""){
        onError(city, "Username cannot be empty");

    }else{
        onSuccess(city);
    }


    //check address
    if(address.value.trim()===""){
        onError(address, "Username cannot be empty");

    }else{
        onSuccess(address);
    }
    if(userName,email,city,address.value.trim() != ''){
        window.location.href = "apply2.html";
    
    }
    
}



document.querySelector("button")
.addEventListener("click", (event)=>{
    event.preventDefault();

    validateInput();
});


//success validation
function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");

}



//error function
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}





//valid email
function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

