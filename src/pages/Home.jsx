import React from 'react'
import myphoto from '../images/kasim.png'

const Home = () => {
  return (
    <section className="home">

    <div className="image">
        <img src={myphoto} alt=""></img>
    </div>

    <div className="content">
        <h3>hi, i am kasim kadiwala</h3>
        <span>front-end developer</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
        <a href="#" className="btn"> about me <i className="fas fa-user"></i> </a>
    </div>

</section>


  )
}

export default Home