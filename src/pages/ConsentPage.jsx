import React, { useState } from "react";
import { AlertTriangle, ShieldAlert } from "lucide-react";

function ConsentPage({ onAgree }) {
  const [isAgreed, setIsAgreed] = useState(false);

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
            Eslatib o'tamiz❗️ Bu narsa faqat do'stlaringiz uchun hazil tariqasida
            chiqarildi va bundan yomon maqsatda ishlatilishi taqiqlanadi!
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
          onClick={() => onAgree(isAgreed)}
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