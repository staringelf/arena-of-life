import { gql, useQuery } from "@apollo/client";
import DisplayError from "./ErrorMessage";
import formatMoney from "../lib/formatMoney";
import Head from 'next/head';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY ($id: ID!) {
    product (where: {
      id: $id
    }) {
      name
      price
      description
      photo {
        image {
          url
        }
        title
      }
    }
  }
`;

function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id
    }
  });
  if (loading) return <p>Loading..</p>
  if (error) return <DisplayError error={error} />
  const { product } = data;
  return (
    <div>
      <Head>
        <title>Logo | { product.name }</title>
      </Head>
      <img src={product?.photo?.image?.url} alt={product?.photo?.title} />
        <h2>{ product.name }</h2>
        <p>{ product.description }</p>
        <p>{ formatMoney(product.price) }</p>
      </div>
  )
}

export default SingleProduct;