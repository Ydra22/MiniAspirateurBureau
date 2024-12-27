let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart() {
    // Le produit à ajouter
    const product = {
        name: "Mini Aspirateur de Bureau",
        price: 29.99,
        quantity: 1
    };

    // Ajouter le produit au panier
    cart.push(product);

    // Sauvegarder le panier dans le localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Alerta pour confirmation
    alert('Produit ajouté au panier !');
}
