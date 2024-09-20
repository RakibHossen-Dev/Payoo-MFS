document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);

    if (isNaN(addMoneyInput)) {
      alert("failed to add money");
      return;
    }
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");
      const blance = document.getElementById("account-blance").innerText;
      const addMoneyNumber = parseFloat(addMoneyInput);
      const blanceNumber = parseFloat(blance);
      const newBlance = addMoneyNumber + blanceNumber;
      console.log(newBlance);
      document.getElementById("account-blance").innerText = newBlance;

      // add transction
      const p = document.createElement("p");
      p.innerText = `Added: ${addMoneyNumber} Tk. New Balance: ${newBlance}`;
      console.log(p);

      // commont  function
      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Failed to add money! please to try again");
    }
  });
