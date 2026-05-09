"use client";

import { useState } from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      text: "Bardzo profesjonalne podejście do dziecka i ogromna empatia. Wszystko dokładnie wytłumaczone.",
      name: "Pacjentka z ZnanyLekarz"
    },
    {
      text: "W końcu ktoś dokładnie zajął się problemem karmienia mojego dziecka. Ogromna wiedza i spokój.",
      name: "Mama pacjenta"
    },
    {
      text: "Wizyta przebiegła w bardzo komfortowej atmosferze. Czułam się zaopiekowana.",
      name: "Pacjentka"
    }
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));
  };

  return (
    <section style={{
      background: "#EFE7E1",
      padding: "80px 20px",
      textAlign: "center"
    }}>

      <h2 style={{ fontSize: "26px", marginBottom: "30px" }}>
        Opinie pacjentów
      </h2>

      <div style={{
        maxWidth: "600px",
        margin: "0 auto",
        background: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>

        <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#444" }}>
          “{reviews[index].text}”
        </p>

        <p style={{ marginTop: "15px", fontSize: "13px", color: "#8B7D73" }}>
          — {reviews[index].name}
        </p>

      </div>

      {/* NAWIGACJA */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prev} style={btnStyle}>←</button>
        <button onClick={next} style={btnStyle}>→</button>
      </div>

    </section>
  );
}

const btnStyle = {
  background: "#C8A27C",
  color: "white",
  border: "none",
  padding: "10px 15px",
  margin: "0 10px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px"
};