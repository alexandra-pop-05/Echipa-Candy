import React from "react";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Home.css';
import image1 from '../assets/photos/img1.jpg';
import image2 from '../assets/photos/img1.jpg';
import image3 from '../assets/photos/img1.jpg';
import image4 from '../assets/photos/img1.jpg';
import image5 from '../assets/photos/img1.jpg';



const handleDragStart = (e) => e.preventDefault();

const Home = () =>{
    return (
        <div className="home">
            <AliceCarousel autoPlay autoPlayInterval="1500">
                <img src={image1} onDragStart={handleDragStart} role="presentation" className="sliderImage"/>
                <img src={image2} onDragStart={handleDragStart} role="presentation" className="sliderImage"/>
                <img src={image3} onDragStart={handleDragStart} role="presentation" className="sliderImage"/>
                <img src={image4} onDragStart={handleDragStart} role="presentation" className="sliderImage"/>
                <img src={image5} onDragStart={handleDragStart} role="presentation" className="sliderImage"/>
            </AliceCarousel> 
        </div>
    );
}

export default Home;