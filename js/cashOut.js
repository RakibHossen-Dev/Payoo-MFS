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

    if (pinNumber === "1234") {
      //   console.log("Money is reducing");
      const blance = document.getElementById("account-blance").innerText;
      const blanceNumber = parseFloat(blance);
      const newBlance = blanceNumber - cashOutNumber;
      document.getElementById("account-blance").innerText = newBlance;
    } else {
      alert("Failed to cash out . Please try again");
    }
  });
