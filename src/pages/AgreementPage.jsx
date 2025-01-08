// // src/AgreementPage.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// const AgreementPage = ({ isAgreed, setIsAgreed }) => {
//   return (
//     <div className="card">
//       <h1 className="title">Shartlarga Rozilik</h1>
//       <p>
//         Eslatib o'tamiz❗️ Bu narsa faqat do'stlaringiz uchun hazil tariqasida
//         chiqarildi va bundan yomon maqsatda ishlatilishi taqiqlanadi! Har
//         qanday qilingan harakatlar uchun o'zingiz javobgarsiz! Sayt
//         yaratuvchilari buni o'z zimmasiga olmaydi!
//       </p>

//       <label>
//         <input
//           type="checkbox"
//           checked={isAgreed}
//           onChange={() => setIsAgreed(!isAgreed)}
//         />
//         Shartlarga roziman
//       </label>

//       <Link to="/send-sms">
//         <button disabled={!isAgreed} className="button">
//           Continue
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default AgreementPage;
