import React, { useState, useEffect } from "react";

const photos = [
    "frontend/src/components/gallery_photos/IMG_0306.HEIC",
    "frontend/src/components/gallery_photos/IMG_0314.HEIC",
    "frontend/src/components/gallery_photos/IMG_0320.HEIC",
    "frontend/src/components/gallery_photos/IMG_7755.HEIC",
    "frontend/src/components/gallery_photos/IMG_20230408_123950.jpg"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
        );
    };

    // Optional: Auto-advance slides
    useEffect(() => {
        const interval = setInterval(goToNext, 3000); // Change 3000 to your desired interval in milliseconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
        <img src={`/gallery_photos/${photos[currentIndex]}`} alt="Gallery" />
        <button onClick={goToPrevious}>Previous</button>
        <button onClick={goToNext}>Next</button>
        </div>
    );
};

export default Carousel;
