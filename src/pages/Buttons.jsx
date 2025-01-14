import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();

  const goToSmsRandomSender = () => {
    navigate("/sms-sender");
  };

  // const goToSmsNumberSender = () => {
  //   navigate("/VipSmsSenders");
  // };

  const goToSmsSenderVip = () => {
    navigate("/Vip-Page")
  }

  

  return (
    <div className="Container buttons">
      <div className="card">
        <div className="card-center">
          <h2>Qaysi tarifdan foydalanasiz?</h2>
          <button className="button buttonOne" onClick={goToSmsRandomSender}>
            ODDIY TARIF 🎲
          </button>
          {/* <button className="button buttonOne" onClick={goToSmsNumberSender}>
            Ko'p martalik Sms bomber 💣
          </button> */}
          <button className="button buttonOne" onClick={goToSmsSenderVip}>VIP TARIF💎</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
