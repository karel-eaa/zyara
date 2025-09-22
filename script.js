const products = {
    ezma: {
        title: 'The Famous Ezma',
        image: 'images/product1.png',
        allergens: 'allergens: 2, 3, 6',
        calories: '450 kcal',
        description: 'Our most celebrated dish - a savory, aromatic blend of traditional flavors and tender ingredients, slow-cooked to perfection with authentic spices. Perfect combination of tradition and innovation, bringing you an unforgettable culinary experience.',
        price: '85 dkk'
    },
    lentil: {
        title: 'Our Lentil Soup',
        image: 'images/product2.png',
        allergens: 'allergens: 1, 6',
        calories: '320 kcal',
        description: 'A hearty and nutritious soup made with premium lentils, fresh vegetables, and aromatic spices. Slow-simmered to perfection for a rich, comforting taste.',
        price: '85 dkk'
    },
    lamb: {
        title: 'Grilled Lamb Roll',
        image: 'images/product3.png',
        allergens: 'allergens: 1, 2, 6',
        calories: '520 kcal',
        description: 'Tender grilled lamb wrapped in fresh bread with crisp vegetables and our signature sauce. A perfect combination of flavors and textures.',
        price: '85 dkk'
    },
    feta: {
        title: 'Fried Feta Rolls',
        image: 'images/product4.png',
        allergens: 'allergens: 1, 2, 7',
        calories: '380 kcal',
        description: 'Crispy golden rolls filled with creamy feta cheese and herbs. Served hot with our special dipping sauce for an irresistible taste experience.',
        price: '85 dkk'
    }
};

function openModal(productId) {
    const product = products[productId];
    const modal = document.getElementById('productModal');
    
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalAllergens').textContent = product.allergens + ' • ' + product.calories;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = product.price;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
});
        if (focusIcon) {
            focusIcon.style.display = 'none';
        }
    });
    
    // Show focus icon for selected category
    const categoryIndex = ['all', 'rolls', 'soup', 'dinner', 'chicken', 'beef', 'vegan', 'lactose-free', 'gluten-free', 'spicy', 'low-calorie'].indexOf(category);
    if (categoryIndex !== -1) {
        const focusIcon = document.getElementById(`focus-${categoryIndex}`);
        if (focusIcon) {
            focusIcon.style.display = 'inline';
        }
    }
    
    // Filter menu items based on category
    menuItems.forEach(item => {
        if (category === 'all') {
            item.style.display = 'flex';
        } else if (category === 'vegan') {
            // Show items that are vegan (no dairy, no meat)
            const productId = item.getAttribute('onclick')?.match(/openModal\('(.+?)'\)/)?.[1];
            const product = products[productId];
            const isVegan = product && !product.allergens.includes('7') && // no dairy
                           ['hummus', 'fattoush', 'falafel', 'french_fries', 'grilled_vegetables', 'falafel_menu', 'wara'].includes(productId);
            item.style.display = isVegan ? 'flex' : 'none';
        } else if (category === 'lactose-free') {
            // Show items without dairy (allergen 7)
            const productId = item.getAttribute('onclick')?.match(/openModal\('(.+?)'\)/)?.[1];
            const product = products[productId];
            const isLactoseFree = product && !product.allergens.includes('7');
            item.style.display = isLactoseFree ? 'flex' : 'none';
        } else if (category === 'gluten-free') {
            // Show items without gluten (allergen 1)
            const productId = item.getAttribute('onclick')?.match(/openModal\('(.+?)'\)/)?.[1];
            const product = products[productId];
            const isGlutenFree = product && !product.allergens.includes('1');
            item.style.display = isGlutenFree ? 'flex' : 'none';
        } else if (category === 'spicy') {
            // Show spicy items
            const productId = item.getAttribute('onclick')?.match(/openModal\('(.+?)'\)/)?.[1];
            const isSpicy = ['ezma', 'kebab_hot', 'beyti_kebab'].includes(productId);
            item.style.display = isSpicy ? 'flex' : 'none';
        } else if (category === 'low-calorie') {
            // Show items under 300 calories
            const productId = item.getAttribute('onclick')?.match(/openModal\('(.+?)'\)/)?.[1];
            const product = products[productId];
            const calories = product ? parseInt(product.calories.replace(' kcal', '')) : 0;
            const isLowCalorie = calories > 0 && calories < 300;
            item.style.display = isLowCalorie ? 'flex' : 'none';
        } else {
            // Original category filtering
            const itemCategory = item.classList.contains(`category-${category}`);
            item.style.display = itemCategory ? 'flex' : 'none';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Add category filter event listeners
    const categoryElements = document.querySelectorAll('.category-selector p');
    categoryElements.forEach((element, index) => {
        const categories = ['all', 'rolls', 'soup', 'dinner', 'chicken', 'beef', 'vegan', 'lactose-free', 'gluten-free', 'spicy', 'low-calorie'];
        element.addEventListener('click', () => {
            filterProducts(categories[index]);
        });
    });
});
