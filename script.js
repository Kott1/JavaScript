Vue.component('goods-list', {
    props: ['goods'],
    template: `<div class="goods-list">
    <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>`
});

Vue.component('goods-item', {
    props: ['good'],
    template: `<div class="goods-item">
    <h3 class="product_name">{{ good.product_name }}</h3>
    <p class="price">{{ good.price }}</p>
    <button>Добавить</button>
    </div>`,
    data: () => ({
    }),
    methods: {
        addToCart() {
        }
    }
});

Vue.component('vue-input', {
    data: () => ({
        searchLine: ''
    }),
    template: `<input type="text" class="goods-search" v-model="searchLine">`
});

Vue.component('search', {
    props: ['goods'],
    template: `<button class="search-button">
    <img src="images/search.svg" alt="search">
    </button>`,
    methods: {
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
            if (this.filteredGoods == 0) {
                this.onError = true;
            } else {
                this.onError = false;
            }
        }
    }
});

Vue.component('cart__item-wrp', {
    props: ['goods'],
    template: `<div>
    <cart__item v-for="good in goods" :good="good"></cart__item>
    </div>`,
    methods: {
        // renderCartItem() {

        // }
    }
});

Vue.component('cart__item', {
    props: ['good'],
    template: `<div v-for="good in goods" :good="good">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</div>`
})





const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        isMainHide: false,
        onError: false,
        isCartHide: true
    },
    methods: {
        makeGETRequest(url) {
            return new Promise((resolve) => {
                var xhr;

                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        resolve(JSON.parse(xhr.responseText));
                    }
                }

                xhr.open('GET', url, true);
                xhr.send();
            });
        },
        add() {
            console.log(1)
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
        this.makeGETRequest(`${url}/catalogData.json`).then((data) => {
            this.goods = data;
            this.filteredGoods = data;
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