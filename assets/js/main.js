const openNavbar = document.getElementById("openNav");
const closeNavbar = document.getElementById("closeNav");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

openNavbar.addEventListener("click", () => {
  navbar.classList.remove("translate-x-[100%]");
  navbar.classList.add("translate-x-[0%]");
  document.body.classList.add("overflow-hidden"); // Disable scroll
});

closeNavbar.addEventListener("click", () => {
  navbar.classList.add("translate-x-[100%]");
  navbar.classList.remove("translate-x-[0%]");
  document.body.classList.remove("overflow-hidden"); // Enable scroll
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    header.classList.add("bg-[#FFF]", "shadow-lg");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.add("bg-transparent");
    header.classList.remove("bg-[#FFF]", "shadow-lg");
  }
});

document.querySelectorAll(".dropdown-button").forEach((dropdownBtn) => {
  dropdownBtn.addEventListener("click", () => {
    const dropdownMenu = dropdownBtn.nextElementSibling;
    const icon = document.querySelector(".dropdown-icon");

    if (dropdownMenu.style.maxHeight) {
      dropdownMenu.style.maxHeight = null;
      icon.style.rotate = "0deg";
    } else {
      dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
      icon.style.rotate = "180deg";
    }
  });
});

/* modal */

// Function to open the modal
function openModal(modal) {
  if (modal) {
    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100", "pointer-events-auto");
  } else {
    console.error("Modal not found");
  }
}

// Function to close the modal
function closeModal(modal) {
  if (modal) {
    modal.classList.remove("opacity-100", "pointer-events-auto");
    modal.classList.add("opacity-0", "pointer-events-none");
  } else {
    console.error("Modal not found");
  }
}

// Select all buttons that open modals
const openModalButtons = document.querySelectorAll("[data-modal-target]");
// Select all modals
const modals = document.querySelectorAll(".modal");
// Select all buttons that close modals
const closeModalButtons = document.querySelectorAll(".close-modal");

// Attach event listeners to open buttons
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal-target");
    const modal = document.getElementById(modalId);
    openModal(modal);
  });
});

// Attach event listeners to close buttons
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

// Close modal when clicking on the backdrop (overlay)
modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
});

// Automatically open the first modal after 5 seconds
setTimeout(() => {
  const firstModal = document.querySelector(".modal"); // Ensure this matches your modal's class
  if (firstModal) {
    openModal(firstModal);
  } else {
    console.error("No modal found to open automatically.");
  }
}, 10000);

/* end */
