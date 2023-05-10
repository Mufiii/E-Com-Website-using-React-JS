import React, { useContext, useRef } from 'react'
import { Context } from '../Utils/Context'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';



   function AdminLogin () {

      const Navigate = useNavigate()

      const inputRef = useRef(null)

      const conxt = useContext(Context)
      const { admin } = conxt
 console.log('hhh');

      const check = () => {
          const Username = inputRef.current.name.value
          const Password = inputRef.current.password.value
              console.log(Username, Password);
              console.warn(admin.username ,admin.password);
          if (admin.username === Username && admin.password === Password) {
            Navigate("/admin/users")
         }else {
            alert("Invalid Username or password")
         }
        }
  return (

    <div className='d-flex justify-content-center align-items-center '>
      
      <form ref={inputRef}>
      <h1 className='d-flex justify-content-center mt-5'>ADMIN</h1>
       <div>
          <input 
          className='mt-4 rounded p-3'
          style={{width:"25rem" ,height:"7vh"}}
          placeholder='Username'
          type="text" id='input'
          name='name'   />
          <br />
       </div>

        <div>
          <input type="text" id='input'
          className='mt-4 rounded p-3'
          style={{width:"25rem" ,height:"7vh"}}
          placeholder='Password' 
          name='password' 
          /><br />
       </div>

        <Button 
        style={{width:"25rem" , height:"8vh" , background:"black"}}
        onClick={check}
         className='mt-3' type='submit'>Submit</Button>
      </form>
    </div>
  )
}
    
   

export default AdminLogin