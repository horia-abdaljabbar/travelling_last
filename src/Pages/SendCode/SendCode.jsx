import React from "react";
import { useEffect, useState, useRef } from "react";
import "./SendCode.css";
import { NavLink } from "react-router-dom";
import planeBgVideo from '../../video/clouds.mp4'

function SendCode() {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const otpBoxReference = useRef([]);
  let newArr = [...otp];

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


  return (
    <>
      <div className="loginSys">
        <video autoPlay loop muted>
          <source src={planeBgVideo} type="video/mp4" />
        </video>
        <div className="sendCodeSection shadow mb-5 mt-5 bg-body ">
          {/* <img src="loginImg.jpg" className="bg-body" /> */}
          
          <form className="sendCodeForm mb-5">
          <div className="col d-flex flex-column align-items-start justify-content-end">
              <NavLink className="arrowIcon mt-2" to="/Register">
              <img src="arrowIcon.svg" className="w-100"/>
              </NavLink>
              </div>
            {/* <h1 className="authTitle mb-5">Verify Your Email</h1> */}
            <h1 className="authTitle mb-4">التحقق من البريد الالكتروني</h1>
          <img src="/keyIcon.svg" className="keyIcon mb-4" />

            {/* <p className="infoPara mb-3 ">
              please enter your <span className="emailWord">code</span> to
              verify & continue...
            </p> */}

            <p className="infoPara mb-3 ">
             ... الرجاء ادخال <span className="emailWord">الرمز الخاص بك </span> للتأكد واكمال التسجيل
            </p>
            <div className=" m-auto ">
              {/* <span className="code ">Enter The Code </span> */}
              <div className="col codeInputs mb-3 d-flex flex-row justify-content-center alig-items-center gap-3 ">
                {/* <input
                  type="text"
                  className="form-control mb-4 shadow-1"
                  //value={user.code}
                  name="code"
                  // onChange={handleInput}
                  maxLength={1}
                  onChange={handleCode}
                  ref={codeInputRef1}
                  value={otp}
                />

                <input
                  type="text"
                  className="form-control mb-4 shadow-1"
                  //value={user.code}
                  name="code"
                  // onChange={handleInput}
                  maxLength={1}
                  ref={codeInputRef2}
                  onChange={handleCode}


                />
                <input
                  type="text"
                  className="form-control mb-4 shadow-1"
                  //value={user.code}
                  name="code"
                  // onChange={handleInput}
                  maxLength={1}
                  ref={codeInputRef3}
                  onChange={handleCode}


                />
                <input
                  type="text"
                  className="form-control mb-4 shadow-1"
                  //value={user.code}
                  name="code"
                  // onChange={handleInput}
                  maxLength={1}
                  ref={codeInputRef4}
                  onChange={handleCode}


                /> */}

                {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
      //  onKeyDown={(e)=> handleBackspaceAndEnter(e, index)}

        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className="form-control mb-4 shadow-1 otpInput"
        />
      ))}
              </div>

              {/* <div className="col d-flex flex-column align-items-end">
            <NavLink className="resetPasswordBtn" to="/ForgetPassword"> Reset Password</NavLink>
          </div> */}
               <div className="col d-flex flex-column align-items-end">

              <button type="submit" className="submitBtn" onClick={(e)=>{e.preventDefault(); console.log(newArr)}}>
                {/* Continue */}
                تابع
              </button>
</div>
             
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendCode;
