// import { useState, useEffect } from "react";

// export default function AdPopup() {
//   const [visible, setVisible] = useState(false);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//       setTimeout(() => setShow(true), 50);
//     }, 2000); // 2 seconds delay
//     return () => clearTimeout(timer);
//   }, []);

//   const close = () => {
//     setShow(false);
//     setTimeout(() => setVisible(false), 400);
//   };

//   if (!visible) return null;

//   return (
//     <div
//       onClick={close}
//       style={{
//         position: "fixed", inset: 0, zIndex: 9999,
//         background: "rgba(0,0,0,0.6)",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         opacity: show ? 1 : 0, transition: "opacity 0.4s ease",
//       }}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           position: "relative", maxWidth: 360, width: "90%",
//           borderRadius: 16, overflow: "hidden",
//           background: "#1a0a2e",
//           transform: show ? "scale(1)" : "scale(0.85)",
//           transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//           boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
//         }}
//       >
//         {/* Close button */}
//         <button
//           onClick={close}
//           style={{
//             position: "absolute", top: 10, right: 10, zIndex: 10,
//             background: "rgba(255,255,255,0.15)", border: "none",
//             color: "#fff", borderRadius: "50%",
//             width: 28, height: 28, fontSize: 16,
//             cursor: "pointer", display: "flex",
//             alignItems: "center", justifyContent: "center",
//           }}
//         >✕</button>

//         {/* Poster image */}
//         <img
//           src="/Kalapeksha_Concert_Poster.jpg"
//           alt="Telugu Jamming Concert"
//           style={{ width: "100%", display: "block" }}
//         />

//         {/* CTA button */}
//         <div style={{ padding: "14px 16px", textAlign: "center", background: "#2d1060" }}>
//             <a
//             href="https://www.kalapeksha.com"
//             target="_blank"
//             rel="noreferrer"
//             style={{
//               display: "inline-block", background: "#f97316",
//               color: "#fff", fontWeight: 600, fontSize: 14,
//               padding: "10px 32px", borderRadius: 8,
//               textDecoration: "none", letterSpacing: "0.5px",
//             }}
//           >
//             Book Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }