const products = [
    {
        id: 1,
        title: "Т-72Б3М",
        category: "Танки",
        country: "РФ",
        price: 3000000,
        image: "images/t-72b3m.png"
    },
    {
        id: 2,
        title: "Т-90М",
        category: "Танки",
        country: "РФ",
        price: 4500000,
        image: "images/t-90m.png"
    },
    {
        id: 3,
        title: "M1A1 Abrams",
        category: "Танки",
        country: "США",
        price: 10000000,
        image: "images/m1a1-abrams.png"
    },
    {
        id: 4,
        title: "Leopard 2",
        category: "Танки",
        country: "Германия",
        price: 15000000,
        image: "images/leopard2.png"
    },
    {
        id: 5,
        title: "БМП-3М",
        category: "Бронетехника",
        country: "РФ",
        price: 1800000,
        image: "images/bmp-3m.png"
    },
    {
        id: 6,
        title: "M2A2 Bradley",
        category: "Бронетехника",
        country: "США",
        price: 3200000,
        image: "images/m2a2-bradly.png"
    },
    {
        id: 7,
        title: "CV90",
        category: "Бронетехника",
        country: "Швеция",
        price: 9000000,
        image: "images/cv90.png"
    },
    {
        id: 8,
        title: "Patria AMV",
        category: "Бронетехника",
        country: "Финляндия",
        price: 2000000,
        image: "images/Patria AMV.png"
    },
    {
        id: 9,
        title: "КамАЗ-63968 Тайфун-К",
        category: "Бронетехника",
        country: "РФ",
        price: 1000000,
        image: "images/kamaz-63968.png"
    },
    {
        id: 10,
        title: "КамАЗ Тайфун-К",
        category: "Бронетехника",
        country: "РФ",
        price: 1000000,
        image: "images/kamaz-typhoon-k.png"
    },
    {
        id: 11,
        title: "International MaxxPro",
        category: "Бронетехника",
        country: "США",
        price: 600000,
        image: "images/maxxpro-international.png"
    },
    {
        id: 12,
        title: "Су-34",
        category: "Самолёты",
        country: "РФ",
        price: 36000000,
        image: "images/su-34.png"
    },
    {
        id: 13,
        title: "Су-25ТМ",
        category: "Самолёты",
        country: "РФ",
        price: 11000000,
        image: "images/su-25tm.png"
    },
    {
        id: 14,
        title: "F-15E Strike Eagle",
        category: "Самолёты",
        country: "США",
        price: 80000000,
        image: "images/f15-strike-eagle.png"
    },
    {
        id: 15,
        title: "Dassault Rafale",
        category: "Самолёты",
        country: "Франция",
        price: 110000000,
        image: "images/dassault-rafale.png"
    },
    {
        id: 16,
        title: "Ка-52",
        category: "Вертолёты",
        country: "РФ",
        price: 16000000,
        image: "images/ka-52.png"
    },
    {
        id: 17,
        title: "AH-64 Apache",
        category: "Вертолёты",
        country: "США",
        price: 52000000,
        image: "images/ah64-apache.png"
    },
    {
        id: 18,
        title: "АК-74",
        category: "Пехотное оружие",
        country: "РФ",
        price: 1000,
        image: "images/ak-74.png"
    },
    {
        id: 19,
        title: "M4A1",
        category: "Пехотное оружие",
        country: "США",
        price: 1300,
        image: "images/m4a1.png"
    },
    {
        id: 20,
        title: "Steyr AUG",
        category: "Пехотное оружие",
        country: "Австрия",
        price: 2200,
        image: "images/steyr-aug.png"
    },
    {
        id: 21,
        title: "FAMAS",
        category: "Пехотное оружие",
        country: "Франция",
        price: 2500,
        image: "images/famas.png"
    },
    {
        id: 22,
        title: "FN FAL",
        category: "Пехотное оружие",
        country: "Бельгия",
        price: 2000,
        image: "images/fn-fal.png"
    },
    {
        id: 23,
        title: "FN MAG",
        category: "Пехотное оружие",
        country: "Бельгия",
        price: 7000,
        image: "images/fn-mag.png"
    },
    {
        id: 24,
        title: "FN Minimi",
        category: "Пехотное оружие",
        country: "Бельгия",
        price: 6000,
        image: "images/fn-minimi.png"
    },
    {
        id: 25,
        title: "HK MG4",
        category: "Пехотное оружие",
        country: "Германия",
        price: 8000,
        image: "images/hk-mg4.png"
    },
    {
        id: 26,
        title: "ПКП Печенег",
        category: "Пехотное оружие",
        country: "РФ",
        price: 5000,
        image: "images/pkp-pecheneg.png"
    },
    {
        id: 27,
        title: "M249 SAW",
        category: "Пехотное оружие",
        country: "США",
        price: 4500,
        image: "images/m249-saw.png"
    },
    {
        id: 28,
        title: "M2 Browning",
        category: "Пехотное оружие",
        country: "США",
        price: 14000,
        image: "images/m2-browning.png"
    },
    {
        id: 29,
        title: "Negev",
        category: "Пехотное оружие",
        country: "Израиль",
        price: 7000,
        image: "images/negev.png"
    },
    {
        id: 30,
        title: "СВД-М",
        category: "Пехотное оружие",
        country: "РФ",
        price: 5000,
        image: "images/svd-m.png"
    },
    {
        id: 31,
        title: "M110 SASS",
        category: "Пехотное оружие",
        country: "США",
        price: 11214,
        image: "images/m110-sass.png"
    },
    {
        id: 32,
        title: "Steyr HS .50",
        category: "Пехотное оружие",
        country: "Австрия",
        price: 7000,
        image: "images/Steyr HS .50.png"
    },
    {
        id: 33,
        title: "NSV Utes",
        category: "Пехотное оружие",
        country: "РФ",
        price: 10000,
        image: "images/nsv-utes.png"
    },
    {
        id: 34,
        title: "РПГ-7",
        category: "Пехотное оружие",
        country: "РФ",
        price: 2500,
        image: "images/rpg7-m.png"
    },
    {
        id: 35,
        title: "РПГ-26",
        category: "Пехотное оружие",
        country: "РФ",
        price: 800,
        image: "images/rpg-26.png"
    },
    {
        id: 36,
        title: "AT4",
        category: "Пехотное оружие",
        country: "Швеция",
        price: 1500,
        image: "images/at-4.png"
    },
    {
        id: 37,
        title: "Spike",
        category: "Пехотное оружие",
        country: "Израиль",
        price: 100000,
        image: "images/spike.png"
    },
    {
        id: 38,
        title: "Panzerfaust 3",
        category: "Пехотное оружие",
        country: "Германия",
        price: 12000,
        image: "images/panzerfaust-3.png"
    }
];

const catalogList = document.querySelector(".catalog-list");

function render_products(){
    products.forEach(function(product){
        let card = document.createElement("article");

        card.className = "catalog-item";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">

                <div class="catalog-item-info">
                    <p class="catalog-item-category">${product.category}</p>
                    <h3 class="catalog-item-title">${product.title}</h3>
                    <p class="catalog-item-country">${product.country}</p>
                    <p class="catalog-item-price">${product.price} $</p>

                <button type="button" class="catalog-item-add-to-cart">В корзину</button>

            </div>
        `;

        catalogList.appendChild(card)
    })
}

render_products();