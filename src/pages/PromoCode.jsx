import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import pro from './promo.json';

function PromoCode() {
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  // Allowed promo codes from your JSON file
  const allowedPromoCodes = [pro.PromoNew];

  const handleCheckPromoCode = () => {
    if (allowedPromoCodes.includes(promoCode.toUpperCase())) {
      // Save the promo code to localStorage
      localStorage.setItem("promoCode", promoCode.toUpperCase());
      // Redirect to the VIP page
      navigate("/vipPageProhbkuiaykrv");
    } else {
      alert("Noto'g'ri promo kod! Qayta urinib ko'ring.");
      setPromoCode(""); // Clear the input field
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
