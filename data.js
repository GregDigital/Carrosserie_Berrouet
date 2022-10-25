let container = document.querySelector(".cont");
let lightbox = document.querySelector(".lightbox");
let items = document.querySelectorAll(".item");
let close = document.querySelector(".close");
let body = document.querySelector("body");

function show(response) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      lightbox.style.display = "grid";
      body.classList.add("true");
      let id = item.dataset.id;
      let acc = [];
      for (let img of response.car) {
        if (id == img.id) {
          acc.push(afficher(img));
        }
      }

      let html = acc.reduce((a, l) => a + l);
      container.innerHTML = html;
      light();
      displayClose();
    });
  });
}

function displayClose() {
  close.addEventListener("click", (e) => {
    lightbox.style.display = "none";
    body.classList.remove("true");
  });
}

function light() {
  const conta = document.querySelector(".cont");
  document.querySelector(".slider").addEventListener("input", (e) => {
    conta.style.setProperty("--position", `${e.target.value}%`);
  });
}

function afficher(user) {
  return `
        <div class="image-container">
       
        <img
          class="image-before slider-image"
         src="../assets/img/${user.before}"
          alt="color photo"
        />
        <img
          class="image-after slider-image"
          src="../assets/img/${user.after}"
          alt="black and white"
        />
      </div>
      <!-- step="10" -->
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        aria-label="Percentage of before photo shown"
        class="slider"
      />
      <div class="slider-line" aria-hidden="true"></div>
      <div class="slider-button" aria-hidden="true">
      
      
      </div>
          `;
}

fetch("afterbefore.json")
  .then((response) => response.json())
  .then((json) => show(json));
