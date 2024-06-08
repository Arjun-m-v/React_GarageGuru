import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
<Navbar className="bg-dark">
        <Container>
            <Link to={'/'} style={{textDecoration:'none'}}>
                <Navbar.Brand href="#home" className='text-light'>
                    <i className="fa-solid fa-car fa-beat-fade" style={{color: "#de1212"}}/>
                    Garage-Guru
                </Navbar.Brand>
          </Link>
          <Link className='btn btn-outline-light' style={{backgroundColor:'green'}} to={'/customer'}>
            Customer
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </Container>
      </Navbar>  )
}

export default Header