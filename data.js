let container = document.querySelector(".lightbox");

function show(response) {
  let acc = [];
  for (let img of response.golf) {
    acc.push(img);
    console.log(img);
  }
  let after = acc.img.after;
  console.log(after);
}

function lightbox(user) {
  return `
    <div class="lightbox">
    <div class="slider ">
      <div class="slider__before"></div>
      <div class="slider__separator"></div>
      <div class="slider__after"></div>
      <input
        class="slider__range"
        type="range"
        min="0"
        max="100"
        value="50"
      />
    
    `;
}

fetch("afterbefore.json")
  .then((response) => response.json())
  .then((json) => show(json));
