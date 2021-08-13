function makeGETRequest(url, callback) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    resolve(callback(xhr.responseText));
                }
            }

            xhr.open('GET', url, true);
            xhr.send();
        }, 2000);
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

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods(cb) {
        const prom = new Promise((resolve) => {
            resolve(makeGETRequest(`${url}/catalogData.json`, (goods) => {
                this.goods = JSON.parse(goods);
                console.log(goods);
                cb();
            }))
        })
        prom.then(this.render());
    }
    render() {
        let listHtml = '';
        this.goods.map(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    countPrice() {
        //...
    }
}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
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