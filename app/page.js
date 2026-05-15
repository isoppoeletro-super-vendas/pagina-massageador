# app/page.js

```javascript
"use client";

import { useState } from "react";

const LINK_AFILIADO = "https://meli.la/1Rn4azU";

export default function Home() {
  const [imagemSelecionada, setImagemSelecionada] = useState("/imagens/1.jpg");

  const imagens = [
    "/imagens/1.jpg",
    "/imagens/2.jpg",
    "/imagens/3.jpg",
    "/imagens/4.jpg",
    "/imagens/5.jpg",
    "/imagens/6.jpg",
  ];

  const comprar = () => {
    if (window.fbq) {
      fbq("track", "AddToCart");
    }

    window.location.href = LINK_AFILIADO;
  };

  const checkout = () => {
    if (window.fbq) {
      fbq("track", "InitiateCheckout");
    }

    window.location.href = LINK_AFILIADO;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.topBar}>
            <span style={styles.badge}>MAIS VENDIDO</span>
            <span style={styles.shipping}>🚚 Envio rápido</span>
          </div>

          <div style={styles.galleryContainer}>
            <img
              src={imagemSelecionada}
              alt="Encosto Massageador"
              style={styles.mainImage}
            />

            <div style={styles.thumbnailGrid}>
              {imagens.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Produto"
                  style={{
                    ...styles.thumb,
                    border:
                      imagemSelecionada === img
                        ? "3px solid #3483fa"
                        : "2px solid transparent",
                  }}
                  onClick={() => setImagemSelecionada(img)}
                />
              ))}
            </div>
          </div>

          <h1 style={styles.title}>
            Encosto Massageador para Carro
          </h1>

          <p style={styles.subtitle}>
            Mais conforto para dirigir e alívio para costas e lombar no dia a dia.
          </p>

          <div style={styles.priceBox}>
            <span style={styles.oldPrice}>De R$ 89,90</span>

            <h2 style={styles.price}>R$ 64,90</h2>

            <p style={styles.installments}>
              Compra segura via Mercado Livre
            </p>
          </div>

          <div style={styles.benefits}>
            <p>✔ Alívio imediato da lombar</p>
            <p>✔ Mais conforto no trânsito</p>
            <p>✔ Fácil instalação</p>
            <p>✔ Ideal para viagens longas</p>
            <p>✔ Ajuste confortável no banco</p>
          </div>

          <button style={styles.buttonPrimary} onClick={comprar}>
            COMPRAR AGORA
          </button>

          <button style={styles.buttonSecondary} onClick={checkout}>
            VER OFERTA COMPLETA
          </button>

          <div style={styles.security}>
            🔒 Compra segura via Mercado Livre
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f5f7fa 0%, #e4e8ee 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    fontFamily: "Arial, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: 460,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 22,
    boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  badge: {
    backgroundColor: "#00a650",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
  },

  shipping: {
    fontSize: 12,
    color: "#555",
    fontWeight: "bold",
  },

  galleryContainer: {
    marginBottom: 20,
  },

  mainImage: {
    width: "100%",
    borderRadius: 16,
    marginBottom: 12,
    objectFit: "cover",
    cursor: "zoom-in",
    transition: "0.3s",
  },

  thumbnailGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
  },

  thumb: {
    width: "100%",
    borderRadius: 10,
    cursor: "pointer",
    transition: "0.2s",
  },

  title: {
    fontSize: 28,
    color: "#222",
    lineHeight: 1.2,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 1.5,
    marginBottom: 20,
    textAlign: "center",
  },

  priceBox: {
    backgroundColor: "#f7f7f7",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    textAlign: "center",
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: 14,
  },

  price: {
    fontSize: 40,
    color: "#00a650",
    margin: "10px 0",
    fontWeight: "bold",
  },

  installments: {
    fontSize: 14,
    color: "#555",
  },

  benefits: {
    backgroundColor: "#fafafa",
    padding: 16,
    borderRadius: 14,
    marginBottom: 24,
    lineHeight: 1.9,
    color: "#333",
    fontSize: 15,
  },

  buttonPrimary: {
    width: "100%",
    backgroundColor: "#3483fa",
    color: "#fff",
    border: "none",
    padding: 18,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 14,
    cursor: "pointer",
    marginBottom: 12,
  },

  buttonSecondary: {
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    padding: 16,
    fontSize: 16,
    borderRadius: 14,
    cursor: "pointer",
  },

  security: {
    marginTop: 18,
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
};
```