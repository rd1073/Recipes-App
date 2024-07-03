// src/components/HeroCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import drinks from "../static/drinks.jpg";
import meat from "../static/meat.jpg";
import burger from "../static/burger1.jpg";
import appetizer from "../static/appetizer.jpg";

const Hero = () => {
    const images = [
        drinks, meat, burger, appetizer
    ];

    return (
        <div className="relative h-screen">
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
            >
                {images.map((image, index) => (
                    <div key={index} className="h-screen">
                        <img src={image} alt={`Slide ${index + 1}`} className="object-cover h-full w-full" />
                    </div>
                ))}
            </Carousel>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 md:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4">Welcome to Our Kitchen</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-8">Discover amazing food here</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Hero;
