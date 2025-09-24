const spend = document.querySelector("#spend");
const checkbox = document.querySelector("#checkbox");

spend.disabled = true;

checkbox.addEventListener("click", () => {
  spend.disabled = !checkbox.checked;
});
