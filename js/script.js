const products = [
    {
        id: 1,
        title: "Т-72Б3М",
        category: "Танки",
        country: "РФ",
        price: 3000000,
        image: "images/t-72b3m.png",
        description: "Модернизация танка Т-72Б, представленная в 2016 году. Производится Уралвагонзаводом в Нижнем Тагиле. Основной боевой танк для борьбы с бронетехникой и огневой поддержки сухопутных подразделений."
    },
    {
        id: 2,
        title: "Т-90М",
        category: "Танки",
        country: "РФ",
        price: 4500000,
        image: "images/t-90m.png",
        description: "Современная модификация семейства Т-90, представленная в 2017 году. Производится Уралвагонзаводом в Нижнем Тагиле. Основной боевой танк с обновлённой башней, защитой и системой управления огнём."
    },
    {
        id: 3,
        title: "M1A1 Abrams",
        category: "Танки",
        country: "США",
        price: 10000000,
        image: "images/m1a1-abrams.png",
        description: "Модификация американского основного боевого танка M1 Abrams, принятая на вооружение в 1985 году. Разработан Chrysler Defense, производство семейства продолжила General Dynamics Land Systems в США. Предназначен для бронетанкового боя и поддержки сухопутных войск."
    },
    {
        id: 4,
        title: "Leopard 2",
        category: "Танки",
        country: "Германия",
        price: 15000000,
        image: "images/leopard2.png",
        description: "Немецкий основной боевой танк, разработанный компанией Krauss-Maffei и принятый на вооружение в 1979 году. Современные версии выпускаются KNDS Deutschland в Мюнхене. Предназначен для борьбы с бронетехникой и действий в составе механизированных подразделений."
    },
    {
        id: 5,
        title: "БМП-3М",
        category: "Бронетехника",
        country: "РФ",
        price: 1800000,
        image: "images/bmp-3m.png",
        description: "Модернизированная версия БМП-3, базовая машина которой была принята на вооружение в 1987 году. Производится Курганмашзаводом в Кургане. Боевая машина пехоты предназначена для перевозки и огневой поддержки мотострелковых подразделений."
    },
    {
        id: 6,
        title: "M2A2 Bradley",
        category: "Бронетехника",
        country: "США",
        price: 3200000,
        image: "images/m2a2-bradly.png",
        description: "Модернизация американской БМП M2 Bradley, появившаяся в конце 1980-х годов. Семейство разработано FMC, дальнейшее производство связано с BAE Systems в США. Предназначена для перевозки пехоты, разведки и огневой поддержки механизированных частей."
    },
    {
        id: 7,
        title: "CV90",
        category: "Бронетехника",
        country: "Швеция",
        price: 9000000,
        image: "images/cv90.png",
        description: "Шведское семейство боевых машин пехоты, разработанное в 1980-х годах и принятое на вооружение в 1990-х. Производится BAE Systems Hägglunds в Эрншёльдсвике, Швеция. Используется для перевозки пехоты, разведки и непосредственной огневой поддержки."
    },
    {
        id: 8,
        title: "Patria AMV",
        category: "Бронетехника",
        country: "Финляндия",
        price: 2000000,
        image: "images/Patria AMV.png",
        description: "Финская многоцелевая колёсная бронемашина, разработанная в начале 2000-х годов. Производится компанией Patria в Финляндии. Модульная платформа применяется как бронетранспортёр, командная, медицинская и боевая машина."
    },
    {
        id: 9,
        title: "КамАЗ-63968 Тайфун-К",
        category: "Бронетехника",
        country: "РФ",
        price: 1000000,
        image: "images/kamaz-63968.png",
        description: "Российский защищённый бронеавтомобиль семейства «Тайфун», разработанный в начале 2010-х годов. Производится КАМАЗом в Набережных Челнах. Предназначен для защищённой перевозки личного состава и грузов."
    },
    {
        id: 10,
        title: "КамАЗ Тайфун-К",
        category: "Бронетехника",
        country: "РФ",
        price: 1000000,
        image: "images/kamaz-typhoon-k.png",
        description: "Представитель российского семейства защищённых автомобилей «Тайфун-К», созданного в 2010-х годах. Разработан и выпускается КАМАЗом в Набережных Челнах. Используется для перевозки личного состава и выполнения вспомогательных задач."
    },
    {
        id: 11,
        title: "International MaxxPro",
        category: "Бронетехника",
        country: "США",
        price: 600000,
        image: "images/maxxpro-international.png",
        description: "Американский бронеавтомобиль класса MRAP, разработанный в 2000-х годах и серийно выпускаемый с 2007 года. Производитель — International/Navistar Defense в США. Создан прежде всего для защищённой перевозки военнослужащих."
    },
    {
        id: 12,
        title: "Су-34",
        category: "Самолёты",
        country: "РФ",
        price: 36000000,
        image: "images/su-34.png",
        description: "Российский двухместный фронтовой бомбардировщик, первый полёт которого состоялся в 1990 году. Разработан ОКБ Сухого и серийно производится Новосибирским авиационным заводом. Предназначен для поражения наземных целей и выполнения ударных задач."
    },
    {
        id: 13,
        title: "Су-25ТМ",
        category: "Самолёты",
        country: "РФ",
        price: 11000000,
        image: "images/su-25tm.png",
        description: "Глубокая модернизация советского штурмовика Су-25, разработанная в конце 1980-х — 1990-х годах. Создана ОКБ Сухого на основе семейства Су-25. Самолёт предназначался для непосредственной поддержки сухопутных войск и поражения наземных целей."
    },
    {
        id: 14,
        title: "F-15E Strike Eagle",
        category: "Самолёты",
        country: "США",
        price: 80000000,
        image: "images/f15-strike-eagle.png",
        description: "Американский двухместный ударный истребитель, впервые поднявшийся в воздух в 1986 году. Разработан McDonnell Douglas, ныне программа поддерживается Boeing в США. Предназначен для ударов по наземным целям при сохранении возможностей воздушного боя."
    },
    {
        id: 15,
        title: "Dassault Rafale",
        category: "Самолёты",
        country: "Франция",
        price: 110000000,
        image: "images/dassault-rafale.png",
        description: "Французский многоцелевой истребитель, впервые поднявшийся в воздух в 1986 году и поступивший на вооружение в 2001 году. Производится Dassault Aviation во Франции. Предназначен для воздушного боя, разведки и нанесения ударов по наземным целям."
    },
    {
        id: 16,
        title: "Ка-52",
        category: "Вертолёты",
        country: "РФ",
        price: 16000000,
        image: "images/ka-52.png",
        description: "Российский разведывательно-ударный вертолёт, первый полёт которого состоялся в 1997 году. Разработан конструкторским бюро Камова и производится предприятием «Прогресс» в Арсеньеве. Предназначен для разведки, поддержки войск и поражения наземных целей."
    },
    {
        id: 17,
        title: "AH-64 Apache",
        category: "Вертолёты",
        country: "США",
        price: 52000000,
        image: "images/ah64-apache.png",
        description: "Американский ударный вертолёт, впервые поднявшийся в воздух в 1975 году и принятый на вооружение в 1980-х. Разработан Hughes Helicopters, современные версии производит Boeing в Месе, штат Аризона. Используется для разведки и огневой поддержки сухопутных войск."
    },
    {
        id: 18,
        title: "АК-74",
        category: "Пехотное оружие",
        country: "РФ",
        price: 1000,
        image: "images/ak-74.png",
        description: "Советский автомат калибра 5,45 мм, принятый на вооружение в 1974 году. Разработан коллективом Михаила Калашникова, серийное производство велось в Ижевске; сегодня семейство связано с концерном «Калашников». Индивидуальное автоматическое оружие пехоты."
    },
    {
        id: 19,
        title: "M4A1",
        category: "Пехотное оружие",
        country: "США",
        price: 1300,
        image: "images/m4a1.png",
        description: "Американский автоматический карабин семейства M4, созданного в 1980–1990-х годах. Первоначально производился Colt, позднее крупные контракты получила FN America. Компактное индивидуальное оружие для пехоты и других подразделений."
    },
    {
        id: 20,
        title: "Steyr AUG",
        category: "Пехотное оружие",
        country: "Австрия",
        price: 2200,
        image: "images/steyr-aug.png",
        description: "Австрийская автоматическая винтовка компоновки bullpup, разработанная в 1970-х и принятая на вооружение в 1977 году. Производится Steyr Arms в Австрии. Создана как компактное штатное индивидуальное оружие пехоты."
    },
    {
        id: 21,
        title: "FAMAS",
        category: "Пехотное оружие",
        country: "Франция",
        price: 2500,
        image: "images/famas.png",
        description: "Французская автоматическая винтовка компоновки bullpup, разработанная в 1960–1970-х годах и принятая на вооружение в 1978 году. Выпускалась государственной компанией GIAT на предприятии в Сент-Этьене. Долгое время являлась штатным оружием французской пехоты."
    },
    {
        id: 22,
        title: "FN FAL",
        category: "Пехотное оружие",
        country: "Бельгия",
        price: 2000,
        image: "images/fn-fal.png",
        description: "Бельгийская самозарядная и автоматическая винтовка, разработанная FN Herstal после Второй мировой войны и принятая рядом стран в 1950-х. Производилась в Эрстале, Бельгия, и по лицензии во многих странах. Использовалась как основная пехотная винтовка."
    },
    {
        id: 23,
        title: "FN MAG",
        category: "Пехотное оружие",
        country: "Бельгия",
        price: 7000,
        image: "images/fn-mag.png",
        description: "Бельгийский единый пулемёт, разработанный компанией FN Herstal в 1950-х годах. Производится в Бельгии и по лицензии в других странах. Предназначен для продолжительной огневой поддержки пехоты и установки на различные боевые платформы."
    },
    {
        id: 24,
        title: "FN Minimi",
        category: "Пехотное оружие",
        country: "Бельгия",
        price: 6000,
        image: "images/fn-minimi.png",
        description: "Бельгийский лёгкий пулемёт, разработанный FN Herstal в 1970-х годах и принятый на вооружение рядом стран в 1980-х. Производится в Эрстале и по лицензии за рубежом. Предназначен для мобильной огневой поддержки пехотного отделения."
    },
    {
        id: 25,
        title: "HK MG4",
        category: "Пехотное оружие",
        country: "Германия",
        price: 8000,
        image: "images/hk-mg4.png",
        description: "Немецкий лёгкий пулемёт, разработанный Heckler & Koch в конце 1990-х — начале 2000-х годов. Производится компанией H&K в Оберндорфе-на-Неккаре, Германия. Предназначен для огневой поддержки небольших пехотных подразделений."
    },
    {
        id: 26,
        title: "ПКП Печенег",
        category: "Пехотное оружие",
        country: "РФ",
        price: 5000,
        image: "images/pkp-pecheneg.png",
        description: "Российский единый пулемёт, разработанный в 1990-х годах на основе ПКМ и принятый на вооружение в начале 2000-х. Разработан ЦНИИточмашем в Климовске. Предназначен для продолжительной огневой поддержки пехоты."
    },
    {
        id: 27,
        title: "M249 SAW",
        category: "Пехотное оружие",
        country: "США",
        price: 4500,
        image: "images/m249-saw.png",
        description: "Американское обозначение варианта бельгийского FN Minimi, принятого армией США в 1980-х годах. Производится FN America в США. Лёгкий пулемёт предназначен для повышения плотности огня пехотного отделения."
    },
    {
        id: 28,
        title: "M2 Browning",
        category: "Пехотное оружие",
        country: "США",
        price: 14000,
        image: "images/m2-browning.png",
        description: "Американский крупнокалиберный пулемёт конструкции Джона Браунинга, созданный в начале 1920-х годов. За долгую историю выпускался несколькими американскими производителями. Применяется как тяжёлое оружие огневой поддержки и вооружение наземной техники."
    },
    {
        id: 29,
        title: "Negev",
        category: "Пехотное оружие",
        country: "Израиль",
        price: 7000,
        image: "images/negev.png",
        description: "Израильский лёгкий пулемёт, разработанный Israel Military Industries в 1980–1990-х годах и принятый на вооружение в 1990-х. Сегодня семейство выпускается Israel Weapon Industries в Рамат-ха-Шароне. Предназначен для мобильной огневой поддержки пехоты."
    },
    {
        id: 30,
        title: "СВД-М",
        category: "Пехотное оружие",
        country: "РФ",
        price: 5000,
        image: "images/svd-m.png",
        description: "Российская модернизация снайперской винтовки Драгунова, представленная в 2010-х годах. Производится концерном «Калашников» в Ижевске. Предназначена для повышения точности огня пехотного подразделения на средних дистанциях."
    },
    {
        id: 31,
        title: "M110 SASS",
        category: "Пехотное оружие",
        country: "США",
        price: 11214,
        image: "images/m110-sass.png",
        description: "Американская полуавтоматическая снайперская система, созданная компанией Knight's Armament Company в 2000-х годах. Производится во Флориде, США. Предназначена для точного огня и поддержки подразделений на увеличенных дистанциях."
    },
    {
        id: 32,
        title: "Steyr HS .50",
        category: "Пехотное оружие",
        country: "Австрия",
        price: 7000,
        image: "images/Steyr HS .50.png",
        description: "Австрийская крупнокалиберная однозарядная винтовка, разработанная Steyr Mannlicher и представленная в 2000-х годах. Производится Steyr Arms в Австрии. Предназначена для дальнего точного огня по материальным объектам и другим целям."
    },
    {
        id: 33,
        title: "NSV Utes",
        category: "Пехотное оружие",
        country: "РФ",
        price: 10000,
        image: "images/nsv-utes.png",
        description: "Советский крупнокалиберный пулемёт НСВ «Утёс», разработанный в конце 1960-х годов и принятый на вооружение в 1970-х. Производился предприятиями СССР и позднее в нескольких странах. Используется как тяжёлое оружие огневой поддержки и вооружение техники."
    },
    {
        id: 34,
        title: "РПГ-7",
        category: "Пехотное оружие",
        country: "РФ",
        price: 2500,
        image: "images/rpg7-m.png",
        description: "Советский ручной противотанковый гранатомёт, принятый на вооружение в 1961 году. Разработан в СССР и выпускался предприятиями оборонной промышленности в России и многих других странах. Предназначен для поражения бронетехники и укреплённых целей."
    },
    {
        id: 35,
        title: "РПГ-26",
        category: "Пехотное оружие",
        country: "РФ",
        price: 800,
        image: "images/rpg-26.png",
        description: "Советская одноразовая реактивная противотанковая граната, разработанная в 1980-х годах и принятая на вооружение в 1985 году. Разработана НПО «Базальт» в Москве. Компактное индивидуальное средство против бронетехники и защищённых целей."
    },
    {
        id: 36,
        title: "AT4",
        category: "Пехотное оружие",
        country: "Швеция",
        price: 1500,
        image: "images/at-4.png",
        description: "Шведское одноразовое противотанковое оружие, разработанное в конце 1970-х — начале 1980-х годов. Создано шведской компанией FFV, современное семейство связано с Saab. Предназначено для поражения бронетехники и других защищённых целей."
    },
    {
        id: 37,
        title: "Spike",
        category: "Пехотное оружие",
        country: "Израиль",
        price: 100000,
        image: "images/spike.png",
        description: "Израильское семейство противотанковых управляемых ракет, разработанное в 1980–1990-х годах и представленное в 1990-х. Разработчик и производитель — Rafael Advanced Defense Systems из Израиля. Предназначено для поражения бронетехники и других защищённых целей."
    },
    {
        id: 38,
        title: "Panzerfaust 3",
        category: "Пехотное оружие",
        country: "Германия",
        price: 12000,
        image: "images/panzerfaust-3.png",
        description: "Немецкое переносное противотанковое оружие, разработанное в 1970–1980-х годах и принятое на вооружение в 1990-х. Разработано Dynamit Nobel; современное производство связано с Dynamit Nobel Defence в Германии. Предназначено для борьбы с бронетехникой."
    }
];

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
