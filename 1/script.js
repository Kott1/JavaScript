const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const goodsWrp = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, price }) => `<div class="goods-item"><img src="images/${title}.jpg"><p class="price">${price}</p></div>`;

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join(' ');
    goodsWrp.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList(goods);