async function HandelProduct() {
  async function getProduct() {
    const response = await fetch("../data/DataProduct.js");
    const data = await response.json();
    const showProduct = document.querySelector('.list-card-products')

    data.forEach(product => {
      showProduct.innerHTML += 
      ` 
      <a href="./pages/product_detail.html?id=${product.id}" class="card-product-item">
      ${product.favourite ? `<div class="favourite">
      <span>Yêu thích</span>
    </div>` : ""}

      <div class="more-products">
        <span>Tìm sản phẩm tương tự</span>
      </div>

      <div class="box-img">
        <img
          src="${product.img}"
          alt=""
        />
      </div>
      <div class="title-product">
        <h1>
          ${product.name}
        </h1>
      </div>
      <div class="infomation-product">
        <div class="price-product">
          <span>$${product.price}</span>
        </div>
        <div class="sell-quantity">
          <span>Đã bán ${product.sell_quantity}</span>
        </div>
      </div>
    </a>
      `
    })
  }

  getProduct();
}
