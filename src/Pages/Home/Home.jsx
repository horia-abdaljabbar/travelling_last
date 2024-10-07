import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Home.css";
import ImageSlider from "../../components/slider/slider.jsx";
import OfferCard from "../offers/offers.jsx";
import BenefitCard from "../../components/cards/cards.jsx";
import { useTranslation } from "react-i18next";
// import { LanguageContext } from "../../components/context/Language.jsx";
import { useContext } from "react";



function Home() {
    const { t, i18n } = useTranslation();
// const {language} =useContext(LanguageContext);
const l=localStorage.getItem('lang');

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    const toggleExpand1 = () => {
        setIsExpanded1(!isExpanded1);
    };
    const toggleExpand2 = () => {
        setIsExpanded2(!isExpanded2);
    };
    const toggleExpand3 = () => {
        setIsExpanded3(!isExpanded3);
    };
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const offers1 = [
        {
            image: "Fethiye.jpg",
            title: t('fathiaTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: " 492" +t('dinar'),
        },
        {
            image: "intal.jpg",
            title: t('antalyaTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: "316"+ t('dinar'),
        },
        {
            image: "tarb.jpg",
            title: t('trabzonTitle'),
            description:t('4days') +"/"+ t('3nights'),
            offer: "374"+ t('dinar'),
        },
        {
            image: "ista.jpg",
            title: t('istanbulTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: "299"+ t('dinar'),
        },
        {
            image: "marm.jpg",
            title: t('marmarisTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: "463"+ t('dinar'),
        },
    ];
    const offers2 = [
        {
            image: "Cairo.JPG",
            title: t('cairoTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: "383"+ t('dinar'),
        },
        {
            image: "sharm.jpg",
            title: t('sharmTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: "241"+ t('dinar'),
        },
        {
            image: "alexandria.jpg",
            title: t('alexandriaTitle'),
            description: t('4days') +"/"+ t('3nights'),
            offer: "383"+ t('dinar'),
        },
        {
            image: "the.jpg",
            title: t('gardaqaTitle'),
            description:t('4days') +"/"+ t('3nights'),
            offer: "258"+ t('dinar'),
        },

    ];
    const offers3 = [
        {
            image: "amman.jpg",
            title: t('ammanAqabaWadi'),
            description: t('4days') +"/"+ t('3nights'),
            offer: " 75"+ t('dinar'),
        },
        {
            image: "aqaba.jpg",
            title: t('ammanAqabaWadi'),
            description: t('5days') +"/"+ t('4nights'),
            offer: "85"+ t('dinar')
        },
        {
            image: "aqaba.jpg",
            title: t('ammanAqabaWadi'),
            description:  t('5days') +"/"+ t('4nights'),
            offer: "85"+ t('dinar')
        },
        {
            image: "wadi.jpg",
            title: t('ammanAqabaWadi'),
            description: t('6days') +"/"+ t('5nights'),
            offer: "125"+ t('dinar'),
        },

    ];
    const offers4 = [
        {
            image: "makka.jpg",
            title: t('omraByAir'),
            description: t('8days')+"/"+ t('7nights'),
            offer: ""+ t('dinar'),
        },
        {
            image: "medina.jpg",
            title: t('omraByAir'),
            description:  t('5days') +"/"+ t('4nights'),
            offer: ""+ t('dinar'),
        },
        {
            image: "makka.jpg",
            title: t('omraByLand'),
            description:t('12Days'),
            offer: ""+ t('dinar'),
        },
        {
            image: "medina.jpg",
            title: t('omraByLand'),
            description: t('15Days'),
            offer: ""+ t('dinar'),
        },

    ];

    const benefits = [
        {
            image: "cash-flow.png",
            title: t('overallPricePackages')
        },
        { image: "surf-van.gif", title: t('internalTouristTours') },
        { image: "travel.png", title: t('anAccompanyingPersonDuringTheTrip') },
        { image: "hotel.gif", title: t('ChooseTheBestHotels') },
        { image: "give-money.png", title: t('specialPricesForChildren') },
    ];

    useEffect(() => {
        localStorage.getItem('i18nextLng');
        }, [i18n, i18n.language])
    
        useEffect(() => {
            if(i18n.dir() === 'ltr')
            {
                document.querySelector('body header').setAttribute('dir','rtl');
                document.querySelector('body header .language-select').setAttribute('style', 'background-position: left  center;');
                document.querySelector('body main .journies').setAttribute('dir','rtl');
                document.querySelector('body main .why-us').setAttribute('dir','rtl');


            }
            else
            {
                document.querySelector('body header').setAttribute('dir','ltr');
                document.querySelector('body header .language-select').setAttribute('style', 'background-position: right  center;');
                document.querySelector('body main .journies').setAttribute('dir','ltr');
                document.querySelector('body main .why-us').setAttribute('dir','ltr');


            }
        }, [i18n, i18n.language])
    return (

        <>
            {/* ref={componentRef} */}
            <main >
                <div id="slider" className="slider">
                    <ImageSlider />
                </div>

                <div id="why" className="why-us">
                    <div className="container">
                        <h2> {t('whyBest') }</h2>
                        <div className="card-grid">
                            {benefits.map((benefit, index) => (
                                <BenefitCard key={index}
                                    image={benefit.image}
                                    title={benefit.title}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div id="journies" className="journies">
                    <div className="container">
                        <span>{t('discover')}</span>
                        <h2>{t('tours')}</h2>
                        <div className="card-content">
                            <h4>{t('turkeyTrips')}</h4>
                            <div className={`item-list ${isExpanded ? "expanded" : "collapsed"}`}>
                                {offers1.map((offer, index) => (
                                    <OfferCard
                                        key={index}
                                        image={offer.image}
                                        title={offer.title}
                                        description={offer.description}
                                        offer={offer.offer}
                                    />
                                ))}
                            </div>
                            {/* Toggle button */}
                            <button onClick={toggleExpand} className="toggle-button">
                                {isExpanded ? t('less') : t('more')}
                            </button>
                        </div>
                        <div className="card-content">
                            <h4>{t('egyptTrips')}</h4>
                            <div className={`item-list ${isExpanded1 ? "expanded" : "collapsed"}`}>
                                {offers2.map((offer, index) => (
                                    <OfferCard
                                        key={index}
                                        image={offer.image}
                                        title={offer.title}
                                        description={offer.description}
                                        offer={offer.offer}
                                    />
                                ))}
                            </div>
                            {/* Toggle button */}
                            <button onClick={toggleExpand1} className="toggle-button">
                                {isExpanded1 ? t('less') : t('more')}
                            </button>
                        </div>
                        <div className="card-content">
                            <h4>{t('jordanTrips')}</h4>
                            <div className={`item-list ${isExpanded2 ? "expanded" : "collapsed"}`}>
                                {offers3.map((offer, index) => (
                                    <OfferCard
                                        key={index}
                                        image={offer.image}
                                        title={offer.title}
                                        description={offer.description}
                                        offer={offer.offer}
                                    />
                                ))}
                            </div>
                            {/* Toggle button */}
                            <button onClick={toggleExpand2} className="toggle-button">
                                {isExpanded2 ? t('less') : t('more')}
                            </button>
                        </div>
                        <div className="card-content" >
                            <h4>{t('umrahTrips')}</h4>
                            <div className={`item-list ${isExpanded3 ? "expanded" : "collapsed"}`}>
                                {offers4.map((offer, index) => (
                                    <OfferCard
                                        key={index}
                                        image={offer.image}
                                        title={offer.title}
                                        description={offer.description}
                                        offer={offer.offer}
                                    />
                                ))}
                            </div>
                            {/* Toggle button */}
                            <button onClick={toggleExpand3} className="toggle-button">
                                {isExpanded3 ? t('less') : t('more')}
                            </button>
                        </div>
                    </div>
                </div>
                {/* <button onClick={handlePrint}>Print this out!</button> */}

                {/* عرض ملف PDF في iframe */}
                {/* {pdfPreviewUrl && (
                    <iframe
                        src={pdfPreviewUrl}
                        width="100%"
                        height="500px"
                        title="PDF Preview"
                    />
                )} */}
            </main >
        </>
    )
}
export default Home