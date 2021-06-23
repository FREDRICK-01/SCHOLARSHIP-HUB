let phoneNumber=document.getElementById("txtPhoneNumber");
let middleName=document.getElementById("txtMiddleName");
let dateOfBirth=document.getElementById("txtDateOfBirth");
let primaryLanguage=document.getElementById("txtPrimaryLanguage");
let prefferedUni=document.getElementById("txtPrefferedUni");


let form=document.querySelector("form");


function validateInput(){

    //check Phone Number
    if(phoneNumber.value.trim()===""){
        onError(phoneNumber, "field cannot be empty");

    }else{
        onSuccess(phoneNumber);
    }

    //check middle Name
    if(middleName.value.trim()===""){
        onError(middleName,"field cannot be empty");

    }else{ 
        onSuccess(middleName);
        
    }


    //check date of birth
    if(dateOfBirth.value.trim()===""){
        onError(dateOfBirth, "");

    }else{
        onSuccess(dateOfBirth);
    }



    //check preffered University
    if(prefferedUni.value.trim()===""){
        onError(prefferedUni, "");

    }else{
        onSuccess(prefferedUni);
    }

    if(phoneNumber,middleName.value.trim() != ''){
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


