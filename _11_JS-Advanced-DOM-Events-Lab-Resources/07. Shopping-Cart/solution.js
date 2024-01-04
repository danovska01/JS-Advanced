function solve() {
  const checkoutButtonElement = document.querySelector(".checkout");
  const addButtonsElements = document.querySelectorAll(".add-product");
  const cartTextareaElement = document.querySelector("textarea");

  const cart = [];

  if (addButtonsElements.length > 0) {
    addButtonsElements.forEach((button) => {
      button.addEventListener("click", function () {
        const productContainerElement = this.closest(".product");
        const productName =
          productContainerElement.querySelector(".product-title").textContent;
        const productPrice = parseFloat(
          productContainerElement.querySelector(".product-line-price")
            .textContent
        );
        addItemToCart(productName, productPrice);
      });
    });
  } else {
    // Handle the case when there are no matching elements
    console.log("No add buttons found");
  }

  function addItemToCart(productName, productPrice) {
   cart.push({ name: productName, price: productPrice });
   updateCartTextarea();
 }
 
 function updateCartTextarea() {
   cartTextareaElement.value = cart.map((item) =>
    `Added ${item.name} for ${item.price.toFixed(2)} to the cart.`).join("\n");
 }
 checkoutButtonElement.addEventListener("click", function () {
   checkout();
   disableButtons();
 });

  function checkout() {
    const uniqueItems = [...new Set(cart.map((item) => item.name))];
    const totalPrice = uniqueItems.reduce((sum, itemName) => {
        const item = cart.find((cartItem) => cartItem.name === itemName);
        const itemCount = cart.filter((cartItem) => cartItem.name === itemName).length;
        return sum + item.price * itemCount;
      }, 0).toFixed(2);

    const textarea = document.querySelector("textarea");
    textarea.value = "";
    textarea.value += `You bought ${uniqueItems.join(", ")} for ${totalPrice}.\n`;
  }
  function disableButtons() {
    addButtonsElements.forEach((button) => {
      button.disabled = true;
    });

    checkoutButtonElement.disabled = true;
  }
}
