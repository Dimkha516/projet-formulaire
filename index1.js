const form = document.querySelector(".formulaire");
const nom = document.querySelector(".name1");
const prenom = document.querySelector(".name2");
const email = document.querySelector(".email");
const password = document.querySelector(".pass");
const confirmPass = document.querySelector(".confirm");
//
// let nomError = document.querySelector(".nameError");
// let prenomError = document.querySelector(".prenomError");
// let emailError = document.querySelector(".emailError");
// let passwordError = document.querySelector(".passError");
// let confirmPassError = document.querySelector(".confirmError");


const inputs = document.querySelectorAll("input");
//
const submit = document.querySelector(".submit");

let nomValid, prenomValid, emailValid, passwordValid, confirmValid;

const validNom = (val) => {

    const nomContainer = document.querySelector(".nomContainer");
    const nomError = document.querySelector(".nomContainer > span");
    if(val == ""){
        nomContainer.classList.add("showSpan");
        nomError.textContent = "Le nom est recquis !";
        nomValid = null;
    }
    else if(val.length > 0 && (val.length < 5 || val.length > 35)){
        nomContainer.classList.add("showSpan");
        nomError.textContent = "5 caractères min ou 35 max";
        nomValid = null;
    }
    else{
        nomContainer.classList.remove("showSpan");
        nomError.textContent = "";
        nomValid = val;
    } 
};

const validPrenom = (val) => {
    let isValidPrenom = false;

    const prenomContainer = document.querySelector(".prenomContainer");
    const prenomError = document.querySelector(".prenomContainer > span");
    if(val == ""){
        prenomContainer.classList.add("showSpan");
        prenomError.textContent = "Le prénom est recquis !";
    }
    else if(val.length > 0 && (val.length < 5 || val.length > 35)){
        prenomContainer.classList.add("showSpan");
        prenomError.textContent = "5 caractères min ou 35 max";
    }
    else{
        prenomContainer.classList.remove("showSpan");
        prenomError.textContent = "";
    } 
};

const validEmail = (val) => {
    const emailContainer = document.querySelector(".emailContainer");
    let emailError = document.querySelector(".emailContainer > span");

    if(!val.match((/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i))){
        emailContainer.classList.add("showSpan");
        emailError.textContent = "Email invalide";
        emailValid = null;
    } else{
        emailContainer.classList.remove("showSpan");
        emailError.textContent = "";
        emailValid = val;
    }
};

const validPassword = (val) => {
    //   /^.{5,50}$/
    const passwordContainer = document.querySelector(".passwordContainer");
    let passwordError = document.querySelector(".passwordContainer > span");
    if(!val.match(/^.{5,50}$/)){
        passwordContainer.classList.add("showSpan");
        passwordError.textContent = "5 caractères minimum ou 50 maximum";
        passwordValid = null;
    } else{
        passwordContainer.classList.remove("showSpan");
        passwordError.textContent = "";
        passwordValid = val;
    }

};

const validConfirm = (val) => {
  const confirmContainer = document.querySelector(".confirmContainer");
  let confirmError = document.querySelector(".confirmContainer > span");
  if(val !== passwordValid){
    confirmContainer.classList.add("showSpan");
    confirmError.textContent = "les deux mots de passe sont différents";
    confirmValid = null;
  } 
  else{
    confirmContainer.classList.remove("showSpan");
    confirmError.textContent = "";
    confirmValid = val;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      //
      case "name1":
        validNom(e.target.value);
        break;
      //
      case "prenom":
        validPrenom(e.target.value);
        break;
     // 
      case "email":
        validEmail(e.target.value);
        break;

      case "pass":
        validPassword(e.target.value);
        break;
        
      case "confirm":
        validConfirm(e.target.value);
        break;
        
        default:
            null;
    }
  });
});
