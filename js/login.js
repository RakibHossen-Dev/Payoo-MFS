document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login Button Click");

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);
    if (phoneNumber === "01760445403" && pinNumber === "1234") {
      console.log("Your Are Log-in ");
      window.location.href = "./home.html";
    } else {
      alert("Wrong Phone number or pin");
    }
  });
