// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ConsentPage from "./pages/ConsentPage"; // Rozilik sahifasi
import SMSSender from "./pages/SMSSender"; // SMS yuborish sahifasi
import VipPage from "./pages/VipPage";
import VipComfort from "./pages/VipComfort";
import PromoCode from "./pages/PromoCode";
import VipSMSSender from "./pages/VipSMSSender";
import Buttons from "./pages/Buttons";
// import VipSMSNumberSender from "./pages/VipSMSNumberSender";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ConsentPage />} />
      <Route path="/sms-sender" element={<SMSSender />} />
      <Route path="/Vip-page" element={<VipPage />} />
      <Route path="/Vip-Comfort" element={<VipComfort />} />
      <Route path="/PromoCode" element={<PromoCode />} />
      <Route path="vipPageProhbkuiaykrv" element={<VipSMSSender />} />
      <Route path="/Buttons" element={<Buttons />}></Route>
      {/* <Route path="/VipSmsSenders" element={VipSMSNumberSender}></Route> */}
    </Routes>
  );
}

export default App;
