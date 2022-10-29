import formatMoney from "../lib/formatMoney";
import Link from 'next/link';

function Product({ product }){
  console.log(product.photo);
  return <div>
    <h2>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </h2>
    <img src={product?.photo?.image?.url} alt={product.name} />
    <p>{product.description}</p>
    <p>{formatMoney(product.price)}</p>
  </div>
}


export default Product;