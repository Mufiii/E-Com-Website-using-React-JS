import React from 'react'
import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { proData } from '../Product/ProductsData';

function Products() {

  const navigate = useNavigate()

  const data = proData.filter((item) => item.type === 'shoe' )
  console.log(data);

  return (
    <div>
        <h3 className='container d-flex justify-content-start mt-5 fs-1'>Products</h3>
        <div className='d-flex flex-wrap justify-content-around align-items-stretch container'>
          <div className='row gap-5'>
        {data.map ((item) =>{
            return <Card className='shadow p-3 mb-5 bg-body rounded  mt-4 W-75'  style={{ width: '18rem',alignItems:'center' }} key={item.id}>
            <Card.Img  variant="top"  src={item.image} style={{ height: '50%', width: '50%', }} />
            <Card.Body>
              <Card.Title>{item.small}</Card.Title>
              <Card.Text>
               {item.desc}
              </Card.Text>
              <Card.Text className=''>
                <strong>${item.price}</strong>
              </Card.Text>
              <Button variant="primary" >View Details</Button>
            </Card.Body>
      </Card>
        })}
        </div>
        </div>
    </div>
  )
}

export default Products