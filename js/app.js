var elForm = document.querySelector("[data-form]");
var elInput = document.querySelector("[data-input-money]");
var elSelect = document.querySelector("[data-select-money]");
var elHeading = document.querySelector("[data-heading]");
// currency rate for 8/24/2023
var usd = 12125;
var rubl = 129.3902;
var euro = 13230.4878;

elForm.addEventListener("submit" , function(evt) {
  evt.preventDefault();

  if (elSelect.value === "USD") {
    elHeading.textContent = `you have got ${Math.round(elInput.value / usd)} $`;
  } else if (elSelect.value === "RUBL") {
    elHeading.textContent = `you have got ${Math.round(elInput.value / rubl)} P`;
  } else {
    elHeading.textContent = `you have got ${Math.round(elInput.value / euro)} E`;
  }
})