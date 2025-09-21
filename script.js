const products = {
    // MEZE products
    lentil: {
        title: 'Lentil Soup',
        image: 'images/product2.png',
        allergens: 'allergens: 1, 6',
        calories: '320 kcal',
        description: 'Hearty lentil soup with vegetables and spices.',
        price: '50 dkk',
        category: 'soup'
    },
    ezma: {
        title: 'Ezma',
        image: 'images/product1.png',
        allergens: 'allergens: 2, 3, 6',
        calories: '450 kcal',
        description: 'Turkish chili salad - finely chopped onions, ripe tomatoes, and peppers mixed with red pepper paste, lemon juice, and a handful of spices.',
        price: '50 dkk',
        category: 'soup'
    },
    feta: {
        title: 'Feta Rolls',
        image: 'images/product4.png',
        allergens: 'allergens: 1, 2, 7',
        calories: '380 kcal',
        description: 'Deep fried cheese rolls made with feta cheese and phyllo pastry sheets.',
        price: '60 dkk',
        category: 'rolls'
    },
    tabbouleh: {
        title: 'Tabbouleh',
        image: 'images/tabbouleh1.png',
        allergens: 'allergens: 1',
        calories: '280 kcal',
        description: 'Fresh, herby salad with parsley, bulgur, tomatoes, and lemon.',
        price: '60 dkk',
        category: 'soup'
    },
    tzatziki: {
        title: 'Tzatziki',
        image: 'images/tzatziki1.png',
        allergens: 'allergens: 7',
        calories: '150 kcal',
        description: 'Creamy yogurt dip with cucumber, garlic, and herbs.',
        price: '50 dkk',
        category: 'soup'
    },
    falafel: {
        title: 'Falafel',
        image: 'images/falafel1.png',
        allergens: 'allergens: 1, 3',
        calories: '320 kcal',
        description: 'Crispy chickpea fritters flavored with herbs and spices.',
        price: '50 dkk',
        category: 'rolls'
    },
    french_fries: {
        title: 'French Fries',
        image: 'images/fries1.png',
        allergens: 'allergens: none',
        calories: '250 kcal',
        description: 'Crispy, classic cut with a bit of salt.',
        price: '50 dkk',
        category: 'soup'
    },
    kubab: {
        title: 'Kubab',
        image: 'images/kubab1.png',
        allergens: 'allergens: 1',
        calories: '320 kcal',
        description: 'Bulgur balls with meat filling.',
        price: '60 dkk',
        category: 'rolls'
    },
    fattoush: {
        title: 'Fattoush',
        image: 'images/salad1.png',
        allergens: 'allergens: 1',
        calories: '280 kcal',
        description: 'Fresh vegetable salad with toasted pita and tangy dressing.',
        price: '60 dkk',
        category: 'soup'
    },
    hummus: {
        title: 'Hummus',
        image: 'images/hummus1.png',
        allergens: 'allergens: 3',
        calories: '220 kcal',
        description: 'Smooth chickpea dip with tahini, garlic, and lemon.',
        price: '50 dkk',
        category: 'soup'
    },
    
    // VEGAN products
    grilled_vegetables: {
        title: 'Grilled Vegetables Menu',
        image: 'images/vegetables1.png',
        allergens: 'allergens: none',
        calories: '350 kcal',
        description: 'Grilled zucchini, bell peppers, eggplant, mushrooms, and red onion.',
        price: '110 dkk',
        category: 'dinner'
    },
    falafel_menu: {
        title: 'Falafel Menu',
        image: 'images/falafel_menu1.png',
        allergens: 'allergens: 1, 3',
        calories: '450 kcal',
        description: '6 pieces of falafel with tahini dressing, bread, tabbouleh salad, hummus.',
        price: '110 dkk',
        category: 'dinner'
    },
    wara: {
        title: 'Wara Enab Menu',
        image: 'images/product5.png',
        allergens: 'allergens: 1, 3',
        calories: '420 kcal',
        description: 'Rolled grape leaves in oil with vegetables. Served with bread, tabbouleh salad, hummus and tzatziki.',
        price: '110 dkk',
        category: 'dinner'
    },
    
    // GRILL products
    lamb_roll: {
        title: 'Grilled Lamb Roll',
        image: 'images/product3.png',
        allergens: 'allergens: 1, 2, 6',
        calories: '520 kcal',
        description: 'Tender lamb rolled with herbs and spices, grilled to perfection.',
        price: '80 dkk',
        category: 'beef'
    },
    chicken_roll: {
        title: 'Grilled Chicken Roll',
        image: 'images/product6.png',
        allergens: 'allergens: 1, 2',
        calories: '390 kcal',
        description: 'Juicy chicken rolled with herbs and spices, grilled to perfection.',
        price: '75 dkk',
        category: 'chicken'
    },
    barbecue_4people: {
        title: 'Barbecue 4 People',
        image: 'images/barbecue1.png',
        allergens: 'allergens: 1, 7',
        calories: '2400 kcal',
        description: 'Delicious Zyara family grill mix of veal, chicken and kebab. Served with bread, salad, rice, hummus, tzatziki and ezme.',
        price: '700 dkk',
        category: 'beef'
    },
    lamb_skewer: {
        title: 'Lamb Skewer',
        image: 'images/lamb_skewer1.png',
        allergens: 'allergens: none',
        calories: '580 kcal',
        description: 'Tender lamb pieces grilled on skewers with herbs and spices.',
        price: '160 dkk',
        category: 'beef'
    },
    kebab_hot: {
        title: 'Kebab Hot Skewers',
        image: 'images/kebab_hot1.png',
        allergens: 'allergens: none',
        calories: '520 kcal',
        description: 'Spicy grilled kebab skewers full of flavor.',
        price: '145 dkk',
        category: 'beef'
    },
    veal_roll: {
        title: 'Grilled Veal Roll',
        image: 'images/veal_roll1.png',
        allergens: 'allergens: 1, 2',
        calories: '480 kcal',
        description: 'Tender veal rolled with herbs and spices, grilled to perfection.',
        price: '80 dkk',
        category: 'beef'
    },
    beyti_kebab: {
        title: 'Beyti Kebab',
        image: 'images/kebab1.png',
        allergens: 'allergens: 1',
        calories: '580 kcal',
        description: 'Spiced ground meat wrapped in flatbread, grilled, and served with sauce.',
        price: '145 dkk',
        category: 'beef'
    },
    chicken_skewers: {
        title: 'Chicken Skewers',
        image: 'images/skewer1.png',
        allergens: 'allergens: none',
        calories: '420 kcal',
        description: 'Juicy chicken pieces grilled on skewers with herbs and spices.',
        price: '145 dkk',
        category: 'chicken'
    },
    veal_skewers: {
        title: 'Veal Skewers',
        image: 'images/veal_skewer1.png',
        allergens: 'allergens: none',
        calories: '550 kcal',
        description: 'Tender veal pieces grilled on skewers with herbs and spices.',
        price: '160 dkk',
        category: 'beef'
    },
    kebab_skewers: {
        title: 'Kebab Skewers',
        image: 'images/kebab_skewer1.png',
        allergens: 'allergens: none',
        calories: '520 kcal',
        description: 'Juicy ground meat skewers seasoned with spices and grilled to perfection.',
        price: '145 dkk',
        category: 'beef'
    },
    
    // BURGERS
    xl_hamburger: {
        title: 'XL Hamburger Menu',
        image: 'images/xl_burger1.png',
        allergens: 'allergens: 1, 7',
        calories: '750 kcal',
        description: 'Large, juicy beef patty served with fresh toppings and a soft bun.',
        price: '145 dkk',
        category: 'beef'
    },
    xl_chicken_burger: {
        title: 'XL Chicken Burger',
        image: 'images/burger2.png',
        allergens: 'allergens: 1, 7',
        calories: '620 kcal',
        description: 'Juicy grilled or fried chicken patty served with fresh toppings and a soft bun.',
        price: '135 dkk',
        category: 'chicken'
    },
    chicken_burger: {
        title: 'Chicken Burger',
        image: 'images/burger3.png',
        allergens: 'allergens: 1, 7',
        calories: '480 kcal',
        description: 'Juicy chicken patty served with fresh vegetables and a soft bun.',
        price: '105 dkk',
        category: 'chicken'
    },
    xl_cheeseburger: {
        title: 'XL Cheeseburger Menu',
        image: 'images/burger4.png',
        allergens: 'allergens: 1, 7',
        calories: '680 kcal',
        description: 'Large beef patty topped with melted cheese and fresh toppings in a soft bun.',
        price: '155 dkk',
        category: 'beef'
    },
    zyara_hamburger: {
        title: 'Zyara Hamburger Menu',
        image: 'images/zyara_burger1.png',
        allergens: 'allergens: 1, 7',
        calories: '520 kcal',
        description: 'Juicy lamb patty served with fresh vegetables and a soft bun.',
        price: '105 dkk',
        category: 'beef'
    },
    zyara_cheeseburger: {
        title: 'Zyara Cheeseburger',
        image: 'images/burger1.png',
        allergens: 'allergens: 1, 7',
        calories: '520 kcal',
        description: 'Juicy lamb patty served with fresh vegetables and a soft bun with cheese.',
        price: '110 dkk',
        category: 'beef'
    },
    
    // PIZZAS
    vegetarian_pizza: {
        title: 'Vegetarian Pizza',
        image: 'images/pizza1.png',
        allergens: 'allergens: 1, 7',
        calories: '480 kcal',
        description: 'Crispy crust topped with fresh vegetables and melted cheese.',
        price: '90 dkk',
        category: 'dinner'
    },
    pepperoni_pizza: {
        title: 'Pepperoni Pizza',
        image: 'images/pizza2.png',
        allergens: 'allergens: 1, 7',
        calories: '520 kcal',
        description: 'Classic pizza topped with spicy pepperoni and melted cheese.',
        price: '90 dkk',
        category: 'dinner'
    },
    margherita: {
        title: 'Margherita',
        image: 'images/pizza3.png',
        allergens: 'allergens: 1, 7',
        calories: '420 kcal',
        description: 'Classic Italian pizza with fresh tomato, mozzarella, and basil.',
        price: '80 dkk',
        category: 'dinner'
    },
    pizza_zyara: {
        title: 'Pizza Zyara',
        image: 'images/pizza_zyara1.png',
        allergens: 'allergens: 1, 7',
        calories: '650 kcal',
        description: 'A hearty Zyara creation loaded with meat and flavor.',
        price: '100 dkk',
        category: 'dinner'
    },
    ocean_pizza: {
        title: 'Ocean Pizza',
        image: 'images/ocean_pizza1.png',
        allergens: 'allergens: 1, 4, 7',
        calories: '520 kcal',
        description: 'Seafood lovers\' favorite, topped with tuna, shrimp, clams, and onion.',
        price: '100 dkk',
        category: 'dinner'
    },
    hawaii: {
        title: 'Hawaii',
        image: 'images/hawaii1.png',
        allergens: 'allergens: 1, 7',
        calories: '480 kcal',
        description: 'A sweet and savory classic topped with ham and pineapple.',
        price: '90 dkk',
        category: 'dinner'
    },
    
    // CHILDREN MENU
    pasta: {
        title: 'Pasta',
        image: 'images/pasta1.png',
        allergens: 'allergens: 1, 7',
        calories: '450 kcal',
        description: 'Creamy penne pasta with tomato, cheese, and tender chicken.',
        price: '100 dkk',
        category: 'dinner'
    },
    pommes: {
        title: 'Pommes',
        image: 'images/pommes1.png',
        allergens: 'allergens: none',
        calories: '250 kcal',
        description: 'Crispy golden French fries.',
        price: '50 dkk',
        category: 'chicken'
    },
    polsemix: {
        title: 'Pølsemix',
        image: 'images/polsemix1.png',
        allergens: 'allergens: 1, 3',
        calories: '420 kcal',
        description: 'A Danish classic with sliced sausages, fries, and remoulade.',
        price: '70 dkk',
        category: 'chicken'
    },
    kebab_mix: {
        title: 'Kebab Mix',
        image: 'images/kebab_mix1.png',
        allergens: 'allergens: 1',
        calories: '380 kcal',
        description: 'Tasty mix of kebab meat served with fries, fresh salad, and dressing.',
        price: '70 dkk',
        category: 'beef'
    },
    chicken_nuggets: {
        title: 'Chicken Nuggets',
        image: 'images/nuggets1.png',
        allergens: 'allergens: 1',
        calories: '380 kcal',
        description: 'Crispy chicken nuggets served with golden French fries.',
        price: '70 dkk',
        category: 'chicken'
    }
};

// Shopping cart array to store items
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentProductId = null;
let currentCategory = 'all';

function openModal(productId) {
    const product = products[productId];
    const modal = document.getElementById('productModal');
    
    currentProductId = productId;
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalAllergens').textContent = product.allergens + ' • ' + product.calories;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = product.price;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
    currentProductId = null;
}

// Add item to cart
function addToCart() {
    if (!currentProductId) return;
    
    const product = products[currentProductId];
    const existingItem = cart.find(item => item.id === currentProductId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: currentProductId,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Close modal and show confirmation
    closeModal();
    showAddToCartConfirmation();
    updateCartCount();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Reload basket page if we're on it
    if (window.location.pathname.includes('basket.html')) {
        loadBasketItems();
    }
    updateCartCount();
}

// Update quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            if (window.location.pathname.includes('basket.html')) {
                loadBasketItems();
            }
        }
    }
}

// Show confirmation when item is added to cart
function showAddToCartConfirmation() {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.textContent = 'Item added to cart!';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--persian-green);
        color: var(--warm-white);
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 2000;
        font-family: 'Bentham';
        font-size: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.querySelector('.fa-cart-shopping');
    
    if (!cartIcon) return;
    
    // Remove existing badge if any
    const existingBadge = document.querySelector('.cart-badge');
    if (existingBadge) {
        existingBadge.remove();
    }
    
    // Add badge if there are items
    if (totalItems > 0) {
        const badge = document.createElement('span');
        badge.className = 'cart-badge';
        badge.textContent = totalItems;
        badge.style.cssText = `
            position: absolute;
            top: -8px;
            right: -8px;
            background: #0B413B;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
        `;
        
        cartIcon.parentElement.style.position = 'relative';
        cartIcon.parentElement.appendChild(badge);
    }
}

// Load basket items (for basket.html page)
function loadBasketItems() {
    const container = document.querySelector('.single-row-container');
    if (!container) return; // Not on basket page
    
    container.innerHTML = '';
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart-message">Your cart is empty<br><a href="index.html" style="color: var(--persian-green); text-decoration: none;">← Continue shopping</a></div>';
        updateTotal();
        return;
    }
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'single-row-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="single-column">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
            </div>
            <div class="trash-container" onclick="removeFromCart('${item.id}')">
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
        container.appendChild(itemElement);
    });
    
    updateTotal();
}

// Update total price in basket
function updateTotal() {
    const totalElement = document.querySelector('.total-price');
    if (!totalElement) return;
    
    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace(' dkk', ''));
        return sum + (price * item.quantity);
    }, 0);
    
    totalElement.textContent = `${total} dkk`;
}

// Category filtering functionality
function filterProducts(category) {
    currentCategory = category;
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Update active category visual indicator
    document.querySelectorAll('.category-selector p').forEach((p, index) => {
        const focusIcon = document.getElementById(`focus-${index}`);
        if (focusIcon) {
            focusIcon.style.display = 'none';
        }
    });
    
    // Show focus icon for selected category
    const categoryIndex = ['all', 'rolls', 'soup', 'dinner', 'chicken', 'beef'].indexOf(category);
    if (categoryIndex !== -1) {
        const focusIcon = document.getElementById(`focus-${categoryIndex}`);
        if (focusIcon) {
            focusIcon.style.display = 'inline';
        }
    }
    
    // Filter menu items
    menuItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'flex';
        } else {
            const itemCategory = item.classList.contains(`category-${category}`);
            item.style.display = itemCategory ? 'flex' : 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Add event listener to modal add button
    const addButton = document.querySelector('.modal-add-btn');
    if (addButton) {
        addButton.addEventListener('click', addToCart);
    }
    
    // Load basket items if on basket page
    if (window.location.pathname.includes('basket.html')) {
        loadBasketItems();
    }
    
    // Update cart count on page load
    updateCartCount();
    
    // Handle escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add category filter event listeners
    const categoryElements = document.querySelectorAll('.category-selector p');
    categoryElements.forEach((element, index) => {
        const categories = ['all', 'rolls', 'soup', 'dinner', 'chicken', 'beef'];
        element.addEventListener('click', () => {
            filterProducts(categories[index]);
        });
    });
    
    // Initialize with all products shown
    filterProducts('all');
});
