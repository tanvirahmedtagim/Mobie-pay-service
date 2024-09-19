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
    console.log(phoneNumber);
  });
