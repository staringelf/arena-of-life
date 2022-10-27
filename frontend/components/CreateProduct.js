import useForm from '../lib/useForm';
import { gql, useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';
import { PRODUCTS_QUERY } from './Products';
console.log('PRODUCTS_QUERY: ', PRODUCTS_QUERY);

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION (
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: ImageFieldInput
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, title: $name }}
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

function CreateProduct() {
  const {inputs, handleInputChange, resetForm, clearForm} = useForm({
    name: 'Your Name',
    description: 'Description goes here',
    price: 10000
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: PRODUCTS_QUERY }]

    }
  );

  return (
    <form encType="multipart/form-data" onSubmit={async (e) => {
      e.preventDefault();
      await createProduct();
      alert('Done');
    }}>
      <DisplayError error={error} />
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" value={inputs.name} onChange={handleInputChange}/>
      </label>
      <label htmlFor="description">
        Description
        <input type="text" id="description" name="description" placeholder="Description" value={inputs.description} onChange={handleInputChange}/>
      </label>
      <label htmlFor="photo">
        Name
        <input type="file" id="photo" name="photo" onChange={handleInputChange}/>
      </label>
      <label htmlFor="price">
        Price
        <input type="number" id="price" name="price" placeholder="Price" value={inputs.price} onChange={handleInputChange}/>
      </label>
      <button type="submit">Add Product</button>
      <button type="button" onClick={resetForm}>Reset</button>
      <button type="button" onClick={clearForm}>Clear</button>
    </form>
  )
}

export default CreateProduct;