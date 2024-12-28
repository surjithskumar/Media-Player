import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>

           <Link to="/" style={{ textDecoration: "none" }}>  

           <Navbar.Brand href="#home" className='fw-bolder'>
              <i class="fa-solid fa-play fa-beat-fade"></i>{' '}
               Media Player
           </Navbar.Brand>

         </Link>

          
        </Container>
      </Navbar>
    </>
  )
}

export default Header