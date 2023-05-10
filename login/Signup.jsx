import React, { useContext ,useRef } from 'react'
import {useFormik} from 'formik'
import { Context } from '../Utils/Context'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

    const initialValues = {
      name : '',
      email : '',
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

    if(!values.email){
      errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid Email Format'
    }

    if(!values.password){
      errors.password = 'Required'
    }
     return errors
 }

   function Signup () {

      const conxt = useContext(Context)

      const Navigate = useNavigate()

      const {login, setLogin,signup,setSignup} = conxt;

      const inputRef = useRef(null)


      const formik = useFormik({
         initialValues,
         onSubmit : (values) => {
            setLogin([...login, values])
            console.log(login)
         },
         validate
      })

      const Store = () => {
        const username = inputRef.current.name.value
        const email = inputRef.current.email.value
        const password = inputRef.current.password.value
        setSignup([...signup, {username, email, password}])
        Navigate("/login")
        console.log(signup);
      } 

      
   
  // console.log('Form errors',formik.errors);
  // console.log('visited',formik.touched);

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <form ref={inputRef} onSubmit={formik.handleSubmit}>
       <div>
          <h1 className='d-flex justify-content-center mt-5'>Signup</h1>
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
       <div>
          
          <input type="email" id='input' name='email'
           className='mt-4 rounded p-3'
           style={{width:"25rem" ,height:"7vh"}}
           placeholder='Email Address'
           onChange={formik.handleChange} 
           onBlur={formik.handleBlur}
          value={formik.values.email} /><br />

          {formik.touched.email && formik.errors.email ? (
          <div className='error'>{formik.errors.email}</div> 
          ) : null}
        </div>

        <div>
          
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
        <div className='d-flex justify-content-center align-items-center mt-4'>
        <Button style={{width:"25rem" , height:"8vh" , background:"black"}}  onClick={ Store } type='submit'>Sign up</Button>
        </div>
      </form>

    </div>
  )
}

export default Signup