import img1 from '../images/img-1.png'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img5 from '../images/img-5.jpg'
import img6 from '../images/img-6.jpg'

const Portfolio = () => {
  return (
    <section className="portfolio">

    <h1 className="heading"> <span>my</span> work </h1>

    <div className="box-container">

        <div className="box">
            <img src={img1} alt=""></img>
            <div className="content">
                <h3>Luxify Shoes Store</h3>
                <p>premium and trendy shoes website with admin panel</p>
                <a href="https://luxifys.vercel.app/" target='_blank'>read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img2} alt=""></img>
            <div className="content">
                <h3>project 02</h3>
                <p>will update soon😊</p>
                <a href="#">read more</a>
            </div>
        </div>
       
        <div className="box">
            <img src={img3} alt=""></img>
            <div className="content">
                <h3>project 03</h3>
                <p>will update soon😊</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img4} alt=""></img>
            <div className="content">
                <h3>project 04</h3>
                <p>will update soon😊</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img5} alt=""></img>
            <div className="content">
                <h3>project 05</h3>
                <p>will update soon😊</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div className="box">
            <img src={img6} alt=""></img>
            <div className="content">
                <h3>project 06</h3>
                <p>will update soon😊</p>
                <a href="#">read more</a>
            </div>
        </div>

    </div>

    <a href="#" className="btn"> load more <i className="fas fa-redo"></i> </a>
    
</section>


  )
}

export default Portfolio