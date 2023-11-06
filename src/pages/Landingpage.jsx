import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpage() {


  const navigate=useNavigate()

const handleNavigate=()=>{
  //  to navigate to home there is a hook to navigTE KNOWN AS USENAVIGATE
navigate('/home')
  
}

  return (
    <div>

<Row>  
    <Col>
    
    </Col>
    <Col lg={6}>
    <h1>Welcome to video.com</h1>
    <p style={{textAlign:'justify'}}  >Where user can use their favourite videos .User can upload any videos by copy and paste their url video.com will allow to add and remove their uploaded videos and also arrange them in different catagories by drag and drop it is free try it now !!!!</p>
    <button id='btn'  onClick={handleNavigate} className='btn btn-success'> Click here to know more</button>

    
    
    </Col>

    <Col lg={4}>
        <img className='img-fluid'  src="https://img.freepik.com/premium-photo/concept-eternal-theme-about-eternity-music-musical-instruments-good-mood-ascended-aspiration-action-treble-clef-sheet-music_771426-4115.jpg" alt="" />
        
         </Col>

    <Col></Col>
    
       </Row>



    </div>
  )
}

export default Landingpage