Vue.component('goods-list', {
    props: ['items'],
    template: `<div class="goods-list">
    <goods-item v-for="good in items" :good="good"></goods-item>
    </div>`,
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
    <button @click="filterGoods" class="search-button">
    <img src="images/search.svg" alt="search">
    </button>
    </div>`,
    data: () => ({
        searchLine: '',
        goods: [],
        filteredGoods: []
    }),
    methods: {
        filterGoods() {
            setTimeout(() => {
                this.goods = this.value;
                const regexp = new RegExp(this.searchLine, 'i');
                this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
                if (this.filteredGoods == 0) {
                    this.onError = true;
                } else {
                    this.onError = false;
                }
                this.$emit('sendData', this.filteredGoods);
            }, 1000);
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
        sendToList(item) {
            console.log(item);
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