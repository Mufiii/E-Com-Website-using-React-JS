import React, { useContext } from 'react'
import { Context } from '../Utils/Context'
import { proData } from '../Product/ProductsData';
import { Card , Button } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/Bs';
import { Link } from 'react-router-dom';


function ToCart() { 
  const mata = useContext(Context)
  const {input,setInput,count,dispatcher} = mata;

  const Remove = (id) => {
    const update = input.filter((item) => item.id !== id); // remove from the Cart
    setInput(update);
  }

  return (
    <div>
      <h3 className='container d-flex justify-content-start mt-5 fs-1'>Cart</h3>
      <div className='d-flex  container'>
        {input.length === 0 ? (   //if Cart is Empty
          <div className='container text-center '> <h3 style={{color:'grey'}}> Your Cart is Currently  Empty</h3>
          <button type="button" className="btn btn-warning mt-3  " >
           <Link  style={{ color: 'white', textDecoration: 'none' }} as={Link} to="/product">Return to shop</Link>
              </button>          
          </div>
        ) : (
          <div>
            {input.map((item) => (
              <Card className='d-flex shadow p-3 mb-5 bg-body rounded  mt-4' style={{ width: '18rem',alignItems:'center' }} key={item.id}>
                <Card.Img variant="top" src={item.image} style={{ height: '70%', width: '70%', }} />
                <Card.Body>
                  <Card.Title>{item.small}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <Card.Text className=''>
                    <strong>${item.price}</strong>
                  </Card.Text>
                  <div className="cart-buttons  " style={{ height:"30px" , width: "100px"}}>
   
                      <Button onClick={() => { dispatcher((count.value === 1) ? initial.value :{ type: "count", payload: -1 }) }}>-</Button>
                      {count.value}
                      <Button onClick={() => { dispatcher( { type: "count", payload:1 }) }}>+</Button>
                </div>
                  <Button variant="danger" style={{width:"90px"}} onClick={() => Remove(item.id)}>Remove</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

 export default ToCart


//   const Remove = (del,input,setInput) => {
//     if (input.length === 0) {
//       return "The Cart is Empty"
//     }else {
//       const remove = parseInt(del.target.id)
//       const update = input.filter((item)=> item.id !== remove)
//       setInput(update)
//     }
      
//   }

//    return (
//     <div>
//     <h3 className='container d-flex justify-content-start mt-5 fs-1'>Cart</h3>
//     <div className='d-flex  container'>
//       <div>
//     { input.map ((item) =>{
//         return <Card className='d-flex shadow p-3 mb-5 bg-body rounded  mt-4' style={{ width: '18rem',alignItems:'center' }} key={item.id}>
//         <Card.Img  variant="top"  src={item.image} style={{ height: '50%', width: '50%', }} />
//         <Card.Body>
//           <Card.Title>{item.small}</Card.Title>
//           <Card.Text>
//            {item.desc}
//           </Card.Text>
//           <Card.Text className=''>
//             <strong>${item.price}</strong>
//           </Card.Text>
//           <Button  variant="danger" style={{width:"60px"}} onClick={Remove} id={item.id} ><AiFillDelete/></Button>
//         </Card.Body>
//   </Card>
//     })}
//     </div>
//     </div>
// </div>
// )
// }

// export default ToCart

