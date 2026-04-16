(() => {
    "use strict";

    const products = [
        { id: 1, name: "Nike Stylish Red Running Sneakers For Men Active Wear", category: "mens", price: 1299, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300" },
        { id: 2, name: "Premium Chronograph Leather Watch for Men", category: "mens", price: 899, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
        { id: 3, name: "Luxury Eau De Parfum Long Lasting Spray 100ml", category: "womens", price: 450, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300" },
        { id: 4, name: "UV Protection Aviator Sunglasses Unisex", category: "womens", price: 299, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300" },
        { id: 5, name: "Cotton Regular Fit T-Shirt Solid Navy Blue", category: "mens", price: 349, image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=300" },
        { id: 6, name: "Classic Leather Ankle Boots For Men", category: "mens", price: 1499, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300" },
        { id: 7, name: "Smartphone Back Cover Transparent Bumper Case", category: "kids", price: 199, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300" },
        { id: 8, name: "Bluetooth Wireless Earbuds Noise Cancelling", category: "kids", price: 899, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300" },
        { id: 9, name: "Laptop Backpack with USB Charging Port", category: "kids", price: 699, image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=300" },
        { id: 10, name: "Women's Casual A-Line Dress Floral Print", category: "womens", price: 549, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300" },
        { id: 11, name: "Fashionable Winter Trench Coat for Women", category: "womens", price: 1999, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300" },
        { id: 12, name: "Nike Essential White Running Shoes", category: "kids", price: 2499, image: "https://n4.sdlcdn.com/imgs/a/u/s/Nike-White-Sports-Shoes-SDL732498052-1-0d60a.jpg" }
    ];
    let searchTerm = "";
    let visibleProductsCount = 6;
    const VIEW_MORE_STEP = 6;
    const CART_KEY = "snapdeal_cart";
    let cart = [];

    function initMegaMenu() {
        const navItems = document.querySelectorAll(".nav-item");
        navItems.forEach((item) => {
            const menu = item.querySelector(".mega-menu");
            if (!menu) {
                return;
            }
            item.addEventListener("mouseenter", () => {
                menu.style.display = "grid";
            });
            item.addEventListener("mouseleave", () => {
                menu.style.display = "none";
            });
        });
    }

    function initCarousel() {
        const slides = document.getElementById("slides");
        const dots = document.querySelectorAll(".dot");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const carousel = document.getElementById("carousel");

        if (!slides || !dots.length || !prevBtn || !nextBtn || !carousel) {
            return;
        }

        let currentIndex = 0;
        const totalSlides = dots.length;
        let autoSlideInterval;

        function goToSlide(index) {
            if (index < 0) {
                currentIndex = totalSlides - 1;
            } else if (index >= totalSlides) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }

            slides.style.transform = `translateX(-${currentIndex * 25}%)`;
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === currentIndex);
            });
        }

        function startTimer() {
            autoSlideInterval = setInterval(() => goToSlide(currentIndex + 1), 3000);
        }

        function resetTimer() {
            clearInterval(autoSlideInterval);
            startTimer();
        }

        prevBtn.addEventListener("click", () => {
            goToSlide(currentIndex - 1);
            resetTimer();
        });

        nextBtn.addEventListener("click", () => {
            goToSlide(currentIndex + 1);
            resetTimer();
        });

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                goToSlide(index);
                resetTimer();
            });
        });

        carousel.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
        carousel.addEventListener("mouseleave", startTimer);

        startTimer();
    }

    function getFilteredProducts() {
        const term = searchTerm.trim().toLowerCase();
        if (!term) {
            return products;
        }

        return products.filter((product) => {
            const name = product.name.toLowerCase();
            const category = product.category.toLowerCase();
            const isCategorySearch = term === "mens" || term === "kids" || term === "womens";

            if (isCategorySearch) {
                return category === term;
            }

            return name.includes(term) || category.includes(term);
        });
    }

    function renderProducts() {
        const grid = document.getElementById("products-grid");
        if (!grid) {
            return;
        }

        const filteredProducts = getFilteredProducts();
        if (!filteredProducts.length) {
            grid.innerHTML = `<div class="card"><p class="product-name">No products found.</p></div>`;
            toggleViewMoreButton(false);
            return;
        }

        const productsToShow = filteredProducts.slice(0, visibleProductsCount);

        const markup = productsToShow
            .map((product) => {
                return `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}">
                    <p class="product-name">${product.name}</p>
                    <div class="rating">⭐ ${product.category}</div>
                    <div class="price-row" style="justify-content: flex-start; margin-top: auto;">
                        <span class="current-price">₹${product.price}</span>
                    </div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                </div>
                `;
            })
            .join("");

        grid.innerHTML = markup;
        toggleViewMoreButton(filteredProducts.length > productsToShow.length);
    }

    function toggleViewMoreButton(show) {
        const viewMoreBtn = document.querySelector(".view-more");
        if (!viewMoreBtn) {
            return;
        }
        viewMoreBtn.style.display = show ? "block" : "none";
    }

    function initViewMore() {
        const viewMoreBtn = document.querySelector(".view-more");
        if (!viewMoreBtn) {
            return;
        }

        viewMoreBtn.addEventListener("click", (event) => {
            event.preventDefault();
            visibleProductsCount += VIEW_MORE_STEP;
            renderProducts();
        });
    }

    function loadCart() {
        try {
            const stored = localStorage.getItem(CART_KEY);
            cart = stored ? JSON.parse(stored) : [];
        } catch (_error) {
            cart = [];
        }
    }

    function saveCart() {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }

    function getCartTotal() {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }

    function renderCart() {
        const cartItemsEl = document.getElementById("cart-items");
        const cartTotalEl = document.getElementById("cart-total");
        const cartCountBadge = document.getElementById("cart-count-badge");
        if (!cartItemsEl || !cartTotalEl) {
            return;
        }

        if (cartCountBadge) {
            cartCountBadge.textContent = String(cart.length);
        }

        if (!cart.length) {
            cartItemsEl.innerHTML = `<div class="cart-item"><p class="cart-item-name">Your cart is empty.</p></div>`;
            cartTotalEl.textContent = "₹0";
            return;
        }

        const markup = cart.map((item) => {
            return `
            <div class="cart-item">
                <p class="cart-item-name">${item.name}</p>
                <div class="cart-item-row">
                    <span>₹${item.price}</span>
                    <button class="remove-cart-btn" data-product-id="${item.id}">Remove</button>
                </div>
            </div>
            `;
        }).join("");

        cartItemsEl.innerHTML = markup;
        cartTotalEl.textContent = `₹${getCartTotal()}`;
    }

    function addToCart(productId) {
        const product = products.find((item) => item.id === productId);
        if (!product) {
            return;
        }
        cart.push(product);
        saveCart();
        renderCart();
    }

    function removeFromCart(productId) {
        const itemIndex = cart.findIndex((item) => item.id === productId);
        if (itemIndex === -1) {
            return;
        }
        cart.splice(itemIndex, 1);
        saveCart();
        renderCart();
    }

    function initCart() {
        const cartModal = document.getElementById("cart-modal");
        const cartTrigger = document.getElementById("cart-trigger");
        const cartCloseBtn = document.getElementById("cart-close-btn");
        const cartItemsEl = document.getElementById("cart-items");
        const grid = document.getElementById("products-grid");

        if (!cartModal || !cartTrigger || !cartCloseBtn || !cartItemsEl || !grid) {
            return;
        }

        loadCart();
        renderCart();

        cartTrigger.addEventListener("click", () => {
            cartModal.classList.add("open");
        });

        cartTrigger.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                cartModal.classList.add("open");
            }
        });

        cartCloseBtn.addEventListener("click", () => {
            cartModal.classList.remove("open");
        });

        cartModal.addEventListener("click", (event) => {
            if (event.target === cartModal) {
                cartModal.classList.remove("open");
            }
        });

        grid.addEventListener("click", (event) => {
            const button = event.target.closest(".add-to-cart-btn");
            if (!button) {
                return;
            }
            const productId = Number(button.dataset.productId);
            addToCart(productId);
        });

        cartItemsEl.addEventListener("click", (event) => {
            const button = event.target.closest(".remove-cart-btn");
            if (!button) {
                return;
            }
            const productId = Number(button.dataset.productId);
            removeFromCart(productId);
        });
    }

    function initSearch() {
        const searchInput = document.querySelector(".search-box input");
        if (!searchInput) {
            return;
        }

        searchInput.addEventListener("input", (event) => {
            searchTerm = event.target.value || "";
            visibleProductsCount = 6;
            renderProducts();
        });
    }

    initMegaMenu();
    initCarousel();
    initSearch();
    initViewMore();
    renderProducts();
    initCart();
})();
