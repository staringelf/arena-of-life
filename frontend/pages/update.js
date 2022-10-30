import UpdateProduct from "../components/UpdateProduct";

function updateProductPage ({ query }) {
  return <UpdateProduct id={query.id} />
}

export default updateProductPage;