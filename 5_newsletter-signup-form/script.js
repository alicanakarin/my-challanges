const formElement = document.querySelector(".form");
const emailInputElement = document.querySelector("#email");
const errorHintElement = document.querySelector(".input-error-hint");
const successDialog = document.querySelector("#success-dialog");
const dismissButton = document.querySelector("#dismiss-button");
const userEmail = document.querySelector("#user-email");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInputElement.value.trim();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!emailValue) {
    errorHintElement.textContent = "Valid email required";
    emailInputElement.classList.add("email-input-error");
    emailInputElement.focus();
    return;
  }

  if (!emailRegex.test(emailValue)) {
    errorHintElement.textContent = "Invalid email format";
    emailInputElement.classList.add("email-input-error");
    emailInputElement.focus();
    return;
  }

  userEmail.textContent = emailValue;
  successDialog.showModal();

  console.log("Form submitted successfully");
  emailInputElement.value = "";
  errorHintElement.textContent = "";
  emailInputElement.classList.remove("email-input-error");
});

// Dismiss button event listener - form dışında tanımlanmalı
dismissButton.addEventListener("click", () => {
  successDialog.close();
});
