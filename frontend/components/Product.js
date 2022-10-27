import formatMoney from "../lib/formatMoney";

function Product({ product }){
  return <div>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>{formatMoney(product.price)}</p>
  </div>
}

export default Product;