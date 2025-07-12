// List of products
const products = [
    {
        name: "Peace Lily",
        type: "indoor",
        price: 25,
        img: "Peace Lily.jpeg"
    },
    {
        name: "Basil Plant",
        type: "herbs",
        price: 12,
        img: "Basil Plant.jpeg"
    },
    {
        name: "Aloe Vera",
        type: "succulent",
        price: 18,
        img: "Aloe Vera.jpeg"
    },
    {
        name: "Ficus Tree",
        type: "outdoor",
        price: 30,
        img: "Ficus Tree.jpeg"
    },
    {
        name: "Snake Plant",
        type: "indoor",
        price: 22,
        img: "Snake Plant.jpeg"
    },
];

// Get DOM elements
const productGrid = document.getElementById('productGrid');
const categoryFilter = document.getElementById('categoryFilter');
const cartCounter = document.getElementById('cartCounter');
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');

// Function to display products
function displayProducts(category = 'all') {
    // Clear the grid first
    productGrid.innerHTML = '';

    // Filter products based on category
    const filteredProducts = category === 'all' ? products : products.filter(p => p.type === category);

    // Create product cards for each filtered product
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });
}

// Function to add item to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart counter
    cartCounter.textContent = cart.length;
    alert(`${name} added to cart!`);
}

// Function to handle category filter change
categoryFilter.addEventListener('change', (event) => {
    displayProducts(event.target.value); // Filter products by the selected category
});

// Handle newsletter subscription
newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for subscribing with the email: ${email}`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
});

// Initial display of all products
displayProducts();
