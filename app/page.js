"use client";

import { useState, useEffect } from "react";

const LINK_AFILIADO = "https://meli.la/1Rn4azU";

const pulse = `
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
`;

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
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const verificarTela = () => {
      setMobile(window.innerWidth < 768);
    };

    verificarTela();
    window.addEventListener("resize", verificarTela);

    return () => window.removeEventListener("resize", verificarTela);
  }, []);

  const comprar = () => {
    if (window.fbq) {
      window.fbq("track", "AddToCart");
      window.fbq("track", "InitiateCheckout");
    }

    window.location.href = LINK_AFILIADO;
  };

  return (
  <>
    <style>{`
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
      }
    `}</style>

    <div style={styles.page}>
        <div
          style={{
            ...styles.container,
            gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          }}
        >
          {/* LADO ESQUERDO */}
          <div style={styles.leftSide}>
            <div
              style={{
                ...styles.galleryCard,
                position: mobile ? "relative" : "sticky",
              }}
            >
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

          {/* LADO DIREITO */}
          <div style={styles.rightSide}>
            <div
              style={{
                ...styles.infoCard,
                padding: mobile ? 18 : 28,
              }}
            >
              <div style={styles.topRow}>
  <span style={styles.badge}>MAIS VENDIDO</span>
  <span style={styles.rating}>⭐ 4.9</span>
</div>

<div style={styles.hook}>
  Dor nas costas ao longo do dia?
</div>

<h1 style={styles.title}>
  Transforme qualquer cadeira em uma sessão de massagem relaxante
</h1>

              <p style={styles.subtitle}>
                Alívio para costas, lombar e pescoço em casa, no escritório ou no carro.
              </p>

              <div
                style={{
                  ...styles.priceBox,
                  padding: mobile ? 18 : 22,
                }}
              >
                <span style={styles.oldPrice}>De R$ 89,90</span>

                <div
                  style={{
                    ...styles.priceRow,
                    flexDirection: mobile ? "column" : "row",
                    alignItems: mobile ? "flex-start" : "center",
                  }}
                >
                  <h2
                    style={{
                      ...styles.price,
                      fontSize: mobile ? 42 : 58,
                    }}
                  >
                    R$ 64,90
                  </h2>

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

              <div style={styles.socialProof}>
                ⭐ +5.000 clientes satisfeitos <br />
                ⭐ Avaliação média 4.8/5 <br />
                ⭐ “Chegou rápido e aliviou minha lombar.” <br />
                ⭐ “Uso todos os dias no escritório.”
              </div>

              <div style={styles.urgencyBox}>
                🔥 Oferta por tempo limitado <br />
                ⚠️ Estoque promocional acabando
              </div>

              <button style={styles.buttonPrimary} onClick={comprar}>
                🔥 QUERO MEU MASSAGEADOR AGORA
              </button>

              <div style={styles.securityBox}>
                🔒 Compra segura • 🚚 Envio rápido • 💳 Pagamento protegido
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #eef2f7 0%, #dfe7f1 100%)",
    padding: 16,
    overflowX: "hidden",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
    padding: 16,
    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
    top: 20,
  },

  mainImage: {
    width: "100%",
    borderRadius: 24,
    marginBottom: 14,
    objectFit: "cover",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
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
    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    gap: 10,
    flexWrap: "wrap",
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

  shippingBar: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 12,
    borderRadius: 14,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 14,
    fontWeight: "bold",
  },

  title: {
    fontSize: "clamp(32px, 6vw, 46px)",
    lineHeight: 1.1,
    marginBottom: 18,
    color: "#111",
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#666",
    lineHeight: 1.6,
    marginBottom: 24,
  },

  priceBox: {
    backgroundColor: "#f8fafc",
    borderRadius: 18,
    marginBottom: 24,
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: 16,
  },

  priceRow: {
    display: "flex",
    gap: 14,
    margin: "10px 0",
  },

  price: {
    color: "#00a650",
    margin: 0,
    fontWeight: "bold",
    lineHeight: 1,
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
    background: "linear-gradient(135deg, #00c853 0%, #00a650 100%)",
    color: "#fff",
    border: "none",
    padding: 24,
    borderRadius: 18,
    fontSize: 24,
    fontWeight: "bold",
    cursor: "pointer",
    animation: "pulse 1.5s infinite",
    boxShadow: "0 10px 20px rgba(52,131,250,0.25)",
  },

  securityBox: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    lineHeight: 1.7,
  },

  urgencyBox: {
    backgroundColor: "#fff4e5",
    border: "2px solid #ff9800",
    color: "#e65100",
    padding: 18,
    borderRadius: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 22,
    lineHeight: 1.6,
  },

  socialProof: {
    backgroundColor: "#f8fafc",
    padding: 20,
    borderRadius: 18,
    marginBottom: 24,
    lineHeight: 1.8,
    color: "#333",
    fontSize: 16,
  hook: {
  backgroundColor: "#111",
  color: "#fff",
  padding: "10px 14px",
  borderRadius: 12,
  textAlign: "center",
  marginBottom: 14,
  fontSize: 15,
  fontWeight: "bold",
   },
  };