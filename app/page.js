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
      fbq("track", "InitiateCheckout");
    }

    window.location.href = LINK_AFILIADO;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.leftSide}>
          <div style={styles.galleryCard}>
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
                        ? "2px solid #3483fa"
                        : "2px solid transparent",
                  }}
                  onClick={() => setImagemSelecionada(img)}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={styles.rightSide}>
          <div style={styles.infoCard}>
            <div style={styles.topRow}>
              <span style={styles.badge}>MAIS VENDIDO</span>
              <span style={styles.rating}>⭐ 4.9</span>
            </div>

            <h1 style={styles.title}>
              Encosto Massageador Premium para Carro
            </h1>

            <p style={styles.subtitle}>
              Mais conforto, postura e alívio para lombar e costas durante o dia.
            </p>

            <div style={styles.priceBox}>
              <span style={styles.oldPrice}>De R$ 89,90</span>

              <div style={styles.priceRow}>
                <h2 style={styles.price}>R$ 64,90</h2>
                <span style={styles.discount}>-28%</span>
              </div>

              <p style={styles.installments}>
                Compra segura via Mercado Livre
              </p>
            </div>

            <div style={styles.benefits}>
              <div style={styles.benefitItem}>✔ Reduz dores lombares</div>
              <div style={styles.benefitItem}>✔ Mais conforto ao dirigir</div>
              <div style={styles.benefitItem}>✔ Fácil instalação</div>
              <div style={styles.benefitItem}>✔ Ideal para viagens longas</div>
              <div style={styles.benefitItem}>✔ Ajuste confortável no banco</div>
            </div>

            <button style={styles.buttonPrimary} onClick={comprar}>
              COMPRAR AGORA
            </button>

            <div style={styles.securityBox}>
              🔒 Compra segura • 🚚 Envio rápido • 💳 Pagamento protegido
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f4f6f9 0%, #e8edf5 100%)",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    alignItems: "start",
  },

  leftSide: {
    width: "100%",
  },

  rightSide: {
    width: "100%",
  },

  galleryCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 20,
    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 20,
  },

  mainImage: {
    width: "100%",
    borderRadius: 20,
    marginBottom: 14,
    objectFit: "cover",
    transition: "0.3s",
  },

  thumbnailGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10,
  },

  thumb: {
    width: "100%",
    borderRadius: 12,
    cursor: "pointer",
  },

  infoCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 28,
    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  badge: {
    backgroundColor: "#00a650",
    color: "#fff",
    padding: "8px 14px",
    borderRadius: 30,
    fontSize: 12,
    fontWeight: "bold",
  },

  rating: {
    fontWeight: "bold",
    color: "#444",
  },

  title: {
    fontSize: 40,
    lineHeight: 1.1,
    marginBottom: 16,
    color: "#111",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 18,
    color: "#666",
    lineHeight: 1.6,
    marginBottom: 24,
  },

  priceBox: {
    backgroundColor: "#f8fafc",
    borderRadius: 18,
    padding: 22,
    marginBottom: 24,
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: 16,
  },

  priceRow: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    margin: "10px 0",
  },

  price: {
    fontSize: 52,
    color: "#00a650",
    margin: 0,
    fontWeight: "bold",
  },

  discount: {
    backgroundColor: "#e7f8ee",
    color: "#00a650",
    padding: "6px 10px",
    borderRadius: 10,
    fontWeight: "bold",
  },

  installments: {
    fontSize: 15,
    color: "#555",
  },

  benefits: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginBottom: 28,
  },

  benefitItem: {
    backgroundColor: "#f7f7f7",
    padding: 14,
    borderRadius: 14,
    fontSize: 15,
    color: "#333",
  },

  buttonPrimary: {
    width: "100%",
    background: "linear-gradient(135deg, #3483fa 0%, #2968c8 100%)",
    color: "#fff",
    border: "none",
    padding: 20,
    borderRadius: 18,
    fontSize: 20,
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(52,131,250,0.25)",
  },

  securityBox: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    lineHeight: 1.7,
  },
};
