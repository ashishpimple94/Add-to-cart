// Update total price based on selected option
function selectOption(option) {
    let totalPriceElement = document.getElementById("total-price");
    let totalPrice = "$10.00 USD"; // default price for 1 unit
  
    switch(option) {
      case 1:
        totalPrice = "$10.00 USD";
        break;
      case 2:
        totalPrice = "$18.00 USD";
        break;
      case 3:
        totalPrice = "$24.00 USD";
        break;
      default:
        totalPrice = "$10.00 USD";
    }
  
    totalPriceElement.textContent = totalPrice;
  }