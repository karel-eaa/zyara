// Get whole menu using common class
const menu = [...document.querySelectorAll('.menu-item')];

// Filter each item into its category
const menuRolls = menu.filter(item => item.classList.contains('category-rolls'));
const menuSoups = menu.filter(item => item.classList.contains('category-soup'));

menuBreakfast = [...menuRolls]

// Get focus icons using id property
const focusIcons = [
    document.getElementById('focus-0'),
    document.getElementById('focus-1'), 
    document.getElementById('focus-2'),
    document.getElementById('focus-3'),
    document.getElementById('focus-4'), 
    document.getElementById('focus-5')
]

// Get category buttons using id property
const categoryButtons = [
    document.getElementById('category-0'),
    document.getElementById('category-1'), 
    document.getElementById('category-2'),
    document.getElementById('category-3'),
    document.getElementById('category-4'), 
    document.getElementById('category-5')
]

// Set every focus icon to display none except the first one
focusIcons[1].style.display = 'none';
focusIcons[2].style.display = 'none';
focusIcons[3].style.display = 'none';
focusIcons[4].style.display = 'none';
focusIcons[5].style.display = 'none';

// Track current focus
let currentFocus = 0;

// Add click event listener to each element
categoryButtons.forEach((icon, index) => {
    icon.addEventListener('click', function() {
        // Clear last focus
        focusIcons[currentFocus].style.display = 'none';
        // Draw new focus
        focusIcons[index].style.display = 'inline-block';
        // Set new current focus
        currentFocus = index;
        // Check focus and change displayed menu
        switch(currentFocus) {
            case 0:
                // Display everything
                for(let i = 0; i < menu.length; i++) {
                    menu[i].style.display = 'flex';
                }
                break;
            case 1:
                // Display Rolls
                // Firstly hide everything
                for(let i = 0; i < menu.length; i++) {
                    menu[i].style.display = 'none'
                }
                // Now show only menu from selected category
                for(let i = 0; i < menuRolls.length; i++) {
                    menuRolls[i].style.display = 'flex'
                }
                break;
            case 2:
                // Display Soups
                // Firstly hide everything
                for(let i = 0; i < menu.length; i++) {
                    menu[i].style.display = 'none'
                }
                // Now show only menu from selected category
                for(let i = 0; i < menuSoups.length; i++) {
                    menuSoups[i].style.display = 'flex'
                }
                break;
        }
    });
});

