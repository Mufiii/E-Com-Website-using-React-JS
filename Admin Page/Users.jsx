import React, { useContext } from 'react'
import { Context } from '../Utils/Context'
import { Table } from 'react-bootstrap'

function Users() {

  const conxt = useContext(Context)
  const { login } = conxt


  return (
    <div className='add'>
        <h2 className='d-flex justify-content-center mt-5 m-b' > USERS</h2>
        <input type="text" className='field' />

        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {login.map((user)=>{
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              )
            })}
              
          </tbody>
        </Table>
              
    </div>
  )
}

export default Users