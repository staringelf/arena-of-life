import { gql, useMutation, useQuery } from "@apollo/client";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";

const SINGLE_PRODUCT_QUERY = gql`
  query ($id: ID) {
    product (where: {
      id: $id 
    }) {
      id
      name
      description
      price
  } 
}
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION (
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      where: {
        id: $id
      }
      data: {
        name: $name
        description: $description
        price: $price
      }
    ) {
      id
      name
      description
      price
    } 
}
`;

function UpdateProduct ({ id }) {
  
  // 1. Get the product
  const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  });

  const {inputs, handleInputChange, clearForm, resetForm} = useForm(data?.product);
  
  // 2. Mutation to update the product
  const [updateProduct, { data: updateData, loading: updateLoading, error: updateError } ] = useMutation(UPDATE_PRODUCT_MUTATION);

    
  // 3. Form to handle mutation
  if (loading) {
    return <p>Loading...</p>
  }
  return (
  <div>
    <form encType="multipart/form-data" onSubmit={async (e) => {
      e.preventDefault();
      await updateProduct({
        variables: {
          id,
          name: inputs?.name,
          description: inputs?.description,
          price: inputs?.price
        }
      });
    }}>
      <DisplayError error={error || updateError} />
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" value={inputs?.name} onChange={handleInputChange}/>
      </label>
      <label htmlFor="description">
        Description
        <input type="text" id="description" name="description" placeholder="Description" value={inputs?.description} onChange={handleInputChange}/>
      </label>
      <label htmlFor="photo">
        Name
        <input type="file" id="photo" name="photo" onChange={handleInputChange}/>
      </label>
      <label htmlFor="price">
        Price
        <input type="number" id="price" name="price" placeholder="Price" value={inputs?.price} onChange={handleInputChange}/>
      </label>
      <button type="submit">Update Product</button>
      <button type="button" onClick={resetForm}>Reset</button>
      <button type="button" onClick={clearForm}>Clear</button>
    </form>
  </div>
  )
}

export default UpdateProduct;