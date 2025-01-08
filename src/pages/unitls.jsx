// // src/utils.js
// export const sendRequest = async (url, body, method = "POST", headers = {}) => {
//     try {
//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//           ...headers,
//         },
//         body: JSON.stringify(body),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error with request to ${url}`);
//       }
  
//       return response;
//     } catch (error) {
//       console.error("Request error:", error);
//     }
//   };  