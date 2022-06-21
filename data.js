let container = document.querySelector(".cont");
let items = document.querySelectorAll(".item");

function show(response) {
  let acc = [];
  for (let img of response.car) {
    acc.push(afficher(img));
  }
  let html = acc.reduce((a, l) => a + l);
  container.innerHTML = html;
  afficher(response.car);
}

function light() {
  const conta = document.querySelector(".cont");
  document.querySelector(".slider").addEventListener("input", (e) => {
    conta.style.setProperty("--position", `${e.target.value}%`);
  });
}

function afficher(user) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      let parent = item.dataset.id;
      if (parent == user.id) {
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
      } else {
        return ` `;
      }
    });
  });
}

fetch("afterbefore.json")
  .then((response) => response.json())
  .then((json) => show(json));
