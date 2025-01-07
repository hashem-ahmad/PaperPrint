document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const cartMenu = document.getElementById("cart-menu");
  const chatIcon = document.getElementById("chat-icon");
  const chatMenu = document.getElementById("chat-menu");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  const sendButton = document.getElementById("send-button");
  const chatInput = document.getElementById("chat-input");
  const chatContainer = document.getElementById("chat-container");

  // Function to toggle menu visibility
  function toggleMenu(menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  // Toggle the display of the cart menu
  cartIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu(cartMenu);
  });

  // Toggle the display of the chat menu
  chatIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu(chatMenu);
    chatInput.focus();
  });

  // Handle the send button click event
  sendButton.addEventListener("click", sendMessage);

  // Handle the Enter key press event to send the message
  chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

  // Function to send a message
  function sendMessage() {
    const messageText = chatInput.value.trim();
    if (messageText) {
      const userMessage = document.createElement("div");
      userMessage.classList.add("message", "user-message");
      userMessage.textContent = messageText;
      chatContainer.appendChild(userMessage);
      chatInput.value = "";

      // Simulate a support response
      setTimeout(() => {
        const supportMessage = document.createElement("div");
        supportMessage.classList.add("message", "support-message");
        supportMessage.textContent =
          "Thank you for your message! We will get back to you shortly.";
        chatContainer.appendChild(supportMessage);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1000);
    }
  }

  // Close menus when clicking outside of them
  document.addEventListener("click", function (event) {
    if (!cartIcon.contains(event.target) && !cartMenu.contains(event.target)) {
      cartMenu.style.display = "none";
    }
    if (!chatIcon.contains(event.target) && !chatMenu.contains(event.target)) {
      chatMenu.style.display = "none";
    }
  });

  // Prevent the chat menu from closing when interacting with it
  chatMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Prevent the cart menu from closing when interacting with it
  cartMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Hamburger menu functionality
  hamburger.addEventListener("click", () => {
    // Animate links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });

    // Hamburger animation
    hamburger.classList.toggle("toggle");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Package details
  const packages = {
    "Customize package": {
      description: "Customize your package as you like",
      contents: "add what you want on the box",
      price: "$100.00",
      image: "photos/package1.jpeg"
    },
    "Clothing": {
      description: "Take a group of clothes in one bundle.",
      contents: "hoodies, sweatshirts, gym wear, beanie hats.",
      price: "$50.00",
      image: "photos/112.jpeg"
    },
    "Office": {
      description: "Streddamline your office needs with our ultimate organization and branding bundle!",
      contents: " dvertising boards, diaries, notepads,  storage.",
      price: "$50.00",
      image: "photos/Office.jpeg"
    },
    "Party": {
      description: "Elevate your celebrations with our perfect party essentials bundle!",
      contents: "menus, napkins, place settings, tablecloths",
      price: "$75.00",
      image: "photos/Party.jpeg"
    }
  };

  const modal = document.getElementById("card-modal");
  const modalCardBg = document.getElementById("modal-card-bg");
  const modalCardTitle = document.getElementById("modal-card-title");
  const modalCardDescription = document.getElementById("modal-card-description");
  const modalCardContents = document.getElementById("modal-card-contents");
  const modalCardPrice = document.getElementById("modal-card-price");
  const customizeInfo = document.getElementById("customize-info");
  const addToCartButton = document.getElementById("add-to-cart-button");
  const customizeButton = document.getElementById("customize-button");
  const uploadFile = document.getElementById("upload-file");
  const closeModal = document.getElementsByClassName("close")[0];

  const cards = document.querySelectorAll(".card-wrap");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      const cardTitle = card.querySelector(".card-info h1").innerText;
      const packageDetails = packages[cardTitle];

      modalCardBg.style.backgroundImage = `url(${packageDetails.image})`;
      modalCardTitle.innerText = cardTitle;
      modalCardDescription.innerText = packageDetails.description;
      modalCardContents.innerText = packageDetails.contents;
      modalCardPrice.innerText = packageDetails.price;

      if (cardTitle === "Customize package") {
        customizeInfo.style.display = "block";
        uploadFile.style.display = "block";
        customizeButton.style.display = "block";
      } else {
        customizeInfo.style.display = "none";
      }

      modal.style.display = "block";
    });
  });

  closeModal.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  addToCartButton.addEventListener("click", function () {
    const cartMenu = document.getElementById("cart-menu");
    const cartItems = cartMenu.querySelector("#cart-items");
    const cartTotal = cartMenu.querySelector("#cart-total p");
    const cardTitle = modalCardTitle.innerText;
    const customizationDetails = customizeInfo.value;
    const cardBg = modalCardBg.style.backgroundImage;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${cardBg.slice(5, -2)}" alt="${cardTitle}">
      <div class="cart-item-info">
        <h4>${cardTitle}</h4>
        <p>${customizationDetails}</p>
      </div>
      <div class="cart-item-price">${packages[cardTitle].price}</div>
      <button class="remove-button">&times;</button>
    `;

    cartItems.appendChild(cartItem);

    const removeButton = cartItem.querySelector(".remove-button");
    removeButton.addEventListener("click", function () {
      cartItem.remove();
      updateCartTotal();
      if (cartItems.children.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
      }
    });

    updateCartTotal();
    modal.style.display = "none";
  });

  function updateCartTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;
    cartItems.forEach(item => {
      const price = parseFloat(item.querySelector(".cart-item-price").innerText.replace("$", ""));
      total += price;
    });
    const cartTotal = document.getElementById("cart-total").querySelector("p");
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
  }

  function displayCheckoutForm() {
    const checkoutForm = document.createElement('div');
    checkoutForm.id = 'checkout-form';
    checkoutForm.innerHTML = `
        <div class="checkout-form-container">
            <h2>Checkout</h2>
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="national-number">National Number:</label>
            <input type="text" id="national-number" required>
            <button id="cancel-button" type="button">Cancel</button>
            <button id="confirm-button" type="submit">Confirm</button>
            
        </div>
    `;
    document.body.appendChild(checkoutForm);

    // Confirm button event listener
    document.getElementById('confirm-button').addEventListener('click', function() {
        // Clear the cart and redirect to the home page
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; // Change this to your home page URL
    });

    // Cancel button event listener
    document.getElementById('cancel-button').addEventListener('click', function() {
        document.body.removeChild(checkoutForm); // Remove the form from the DOM
    });
}

// Add event listener to checkout button
document.getElementById('checkout-button').addEventListener('click', displayCheckoutForm);

  
  updateCartMenu();
});
  


