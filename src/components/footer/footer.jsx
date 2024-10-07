import React ,{useEffect} from "react";
import "../footer/footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();
    const l=localStorage.getItem('lang');

console.log(l + "footer");
    useEffect(() => {
        localStorage.getItem('i18nextLng');
        }, [i18n, i18n.language])
    
        useEffect(() => {
            if(i18n.dir() === 'ltr')
            {
                document.querySelector('body footer').setAttribute('dir','rtl');
                let labels=document.querySelectorAll('.contact-form label');
                for(let i=0;i<labels.length;i++){
                console.log(labels[i]);
                labels[i].setAttribute('style', 'text-align: left;');
                }
            }
            else
            {
                document.querySelector('body footer').setAttribute('dir','ltr');
                let labels=document.querySelectorAll('.contact-form label');
                for(let i=0;i<labels.length;i++){
                console.log(labels[i]);
                labels[i].setAttribute('style', 'text-align: right;');
                }
            }
        }, [i18n, i18n.language])
    return (
        <>
            <footer>


                <div id="contact" className="topfooter">
                    <div className="container">
                        <div className="row">
                            <img src="logo2.gif" />
                            <p>{t('specialTours')}</p>
                            <a className="tel">05973003718</a>
                            <a className="tel">0599846966</a>

                        </div>
                        <div className="contact-form">
                            <div className="title">
                                <h4>{t('contactUs')}</h4>
                                <img src="mail.gif"  />
                            </div>
                            <form >
                                <div>
                                    <label>{t('name')}</label>
                                    <input
                                        type="text"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <label>{t('subject')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <label>{t('message')}</label>
                                    <textarea
                                        name="message"
                                    />
                                </div>
                                <button >{t('send')}</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="alrights">
                    <div className="container">
                        <span>|</span>
                        {t('copyRight')}
                        <span>|</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;