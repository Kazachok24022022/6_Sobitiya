let input = document.querySelector("#input-field");
let output = document.querySelector("#output-element");
let timeoutId;

input.addEventListener("input", () => {
  clearTimeout(timeoutId); 
  timeoutId = setTimeout(() => {
    output.textContent = input.value;
  }, 3000); 
});