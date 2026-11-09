

let price_sort_state = 0;
let name_sort_state = 0;
let current_products = products.slice();
let cart = JSON.parse(localStorage.getItem("cart")) || [];


const catalogList = document.querySelector(".catalog-list");
const category_filter_list = document.querySelector(".category-filter-list");
const country_filter_list = document.querySelector(".country-filter-list");

const cart_list = document.querySelector(".cart-list");
const cart_total = document.querySelector(".cart-total");

const order_form = document.querySelector(".order-form");
const order_message = document.querySelector(".order-message");

const cart_button = document.querySelector(".cart-button");
const order = document.querySelector(".order");

function render_products(){
    catalogList.innerHTML = "";

    current_products.forEach(function(product){
        let card = document.createElement("article");

        card.className = "catalog-item";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">

                <div class="catalog-item-info">
                    <p class="catalog-item-category">${product.category}</p>
                    <h3 class="catalog-item-title">${product.title}</h3>
                    <p class="catalog-item-country">${product.country}</p>
                    <p class="catalog-item-price">${product.price.toLocaleString("ru-RU")} $</p>
                    <p class="catalog-item-description">${product.description}</p>

                <button type="button" class="catalog-item-add-to-cart" data-product-id="${product.id}" >В корзину</button>

            </div>
        `;

        catalogList.appendChild(card)
    })
}

function save_cart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function sort_price(){
    price_sort_state = (price_sort_state + 1) % 3;
    name_sort_state = 0;

    switch (price_sort_state) {
        case 0:
            current_products.sort(function (a, b) {
                return a.id - b.id;
            });
            price_sort_button.textContent = "Цена ↕";
            break;
        case 1:
            current_products.sort(function (a, b) {
                return a.price - b.price;
            });
            price_sort_button.textContent = "Цена ↑";
            break;
        case 2:
            current_products.sort(function (a, b) {
                return b.price - a.price;
            });
            price_sort_button.textContent = "Цена ↓";
            break;
    }
    render_products();


}

function sort_name() {
    name_sort_state = (name_sort_state + 1) % 3;
    price_sort_state = 0;

    switch (name_sort_state) {
        case 0:
            current_products.sort(function (a, b) {
                return a.id - b.id;
            });
            name_sort_button.textContent = "Название ↕";
            break;
        case 1:
            current_products.sort(function (a, b) {
                return a.title.localeCompare(b.title)
            });
            name_sort_button.textContent = "Название А-Я";
            break;
        case 2:
            current_products.sort(function (a, b) {
                return b.title.localeCompare(a.title)
            });
            name_sort_button.textContent = "Название Я-А";
            break;
    }
    render_products();
}

function render_filters() {
    let categories = [];
    let countries = [];

    products.forEach(function(product) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });
    products.forEach(function(product) {
        if (!countries.includes(product.country)) {
            countries.push(product.country);
        }
    });


    categories.forEach(function(category) {
        let label = document.createElement("label");

        label.innerHTML = `
            <input type="checkbox" class="category-checkbox" value="${category}">
            ${category}
        `;

        category_filter_list.appendChild(label);
    });
    countries.forEach(function(country) {
        let label = document.createElement("label");
        label.innerHTML = `
            <input type="checkbox" class="country-checkbox" value="${country}">
            ${country}
        `;
        country_filter_list.appendChild(label);
    });
}

function apply_filters() {
    let checked_categories = [];
    let checked_country = [];

    filter_checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            if (checkbox.classList.contains("category-checkbox")) {
                checked_categories.push(checkbox.value);
            }
            if (checkbox.classList.contains("country-checkbox")) {
                checked_country.push(checkbox.value);
            }
        }
    });

    let new_products = products.filter(function (product) {
        let category_match =
            checked_categories.length === 0 ||
            checked_categories.includes(product.category);
        let country_match =
            checked_country.length === 0 ||
            checked_country.includes(product.country);

        return category_match && country_match;
    });
    current_products = new_products;
    render_products();
}

function render_cart() {
    cart_list.innerHTML = "";

    let total = 0;

    cart.forEach(function (item) {
        let product = products.find(function (product) {
            return product.id === item.product_id;
        });

        total += product.price * item.quantity;

        let cart_item = document.createElement("div");

        cart_item.className = "cart-item";

        cart_item.innerHTML = `
            <p class="cart-item-title">${product.title}</p>
            <p class="cart-item-price">${product.price.toLocaleString("ru-RU")} $</p>
            <div class="cart-item-quantity">
                <button type="button" class="remove-item-button" data-product-id="${product.id}">−</button>
                <input type="number" class="input-cart-quantity" data-product-id="${product.id}" value="${item.quantity}" min="1" step="1">
                <button type="button" class="add-item-button" data-product-id="${product.id}">+</button>
            </div>
            <p class="cart-item-sum">
                Сумма: ${(product.price * item.quantity).toLocaleString("ru-RU")} $
            </p>
        `;

        cart_list.appendChild(cart_item);
    });

    cart_total.innerHTML = `
        <p>Итого: ${total.toLocaleString("ru-RU")} $</p>
    `;

}

render_filters();
const filter_checkboxes = document.querySelectorAll(".catalog-control-filters input[type='checkbox']")

const price_sort_button = document.querySelector("#sort-price");
const name_sort_button = document.querySelector("#sort-title");

price_sort_button.addEventListener("click", sort_price);
name_sort_button.addEventListener("click", sort_name);

filter_checkboxes.forEach(function (checkbox){
    checkbox.addEventListener("change", apply_filters);
});

catalogList.addEventListener("click", function (event) {
    if (event.target.classList.contains("catalog-item-add-to-cart")){
        let product_id = Number(event.target.dataset.productId);

        let cart_product = cart.find(function(item) {
            return item.product_id === product_id;
        });

        if (cart_product) {
            cart_product.quantity += 1;
        }
        else {
            cart.push({
                product_id: product_id,
                quantity: 1
            });
        }
        save_cart()
        render_cart();
    }
});

cart_list.addEventListener("click", function (event){
    if (event.target.classList.contains("add-item-button")){
        let product_id = Number(event.target.dataset.productId);

        let cart_product = cart.find(function(item) {
            return item.product_id === product_id;
        });

        if (cart_product) {
            cart_product.quantity += 1;
        }
        save_cart()
        render_cart();
    }
    else if (event.target.classList.contains("remove-item-button")) {
        let product_id = Number(event.target.dataset.productId);

        let cart_product = cart.find(function(item) {
            return item.product_id === product_id;
        });

        if (cart_product.quantity > 1) {
            cart_product.quantity -= 1;
        }
        else {
            cart = cart.filter(function(item) {
                return item.product_id !== product_id;
            });
        }
        save_cart()
        render_cart();
    }
});

cart_list.addEventListener("change", function (event){
    if (event.target.classList.contains("input-cart-quantity")) {

        let product_id = Number(event.target.dataset.productId);
        let cart_product = cart.find(function(item) {
            return item.product_id === product_id;
        });

        let new_quantity = Number(event.target.value);

        if (new_quantity > 0 && Number.isInteger(new_quantity)) {
            cart_product.quantity = new_quantity;
        }
        else if (new_quantity <= 0) {
            cart = cart.filter(function(item) {
                return item.product_id !== product_id;
            });
        }
        else {
            event.target.value = cart_product.quantity;
        }
        save_cart()
        render_cart();

    }
});

order_form.addEventListener("submit", function(event){
    event.preventDefault();
    if(cart.length > 0){
        order_message.textContent = "Заказ создан";
        cart = [];
        save_cart();
        render_cart();
        order_form.reset();
    }
    else {
        order_message.textContent = "Корзина пуста";
    }
});

cart_button.addEventListener("click", function () {
    order.style.display = "flex";
    cart_button.style.display = "none";
});

render_cart();
render_products(products);
