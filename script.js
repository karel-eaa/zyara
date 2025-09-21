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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
});
