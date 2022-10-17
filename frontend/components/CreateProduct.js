import useForm from '../lib/useForm';

function CreateProduct() {
  const [inputs, handleInputChange, resetForm, clearForm] = useForm({
    name: 'Your Name',
    price: 10000
  });
  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" placeholder="Name" value={inputs.name} onChange={handleInputChange}/>
      </label>
      <label htmlFor="price">
        Price
        <input type="number" id="price" name="price" placeholder="Price" value={inputs.price} onChange={handleInputChange}/>
      </label>
    </form>
  )
}

export default CreateProduct;