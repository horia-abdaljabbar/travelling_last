import React from "react";
import { useEffect, useState, useRef } from "react";
import "./SendCodeForForgetPassword.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import planeBgVideo from '../../video/clouds.mp4'


function SendCode() {
  const { t ,i18n } = useTranslation();
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const otpBoxReference = useRef([]);
  const [lang,setLang]=useState('');
  const [loader,setLoader]=useState(false);

  let newArr = [...otp];
  const changeLanguage=async (e)=>{
    const lang=e.target.value;
console.log(e.target.value);
if(e.target.value == 'ar')
{
  i18n.changeLanguage('ar');
  setLang(i18n.language);
  setLoader(true);
  await new Promise ((resolve)=> setTimeout(resolve,500));
  console.log('hhhhh'+lang);
setLoader(false);
}

else
{
  i18n.changeLanguage('en');
  setLang(i18n.language);
  setLoader(true);
  await new Promise ((resolve)=> setTimeout(resolve,500));
  console.log(lang);
  setLoader(false);

}
  }

  useEffect(()=>{
    localStorage.getItem('i18nextLng')
        },[i18n,i18n.language])
    


useEffect(()=>{
// document.querySelector('.sendCodeSection .sendCodeForm .codeInputs').dir=i18n.dir();
document.querySelector('.otpInput').classList.add('direction');
if(i18n.dir()=='ltr'){
  document.querySelector('.page .loginSys').setAttribute('dir','rtl');

  
}

else{
  document.querySelector('.page .loginSys').setAttribute('dir','ltr');
}

},[i18n,i18n.language])

        
  function handleChange(value, index) {
    newArr[index] = value;
    setOtp(newArr);
    console.log(otp);

    if(value && index < 5-1){
      otpBoxReference.current[index + 1].focus();
    } 

    if(value && index == 1 && newArr[index-1]==''){ 
      otpBoxReference.current[index - 1].focus();
      newArr.fill("");
      index=index+1;
    setOtp(newArr);
      console.log("return");
   }

   if(value && index == 2 && newArr[index-1]=='' && newArr[index-2]==''){ 
    otpBoxReference.current[index - 2].focus();
    newArr.fill("");
    index=index+1;
  setOtp(newArr);
    console.log("return");
 }

 if(value && index == 3 && newArr[index-1]=='' && newArr[index-2]=='' && newArr[index-3]==''){ 
  otpBoxReference.current[index - 3].focus();
  newArr.fill("");
  index=index+1;
setOtp(newArr);
  console.log("return");
}

 
if(value && index == 4 && newArr[index-1]=='' && newArr[index-2]=='' && newArr[index-3]=='' && newArr[index-4]==''){ 
  otpBoxReference.current[index - 4].focus();
  newArr.fill("");
  index=index+1;
setOtp(newArr);
  console.log("return");
}

  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace"  && index > 0){
      e.target.value='';
      otpBoxReference.current[index - 1].focus();
      console.log(e.key);
    }

   
    // if(e.key === "Enter" && e.target.value && index < 4-1){
    //   otpBoxReference.current[index + 1].focus();
    // }

   
  }
  useEffect(()=>{
    setLang(localStorage.getItem('i18nextLng'));
      },[i18n,i18n.language])
  

  return (
    <>
    <div className="page d-flex flex-column justify-content-center">
  
      <div className="loginSys">

      <video autoPlay loop muted>
        <source src={planeBgVideo} type="video/mp4" />
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

  
      <div className="sendCodeSection shadow mb-5 mt-1 bg-body ">
        {/* <img src="loginImg.jpg" className="bg-body" /> */}
        <form className="sendCodeForm mb-5">
        <div className="col d-flex flex-column align-items-start justify-content-start ">
            <NavLink className="arrowIcon mt-2" to="/Register" 
           >
            <img src="arrowIcon.svg" className="w-100"/>
            </NavLink>
            </div>
          {/* <h1 className="authTitle mb-5">Verify Your Email</h1> */}
          <h1 className="authTitle mb-4">{t('confirmEmailAddress')}</h1>
        <img src="/keyIcon.svg" className="keyIcon mb-4" />

          {/* <p className="infoPara mb-3 ">
            please enter your <span className="emailWord">code</span> to
            verify & continue...
          </p> */}

          <p className="infoPara mb-3 ">
          {t('pleaseEnterThe')}<span className="emailWord"> {t('key')}</span> {t('forYourEmail')}
          </p>
          <div className=" m-auto ">
            {/* <span className="code ">Enter The Code </span> */}
            <div className="col codeInputs mb-3 d-flex flex-row justify-content-center alig-items-center gap-3 ">

              {otp.map((digit, index)=>(
      <input key={index} value={digit} maxLength={1}  
      onChange={(e)=> handleChange(e.target.value, index)}
      onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
    //  onKeyDown={(e)=> handleBackspaceAndEnter(e, index)}

      ref={(reference) => (otpBoxReference.current[index] = reference)}
      className="form-control mb-4 shadow-1 otpInput "

      />
    ))}
            </div>

            {/* <div className="col d-flex flex-column align-items-end">
          <NavLink className="resetPasswordBtn" to="/ForgetPassword"> Reset Password</NavLink>
        </div> */}
             <div className="col d-flex flex-column align-items-end">

            <button type="submit" className="submitBtn" onClick={(e)=>{e.preventDefault(); console.log(newArr)}}>
              {/* Continue */}
             {t('continue')}
            </button>
</div>
           
          </div>
        </form>
      </div>
    </div>
      </div>
  </>
  );
}

export default SendCode;
