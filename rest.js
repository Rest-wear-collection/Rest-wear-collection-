// Sample product data
const products = [
    {
        id: 1,
        name: "Televisheni ya Hisense 65-inch",
        category: "electronics",
        price: "1,500,000 TZS",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Televisheni ya kisasa ya Hisense na ubora wa hd"
    },
    {
        id: 1,
        name: "Pressure cooker",
        category: "kitchen",
        price: "150,000 TZS",
        image: "cooker.png",
        description: "njoo ujipatie pressure cooker za sufuria 2"
    },
    {
        id: 2,
        name: "Friji ya Hisense",
        category: "electronics",
        price: "880,000 TZS",
        image: "fridge.jpg",
        description: "Friji kubwa ya aina ya top freezer"
    },
    {
        id: 3,
        name: "mapoti",
        category: "kitchen",
        price: "95,000 TZS",
        image: "poti.png",
        description: "utapata full set ya mapoti na hayapozi kabisa"
    },
    {
        id: 4,
        name: "Televisheni ya Hisense 58-inch",
        category: "electronics",
        price: "1,100,000 TZS",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "TV ya kisasa na Android TV"
    },
    {
        id: 5,
        name: "Jinzi Kali za kiume",
        category: "clothing",
        price: "25,000 TZS",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Jinzi bora ya kiume aina ya slim fit"
    },
    {
        id: 6,
        name: "chupi za wanawake",
        category: "clothing",
        price: "13,000 TZS (chupi 3)",
        image: "chupi.png",
        description: "chupi za wanawake za aina mbalimbali"
    },
    {
        id: 7,
        name: "Jiko la Umeme",
        category: "kitchen",
        price: "280,000 TZS",
        image: "jiko.jpg",
        description: "Jiko la umeme la kasi na la kuokoa muda"
    },
    {
        id: 8,
        name: "boxer",
        category: "clothing",
        price: "12,000 TZS ( boxer 3)",
        image: "boxer.png",
        description: "Kalibu ujipatie boxer Kali za aina mbalimbali"
    },
    {
        id: 9,
        name: "shoes",
        category: "clothing",
        price: "55,000-120,000 TZS",
        image: "shoes.jpg",
        description: "viatu vizuri vya aina zote"
    },
    {
        id: 10,
        name: "Blender",
        category: "kitchen",
        price: "85,000-110,000 TZS",
        image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        description: "Blender za nguvu kwa matumizi ya nyumbani"
    },
    {
        id: 11,
        name: "washing machine 12kg",
        category: "electronics",
        price: "780,000 TZS",
        image: "wash.jpg",
        description: "njoo ujipatie washing machine yako ya kilo 12"
    },
    {
        id: 11,
        name: "t-shirts",
        category: "clothing",
        price: "22,000 TZS",
        image: "tshirts.jpg",
        description: "njoo ujipatie tshirts Kali za mtoko za aina mbalimbali "
    },
    {
        id: 11,
        name: "caps",
        category: "clothing",
        price: "15,000 TZS",
        image: "caps.jpg",
        description: "kofia nzuli na za kuvutia njoo ujipatie"
    },
    {
        id: 11,
        name: "mashati",
        category: "clothing",
        price: "22,000 TZS",
        image: "mashati.png",
        description: "mashati makali Kwa lika lolote njoo ujipatie"
    },
    {
        id: 11,
        name: "mikanda",
        category: "clothing",
        price: "22,000 TZS",
        image: "mikanda.jpg",
        description: "Kalibu ujipatie mikanda ya viwango vya juu ya aina yote"
    },
    {
        id: 11,
        name: "subwoofer",
        category: "electronics",
        price: "170,000-380,000 TZS",
        image: "subwoofer.jpg",
        description: "subwoofer za aina zote zinapatikana kwetu"
    },
    {
        id: 12,
        name: "Microwave Oven",
        category: "kitchen",
        price: "680,000 TZS",
        image: "oven.jpg",
        description: "Oven ya microwave za aina mbalimbali za kupikia"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    displayProducts('all');
    setupEventListeners();
});

// Display products based on category
function displayProducts(category) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">Hakuna bidhaa za aina hii kwa sasa.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter products
            const filter = this.getAttribute('data-filter');
            displayProducts(filter);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Here you would normally send the form data to a server
                alert('Asante ' + name + ' kwa ujumbe wako. Tutawasiliana nawe hivi karibuni.');
                contactForm.reset();
            } else {
                alert('Tafadhali jaza sehemu zote za muhimu.');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navMenu.classList.remove('show');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize when the page loads
window.onload = function() {
    // Any additional initialization can go here
    console.log("Website imeanza kazi vizuri!");
};