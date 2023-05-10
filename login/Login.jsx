import React, { useContext, useRef } from 'react'
import {useFormik} from 'formik'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Context } from '../Utils/Context'

    const initialValues = {
      name : '',
      password : ''
    }

    const onSubmit = values => {
      console.log('form Data', values )
   }

   const validate = values => {

    const errors = {}

    if(!values.name){
      errors.name = 'Required'
    }

    if(!values.password){
      errors.password = 'Required'
    }
     return errors
 }

   function Login () {

      const Navigate = useNavigate()
      const conxt = useContext(Context)
      const {signup,setLogout} = conxt
      const inputRef = useRef(null)

      const formik = useFormik({
         initialValues,
         onSubmit,
         validate
      })

      const Tohome = () => {
        const username = inputRef.current.name.value 
        const password = inputRef.current.password.value
        const data = signup.filter((item) => item.username === username && item.password === password)
        if(data.length>0){
           setLogout(true)
           Navigate("/")
        }else{
          alert('Please Sign In')
        }
        // console.log(signup);
      }


   
  // console.log('Form errors',formik.errors);
  // console.log('visited',formik.touched);

  return (
    
    <div className='d-flex justify-content-center align-items-center '>
      
      <form ref={inputRef} onSubmit={formik.handleSubmit}>
        <h1 className='d-flex justify-content-center mt-5'>Sign In</h1>
         <div >
          
          <input 
          className='mt-4 rounded p-3'
          style={{width:"25rem" ,height:"7vh"}}
          placeholder='Username'
          type="text" id='input'
          name='name' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.name} />
          <br />
    
          { formik.touched.name && formik.errors.name ? (
          <div className='error'>{formik.errors.name}</div>
           ) : null}
       </div>

        <div className='d-flex flex-colomn'>
    
          <input type="text" id='input' 
          className='mt-4 rounded p-3'
          style={{width:"25rem" ,height:"7vh"}}
          placeholder='Password'
          name='password' 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.password}/><br />
          
       
          { formik.touched.password && formik.errors.password ? (
          <div className='error'>{formik.errors.password}</div> 
          ): null}

         </div>

        <Button style={{width:"25rem" , height:"8vh" , background:"black"}} onClick={Tohome} className='mt-4' type='submit'>Login</Button>
        <div className='d-flex justify-content-center align-items-center mt-4'>
        <p className='me-2'>Dont You have an account ?</p>
        <p><Link style={{color:"black"}} to='/signup'>Sign Up</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login