// document
//   .getElementById("btn-show-cash-out")
//   .addEventListener("click", function () {
//     console.log("Show Cash oUt");
//     document.getElementById("cash-out-form").classList.remove("hidden");
//     document.getElementById("add-money-form").classList.add("hidden");
//   });

// document
//   .getElementById("btn-show-add-money")
//   .addEventListener("click", function () {
//     console.log("Show add money");
//     document.getElementById("add-money-form").classList.remove("hidden");
//     document.getElementById("cash-out-form").classList.add("hidden");
//   });

document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    showSectionById("add-money-form");
  });

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });

document
  .getElementById("btn-show-trancsation-out")
  .addEventListener("click", function () {
    showSectionById("transaction-section");
  });
