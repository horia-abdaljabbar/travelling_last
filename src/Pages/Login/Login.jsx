import React from "react";
import "./Login.css";
import "../Register/Register.css"
import { NavLink } from "react-router-dom";
import { useState ,useEffect } from "react";
import planeBgVideo from '../../video/clouds.mp4'
import { useTranslation } from "react-i18next";

function Login() {
  const { t ,i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [lang,setLang]=useState('');

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
   


        
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


  useEffect(()=>{
localStorage.getItem('i18nextLng');
  },[i18n,i18n.language])
useEffect(()=>{


if(i18n.dir()=='ltr'){
  document.querySelector('.loginSys').setAttribute('dir','rtl');

  document.querySelector('.email ').classList.remove('enEmail');
  document.querySelector('.email').classList.add('arEmail');
  document.querySelector('.password ').classList.remove('enPassword');
  document.querySelector('.password').classList.add('arPassword');
  document.querySelector('.eyeIcon1').classList.remove('enEyeIcon');
  document.querySelector('.eyeIcon1').classList.add('arEyeIcon');
  
}

else{
  document.querySelector(' .loginSys').setAttribute('dir','ltr');

  document.querySelector('.email ').classList.remove('arEmail');
  document.querySelector('.email').classList.add('enEmail');
  document.querySelector('.password ').classList.remove('arPassword');
  document.querySelector('.password').classList.add('enPassword');
  document.querySelector('.eyeIcon1 ').classList.remove('arEyeIcon');
  document.querySelector('.eyeIcon1').classList.add('enEyeIcon');
}

},[i18n,i18n.language])
useEffect(()=>{
  setLang(localStorage.getItem('i18nextLng'));
    },[i18n,i18n.language])

  return (
    <>
   
    <div className="loginSys">
    <video autoPlay loop muted>
     <source src={planeBgVideo} type="video/mp4"/>
   </video>
   <div className="container d-flex justify-content-between align-items-center ">
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
    <div className="registerSection mb-5 mt-1 bg-body shadow">
        {/* <img src="/loginImg.jpg" className="bg-body registrationImg" /> */}

        <form className="registerForm mb-5">
          {/* <img src="/YounisCoLogo.png" className="logo"/> */}
          <div className="col d-flex flex-column align-items-start justify-content-end">
              <NavLink className="arrowIcon" to="../Home" 
              >
              <img src="arrowIcon.svg" className="w-100"/>
              </NavLink>
              </div>
          {/* <h1 className="authTitle mb-5">Login</h1> */}
          <h1 className="authTitle mb-5">{t('login')}</h1>

          {/* <p>welcome {userName}</p> */}
          <div className="ms-auto">
            <div className="d-flex flex-column mb-4">
              <div className="col input-boxPass1 d-flex align-items-center justify-content-center">
                <input
                  type="email"
                  className="form-control email shadow-1 "
                  name="email"
                  placeholder={t('emailAddress')}
                  // style={{
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
              <div className="col input-boxPass1 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="password"
                  placeholder={t('password')}
                  type={showPassword ? "text" : "password"}
                  // style={{
                  //   backgroundImage:lang==='ar'?'url("/passwordIcon.svg")'
                  //   :'url("/passwordIcon.svg")',
                  //   backgroundRepeat:"no-repeat",
                  //   backgroundPosition:lang==='ar'?'98% 50%':'2% 50%',
                  //   backgroundSize:"18px"
  
                  //  }}
                />
                <button
                  className="eyeIcon1 border border-0 bg-white"
                  onClick={togglePasswordVisibility}
                >
                 {showPassword ? (
                    <img src="/eyeIcon.svg" />
                  ) : (
                 <img src="/hideEyeIcon.svg" />

                  )}
                </button>
              </div>
            </div>
            <div className="col d-flex justify-content-between align-items-end mb-5">

            <NavLink className="wantToSign me-1" to="/Register">
                {/* Register? */}
               {t('wantToSignUp')}
              </NavLink>
              <NavLink className="haveAccount me-1" to="/SendCodeForForgetPassword">
                {/* Forget your password? */}
                {t('forgetPassword')}

              </NavLink>
           </div>
                       <div className="col d-flex flex-column align-items-end">

              <button type="submit" className="submitBtn">
                {/* Login */}
                {t('login')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
