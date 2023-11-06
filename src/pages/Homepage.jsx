import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import VIew from './VIew'
import Category from './Category'
import { Link } from 'react-router-dom'



function Homepage() {


  // create a state for lift
  const [serverRes, setserverRes] = useState({})


  // create a function
  const handlerresponse = (res) => {

    setserverRes(res)
  }





  return (

    <>
      <div>
        <div className='d-flex justify-content-between'>

          <h1 className='text-dark ms-5 mb-5' > All video cards</h1>

          <Link to={'/watchhistory'} style={{ textDecoration: "none", fontSize: "30px", color: "blue" }}>Watchhistory</Link>

        </div>
        <div className='container-fluid' >

          <Col lg={1} >
            <Add handlerresponse={handlerresponse} />
          </Col>


          <Col lg={7} >

            <VIew serverRes={serverRes} />


          </Col>

          <Col lg={4} >
            <Category />
          </Col>

        </div>

      </div>
    </>
  )
}

export default Homepage