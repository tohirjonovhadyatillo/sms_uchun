import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import instagram from "../assets/instagram.svg";

function Buttons() {
  const navigate = useNavigate();

  const goToSmsRandomSender = () => {
    navigate("/sms-sender");
  };

  // const goToSmsNumberSender = () => {
  //   navigate("/VipSmsSenders");
  // };

  const goToSmsSenderVip = () => {
    navigate("/Vip-Page");
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // 5 sekunddan keyin reklamani yashirish
    }, 10000);

    return () => clearTimeout(timer); // Komponent o'chirilganda timerni to'xtatish
  }, []);

  function handleInstagram() {
    window.open('https://instagram.com/tohirjonovvvvv')
  }

  return (
    <div className="Container buttons display-button">
      <div className="card">
        <div className="card-center">
          <h2>Qaysi tarifdan foydalanasiz?</h2>
          <button className="button buttonOne" onClick={goToSmsRandomSender}>
            ODDIY TARIF 🎲
          </button>
          {/* <button className="button buttonOne" onClick={goToSmsNumberSender}>
            Ko'p martalik Sms bomber 💣
          </button> */}
          <button className="button buttonOne" onClick={goToSmsSenderVip}>
            VIP TARIF💎
          </button>
        </div>
      </div>
      {isVisible && (
        <div className="reklama" onClick={handleInstagram}>
          <p className="text">
          <img src={instagram} width={35} alt="" />
            Bizni Instagramda ham kuzating!
            @TOHIRJONOVVVVV
            </p>
        </div>
      )}
    </div>
  );
}

export default Buttons;
