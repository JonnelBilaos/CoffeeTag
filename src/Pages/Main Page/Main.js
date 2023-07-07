import React, { Component } from 'react'
import backgroundimg from '../Background.jpg'
import img1logo from './carousel1.gif'
import img2logo from './carousel2.gif'
import img3logo from './carousel3.gif'
import NavBar from '../../Components/NavBar'
import quots from '../Main Page/text.png'

export default class Main extends Component {
  render() {
    const bodyStyle = {
        backgroundImage: `url(${backgroundimg})`,
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width:'100%',
    }
    const indicator = {
      paddingTop:"2%",
      paddingLeft: "2%",
      float: "left",
      height:'auto',
      width:'40%',
    }
    const img1 = {
      float: "left",
      height:'auto',
      width:'40%',
      border:'1%'
    }

    const img2 = {
      float: "left",
      backgroundColor:'trasparent',
      width:'70%',
      height:'auto',
      paddingTop: "1%",
      paddingLeft: "1%",
    }

    return (
      <div>
        <div className='body bg-body-tertiary' style={bodyStyle}>
        <NavBar />

        <div id="carouselExampleIndicators" class="carousel slide" style={indicator} >
  <div class="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src={img1logo} class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={img2logo}class="d-block w-100" />
    </div>
    <div class="carousel-item">
      <img src={img3logo}class="d-block w-100" />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
            
            <div style={img2}>
                <img src={quots} style={img2} />
            </div>
            
        </div>
      </div>
    )
  }
}
