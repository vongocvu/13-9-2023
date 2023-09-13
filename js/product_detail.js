const params_id = document.location.href.split("?")[1].replace("id=", "")

async function getProduct() {
    const response = await fetch("../data/DataProduct.js");
    const data = await response.json();
    const productById = data.filter(item => item.id === parseInt(params_id))
    console.log(productById[0]);
}

getProduct()

