//add money to the account
//add an event handler to the add money button inside the form

//?step-1 add event handler prevent page reload after form submit
//?step-2: get money to be added  to the account balance

//?step-1 add event handler prevent page reload after form submit
document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //?step-2: get money to be added  to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    //get pin number
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log(pinNumberInput);
  });
