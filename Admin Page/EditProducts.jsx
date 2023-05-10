import React, { useContext, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../Utils/Context'

function AddProducts() {

  const inputRef = useRef()
  const navigate = useNavigate()

  const {id} = useParams() 

  const conxt = useContext(Context)
  const { editData, products,setProducts } = conxt

  const data = products.map((item)=> item.id === parseInt(id))

  const Edited = () => { 
    const id = parseInt(inputRef.current.id.value)
    const image = inputRef.current.image.value
    const small = inputRef.current.name.value
    const desc = inputRef.current.desc.value
    const price = parseInt(inputRef.current.price.value)
    const qty = parseInt(inputRef.current.qty.value)
    setProducts([...products , {id, image, small, desc, price, qty}])
    navigate('/admin/viewproducts')
    console.log(editData);
  }

  const Cancel = () =>{
    const [hive] = editData
    setProducts([...products ,hive ])
    navigate('/admin/viewproducts')
  }


  return (
    <div>
      {editData.map((item)=>{
        return (
         <form ref={inputRef} key={item.id} onSubmit={(e)=>e.preventDefault}>
           <label>Product id :</label>
            <input type="text" value={item.id} name='id'/>
            <label>Product image :</label> 
            <input type="text" defaultValue={item.image} name='image'/>
            <label>Product Name :</label>
            <input type="text" defaultValue={item.small}  name='name'/>
            <label>Product Description :</label>
            <input type="text" defaultValue={item.desc} name='desc' />
            <label>Quantity :</label>
            <input type="text" defaultValue={item.quantity} name='qty' />
            <label>Price :</label>
            <input type="text" defaultValue={item.price} name='price' /><br />
            <button type="submit" className="btn btn-success" onClick={Edited} >Submit</button>
            <button type="submit" className="btn btn-success" onClick={Cancel} >Cancel</button>
          </form>
        )
     })} 
     
    </div>
  )
}

export default AddProducts