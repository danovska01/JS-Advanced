function validate() {
  const emailInput = document.getElementById("email");

  emailInput.addEventListener("change", function () {
    const emailValue = emailInput.value;

    const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    //emailRegex.test(emailValue)
    //The test() method in JavaScript is a method of the regular expression object

    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("error");
    } else {
      emailInput.classList.remove("error");
      emailInput.value = "";
    }
  });
}
