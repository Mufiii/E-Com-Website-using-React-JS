import React, { useState, useContext } from 'react'
import { useParams } from 'react-router'
import { proData } from '../Product/ProductsData'
import { FaCartPlus } from 'react-icons/fa'
import { Button } from 'react-bootstrap';
import { Context } from '../Utils/Context';
import { Prev } from 'react-bootstrap/esm/PageItem';


function ProductDetails() {

  const conxtData = useContext(Context)
  const { input, setInput, count, dispatcher } = conxtData
  const { id } = useParams()

  const data = proData.filter((item) => item.id === parseInt(id))


  const clickHandler = () => {
     
       const ifDataExist = input.filter((item) => item.id === parseInt(id))
       const [newdata] = data

       if(ifDataExist.length > 0) {
          alert("The Product is allready in the Cart")
       }
       else
       {
          setInput([...input,newdata])
          // setInput(previnput=>[...previnput,newdata])
          alert("the product is added")
       }
  }

  

  return (
    <div className='mt-5  '>
      {data.map((item) => {
        return <div className='d-flex justify-content-center align-items-center '>

          <div className='shadow p-5 bg-body-tertiary rounded d-flex justify-content-center '>
           <div className='mt-4 d-flex'>
              <img src={item.image} alt="" style={{height: "100%" , width:"40%"}}/>
              <div className='ms-5'>
                    <h1 className='mt-5 '>{item.small}</h1>
                    <span className='mt-3'>{item.desc}</span> <br />
                    <span className='fs-2 mx-auto'>${item.price}</span>
              
              <div className="cart-buttons  " style={{ height:"30px" , width: "100px"}}>
                <div className="quantity-buttons">
                  <Button onClick={() => { dispatcher((count.value === 1) ? initial.value :{ type: "count", payload: -1 }) }}>-</Button>
                  {count.value}
                  <Button onClick={() => { dispatcher( { type: "count", payload:1 }) }}>+</Button>
                </div>
                <Button                 
                  onClick={clickHandler}
                  type="button"
                  className="btn btn-primary mt-3" style={{width: "20rem"}} > <FaCartPlus size={20}  /> ADD TO CART</Button>
                </div> 
              </div>
            </div>
          </div>

        </div>
      })}

    </div>
  )
}

export default ProductDetails


