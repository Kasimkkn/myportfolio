import img1 from "../images/img-1.png";
import pos from "../images/pos.png";
import vcme from "../images/vc-me.png";
import img2 from "../images/snap.png";
import img3 from "../images/lens.png";
import img4 from "../images/educa.png";
import mir from "../images/mir.png";
import dst from "../images/ds.png";
import resume from "../images/resume.png";

const items = [
  {
    id: "item-8",
    image: resume,
    title: "Resume Builder",
    description: "A Web App for building resumes",
    github: "https://github.com/Kasimkkn/Resume-Builder",
    view: "https://github.com/Kasimkkn/Resume-Builder",
  },
  {
    id: "item-9",
    image: vcme,
    title: "VC-ME",
    description: "a Next.js-based Video Conferencing App built",
    github: "https://github.com/Kasimkkn/Vc-Me",
    view: "https://vc-me.vercel.app",
  },
  {
    id: "item-1",
    image: img1,
    title: "Luxify Shoes Store",
    description: "premium and trendy shoes website with admin panel",
    github: "https://github.com/Kasimkkn/luxifyss",
    view: "https://luxifys.vercel.app/",
  },
  {
    id: "item-2",
    image: img2,
    title: "SnapGram",
    description: "A Social Media Web App",
    github: "https://github.com/Kasimkkn/social-media",
    view: "https://snapgram-medias.netlify.app/",
  },
  {
    id: "item-6",
    image: mir,
    title: "Miranda-News",
    description: "A Newspaper Web App Frontend",
    github: "https://github.com/Kasimkkn/Miranda",
    view: "https://mirandapro.netlify.app/",
  },
  {
    id: "item-5",
    image: dst,
    title: "D-Studio",
    description: "A Web App For Digitally crafted brand experiences",
    github: "https://github.com/Kasimkkn/dStudio",
    view: "https://dstudio2.netlify.app",
  },
  {
    id: "item-4",
    image: pos,
    title: "A Restaurant Billing Desktop App",
    description: "Billing, Inventory, Reports, POS",
    github: "https://github.com/Kasimkkn/develpoment-pos",
    view: "https://github.com/Kasimkkn/develpoment-pos",
  },
  {
    id: "item-3",
    image: img3,
    title: "Eyescare",
    description: "A Web App Frontend For Selling Eyeglasses",
    github: "https://github.com/Kasimkkn/eyescare",
    view: "https://github.com/Kasimkkn/eyescare",
  },
  {
    id: "item-7",
    image: img4,
    title: "Educa",
    description: "A Web App Frontend For Education",
    github: "https://github.com/Kasimkkn/education",
    view: "https://github.com/Kasimkkn/education",
  }
]

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1 className="heading">
        <span>my</span> work
      </h1>
      <div className="box-container">
        {items.map((item, index) => (
          <div className={`box`} key={index}>
            <img src={item.image} alt={item.title} />
            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between" , gap: "10px" }}>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  View
                </a>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
