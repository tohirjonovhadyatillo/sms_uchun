// // src/SMSSender.jsx
// import React, { useState } from "react";
// import { Send } from "lucide-react";
// import { sendRequest } from "./unitls";  // Helper function import
// import "./App.css";  // Ensure the styles are applied

// const SMSSender = () => {
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendSMS = async () => {
//     if (phone.length !== 12) {
//       alert("Please enter a valid 12-digit phone number");
//       return;
//     }

//     setLoading(true);

//     const apis = [
//       { url: "https://gw.alifnasiya.uz/alifnasiya/auth/phone-verify", body: { phone } },
//       { url: "https://api.lochin.uz/en/api/v1/e_commerce/register", body: { username: `+${phone}` } },
//       // Add other API URLs as needed
//     ];

//     const requests = apis.map((api) => sendRequest(api.url, api.body, api.method, api.headers));

//     try {
//       await Promise.all(requests);
//       setPhone("");
//       alert(`SMS requests sent successfully!`);
//     } catch (err) {
//       console.error("Error:", err);
//       alert(`Error occurred while sending SMS requests`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="card">
//       <h1 className="title">SMS Sender</h1>

//       <div className="input-group">
//         <input
//           type="text"
//           placeholder="998901234567"
//           value={phone}
//           onChange={(e) =>
//             setPhone(e.target.value.replace(/\D/g, "").slice(0, 12))
//           }
//           className="input"
//           disabled={loading}
//         />
//       </div>

//       <button
//         onClick={sendSMS}
//         disabled={loading || phone.length !== 12}
//         className="button"
//       >
//         {loading ? (
//           <div className="spinner" />
//         ) : (
//           <>
//             <Send size={30} />
//             Send SMS
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default SMSSender;
