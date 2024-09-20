document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("cash out");

    const cashOut = document.getElementById("input-cash-out").value;
    cashOut.value = "";
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById("input-cash-out-pin").value;
    console.log(pinNumber);

    if (isNaN(cashOutNumber)) {
      alert("Failed to cash out");
      return;
    }

    if (pinNumber === "1234") {
      //   console.log("Money is reducing");
      const blance = document.getElementById("account-blance").innerText;
      const blanceNumber = parseFloat(blance);

      const newBlance = blanceNumber - cashOutNumber;
      document.getElementById("account-blance").innerText = newBlance;

      if (cashOutNumber > blance) {
        alert("You do not have enough money to cashout");
        return;
      }
      // add to transcation histroy

      const div = document.createElement("div");
      div.classList.add("bg-green-300");
      div.classList.add("p-4");
      div.innerHTML = `
      <h4 class='text-2xl font-bold'>Cash Out</h4>
      <p>${cashOut} Withdraw . New Balance ${newBlance}</p>
      `;

      document.getElementById("transaction-container").appendChild(div);
    } else {
      alert("Failed to cash out . Please try again");
    }
  });
