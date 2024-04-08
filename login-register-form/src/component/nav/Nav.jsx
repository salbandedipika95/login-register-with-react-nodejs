import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import { Container, Navbar } from 'react-bootstrap'

const Nav = () => {
  return (
    <div className='navb'>
      <nav className='main'>
        <ul className='list'>
        <li>
          <Link to='/login' className='link'>LOGIN</Link>
        </li>
        <li>
          <Link to='/register' className='link'>REGISTER</Link>
        </li>
        </ul>
      </nav>
      {/* <Navbar>
            <Container className='navb'>
              <Navbar.Brand href="register">REGISTER</Navbar.Brand>
              <Navbar.Brand href="login">LOGIN</Navbar.Brand>
            </Container>
      </Navbar> */}
    </div>
  )
}

export default Nav