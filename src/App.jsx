import React, { useState } from "react";
import ConsentPage from "./pages/ConsentPage";
import SMSSender from "./pages/SMSSender";
import "./App.css";

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
    <SMSSender />
  ) : (
    <ConsentPage onAgree={handleAgree} />
  );
}

export default App;