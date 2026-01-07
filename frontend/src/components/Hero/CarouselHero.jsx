import React, { useState, useEffect } from "react";
import "../Hero/CarouselHero.css";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img1 from "../images/1.avif";
import img2 from "../images/2.jpg";
import img3 from "../images/3.avif";

const slidesData = [
  {
    img: img1,
    title: "Explore the Wilderness",
    text: "Discover breathtaking landscapes.",
    button: "View Gallery",
  },
  {
    img: img2,
    title: "Future of Technology",
    text: "Innovations that change the world.",
    button: "Learn More",
  },
  {
    img: img3,
    title: "Creative Spaces",
    text: "Find your next inspiration.",
    button: "Get Started",
  },
];

const CarouselHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const whatsappNumber = "9148798244";
  const whatsappMessage = "Hello FourSight Learning, I'd like to know more about your training programs.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="carousel-hero-banner">
      {/* === Floating Social Media Icons === */}
      <div className="floating-social-icons">
         <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Chat on WhatsApp"
          className="whatsapp-icon"
        >
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/foursight_learning" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/foursight-learning-private-limited/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>

      {/* === Carousel Slides === */}
      <div className="carousel-images">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <a href="#" className="cta-button">
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* === Dots Indicators === */}
      <div className="carousel-indicators">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
