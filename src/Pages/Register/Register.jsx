import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState ,useEffect } from "react";
import planeBgVideo from '../../video/clouds.mp4'
import { useTranslation } from "react-i18next";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

function Register() {
  const { t ,i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const [lang,setLang]=useState('');

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = (e) => {
    e.preventDefault();
    setShowPassword1(!showPassword1);
  };
  const changeLanguage=(e)=>{
    const lang=e.target.value;
console.log(e.target.value);
if(e.target.value == 'ar')
{
  i18n.changeLanguage('ar');
  setLang(i18n.language);
  console.log('hhhhh'+lang);

}

else
{
  i18n.changeLanguage('en');
  setLang(i18n.language);
  console.log(lang);

}
  }


  const handleChange = (value) => {
    setPhone(value);

  };

  useEffect(()=>{
    localStorage.getItem('i18nextLng');
      },[i18n,i18n.language])

useEffect(()=>{


if(i18n.dir()=='ltr'){
  document.querySelector('.regPageAll .loginSys').setAttribute('dir','rtl');

  document.querySelector('.email ').classList.remove('enEmail');
  document.querySelector('.email').classList.add('arEmail');
  document.querySelector('.password ').classList.remove('enPassword');
  document.querySelector('.password').classList.add('arPassword');
  document.querySelector('.password1 ').classList.remove('enPassword');
  document.querySelector('.password1').classList.add('arPassword');
  document.querySelector('.eyeIcon ').classList.remove('enEyeIcon');
  document.querySelector('.eyeIcon').classList.add('arEyeIcon');
  document.querySelector('.eyeIconN ').classList.remove('enEyeIcon');
  document.querySelector('.eyeIconN').classList.add('arEyeIcon');
  
}

else{
  document.querySelector('.regPageAll .loginSys').setAttribute('dir','ltr');

  document.querySelector('.email ').classList.remove('arEmail');
  document.querySelector('.email').classList.add('enEmail');
  document.querySelector('.password ').classList.remove('arPassword');
  document.querySelector('.password').classList.add('enPassword');
  document.querySelector('.password1 ').classList.remove('arPassword');
  document.querySelector('.password1').classList.add('enPassword');
  document.querySelector('.eyeIcon ').classList.remove('arEyeIcon');
  document.querySelector('.eyeIcon').classList.add('enEyeIcon');
  document.querySelector('.eyeIconN ').classList.remove('arEyeIcon');
  document.querySelector('.eyeIconN').classList.add('enEyeIcon');
}

},[i18n,i18n.language])


  return (
    <>
    <div className="regPageAll display-flex justify-content-center flex-column">
<div className="loginSys">
    <video autoPlay loop muted>
     <source src={planeBgVideo} type="video/mp4"/>
   </video>
  

   <div className="container d-flex justify-content-between align-items-center">
   <div className="siteicon child">
                        <a href="">
                            <img src="logo.png" />
                        </a>
                    </div>
   <div  className="language-select-container d-flex justify-content-center align-items-center">
  <img src="./languageNew.svg" width={25}/>
      <select className="language-select" onChange={changeLanguage} value={localStorage.getItem('i18nextLng')} >
      {/* <option selected>{lang}</option> */}
      <option value={'ar'}>{t('arabic')}</option>
      <option value={'en'}>{t('english')}</option>
</select> 
</div>
   </div>
    <div className="registerSection mt-1 bg-body shadow bg-success">
       {/* <img src="/loginImg.jpg" className="bg-body registrationImg" /> */}

       <form className="registerForm mb-5">
         {/* <img src="/YounisCoLogo.png" className="logo"/> */}

         {/* <h1 className="authTitle mb-5">Signup</h1> */}
         <h1 className="authTitle mb-5">{t('signUp')}</h1>

         {/* <p>welcome {userName}</p> */}
         <div className="ms-auto inputs d-flex flex-column">
           <div className="d-flex flex-column mb-4">
             <div className="col input-boxPass d-flex align-items-center justify-content-center ">
               <input
                 type="email"
                 className="form-control email"
                 name="email"
                 placeholder={t('emailAddress')}
                //  style={{
                //   backgroundImage:lang==='ar'?'url("/emailIcon.svg")'
                //   :'url("/emailIcon.svg")',
                //   backgroundRepeat:"no-repeat",
                //   backgroundPosition:lang==='ar'?'98% 50%':'2% 50%',
                //   backgroundSize:"18px"

                //  }}
               />
             </div>
           </div>
           <div className="d-flex flex-column mb-4">
             <div className="col input-boxPass d-flex align-items-center justify-content-center ">
          
 <PhoneInput
        defaultCountry="ps"
        value={phone}
        onChange={handleChange}
        className="phone"
        placeholder="رقم الجوال"

        
      />
      {/* <label className="phoneLabel">رقم الجوال </label> */}

             </div>
           </div>
           <div className="d-flex flex-column mb-4">
             <div className="col input-boxPass d-flex align-items-center justify-content-center">
               <input
                 className="form-control password1"
                 name="password"
                 placeholder={t('password')}
                 type={showPassword ? "text" : "password"
                 }

                //  style={{
                //   backgroundImage:lang==='ar'?'url("/passwordIcon.svg")'
                //   :'url("/passwordIcon.svg")',
                //   backgroundRepeat:"no-repeat",
                //   backgroundPosition:lang==='ar'?'98% 50%':'2% 50%',
                //   backgroundSize:"18px"

                //  }}
               />
               <button
                 className="eyeIcon border border-0 bg-white"
                 onClick={togglePasswordVisibility}
               >
                 {showPassword ? (
                   <img src="/eyeIcon.svg"
                   />
                 ) : (
                                       <img src="/hideEyeIcon.svg" />

                 )}
               </button>
             </div>
           </div>

           <div className="d-flex flex-column mb-4">
             <div className="col input-boxPass d-flex align-items-center justify-content-center">
               <input
                 className="form-control password"
                 name="confirmPassword"
                //  placeholder="confirm password"
                 placeholder={t('confirmPassword')}
                 type={showPassword1 ? "text" : "password"}
                //  style={{
                //   backgroundImage:lang==='ar'?'url("/passwordIcon.svg")'
                //   :'url("/passwordIcon.svg")',
                //   backgroundRepeat:"no-repeat",
                //   backgroundPosition:lang==='ar'?'98% 50%':'2% 50%',
                //   backgroundSize:"18px"

                //  }}
               />
               <button
                 className="eyeIconN border border-0 bg-white"
                 onClick={togglePasswordVisibility1}
               >
                 {showPassword1 ? (
                   <img src="/eyeIcon.svg" />
                 ) : (
                                       <img src="/hideEyeIcon.svg" />

                 )}
               </button>
             </div>
           </div>

           <div className="col d-flex flex-column align-items-end">
             <NavLink className="haveAccount" to="/Login">
               {/* Already hava an account? */}
               {t('havaAccount')}
             </NavLink>
             <button type="submit" className="submitBtn">
              {t('signBtn')}
             </button>
           </div>
         </div>
       </form>
     </div>
    </div>
      </div>
    <div/>
      
    </>
  );
}

export default Register;
