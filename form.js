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

let nameElt = false;
let firstElt = false;
let mobileElt = false;

const validName = function (inputName) {
  if (
    !form.name.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i) ||
    form.name.value.length < 2 ||
    form.name.value === null
  ) {
    document
      .querySelector("#nameError.formData")
      .setAttribute("data-error-visible", "true");
    document
      .querySelector("#nameError.formData")
      .setAttribute("data-error", "Saisir deux caractères minimum *");
  } else {
    document
      .querySelector("#nameError.formData")
      .setAttribute("data-error-visible", "false");
    remove.document
      .querySelector("#nameError.formData")
      .setAttribute("data-error", "Saisir deux caractères minimum *");
    nameElt = true;
  }
};
const validFirst = function (inputFirst) {
  if (
    !form.first.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i) ||
    form.first.value.length < 2 ||
    form.first.value === null
  ) {
    document
      .querySelector("#firstError.formData")
      .setAttribute("data-error-visible", "true");
    document
      .querySelector("#firstError.formData")
      .setAttribute("data-error", "Saisir deux caractères minimum *");
  } else {
    document
      .querySelector("#firstError.formData")
      .setAttribute("data-error-visible", "false");
    firstElt = true;
  }
};
const validMobile = function (inputMobile) {
  if (
    !form.mobile.value.match(/^((\+)33|0)[1-9](\d{2}){4}$/g) ||
    form.mobile.value === null
  ) {
    document
      .querySelector("#mobileError.formData")
      .setAttribute("data-error-visible", "true");
    document
      .querySelector("#mobileError.formData")
      .setAttribute("data-error", "Numéro invalide");
  } else {
    document
      .querySelector("#mobileError.formData")
      .setAttribute("data-error-visible", "false");
    mobileElt = true;
  }
};
const validEmail = function (inputEmail) {
  if (
    !form.email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ||
    form.email.value === null
  ) {
    document
      .querySelector("#mailError.formData")
      .setAttribute("data-error-visible", "true");
    document
      .querySelector("#mailError.formData")
      .setAttribute("data-error", "Adresse mail invalide");
  } else {
    document
      .querySelector("#mailError.formData")
      .setAttribute("data-error-visible", "false");
  }
};

// https://www.youtube.com/watch?v=CreEhp8I-XA
