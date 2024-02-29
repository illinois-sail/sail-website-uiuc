// Carousel.js
import React, { useState, useEffect } from 'react';
import "./Carousel.css";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const imageStyles = {
        width: '900px', 
        height: '600px', 
        objectFit: 'cover'
    };


    // auto-advance using useEffect
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000); 

        // Clean up the interval on unmount
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="carousel">
            <div class="rounded-border-gradient"> 
                <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} style={imageStyles} /> 
            </div>
            <div class="carousel-buttons"> 
                <button className="button-63 prev" onClick={prevSlide}>
                &lt;
                </button>
                <button className="button-63 next" onClick={nextSlide}>
                &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
