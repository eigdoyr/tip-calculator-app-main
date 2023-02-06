let billInput = document.querySelector("#bill-input");
let tips = document.getElementsByName("tip");
let customTip = document.querySelector("#custom-input");
let numInput = document.querySelector("#num-inpout");
let tipAmtTotal = document.querySelector("#tip-amount-text");
let totalAmtTotal = document.querySelector("#total-amount-text");
let resetBtn = document.querySelector("#reset-btn");

//Calculate Tip
const calculateTip = (billInput, selected, numInput) => {
  let selected = Array.from(tips).find((tip) => tip.checked);
  let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);
  // console.log("this is tip", tip);

  let totalAmount = (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
  totalAmount = totalAmount.toFixed(2);
  // console.log("this is total amount", totalAmount);

  billAmount.innerHTML = `$${tip}`;
  billTotalPerPerson.innerHTML = `$${totalAmount}`;
};
