import React, { useEffect, useState } from 'react'
import Spline from "@splinetool/react-spline";
import './slider.css'

import work1 from '../../images/resume.png'
import work2 from '../../images/mir.png'
import work3 from '../../images/ds.png'
import work4 from '../../images/img-1.png'
import work5 from '../../images/snap.png'
import work6 from '../../images/pos.png'
import work7 from '../../images/lens.png'
import work8 from '../../images/vc-me.png'
import { useNavigate } from 'react-router-dom';

const Slider = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const strings = [
        "web designer",
        "front-end developer",
        "backend developer",
        "software developer",
        "full stack developer",
        "ui/ux designer",
    ];

    useEffect(() => {
        let currentIndex = 0;
        let currentText = "";

        const interval = setInterval(() => {
            if (currentIndex < strings[index].length) {
                currentText += strings[index].charAt(currentIndex);
                setDisplayedText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setDisplayedText("");
                    setIndex((prevIndex) => (prevIndex + 1) % strings.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [index]);

    const handleCLick = () => {
        navigate('/about');
    };

    return (
        <div className="banner">
            <div className="slider" style={{
                '--quantity': '10',
            }}>
                <div className="item" style={{ '--position': '1' }}>
                    <img onClick={handleCLick} src={work1} alt="work 1" />
                </div>
                <div className="item" style={{ '--position': '2' }}>
                    <img onClick={handleCLick} src={work2} alt="work 2" />
                </div>
                <div className="item" style={{ '--position': '3' }}>
                    <img onClick={handleCLick} src={work3} alt="work 3" />
                </div>
                <div className="item" style={{ '--position': '4' }}>
                    <img onClick={handleCLick} src={work4} alt="work 4" />
                </div>
                <div className="item" style={{ '--position': '5' }}>
                    <img onClick={handleCLick} src={work5} alt="work 5" />
                </div>
                <div className="item" style={{ '--position': '6' }}>
                    <img onClick={handleCLick} src={work6} alt="work 6" />
                </div>
                <div className="item" style={{ '--position': '7' }}>
                    <img onClick={handleCLick} src={work7} alt="work 7" />
                </div>
                <div className="item" style={{ '--position': '8' }}>
                    <img onClick={handleCLick} src={work8} alt="work 8" />
                </div>
                <div className="item" style={{ '--position': '9' }}>
                    <img onClick={handleCLick} src={work5} alt="work 9" />
                </div>
                <div className="item" style={{ '--position': '10' }}>
                    <img onClick={handleCLick} src={work3} alt="work 10" />
                </div>
            </div>
            <div className="content">
                <div className="author">
                    <p><b>{displayedText}</b></p>
                </div>
                <div className="model">
                    <Spline
                        scene="https://prod.spline.design/0-77-vpBpPWyxvCW/scene.splinecode"
                    />
                </div>
            </div>
        </div>
    )
}

export default Slider