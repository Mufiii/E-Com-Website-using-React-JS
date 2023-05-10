import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate,  } from 'react-router-dom';
import { BsHandbag } from 'react-icons/Bs';
import { TfiUser } from 'react-icons/tfi';
import { AiOutlineHeart } from 'react-icons/Ai';
import { RiLogoutCircleRLine } from 'react-icons/Ri';
import './Navbar.css'
import { Context } from '../Utils/Context';



function NavScrollExample() {

   const navigate = useNavigate()

   const conxt = useContext(Context)
   const {logout,setLogout} = conxt

   const Logout = () => { 
    const logout = window.confirm("Are you Sure")
    if(logout) {
      setLogout(false)
      navigate("/login")
    }else {
      null
    }
   }

   const Login = () => {
    setLogout(true)
    navigate("/")
   }

  return (

  
    <Navbar bg="light" expand="lg" className='sticky-top' >
      <Container>
        <Navbar.Brand as={Link} to="/" ><h5 className='brand'>BABY <span>DEN</span></h5>  </Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll"> 
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll >
            
            <Nav.Link as={Link} to="/adminlogin">Admin</Nav.Link>
            {/* <Nav.Link as={Link} to="/tocart">About Us</Nav.Link>   */}
            <Nav.Link as={Link} to="/product">Shop</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            
          </Nav> 
          <Form className="d-flex w-75">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success me-3">Search</Button>
            <Nav.Link className='heart'><AiOutlineHeart size={30} style={{margin:"10px" , color:"black"}}/></Nav.Link>
            <Nav.Link as={Link} to="/tocart">< BsHandbag size={28} style={{margin:"10px" , color:"black"}} ></BsHandbag> </Nav.Link>
            <Nav.Link>
             { logout ? <RiLogoutCircleRLine onClick={Logout} size={30} style={{margin:"10px" }}/> : <TfiUser onClick={Login} size={30} style={{margin:"10px" }}/>}
            </Nav.Link>
            
          </Form>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
     
  );
}

export default NavScrollExample;

// size={30} style = {{margin:"10px" }}