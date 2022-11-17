let form = document.querySelector("#validForm");
let span = document.que;

form.name.addEventListener("change", function () {
  validName(this);
});
let firstElt = false;

const validName = function (inputName) {
  if (
    !form.name.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i) ||
    form.name.value.length < 2 ||
    form.name.value === null
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

// https://www.youtube.com/watch?v=CreEhp8I-XA
