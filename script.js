Vue.component('goods-list', {
    props: ['items', 'filteredGoods'],
    template: `<div class="goods-list">
    <goods-item v-for="good in items" :good="good"></goods-item>
    </div>`,
    data: () => ({
        fGoods: this.filteredGoods
    }),
    methods: {

    }
});

//@sendData="renderData"

Vue.component('goods-item', {
    props: ['good'],
    template: `<div class="goods-item">
    <h3 class="product_name">{{ good.product_name }}</h3>
    <p class="price">{{ good.price }}</p>
    <button @>Добавить</button>
    </div>`,
    data: () => ({
    }),
    methods: {
        addToCart() {
        }
    }
});

Vue.component('vue-form', {
    props: ["value"],
    template: `<div>
    <input type="text" class="goods-search" v-model="searchLine">
    <button @click="semit" class="search-button">
    <img src="images/search.svg" alt="search">
    </button>
    </div>`,
    data: () => ({
        searchLine: '',
    }),
    methods: {
        semit: function () {
            this.$emit('send-data', this.searchLine)
        }
    }
});

Vue.component('cart__item-wrp', {
    template: `<div>
    <cart__item></cart__item>
    </div>`
});

Vue.component('cart__item', {
    template: `<div>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</div>`
})

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        isMainHide: false,
        onError: false,
        isCartHide: true,
        url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
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
        filterGoods(line) {
            const regexp = new RegExp(line, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
            if (this.filteredGoods == 0) {
                this.onError = true;
            } else {
                this.onError = false;
            }
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
        this.makeGETRequest(`${this.url}/catalogData.json`).then((data) => {
            this.goods = data;
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