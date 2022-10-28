import formatMoney from "../lib/formatMoney";

function Product({ product }){
  console.log(product.photo);
  return <div>
    <h2>{product.name}</h2>
    <img src={product?.photo?.image?.url} alt={product.name} />
    <p>{product.description}</p>
    <p>{formatMoney(product.price)}</p>
  </div>
}


export default Product;