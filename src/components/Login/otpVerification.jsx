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
  <input
    id="otpinput"
    type="number"
    maxLength={1}
    onChange={(e) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    }}
  />
  <input
    id="otpinput2"
    type="number"
    maxLength={1}
    onChange={(e) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    }}
    
  />
  <input
    id="otpinput3"
    type="number"
    maxLength={1}
    onChange={(e) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    }}
    
  />
  <input id="otpinput4" type="number" maxLength={1}  />
  <input
    id="otpinput5"
    type="number"
    maxLength={1}
    onChange={(e) => {
      if (e.target.value.length > 1) {
        e.target.value = e.target.value.slice(0, 1);
      }
    }}
    
  />
  <input type="number"  className="d-none" />
</div>



              <div className="mb-1 text-muted">Didn't recieve OTP code? </div>
              <div className="resendOTP"> <a href="#">Resend Code </a> </div>

              <div className="mt-4 text-center">
                <a href="/Home"  className="btn btn-primary w-100 verify" > Verify & Proceed </a>
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
