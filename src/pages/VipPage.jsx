import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/App.css";


function VipPage() {

      const navigate = useNavigate(); // Sahifaga o'tish uchun hook
    
      const goToVipComfort = () => {
        navigate('/Vip-Comfort'); // "/Vip" sahifasiga o'tish
      };
    
      const goToPromoCode = () => {
        navigate('/PromoCode'); // "/Vip" sahifasiga o'tish
      };

      const handleClick = () => {
        
        window.location.href = "https://t.me/tohirjonov_web";
      };

  return (
    <div className='container'>
      <div className="card">
        <button className='vip-page__button button' onClick={goToPromoCode}>PromoCod🔖</button>
        <button className='vip-page__button button' onClick={handleClick}>Vip Tarifga O'tish💎</button>
        <button className='vip-page__button button' onClick={goToVipComfort}>Vip Tarif qulayliklari➜</button>
      </div>
    </div>
  )
}

export default VipPage
