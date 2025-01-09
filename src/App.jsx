// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ConsentPage from "./pages/ConsentPage"; // Rozilik sahifasi
import SMSSender from "./pages/SMSSender"; // SMS yuborish sahifasi
import VipPage from "./pages/VipPage";
import VipComfort from "./pages/VipComfort";
import PromoCode from "./pages/PromoCode";
import VipSMSSender from "./pages/VipSMSSender";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConsentPage />} />
      <Route path="/sms-sender" element={<SMSSender />} />
      <Route path="/Vip-page" element={<VipPage />} />
      <Route path="/Vip-Comfort" element={<VipComfort />} />
      <Route path="/PromoCode" element={<PromoCode />} />
      <Route path="/VIPPAGEergsettbwgxddyjf" element={<VipSMSSender/>} />
    </Routes>
  );
}

export default App;
