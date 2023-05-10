import { useContext , useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../Utils/Context'

function AddProducts() {

  const Navigate = useNavigate()

  const MyRef = useRef(null)
  const conxt = useContext(Context)

  const { products,setProducts} = conxt

  useEffect(()=>{
    console.warn(products);
  },[products])

  const AddProducts = () => {
      const id = parseInt(MyRef.current.id.value)
      const image = MyRef.current.Image.value
      const small = MyRef.current.name.value
      const desc = MyRef.current.desc.value
      const price = parseInt(MyRef.current.price.value)
      const qty = parseInt(MyRef.current.qty.value)
      setProducts([...products, {id,image,small,desc,price,qty }]) 
      Navigate("/admin/viewproducts")
      console.log(products)
  }



  return (
   
    <div>
        <form ref={MyRef} onSubmit={(e)=>e.preventDefault()}>
           <label>Product id :</label>
            <input type='number'   name='id'/>
            <label>Product image :</label> 
            <input type='text'   name='Image'/>
            <label>Product Name :</label>
            <input type='text'  name='name'/>
            <label>Product Description :</label>
            <input type='text'   name='desc' />
            <label>Quantity :</label>
            <input type='number' name='qty' />
            <label>Price :</label>
            <input  type='number' name='price' /><br />
            <button type="button" className="btn btn-success" onClick={AddProducts}>Submit</button>
          </form>
    </div>
  )
}

export default AddProducts