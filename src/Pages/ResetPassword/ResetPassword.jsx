import React from "react";
import "./ResetPassword.css";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import planeBgVideo from '../../video/clouds.mp4'
import { useTranslation } from "react-i18next";
import "../Register/Register.css"



function ResetPassword() {
  const { t ,i18n } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
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


  useEffect(()=>{
    localStorage.getItem('i18nextLng');
      },[i18n,i18n.language])

useEffect(()=>{
document.querySelector('.resetPasswordSection .resetPasswordForm .inputs').dir=i18n.dir();


if(i18n.dir()=='ltr'){
  document.querySelector('.loginSys').setAttribute('dir','rtl');

  document.querySelector('.password ').classList.remove('arPassword');
  document.querySelector('.password').classList.add('enPassword');
  document.querySelector('.password1 ').classList.remove('arPassword1');
  document.querySelector('.password1').classList.add('enPassword1');
  document.querySelector('.eyeIcon2 ').classList.remove('arEyeIcon');
  document.querySelector('.eyeIcon2').classList.add('enEyeIcon');
  document.querySelector('.eyeIconM ').classList.remove('arEyeIcon');
  document.querySelector('.eyeIconM').classList.add('enEyeIcon');
  
}

else{
  document.querySelector('.loginSys').setAttribute('dir','ltr');

  document.querySelector('.password ').classList.remove('enPassword');
  document.querySelector('.password').classList.add('arPassword');
  document.querySelector('.password1 ').classList.remove('enPassword1');
  document.querySelector('.password1').classList.add('arPassword1');
  document.querySelector('.eyeIcon2 ').classList.remove('enEyeIcon');
          document.querySelector('.eyeIcon2').classList.add('arEyeIcon');
          document.querySelector('.eyeIconM ').classList.remove('enEyeIcon');
          document.querySelector('.eyeIconM').classList.add('arEyeIcon');
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
   <div className="container d-flex justify-content-between ">
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
   <div className="resetPasswordSection mb-5 mt-1 bg-body shadow">
        {/* <img src="/loginImg.jpg" className="bg-body" /> */}

        <form
          className="resetPasswordForm  mb-5 "
          //onSubmit={handleForm}
        >
           <div className="col d-flex flex-column align-items-start justify-content-end">
              <NavLink className="arrowIcon" to="/SendCodeForForgetPassword" 
              >
              <img src="arrowIcon.svg" className="w-100"/>
              </NavLink>
              </div>
          {/* <h1 className="authTitle mb-5">Reset Password</h1> */}
          <h1 className="authTitle mb-3">{t('resetPassword')}</h1>
          <img src="/resetPassword.svg" className="keyIcon mb-4" />

          {/* <p className="infoPara mb-2 ">
          enter a <span className="emailWord">new Password </span>
          for your account...</p> */}
          <p className="infoPara mb-3 ">
          {t('enterA')} <span className="emailWord"> {t('newPassword')} </span>
          {t('forYourAccount')}</p>
          <div className="m-auto inputs">
        

          <div className="d-flex flex-column mb-4 inputsForm">
              <div className="col input-boxPass2 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password shadow-1"
                  name="confirmPassword"
                  // placeholder="confirm new password"
                  placeholder={t('newPassword')}
                  // style={{
                  //   backgroundImage:lang==='ar'?'url("/passwordIcon.svg")'
                  //   :'url("/passwordIcon.svg")',
                  //   backgroundRepeat:"no-repeat",
                  //   backgroundPosition:lang==='ar'?'98% 50%':'2% 50%',
                  //   backgroundSize:"18px"
  
                  //  }}
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="eyeIcon2 border border-0 bg-white"
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

            <div className="d-flex flex-column mb-4 inputsForm1">
              <div className="col input-boxPass2 d-flex align-items-center justify-content-center">
                <input
                  className="form-control password1 shadow-1"
                  name="confirmPassword"
                  // placeholder="confirm new password"
                  placeholder={t('confirmPassword')}
                  // style={{
                  //   backgroundImage:lang==='ar'?'url("/passwordIcon.svg")'
                  //   :'url("/passwordIcon.svg")',
                  //   backgroundRepeat:"no-repeat",
                  //   backgroundPosition:lang==='ar'?'98% 50%':'2% 50%',
                  //   backgroundSize:"18px"
  
                  //  }}
                  type={showPassword1 ? "text" : "password"}

                />
                <button
                  className="eyeIconM border border-0 bg-white"
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


            <button type="submit" className="submitBtn">
              {/* Reset Password */}
            {t('resetPasswordBtn')}
            </button>
</div>
          </div>
        </form>
      </div>
   </div>
    </>
  );
}

export default ResetPassword;
