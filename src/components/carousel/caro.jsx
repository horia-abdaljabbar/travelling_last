import React, { useState } from 'react';
import '../carousel/caro.css'; // Import custom CSS for styling

const CarouselBox = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            title: "الحج والعمرة",
            spantitle: " رحلات 3",
            text: "رحلات الحج والعمرة تقسم إلى المدينة ومكة او فقط مكة فقط يمكنكم النظر إلى البرنامج",
            image: 'alhaj.png',
        },
        {
            title: "بيروت",
            spantitle: " رحلات 1",
            text: "",
            image: 'burit.jpg',
        },
        {
            title: "جنوب آسيا",
            spantitle: " رحلات 11",
            text: "رحلات جنوب آسيا",
            image: 'Asia.jpeg',
        },
        {
            title: "رحلات تركيا",
            spantitle: " رحلات 13",
            text: "أجمل وأفضل العروض تجدونها لدينا",
            image: 'turkey.jpeg',
        },
        {
            title: "رحلات مصر",
            spantitle: " رحلات 8",
            text: "",
            image: 'egypt.jpg',
        },
        {
            title: "رحلات شرق آسيا",
            spantitle: " رحلات 11",
            text: "",
            image: 'east.jpeg',
        },

    ];


    const cardsPerView = 3; // Number of cards to display at once
    const totalSlides = Math.ceil(slides.length / cardsPerView);
    const goToSlide = (index) => {
        console.log(`Changing to slide ${index}`); // Debugging log
        setCurrentIndex(index);
        console.log(totalSlides);
        console.log(slides.length);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner"  style={{ 
                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`, 
                    
                }}>
                {slides.map((slide, index) => (
                    <div
                        className="carousel-item"
                        key={index}
                        style={{ width: `${100 / totalSlides}%` }}
                    >
                        <div className="card" key={index}>
                            <div className='card-image'>
                                <img src={slide.image} alt={`Slide ${index + 1}`} />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-content">
                                <h3>{slide.title}<span>{slide.spantitle}</span></h3>
                                <p>{slide.text}</p>
                                <button>اعرف أكثر</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {[...Array(slides.length)].map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default CarouselBox;

