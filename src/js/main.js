let input = document.getElementById("floatingInput");
let showAmount = document.getElementById("showAmount");

function calculate() {
  let amount = input.value;
  let total = amount * 0.05;
  console.log(total);
  showAmount.innerHTML = "Value added tax (5%) = " + total.toFixed(2);
}
