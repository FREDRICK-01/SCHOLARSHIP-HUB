let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let academicField=document.getElementById("txtAcademicField");
let residenceCountry=document.getElementById("txtResidenceCountry");
let city=document.getElementById("txtCity");
let address=document.getElementById("txtAddress");


//page 2 - apply2 ============================

let phoneNumber=document.getElementById("txtPhoneNumber");
let middleName=document.getElementById("txtMiddleName");
let dateOfBirth=document.getElementById("txtDateOfBirth");
let primaryLanguage=document.getElementById("txtPrimaryLanguage");
let prefferedUni=document.getElementById("txtPrefferedUni");


let form=document.querySelector("form");



function validateInput(){
    //check if username is empty
    if(userName.value.trim()===""){
        onError(userName, "Student Name cannot be empty!!!");
        

        
    }else{
        onSuccess(userName);
       
    }


    //check if email is valid/ empty
    if(email.value.trim()===""){
        onError(email, "Email cannot be empty!!!");

        
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email, "Email invalid!!");
        }else{
            onSuccess(email);
        }
       
    }


    //check academic field not empty

    if(academicField.value.trim()===""){
        onError(academicField, "Academic Field cannot be empty!!!");

        
    }else{
        onSuccess(academicField);
       
    }







    //check residence country not empty

    if(residenceCountry.value.trim()===""){
        onError(residenceCountry, "Country cannot be empty!!!");

        
    }else{
        onSuccess(residenceCountry);
       
    }





    //check  city not empty
    if(city.value.trim()===""){
        onError(city, "City cannot be empty!!!");

        
    }else{
        onSuccess(city);
       
    }





    //check adress not empty
    if(address.value.trim()===""){
        onError(address, "Address cannot be empty!!!");

        
    }else{
        onSuccess(address);
       
    }
    


    //==============================================================
    //check phone number
    if(phoneNumber.value.trim()===""){
        onError(phoneNumber, "Address cannot be empty!!!");

        
    }else{
        onSuccess(phoneNumber);
       
    }


    //check middle name

    // check date of birth



    //check primary language


    //check preffered uni



   
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



//erro function
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