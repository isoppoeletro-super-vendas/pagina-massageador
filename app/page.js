"use client";

import { useState } from "react";

const LINK_AFILIADO = "https://meli.la/1Rn4azU";

export default function Home() {
  const imagens = [
    "/imagens/1.jpg",
    "/imagens/2.jpg",
    "/imagens/3.jpg",
    "/imagens/4.jpg",
    "/imagens/5.jpg",
    "/imagens/6.jpg",
  ];

  const [imagemSelecionada, setImagemSelecionada] = useState(imagens[0]);

  const comprar = () => {
    if (window.fbq) {
      fbq("track", "AddToCart");
    }

    window.location.href = LINK_AFILIADO;
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <span style={styles.badge}>MAIS VENDIDO</span>

        <img
          src={imagemSelecionada}
          alt="Produto"
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

        <h1 style={styles.title}>
          Encosto Massageador para Carro
        </h1>

        <p style={styles.subtitle}>
          Mais conforto para dirigir e alívio para costas e lombar.
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
          <p>✔ Mais conforto ao dirigir</p>
          <p>✔ Fácil instalação</p>
          <p>✔ Ideal para viagens longas</p>
        </div>

        <button style={styles.button} onClick={comprar}>
          COMPRAR AGORA
        </button>

        <div style={styles.security}>
          🔒 Compra segura pelo Mercado Livre
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontFamily: "Arial",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    maxWidth: 450,
    width: "100%",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  badge: {
    backgroundColor: "#00a650",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    display: "inline-block",
    marginBottom: 16,
  },

  mainImage: {
    width: "100%",
    borderRadius: 16,
    marginBottom: 12,
  },

  thumbnailGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
    marginBottom: 20,
  },

  thumb: {
    width: "100%",
    borderRadius: 10,
    cursor: "pointer",
  },

  title: {
    fontSize: 28,
    marginBottom: 10,
    color: "#222",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    lineHeight: 1.5,
  },

  priceBox: {
    backgroundColor: "#f7f7f7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    textAlign: "center",
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: 14,
  },

  price: {
    fontSize: 38,
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
    borderRadius: 12,
    marginBottom: 20,
    lineHeight: 1.8,
    color: "#333",
  },

  button: {
    width: "100%",
    backgroundColor: "#3483fa",
    color: "#fff",
    border: "none",
    padding: 18,
    borderRadius: 12,
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
  },

  security: {
    marginTop: 16,
    fontSize: 13,
    color: "#666",
    textAlign: "center",
  },
};