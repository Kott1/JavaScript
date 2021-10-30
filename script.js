Vue.component('goods-list', {
    props: ['items', 'err'],
    template: `<div class="goods-list">
    <goods-item v-for="good in items" :good="good" @sendToList="semitToApp"></goods-item>
    <vue-error v-if="err"></vue-error>
    </div>`,
    methods: {
        semitToApp(good, isVisibleItem) {
            this.$emit('cart-data', good, isVisibleItem)
        }
    }
});

//@sendData="renderData"

Vue.component('goods-item', {
    props: ['good'],
    template: `<div class="goods-item">
    <h3 class="product_name">{{ good.product_name }}</h3>
    <p class="price">{{ good.price }}</p>
    <button @click="addToCart">Добавить</button>
    </div>`,
    data: () => ({
        isVisibleItem: false
    }),
    methods: {
        addToCart() {
            this.isVisibleItem = true;
            this.$emit('sendToList', this.good, this.isVisibleItem);
        }
    }
});

Vue.component('vue-error', {
    template: `<p class="error_txt">Такого товара нету или его нет в наличии</p>`
})

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

Vue.component('cart-wrp', {
    props: ['items', 'visible'],
    template: `<div class="cart-wrp">
    <cart-item v-if="visible" v-for="cart in items" :cart="cart"></cart-item>
    </div>`
});

Vue.component('cart-item', {
    props: ['cart'],
    template: `<div class="cart-item">
    <h3 class="product_name">{{ cart.product_name }}</h3>
    <p class="price">{{ cart.price }}</p>
    <button @click="f">Удалить</button>
    </div>`,
    methods: {
        //...
    }
});


const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        cartData: [],
        isVisibleMain: true,
        onError: false,
        isVisibleCart: false,
        isVisibleItem: false,
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
            if (this.filteredGoods.length == 0) {
                this.onError = true;
            } else {
                this.onError = false;
            }
        },
        sendToCart(item, vis) {
            this.cartData.push(item);
            this.isVisibleItem = vis;
            console.log(this.isVisibleItem)
        },
        visibleCart() {
            this.isVisibleMain = false;
            this.isVisibleCart = true;
        },
        visibleMain() {
            this.isVisibleMain = true;
            this.isVisibleCart = false;
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