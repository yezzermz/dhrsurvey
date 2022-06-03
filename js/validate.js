// variables for validating Name and Phone Number
var letters = /^[A-Za-z]+$/;
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// variables for storing user inputs
const first = document.getElementById("first");
const last = document.getElementById("last");
const phone = document.getElementById("phone");
const error = document.getElementById("nameError");

// listens for submit button press
document.getElementById("submit").addEventListener("click", validate);

function validate(e) {
  first.classList.remove("invalid");    // On each submit click reset input field css class
  last.classList.remove("invalid");     //
  phone.classList.remove("invalid");    //


  // If first name is null or contains anything other than letters fail validation
  if (!first.value || !first.value.match(letters)) {
  e.preventDefault();                             // prevents from from subbmission
    first.classList.add("invalid");               // add invalid css class to input for red border
    error.classList.add("visible");               // Makes error message visible
    error.setAttribute("aria-hidden", false);     //
    error.setAttribute("aria-invalid", true);     //
    first.value = "";                             // Wrong input reset field
  }

  // If last name is null or contains anything other than letters fail validation
  if (!last.value || !last.value.match(letters)) {
  e.preventDefault();
    last.classList.add("invalid");
    error.classList.add("visible");
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
    last.value = "";
  }

  // If phone number is null or is not a proper number fail validation
  if (!phone.value || !phone.value.match(phoneno)) {
  e.preventDefault();
    phone.classList.add("invalid");
    error.classList.add("visible");
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
    phone.value = "";
  }

  // else continue with form submission
  return;
}