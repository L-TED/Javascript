const nature = document.querySelector("#nature");
const snow = document.querySelector("#snow");
const mountains = document.querySelector("#mountains");
const lights = document.querySelector("#lights");

const sectionImage = document.querySelector("#secImage");

const a = document.createElement("img");

sectionImage.appendChild(a);
nature.addEventListener("click", () => {
  a.src = "image/img_nature.jpg";
});
snow.addEventListener("click", () => {
  a.src = "image/img_snow.jpg";
});
mountains.addEventListener("click", () => {
  a.src = "image/img_mountains.jpg";
});
lights.addEventListener("click", () => {
  a.src = "image/img_lights.jpg";
});
