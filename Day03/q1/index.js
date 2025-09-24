const data = [
  { A: "Home", B: "Home is where the heart is.." },
  { A: "News", B: "Some news this fine day!" },
  { A: "Contact", B: "Get in touch, or swing by for a cup of coffee." },
  { A: "About", B: "Who we are and what we do." },
];

const content1 = document.querySelector("#contentHome");
const content2 = document.querySelector("#contentNews");
const content3 = document.querySelector("#contentContact");
const content4 = document.querySelector("#contentAbout");
const txt = document.querySelector("#par");

data.forEach((v) => {
  const b = document.createElement("h3");
  const c = document.createElement("p");
  b.id = v.A;
  c.id = v.B;

  content1.addEventListener("click", () => {
    b.innerText = v.A;
    c.innerText = v.B;
  });
  txt.appendChild(b);
  txt.appendChild(c);
});
