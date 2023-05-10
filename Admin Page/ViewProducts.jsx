import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { proData } from '../Product/ProductsData'
import { Table } from 'react-bootstrap'
import { Context } from '../Utils/Context'

function ViewProducts() {

  const navigate = useNavigate()
  const conxt = useContext(Context)
  const [query,setQuery] = useState("")

  const {products,setProducts,editData,setEditData} = conxt

  // const handleSearch = () => {
  //   if(query!== ""){
  //     setProducts(proData.filter(product => product.small.toLowerCase().includes(query.toLowerCase())))
  //   }else{
  //     setProducts(proData)
  //   }
  //   console.log(query)
  // }

  // const handleSearch = () => {
  //   const search = products.filter(product => product.small.toLowerCase().includes(query));
  //   setProducts(search)
  // }
  
  const search = products.filter((item) => {
     const name = item.small.toLowerCase()
     return name.includes(query)
  }) 

  const Delete = (del) => {
      const remove = parseInt(del.target.id)
      const update = products.filter((item) => item.id !== remove)
      setProducts(update)
      console.log(products);
  }

  const EditHandle = (edit) => {
       const remove = parseInt(edit.target.id)
       const editItem = products.filter((item) => item.id === remove)
       setEditData(editItem)
       console.log(editData);
       const update = products.filter((item) => item.id !== remove)
       setProducts(update)
       navigate('/admin/editproducts')
  }

  // const Edit = edit => {
  //     const add = parseInt(edit.target.id)
  //     const data = products.filter((item) => item.id === add)
  //     setEditData(data)
  //     const update = products.filter((item)=> item.id !== add)
  //     setProducts(update)
  //     navigate('/admin/editproducts')
  //     console.log(editData);
  // }
  console.log(query);

  return (
    <div className='add'>
      <h2 className='d-flex justify-content-center mt-5 m-b' > Products</h2>
      <input type="text" className='field' 
      onChange={(e)=> setQuery(e.target.value.toLowerCase())} />
      
      <button type="button" className="btn btn-primary"
       onClick={()=> navigate("/admin/addproducts")}>Add Product</button>


      <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {search.map(product =>{
              return (
                <tr key={product.id}>
                  <td><img src={product.image} alt={product.name} style={{ height:"60px" , width:"60px" }} /></td>
                  <td>{product.small}</td>
                  <td>{product.desc}</td>
                  <td>{product.price}</td>
                  <td><button type="button" className="btn btn-primary" 
                  onClick={EditHandle} id={product.id}>Edit</button></td>
                  <td><button type="button" className="btn btn-danger" 
                  onClick={Delete} id={product.id}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
          
      </Table>
      
    </div>
  )
}

export default ViewProducts