// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const detailedHeader = document.querySelector('.job-detailed-header');
const detailedListElements = document.querySelectorAll('.detailed-list-child-element');

// Set Initial State of Menu
let showMenu = false;

// Toggle menu function
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Reset Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Reset Menu State
        showMenu = false;
    }
}

// Toggle detailed list function
function toggleDetailedList() {
    const detailedList = document.querySelector('.detailed-list');
    if (detailedList.classList.contains('show')) {
        detailedList.classList.remove('show'); // Remove the 'show' class
    } else {
        detailedList.classList.add('show'); // Add the 'show' class
    }
}

// Toggle detailed list element function
function toggleDetailedListElement(event) {
    // Check if the clicked element is the detailed list child element
    if (event.target.classList.contains('detailed-list-child-element')) {
        // Toggle the 'show' class of the detailed list content
        const detailedListContent = event.target.querySelector('.detailed-list-child-content');
        detailedListContent.classList.toggle('show');
    }
}

// Event listeners
menuBtn.addEventListener('click', toggleMenu);
detailedHeader.addEventListener('click', toggleDetailedList);

// Assign click event listener to each detailed list item
detailedListElements.forEach(item => {
    item.addEventListener('click', toggleDetailedListElement);
});
