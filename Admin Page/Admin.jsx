import React from 'react'
import '../App.css'
import { FaUserAlt } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { SiMoneygram } from 'react-icons/si'
import { Link, Outlet } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'


function Admin() {
  return (
    <div className='d-flex main'>
      <div className='admin'>
        <h2 className='d-flex heading mt-3 justify-content-center '>ADMIN</h2>
        <ListGroup className="list-group">
          <ListGroup.Item ><Link to="/admin/users"> <FaUserAlt /> Users </Link></ListGroup.Item>
          <ListGroup.Item ><Link to="/admin/viewproducts"><FaList /> Product </Link></ListGroup.Item>
          <ListGroup.Item ><SiMoneygram /> Revenue</ListGroup.Item>
        </ListGroup>
      </div>
      <Outlet />
    </div>
  )
}

export default Admin