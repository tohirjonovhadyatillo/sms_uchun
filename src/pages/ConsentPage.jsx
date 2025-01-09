// pages/ConsentPage.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import '../App.css';


function ConsentPage() {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleAgree = () => {
    if (isAgreed) {
      navigate("/sms-sender");
    } else {
      alert("Iltimos, shartlarga rozi bo'ling.");
    }
  };

  return (
    <div className="container">
      <div className="card consent-card">
        <div className="warning-icon">
          <AlertTriangle size={40} className="text-yellow-500" />
        </div>
        <h1 className="title">Shartlarga Rozilik</h1>

        <div className="warning-box">
          <ShieldAlert className="text-red-500" size={24} />
          <p className="warning-text">
            Eslatib o'tamiz❗️ Bu narsa faqat do'stlaringiz uchun hazil tariqasida chiqarildi va bundan yomon maqsatda ishlatilishi taqiqlanadi!
          </p>
        </div>

        <div className="terms-box">
          <p className="mb-4">
            Har qanday qilingan harakatlar uchun o'zingiz javobgarsiz!
            Sayt yaratuvchilari buni o'z zimmasiga olmaydi!
          </p>

          <ul className="terms-list">
            <li>Faqat do'stona hazil uchun foydalaning</li>
            <li>Yomon niyatda ishlatish taqiqlanadi</li>
            <li>Javobgarlik foydalanuvchi zimmasida</li>
          </ul>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <span className="checkbox-text">Shartlarga roziman</span>
        </label>

        <button
          onClick={handleAgree}
          disabled={!isAgreed}
          className="button consent-button"
        >
          Davom etish
        </button>
      </div>
    </div>
  );
}

export default ConsentPage;
