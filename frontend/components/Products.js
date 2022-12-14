import { gql, useQuery } from '@apollo/client';
import Product from '../components/Product';

export const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY {
    products {
      id
      name
      price
      description
      photo {
        image {
          filesize
          width
          height
          extension
          url
        }
      }
    }
  }`;

function Products() {
  const { data, error, loading } =  useQuery(PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return <p>Loading..</p>
  if (error) return <p> Error: {error.message}</p>
  return <div>
    <h3>PRODUCTS</h3>
    {data.products.map(product => <Product key={product.id} product={product} />)}
  </div>
}

export default Products;