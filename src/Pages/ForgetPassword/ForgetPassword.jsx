import React from "react";
import "./ForgetPassword.css";
import { NavLink } from "react-router-dom";
import planeBgVideo from '../../video/clouds.mp4'

function ForgetPassword() {
  return (
    <>signBtn
    
      <div className="loginSys">
      <video autoPlay loop muted>
     <source src={planeBgVideo} type="video/mp4"/>
   </video>
      <div className="forgetPasswordSection shadow mb-5 mt-5 bg-body ">
        {/* <img src="loginImg.jpg" className="bg-body" /> */}
        <form className="forgetPasswordForm mb-5">
        <div className="col d-flex flex-column align-items-start justify-content-end">
              <NavLink className="arrowIcon mt-2" to="/Login">
              <img src="arrowIcon.svg" className="w-100"/>
              </NavLink>
              </div>
        {/* <h1 className="authTitle mb-5">Forget Password</h1> */}
        <h1 className="authTitle mb-5">نسيت كلمة المرور</h1>

          {/* <p className="infoPara mb-2 ">
            please enter your <span className="emailWord">email</span> to verify
            your password...
          </p> */}
            <p className="infoPara mb-4 ">
           ... الرجاء ادخال <span className="emailWord">بريدك الالكتروني</span> لتأكيد كلمة المرور
          </p>
          <div className="m-auto">
            <div className="col inputIcon input-boxPass d-flex align-items-center justify-content-center">
              <input
                type="email"
                className="form-control email mb-5 shadow-1"
                name="email"
                placeholder="البريد الالكتروني"
                />
            </div>
            {/* <div className="col d-flex flex-column align-items-end">
            <NavLink className="resetPasswordBtn" to="/ForgetPassword"> Reset Password</NavLink>
          </div> */}
               <div className="col d-flex flex-column align-items-end">

            <button type="submit" className="submitBtn">
              {/* Send Code */}
              الحصول على الرمز
            </button>
            </div>

          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default ForgetPassword;
