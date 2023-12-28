function focused() {
    // Get all input elements within divs
    let inputs = document.querySelectorAll('div input');
  
    // Attach focus and blur event listeners to each input
    inputs.forEach(input => {
      input.addEventListener('focus', function () {
        // Add "focused" class to the parent div when input is focused
        this.parentElement.classList.add('focused');
      });
  
      input.addEventListener('blur', function () {
        // Remove "focused" class from the parent div when input loses focus
        this.parentElement.classList.remove('focused');
      });
    });
  }
  