const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isMainHide: false,
        onError: false,
        isCartHide: true
    },
    methods: {
        makeGETRequest(url, callback) {
            var xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }

            xhr.open('GET', url, true);
            xhr.send();
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
            if (this.filteredGoods == 0) {
                this.onError = true;
            } else {
                this.onError = false;
            }
        },
        isVisibleCart() {
            this.isMainHide = true;
            this.isCartHide = false;
        },
        isVisibleMain() {
            this.isMainHide = false;
            this.isCartHide = true;
        },
        addToCart() {
            //...
        },
        deleteFromCart() {
            //...
        },
        countPrice() {
            //...
        }
    },
    mounted() {
        this.makeGETRequest(`${url}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
    }
});

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