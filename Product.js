document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const modalImage = document.querySelector(".modal-image");
  const modalTitle = document.querySelector(".modal-title");
  const modalPrice = document.querySelector(".modal-price");
  const modalDescription = document.querySelector(".modal-description");
  const modalAdditionalInfo = document.querySelector(".modal-additional-info");
  const uploadButton = document.querySelector(".upload-button");
  const uploadCard = document.getElementById("upload-card");
  const closeUploadButton = document.querySelector(".close-upload-button");
  const fileInput = document.getElementById("file");
  const confirmationCard = document.getElementById("confirmation-card");
  const filters = document.querySelectorAll(".filter");
  const productCards = document.querySelectorAll(".product-card");
  const sizeChooser = document.querySelector(".size-chooser");
  const colorChooser = document.querySelector(".color-chooser");

  const products = [
    {
      id: 1,
      title: "Canvas Prints",
      price: "$69.99",
      description: "High-quality canvas prints.",
      additionalInfo: "Available in various sizes.",
      category: "category5",
      image: "photos/canvas prints.2.jpeg",
    },
    {
      id: 2,
      title: "Worldwide Shipping",
      price: "$149.99",
      description: "Fast and reliable worldwide shipping.",
      additionalInfo: "Track your order online.",
      category: "category6",
      image: "photos/Worldwide shipping.jpg",
    },
    {
      id: 3,
      title: "Bag",
      price: "$14.99",
      description: "Stylish and durable bags.",
      additionalInfo: "Available in multiple colors.",
      category: "category1",
      image: "photos/bag2.jpeg",
    },
    {
      id: 4,
      title: "Mug",
      price: "$9.99",
      description: "Ceramic mugs with custom designs.",
      additionalInfo: "Dishwasher safe.",
      category: "category2",
      image: "photos/mug4.jpeg",
    },
    {
      id: 5,
      title: "Clothes",
      price: "$29.99",
      description: "Comfortable and trendy clothes.",
      additionalInfo: "Available in various sizes.",
      category: "category3",
      image: "photos/clothes4.jpeg",
    },
    {
      id: 6,
      title: "T-shirt",
      price: "$19.99",
      description: "High-quality T-shirts.",
      additionalInfo: "Available in multiple colors.",
      category: "category3",
      image: "photos/Assorted T-shirts on Wooden Hangers.jpeg",
    },
    {
      id: 7,
      title: "Calendars",
      price: "$9.99",
      description: "Custom printed calendars.",
      additionalInfo: "Available in various designs.",
      category: "category4",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/339831920/UW/RT/KN/192866568/custom-printed-calendar-1000x1000.jpeg",
    },
    {
      id: 8,
      title: "Bottle",
      price: "$14.99",
      description: "Reusable water bottles.",
      additionalInfo: "Eco-friendly materials.",
      category: "category2",
      image: "photos/mug6.jpeg",
    },
    {
      id: 9,
      title: "Bag",
      price: "$29.99",
      description: "Stylish and durable bags.",
      additionalInfo: "Available in multiple colors.",
      category: "category1",
      image: "photos/bag3.jpeg",
    },
    {
      id: 10,
      title: "Calendar",
      price: "$9.99",
      description: "Custom printed calendars.",
      additionalInfo: "Available in various designs.",
      category: "category4",
      image: "photos/calendars3.jpg",
    },
    {
      id: 11,
      title: "Hoodie",
      price: "$29.99",
      description: "Comfortable and trendy hoodies.",
      additionalInfo: "Available in various sizes.",
      category: "category3",
      image: "photos/filter clothes.jpeg",
    },
    {
      id: 13,
      title: "Canvas Prints",
      price: "$49.99",
      description: "High-quality canvas prints.",
      additionalInfo: "Available in various sizes.",
      category: "category5",
      image: "photos/canvas prints.1.jpeg",
    },
    {
      id: 14,
      title: "Marketing",
      price: "$29.99",
      description: "Professional marketing services.",
      additionalInfo: "Boost your business.",
      category: "category6",
      image: "photos/marketing.jpg",
    },
    {
      id: 15,
      title: "Bag",
      price: "$39.99",
      description: "Stylish and durable bags.",
      additionalInfo: "Available in multiple colors.",
      category: "category1",
      image: "photos/bag1.jpeg",
    },
    {
      id: 16,
      title: "Mug",
      price: "$9.99",
      description: "Ceramic mugs with custom designs.",
      additionalInfo: "Dishwasher safe.",
      category: "category2",
      image: "photos/mug2.jpeg",
    },
    {
      id: 17,
      title: "Sustainable and Recycling",
      price: "$29.99",
      description: "Eco-friendly products.",
      additionalInfo: "Promote sustainability.",
      category: "category6",
      image: "photos/Sustainable and recycling.jpg",
    },
    {
      id: 18,
      title: "Mug",
      price: "$9.99",
      description: "Ceramic mugs with custom designs.",
      additionalInfo: "Dishwasher safe.",
      category: "category2",
      image: "photos/mug3.jpeg",
    },
    {
      id: 19,
      title: "Canvas Prints",
      price: "$39.99",
      description: "High-quality canvas prints.",
      additionalInfo: "Available in various sizes.",
      category: "category5",
      image: "photos/canvas prints.3.jpeg",
    },
    {
      id: 20,
      title: "Calendars",
      price: "$6.99",
      description: "Custom printed calendars.",
      additionalInfo: "Available in various designs.",
      category: "category4",
      image: "photos/calendars1.jpg",
    },
    {
      id: 21,
      title: "Logo Design",
      price: "$29.99",
      description: "Professional logo design services.",
      additionalInfo: "Create a unique brand identity.",
      category: "category6",
      image: "photos/logodesign.jpg",
    },
    {
      id: 22,
      title: "Bottle",
      price: "$29.99",
      description: "Reusable water bottles.",
      additionalInfo: "Eco-friendly materials.",
      category: "category2",
      image: "photos/mug5.jpeg",
    },
    {
      id: 23,
      title: "Clothes",
      price: "$29.99",
      description: "Comfortable and trendy clothes.",
      additionalInfo: "Available in various sizes.",
      category: "category2",
      image: "photos/clothes3.jpg",
    },
  ];

  // Display the modal with product details
  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".product-card");
      const productId = parseInt(card.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);

      if (product) {
        // Fetch image source directly from the card
        const productImage = card.querySelector(".product-image").src;

        modalImage.src = productImage;
        modalTitle.textContent = product.title;
        modalTitle.setAttribute("data-id", product.id);
        modalPrice.textContent = product.price;
        modalDescription.textContent = product.description;
        modalAdditionalInfo.textContent = product.additionalInfo;

        // Hide or show size and color choosers based on category
        if (product.category === "category6") {
          if (sizeChooser) sizeChooser.style.display = "none";
          if (colorChooser) colorChooser.style.display = "none";
        } else {
          if (sizeChooser) sizeChooser.style.display = "flex";
          if (colorChooser) colorChooser.style.display = "flex";
        }

        modal.classList.add("show");
      }
    });
  });

  // Close the modal
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    } else if (event.target === confirmationCard) {
      confirmationCard.classList.remove("show");
    }
  });

  // Show the upload card
  uploadButton.addEventListener("click", () => {
    uploadCard.classList.add("show");
    modal.style.zIndex = 1; // Ensure the modal stays behind the upload card
  });

  // Close the upload card
  closeUploadButton.addEventListener("click", () => {
    uploadCard.classList.remove("show");
    modal.style.zIndex = 2; // Reset the modal's z-index
  });

  // Handle file upload
  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      // Simulate file upload
      setTimeout(() => {
        // Hide the upload card
        uploadCard.classList.remove("show");

        // Display confirmation card
        confirmationCard.classList.add("show");
      }, 1000); // Simulate a delay for the upload
    }
  });

  // Filter product cards based on the selected filter
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove active class from all filters
      filters.forEach((f) => f.classList.remove("active"));
      // Add active class to the clicked filter
      filter.classList.add("active");
      // Get the category from the clicked filter
      const category = filter.getAttribute("data-category");
      // Filter product cards
      productCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Handle quantity increase and decrease
  document.querySelectorAll(".quantity-chooser button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const quantityInput = event.target.parentElement.querySelector(
        "input[type='number']"
      );
      let currentValue = parseInt(quantityInput.value);

      if (event.target.classList.contains("increase")) {
        quantityInput.value = currentValue + 1;
      } else if (
        event.target.classList.contains("decrease") &&
        currentValue > 1
      ) {
        quantityInput.value = currentValue - 1;
      }
    });
  });

 
  });
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

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide);

  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll(".filter");
  const productCards = document.querySelectorAll(".product-card");

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      // Remove active class from all filters
      filters.forEach((f) => f.classList.remove("active"));
      // Add active class to the clicked filter
      filter.classList.add("active");
      // Get the category from the clicked filter
      const category = filter.getAttribute("data-category");
      // Filter product cards
      productCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items-container");
  const emptyCartMsg = document.getElementById("empty-cart-msg");
  const cart = [];

  // Function to render cart items
  function renderCart() {
    // Clear the current cart items
    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
      emptyCartMsg.style.display = "block";
    } else {
      emptyCartMsg.style.display = "none";
      cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
                  <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                  <div class="cart-item-info">
                      <h4>${item.title}</h4>
                      <p>${item.price}</p>
                  </div>
                  <button class="remove-button" data-id="${item.id}">&times;</button>
              `;
        cartItemsContainer.appendChild(cartItem);
      });
    }
  }

  // Function to handle "Order Now" button click
  function addToCart(product) {
    cart.push(product);
    renderCart();
  }

  // Event listener for "Order Now" buttons
  document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".product-card");
      const productId = parseInt(card.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);

      if (product) {
        addToCart(product);
      }
    });
  });

  // Event listener for remove buttons in the cart
  cartItemsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const productIndex = cart.findIndex((p) => p.id === productId);
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        renderCart();
      }
    }
  });


});

//add to cart//
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButton = document.getElementById('addToCart');
  if (addToCartButton) {
      addToCartButton.addEventListener('click', function() {
          const modal = document.getElementById('modal');
          const productTitle = modal.querySelector('.modal-title').innerText;
          const productPrice = parseFloat(modal.querySelector('.modal-price').innerText.replace('$', ''));
          const productImage = modal.querySelector('.modal-image').src;
          const productQuantity = parseInt(document.getElementById('quantityInput').value);

          const cartItem = {
              title: productTitle,
              price: productPrice,
              image: productImage,
              quantity: productQuantity
          };

          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));

          updateCartMenu();

          alert('Product added to cart!');
      });
  }

  function updateCartMenu() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const cartItemsContainer = document.getElementById('cart-items-container');
      const cartItemsList = cartItemsContainer.querySelector('#cart-items');
      cartItemsList.innerHTML = '';

      let total = 0;

      cart.forEach((item, index) => {
          const listItem = document.createElement('li');
          listItem.className = 'cart-item';
          listItem.innerHTML = `
              <img src="${item.image}" alt="${item.title}" class="cart-item-image" />
              <div class="cart-item-info">
                  <h4>${item.title}</h4>
                  <p>${item.price}</p>
                  <p>Quantity: ${item.quantity}</p>
              </div>
              <button class="remove-button" data-index="${index}">&times;</button>
          `;
          cartItemsList.appendChild(listItem);
          total += item.price * item.quantity;
      });

      // Add event listeners to remove buttons
      const removeButtons = document.querySelectorAll('.remove-button');
      removeButtons.forEach(button => {
          button.addEventListener('click', function() {
              const index = this.getAttribute('data-index');
              cart.splice(index, 1);
              localStorage.setItem('cart', JSON.stringify(cart));
              updateCartMenu();
          });
      });

      const cartMessage = cartItemsContainer.nextElementSibling;
      if (cart.length === 0) {
          cartMessage.innerText = 'Your cart is empty.';
          cartMessage.style.display = 'block';
          if (document.getElementById('checkout-button')) {
              document.getElementById('checkout-button').remove();
          }
          if (document.getElementById('total-amount')) {
              document.getElementById('total-amount').remove();
          }
      } else {
          cartMessage.style.display = 'none';
          if (!document.getElementById('total-amount')) {
              const totalAmount = document.createElement('p');
              totalAmount.id = 'total-amount';
              totalAmount.innerText = `Total: $${total.toFixed(2)}`;
              cartItemsContainer.parentNode.insertBefore(totalAmount, cartItemsContainer.nextSibling);
          } else {
              document.getElementById('total-amount').innerText = `Total: $${total.toFixed(2)}`;
          }
          if (!document.getElementById('checkout-button')) {
              const checkoutButton = document.createElement('button');
              checkoutButton.id = 'checkout-button';
              checkoutButton.innerText = 'Check Out';
              checkoutButton.addEventListener('click', function() {
                  // Display the checkout form
                  displayCheckoutForm();
              });
              cartItemsContainer.parentNode.appendChild(checkoutButton);
          }
      }
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

    
    document.getElementById('confirm-button').addEventListener('click', function() {
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; 
    });

    
    document.getElementById('cancel-button').addEventListener('click', function() {
        document.body.removeChild(checkoutForm); 
    });
}

document.getElementById('checkout-button').addEventListener('click', displayCheckoutForm);

  
  updateCartMenu();
});

