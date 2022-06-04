// variables for validating Name and Phone Number
var letters = /^[A-Za-z]+$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// variables for storing user inputs
const first = document.getElementById("first");
const last = document.getElementById("last");
const phone = document.getElementById("pat_phone");
const error = document.getElementById("nameError");

// listens for submit button press
document.getElementById("submit").addEventListener("click", validate);

function validate(e) {

  // Makes error message visible
  function alert(){
    e.preventDefault();
    error.classList.add("visible");
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
  }

  // Show error message
  function paint(v) {
    v.classList.add("invalid");     // add invalid css class to input for red border
    v.value = "";                   // Wrong input reset field
  }

  // Check if radios are selected
  function radios(x){
    for (var i = 0, len = x.length; i < len; i++) {
      if (!x[i].checked) {
        alert();
      }
    }
  }

  function fields(y){
    if (!y.value || !y.value.match(letters)) {
      alert();
      paint(y);
    }
  }

  first.classList.remove("invalid");    // On each submit click reset input field css class
  last.classList.remove("invalid");     //
  phone.classList.remove("invalid");    //


  // If first name is null or contains anything other than letters fail validation
  fields(first);

  // If last name is null or contains anything other than letters fail validation
  fields(last);

  // If phone number is null or is not a proper number fail validation
  if (!phone.value || !phone.value.match(phoneno)) {
    alert();
    paint(phone);
  }

  // Check if radios are selected
  radios(document.getElementsByName("rating1"));
  radios(document.getElementsByName("rating2"));
  radios(document.getElementsByName("rating3"));
  radios(document.getElementsByName("rating4"));
  radios(document.getElementsByName("rating5"));

  // else continue with form submission
  return;
}