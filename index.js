
// declare variables
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");
console.log(countEl);

// initialize count as 0
let count = 0;

// listen for clicks on the increment button
// increment count variable when button is clicked
function increment() {
  count = count + 1;
  countEl.textContent = count;
}
// save previous entries
function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}



