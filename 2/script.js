class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    countPrice() {
        //...
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
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
}

const cart = new Cart();
cart.addToCart();
cart.deleteFromCart();

class CartItem {
    constructor() {
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