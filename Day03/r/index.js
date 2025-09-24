const data = [
  { nation: "England", capital: "London" },
  { nation: "France", capital: "Paris" },
  { nation: "Japan", capital: "Tokyo" },
];

const ul = document.querySelector("#upper");
const h3 = document.querySelector("#capital");
const p = document.querySelector("#text");

data.forEach((v) => {
  const li = document.createElement("li");
  li.id = v.capital;
  li.classList.add = "name";
  li.addEventListener("click", () => {
    li.innerText = v.capital;
  });

  li.appendChild(ul);
});
