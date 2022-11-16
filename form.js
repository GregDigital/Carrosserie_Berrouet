let form = document.querySelector("#validForm");

form.name.addEventListener("change", function () {
  validName(this);
});

const validName = function (inputName) {
  if (!form.name.value.match(/(.*[a-z]){2}/i)) {
    console.log("faux");
  } else {
    console.log("ok");
  }
};

// https://www.youtube.com/watch?v=CreEhp8I-XA
