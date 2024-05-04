import { useState } from "react";

const OTPverification = () => {


  return (
    <>
    <section className="otpverification" style={{display:"none"}}>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="mb-5 mt-5 border-0">
            <div className="card-body text-center">

              <h5>OTP Verification</h5>
              <div className="text-muted">Enter OTP Code sent to +1245********42</div>

              <div className="otp-field">
                <input id="otpinput" type="number" />
                <input id="otpinpu2" type="number" disabled="" />
                <input id="otpinput3" type="number" disabled="" />
                <input id="otpinput4" disabled="" />
                <input id="otpinput5" type="number" disabled="" />
                <input type="number" disabled className="d-none" />
              </div>


              <div className="mb-1 text-muted">Didn't recieve OTP code? </div>
              <div className="resendOTP"> <a href="#">Resend Code </a> </div>

              <div className="mt-4 text-center">
                <button name="verify" type="button"  className="btn btn-primary w-100 verify" > Verify & Proceed </button>
              </div>


            </div>
          </div>
        </div>
      </div>
      </section>

    </>
  );
};

export default OTPverification;
