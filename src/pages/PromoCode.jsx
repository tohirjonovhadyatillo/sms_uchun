import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import pro from './promo.json';

function PromoCode() {
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  const allowedPromoCodes = [pro.PromoNew];

  const handleCheckPromoCode = () => {
    if (allowedPromoCodes.includes(promoCode.toUpperCase())) {
      // Save the correct promo code to localStorage
      navigate("/vipPagePro");
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
          Tekshirish🔁
        </button>
      </div>
    </div>
  );
}

export default PromoCode;
