// Set the form element in a constant
const formMain = document.forms.mainForm;
const resetButton = document.getElementById("reset");

// This event will be triggered when the page loads
document.addEventListener("DOMContentLoaded", function() {
  clearForm();
});

// This event will be triggered when the submit button is clicked
document.getElementById("mainFormId").addEventListener("submit", e => {
  if (!validateForm()) {
    // If the validation fails, prevent the form submission
    e.preventDefault();
    /* Calling e.stopPropagation() within an event handler
     prevents the event from bubbling up the DOM tree */
    e.stopPropagation();
  }

  // Get the form data and store it in a constant
  const name = formMain.name.value.trim();
  const email = formMain.email.value.trim();
  const linkedInUrl = formMain.linkedInUrl.value.trim();
  const message = formMain.message.value.trim();

  const formData = { name, email, linkedInUrl, message };

  // Store the form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Send the form data to the server using AJAX
  fetch("http://localhost:9005/submit", {
    // Set the action and method attributes
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.text())
    .then(data => {
      console.log(data);    
    })
    .catch(error => {
      console.log("An error occurred while submitting the form:", error);
     // document.getElementById("span-data-store-error").textContent 
     // = "An error occurred while submitting the form";
      
    });
});

// Reset button event listener
resetButton.addEventListener("click", clearForm);

/* Validate the name field */
formMain.name.addEventListener("input", validateName);

// Validate the email field
formMain.email.addEventListener("input", validateEmail);

// Function to validate the name field
function validateName() {
  const name = formMain.name.value.trim();

  // Regular expression to match only alpha characters and space
  const alphaRegex = /^[A-Za-z ]+$/;
  const numberOfCharacter = 2;

  if (name.length < numberOfCharacter || !alphaRegex.test(name)) {
    addErrorClass(formMain.name);
    disableSubmitButton();
    document.getElementById("span-name-error").textContent 
    = "Please enter a valid name (minimum 2 alpha characters).";
    // addErrorClass(formMain.name);

    return false;
  }

  clearErrorMessage(document.getElementById("span-name-error"));
  removeErrorClass(formMain.name);
  enableSubmitButton();
  // checkFormValidity();
  return true;
}

// Function to validate the email field
function validateEmail() {
  const email = formMain.email.value.trim();

  /* Validate email addresses by ensuring they follow a specific format with the
  correct arrangement of alphanumeric characters, dots, hyphens, 
  and the domain extension. */
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!emailRegex.test(email)) {
    document.getElementById("span-email-error").textContent 
    = "Please enter a valid email address.";
    addErrorClass(formMain.email);
    disableSubmitButton();
    return false;
  }

  clearErrorMessage(document.getElementById("span-email-error"));
  removeErrorClass(formMain.email);
  enableSubmitButton();
  // checkFormValidity();
  return true;
}

// Disable the submit button and update the CSS style
function disableSubmitButton() {
  formMain.submit.disabled = true;
  formMain.submit.classList.add("inactive");
  formMain.submit.classList.remove("hoverSubmitButton");
}

// Enable the submit button and update the CSS style
function enableSubmitButton() {
  formMain.submit.disabled = false;
  formMain.submit.classList.remove("inactive");
  formMain.submit.classList.add("hoverSubmitButton");
}

// Add CSS error style
function addErrorClass(element) {
  if (element.classList !== undefined) {
    element.classList.add("error");
  }
}

// Remove CSS error style
function removeErrorClass(element) {
  if (element.classList !== undefined) {
    element.classList.remove("error");
  }
}

// Validate the form
function validateForm() {
  const isValidName = validateName();
  const isValidEmail = validateEmail();

  // Return true if all fields are valid
  return isValidName && isValidEmail;
}

// Clear the error message for a specific element
function clearErrorMessage(element) {
  element.textContent = "";
}

// Reset all form elements, disable the submit button, and set focus to the name field
function clearForm() {
  formMain.name.value = "";
  formMain.email.value = "";
  formMain.linkedInUrl.value = "";
  formMain.message.value = "";

  clearErrorMessage(document.getElementById("span-name-error"));
  removeErrorClass(formMain.name);
  clearErrorMessage(document.getElementById("span-email-error"));
  clearErrorMessage(document.getElementById("span-data-store-error"));
  removeErrorClass(formMain.email);

  disableSubmitButton();
  formMain.name.focus();
}
