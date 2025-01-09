import React from "react";
import { useNavigate } from 'react-router-dom';
import '../src/app.css';


function VipComfort() {

        const handleClick = () => {
        
          window.location.href = "https://t.me/tohirjonov_web";
        };

  return (
    <div className="conatiner">
      <p className="centerBlock">
         ✨Vip tarif qulayliklari: <br /> <br /><br /> Birinchidan. Oddiy tarifda Siz har safar Sms
        yuborganingizda 50 sekunt kutishingizni so'raydi, Vip tarifda esa bu 10
        sekundgacha qisqaradi✅<br /><br /><br /> Ikkinchidan. Oddiy tarifda Siz 30 40 ta Sms
        yuborolasiz, Vip tarifda esa bu 3x 4x ga oshiriladi ✅ <br /><br /><br />Uchunchida. Siz
        oddiy tarifda sms yuborsangiz kopchilik oddiy tarifda bo'lgani uchun
        qotib qolishi mumkin, Lekin Vip tarifda bo'lsangiz bu muanmolar
        kuzatilmaydi✅<br /><br /><br />
        Tarifga ulaish uchun adminga murojat qiling ✅ <br /><br /><br />
        Tarif narxi: 9990 UZS 👍🏼<br />
      </p>
      <button className="centerBlock admin-button button" onClick={handleClick}>Admin Profili🧑🏻‍💻</button>
    </div>
  );
}

export default VipComfort;
