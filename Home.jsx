import React from 'react'
import baby from './images/baby.jpg'
import boy from './images/boy.jpg'
import girl from './images/girl.jpg'
import girl10 from './images/girl10.jpg'
import CYBEX from './images/CYBEX.jpg'
import toy from './images/toy.jpg'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import { proData } from './Product/ProductsData'

function Home() {

  const Navigate = useNavigate()


  return (
  <div>
    <div className=" d-flex">
        <div className="col-md-7 mt-5  ">
          <img className="img-fluid img" src={baby} alt="" />    
        </div>
      <div className='d-flex flex-column'>
         <h1 className='d-flex justify-content-center baby align-center '>Baby Essential Fashion & Nursery</h1>
         <p className='parag'>There's still time to find the perfect present. Order by May 11 to get
         <br /> it by May 14 with expedited shipping.</p>
         
      </div>
    </div>

    <div className='mt-5 d-flex justify-content-center align-items-center mx-auto' style={{width:'90%', height:"3px" , backgroundColor:"black"  }}></div>

    <div style={{width:'100%'}}>
  <h4 className='d-flex justify-content-center text-align center mt-5  '>SHOP BY CATEGORY</h4>
  <div className='container ' style={{width:'100%'}}>
    <div className="col-sm -10 ">
      <div className="row mb-5 mt-5 d-flex justify-content-center align-items-center ">
        <img onClick={()=> Navigate("/boy")} className='p-3' src={boy} alt=""  style={{ height:"40%" , width:"20%"}}/>
        <img onClick={()=> Navigate("/girl")} className='p-3 mr-3' src={girl} alt="" style={{ height:"40%" , width:"20%"}}/>
        <img onClick={()=> Navigate("/shoe")}  src={girl10} alt="" style={{ height:"40%" , width:"20%"}}/>
        <img onClick={()=> Navigate("/accesories")}  src={CYBEX} alt="" style={{ height:"40%" , width:"20%"}}/>
        <img onClick={()=> Navigate("/toy")}  src={toy} alt="" style={{ height:"40%" , width:"20%"}}/>
      </div>
    </div>
  </div>
  <div className='mt-5 d-flex justify-content-center align-items-center mx-auto' style={{ width:"90%" , height:"3px" , backgroundColor:"black"  }}></div>
</div>

 </div>
  )
}

export default Home