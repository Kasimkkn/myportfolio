import img1 from '../images/img-1.png'
import pos from '../images/pos.png'
import img2 from '../images/snap.png'
import img3 from '../images/lens.png'
import img4 from '../images/educa.png'
import mir from '../images/mir.png'
import dst from '../images/ds.png'
const Portfolio = () => {
  return (
    <section className="portfolio">

    <h1 className="heading"> <span>my</span> work </h1>

    <div className="box-container">

        <div className="box">
            <img src={pos} alt="pos"></img>
            <div className="content">
                <h3>A Resturant Billing Dekstop App</h3>
                <p>Billing , Inventory , Reports , POS</p>
                <a href="https://github.com/Kasimkkn/develpoment-pos" target='_blank'>live</a>
            </div>
        </div>
        <div className="box">
            <img src={img1} alt=""></img>
            <div className="content">
                <h3>Luxify Shoes Store</h3>
                <p>premium and trendy shoes website with admin panel</p>
                <a href="https://luxifys.vercel.app/" target='_blank'>live</a>
            </div>
        </div>

        <div className="box">
            <img src={img2} alt=""></img>
            <div className="content">
                <h3>SnapGram</h3>
                <p>A Social Media Web App</p>
                <a href="https://github.com/Kasimkkn/social-media" target='_blank'>code</a>
            </div>
        </div>
       
        <div className="box">
            <img src={dst} alt=""></img>
            <div className="content">
                <h3>D-Studio</h3>
                <p>A Web App For Digitally crafted brand experiences</p>
                <a href="https://dstudio2.netlify.app" target='_blank'>code</a>
            </div>
        </div>
        <div className="box">
            <img src={mir} alt=""></img>
            <div className="content">
                <h3>Miranda-News</h3>
                <p>A News Paper Web App Frontend</p>
                <a href="https://github.com/Kasimkkn/Miranda" target='_blank'>code</a>
            </div>
        </div>
        <div className="box">
            <img src={img3} alt=""></img>
            <div className="content">
                <h3>Eyescare</h3>
                <p>A Web App Frontend For Selling Eyeglasses</p>
                <a href="https://github.com/Kasimkkn/eyescare" target='_blank'>code</a>
            </div>
        </div>

        <div className="box">
            <img src={img4} alt=""></img>
            <div className="content">
                <h3>Educa</h3>
                <p>A Web App Frontend For Education</p>
                <a href="https://github.com/Kasimkkn/education" target='_blank'>code</a>
            </div>
        </div>
    </div>
    
</section>


  )
}

export default Portfolio