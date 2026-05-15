"use client";

import { useEffect } from "react";

export default function Obrigado() {
  useEffect(() => {
    if (window.fbq) {
      fbq("track", "Purchase", {
        value: 0,
        currency: "BRL",
      });
    }
  }, []);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>Compra realizada com sucesso!</h1>
      <p>Obrigado pela sua compra.</p>
    </div>
  );
}