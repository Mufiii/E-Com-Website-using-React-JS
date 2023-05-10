import React from 'react'
import './Arrivals.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Arrivals() {
  return (
    <div className='arrivels'>
        <h3>New Arrivals</h3>
        <p className='para'> We are excited to introduce our latest collection of new arrivals,<br /> featuring the latest trends in fashion.</p>

        <Card className='' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="dress.jpg/100px180" />
              <Card.Body>
                <Card.Title>Lilly Pulitzer®</Card.Title>
                <Card.Text>
                Shift Dress & Bloomers (Baby)
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
        </Card>
         
    </div>
  )
}

export default Arrivals