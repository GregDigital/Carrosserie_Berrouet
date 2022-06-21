let container = document.querySelector(".cont");
let items = document.querySelectorAll(".item");

function show(response) {
  let acc = [];
  for (let img of response.car) {
    acc.push(lightbox(img));
  }
  let html = acc.reduce((a, l) => a + l);
  container.innerHTML = html;
  afficher(response.car);
  light();
}

function afficher(user) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (user.id == parent) {
        console.log(parent);
      }
    });
  });
}

function lightbox(user) {
  console.log("ok");
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

function light() {
  const conta = document.querySelector(".cont");
  document.querySelector(".slider").addEventListener("input", (e) => {
    conta.style.setProperty("--position", `${e.target.value}%`);
  });
}

fetch("afterbefore.json")
  .then((response) => response.json())
  .then((json) => show(json));
