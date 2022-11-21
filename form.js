let form = document.querySelector("#validForm");

form.name.addEventListener("change", function () {
  validName(this);
});
form.first.addEventListener("change", function () {
  validFirst(this);
});
form.mobile.addEventListener("change", function () {
  validMobile(this);
});
form.email.addEventListener("change", function () {
  validEmail(this);
});
form.message.addEventListener("change", function () {
  validMessage(this);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validName(form.name) &&
    validFirst(form.first) &&
    validMobile(form.mobile) &&
    validEmail(form.email) &&
    validMessage(form.message)
  ) {
    console.log("ok");
    return;
  } else {
    console.log("pas ok");
  }
});

const validName = function (inputName) {
  valid = false;
  let error;
  if (inputName.value.length < 2) {
    error = "2 caractères minimum";
  } else if (!inputName.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i)) {
    error = "Merci d'indiquer un nom valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputName.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};

const validFirst = function (inputFirst) {
  valid = false;
  let error;
  if (inputFirst.value.length < 2) {
    error = "2 caractères minimum";
  } else if (!inputFirst.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i)) {
    error = "Merci d'indiquer un prénom valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputFirst.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
!form.mobile.value.match(/^((\+)33|0)[1-9](\d{2}){4}$/g);

const validMobile = function (inputMobile) {
  valid = false;
  let error;
  if (inputMobile.value.length < 10) {
    error = "Merci d'indiquer un numéro valide";
  } else if (!inputMobile.value.match(/^((\+)33|0)[1-9](\d{2}){4}$/g)) {
    error = "Merci d'indiquer un numéro valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputMobile.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
const validEmail = function (inputEmail) {
  valid = false;
  let error;
  if (inputEmail.value === null) {
    error = "Merci d'indiquer un numéro valide";
  } else if (!inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    error = "Merci d'indiquer un email valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputEmail.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
const validMessage = function (inputMessage) {
  valid = false;
  let error;
  if (inputMessage.value === null) {
    error = "Indiquer votre message";
  } else if (inputMessage.value.length < 5) {
    error = "Formuler votre message 5 caractères min";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputMessage.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};

// https://www.youtube.com/watch?v=CreEhp8I-XA
