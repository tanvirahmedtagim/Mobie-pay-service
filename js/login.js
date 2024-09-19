// console.log("button clicked file added");
//form submit reloading the page
//step-1: set event handler
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //step-2: prevent default behavior (reloading browser)
    event.preventDefault(); //to stop reload the page after giving the data ...
    console.log("login button clicked");
    //step-3: get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);
    //bad way to validate
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = './home.html';
    } else {
      alert("Wrong pin or password");
    }
  });
