
import Upload from 'feather-icons-react/build/IconComponents/Upload';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div> <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand>

      <Link to={''} style={{textDecoration:"none "}} >

         <Upload      color='white' sizw={48}  />
          <span className='text-light ms-4 '> video upload</span>
      </Link>

      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header