import { useState } from 'react';

function CreateProduct() {
  const [name, setName] = useState('Yogita');
  return (
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
    </form>
  )
}

export default CreateProduct;