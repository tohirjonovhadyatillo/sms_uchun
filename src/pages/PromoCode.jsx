import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../app.css';


function PromoCode() {
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  const allowedPromoCodes = ["DISCOUNT10", "FREESHIP", "WELCOME2023"];

  const handleCheckPromoCode = () => {
    if (allowedPromoCodes.includes(promoCode.toUpperCase())) {
    //   alert("Promo kod to'g'ri! Keyingi sahifaga o'tkazilmoqda.");
      navigate("/VIPPAGEergsettbwgxddyjf");
    } else {
      alert("Noto'g'ri promo kod! Qayta urinib ko'ring.");
      setPromoCode("");
    }
  };

  return (
    <div className="container">
      <div className="promocod">
        <input
          className="input"
          type="text"
          placeholder="PromoCodni kiriting..."
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button
          className="button promocodeButton"
          onClick={handleCheckPromoCode}
        >
          Tekshirish
        </button>
      </div>
    </div>
  );
}

export default PromoCode;