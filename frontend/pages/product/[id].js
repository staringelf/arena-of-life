import SingleProduct from "../../components/SingleProduct";

function SingleProductPage({query}) {
  return <SingleProduct id={query.id} />
}

export default SingleProductPage;