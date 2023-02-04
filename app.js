const billInput = document.querySelector("#bill-input");
let tips = document.getElementsByName("tip");
const customTip = document.querySelector("#custom-input");
let numInput = document.querySelector("#num-inpout");
let tipAmtTotal = document.querySelector("#tip-amount-text");
let totalAmtTotal = document.querySelector("#total-amount-text");
const resetBtn = document.querySelector("#reset-btn");

tipAmtTotal.addEventListener("click", () => {
  let selected = Array.from(tips).find((tip) => tip.checked);
  alert(selected.value);
});

const compute = () => {
  let selected = Array.from(tips).find((tip) => tip.checked);
  let totalBill = (billInput.value * selected.value) / numInput.value;
};
