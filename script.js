function makeGETRequest(url) {
    return new Promise((resolve) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    })
}

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }
}

const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".goods-search");

searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    console.log(value);
    list.filterGoods(value);
});

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }
    fetchGoods() {
        return makeGETRequest(`${url}/catalogData.json`);
    }
    render(filteredGoods) {
        const goodsList = document.querySelector(".goods-list")
        filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            goodsList.insertAdjacentHTML("beforeend", goodItem);
        });
    }
    filterGoods(value) {
        console.log(this.goods);
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => {
            regexp.test(good.product_name)
            console.log(good);
        });
        console.log(this.filteredGoods)
        this.render(this.filteredGoods);
    }
    countPrice() {
        //...
    }
}

const list = new GoodsList();
list.fetchGoods().then((goods) => {
    list.goods = JSON.parse(goods);
});
list.countPrice();

class Cart {
    constructor() {
        this.items = [];
    }
    addToCart() {
        //...
    }
    deleteFromCart() {
        //...
    }
    getCartList() {
        makeGETRequest(`${url}/getBasket.json`, (items) => {
            this.items = JSON.parse(items);
        })
    }
}

const cart = new Cart();
cart.addToCart();
cart.deleteFromCart();
cart.getCartList();

class CartItem {
    constructor(item) {
        this.item = item;
    }
    getPrice() {
        //...
    }
    getName() {
        //...
    }
}

const item = new CartItem();
item.getName();
item.getPrice();