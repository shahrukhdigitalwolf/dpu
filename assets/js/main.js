const openNavbar = document.getElementById("openNav");
const closeNavbar = document.getElementById("closeNav");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

openNavbar.addEventListener("click",()=>{
    navbar.classList.remove("translate-x-[100%]")
    navbar.classList.add("translate-x-[0%]")
});
closeNavbar.addEventListener("click",()=>{
    navbar.classList.add("translate-x-[100%]")
    navbar.classList.remove("translate-x-[0%]")
});

window.addEventListener('scroll', function (e) {
  if (window.pageYOffset > 0) {
    header.classList.add('bg-[#FFF]', 'shadow-lg');
    header.classList.remove('bg-transparent');
      } else {
        header.classList.add('bg-transparent');
        header.classList.remove('bg-[#FFF]','shadow-lg');
      }
});
document.querySelectorAll('.dropdown-button').forEach((dropdownBtn) => {
    dropdownBtn.addEventListener('click', () => {
        const dropdownMenu = dropdownBtn.nextElementSibling;
        const icon = document.querySelector(".dropdown-icon");
        // Check if the dropdown is currently expanded
        if (dropdownMenu.style.maxHeight) {
            dropdownMenu.style.maxHeight = null; // Collapse the menu
            icon.style.rotate = '0deg'
        } else {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px'; // Expand the menu to the full content height
            icon.style.rotate = '180deg'
        }
    });
});
