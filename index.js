var MoneyAmount;
var NumberOfPeople;
var TipAmount;

var TipPerPerson = 0;
var TotalPerPerson = 0;

var SelectedTipButton;

var MoneyAmountInput = document.getElementById("Bill-Input");
var NumberOfPeopleInput = document.getElementById("Number-Of-People-Input");
var CustomTipInput = document.getElementById("Custom-Tip");
var TipPerPersonText = document.getElementById("Tip-Amount");
var TotalPerPersonText = document.getElementById("Total");

function Calculate() {
  MoneyAmount = MoneyAmountInput.value;
  if (CustomTipInput.value != "") {
    TipAmount = CustomTipInput.value;
    if (SelectedTipButton != null) {
      SelectedTipButton.style.backgroundColor = "#f0f0f3";
      SelectedTipButton.style.color = "orange";
      SelectedTipButton.style.boxShadow =
        "-3px -3px 5px #fafafa, 2px 2px 5px #aeaec0";
    }
  }
  NumberOfPeople = NumberOfPeopleInput.value;

  TipPerPerson = (MoneyAmount * TipAmount) / 100 / NumberOfPeople;
  TotalPerPerson = MoneyAmount / NumberOfPeople + TipPerPerson;

  TipPerPersonText.innerHTML = TipPerPerson.toFixed(2);
  TotalPerPersonText.innerHTML = TotalPerPerson.toFixed(2);
  setInterval(Calculate, 500);
}

function SelectedTip(Object, Tip) {
  if (SelectedTipButton != null) {
    SelectedTipButton.style.backgroundColor = "#f0f0f3";
    SelectedTipButton.style.color = "orange";
    SelectedTipButton.style.boxShadow =
      "-3px -3px 5px #fafafa, 2px 2px 5px #aeaec0";
  }
  SelectedTipButton = Object;
  Object.style.backgroundColor = "orange";
  Object.style.color = "#f0f0f3";
  Object.style.boxShadow = "-3px -3px 5px #fff0e0, 2px 2px 5px #bd7400";
  CustomTipInput.value = "";
  TipAmount = Tip;
}

function Reset() {
  MoneyAmount = null;
  NumberOfPeople = null;
  TipAmount = null;

  MoneyAmountInput.value = null;
  NumberOfPeopleInput.value = null;
  CustomTipInput.value = null;
}

Calculate();
