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