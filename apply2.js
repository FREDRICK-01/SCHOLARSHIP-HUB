let phoneNumber=document.getElementById("txtPhoneNumber");
let middleName=document.getElementById("txtMiddleName");
let dateOfBirth=document.getElementById("txtDateOfBirth");
let primaryLanguage=document.getElementById("txtPrimaryLanguage");
let prefferedUni=document.getElementById("txtPrefferedUni");


let form=document.querySelector("form");


function validateInput(){

    //check Phone Number
    if(phoneNumber.value.trim()===""){
        onError(phoneNumber, "field cannot be blank");

    }else{
        onSuccess(phoneNumber);
    }

    //check middle Name
    if(middleName.value.trim()===""){
        onError(middleName,"field cannot be blank");

    }else{ 
        onSuccess(middleName);
        
    }


    //check date of birth
    if(dateOfBirth.value.trim()===""){
        onError(dateOfBirth, "field cannot be blank");

    }else{
        onSuccess(dateOfBirth);
    }
     
    //language
    if(primaryLanguage.value.trim()===""){
        onError(primaryLanguage,"field cannot be blank");

    }else{ 
        onSuccess(primaryLanguage);
        
    }



    //check preffered University
    if(prefferedUni.value.trim()===""){
        onError(prefferedUni, "field can't be blank");

    }else{
        onSuccess(prefferedUni);
    }

    if(phoneNumber,middleName,dateOfBirth,prefferedUni.value.trim() != ''){
        window.location.href = "application_success.html";
    
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


