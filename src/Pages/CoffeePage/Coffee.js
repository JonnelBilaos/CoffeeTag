import React from 'react'

import backgroundimg from '../Background.jpg'
import NavBar from '../../Components/NavBar'

export default function Coffee() {
  const bodyStyle = {
    backgroundImage: `url(${backgroundimg})`,
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width:'100%',
}



  return (
    <div>
      <div className='body bg-body-tertiary' style={bodyStyle}>
      <NavBar />


      </div>
    </div>
  )
}
