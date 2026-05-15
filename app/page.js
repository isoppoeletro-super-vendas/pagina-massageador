"use client";

const LINK_AFILIADO = "https://meli.la/1Rn4azU";

export default function Home() {
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
          <span style={styles.badge}>MAIS VENDIDO</span>

          <img
            src="/imagens/produto.jpg"
            alt="Encosto Massageador"
            style={styles.image}
          />

          <h1 style={styles.title}>
            Encosto Massageador para Carro
          </h1>

          <p style={styles.subtitle}>
            Mais conforto para dirigir e alívio para costas e lombar
          </p>

         <div style={styles.priceBox}>
  <span style={styles.oldPrice}>De R$ 89,90</span>

  <h2 style={styles.price}>R$ 64,90</h2>

  <p style={styles.installments}>
    Compra segura pelo Mercado Livre
  </p>
</div>

          <div style={styles.benefits}>
            <p>✔ Alívio imediato da lombar</p>
            <p>✔ Mais conforto no trânsito</p>
            <p>✔ Fácil instalação</p>
            <p>✔ Ideal para viagens longas</p>
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
    background:
      "linear-gradient(180deg, #f5f7fa 0%, #e4e8ee 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: 430,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 24,
    boxShadow: "0 10px 35px rgba(0,0,0,0.12)",
    textAlign: "center",
  },

  badge: {
    backgroundColor: "#00a650",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
    display: "inline-block",
    marginBottom: 15,
  },

  image: {
    width: "100%",
    borderRadius: 14,
    marginBottom: 20,
    objectFit: "cover",
  },

  title: {
    fontSize: 28,
    marginBottom: 10,
    color: "#222",
    lineHeight: 1.2,
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
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },

  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: 14,
  },

  price: {
    fontSize: 36,
    color: "#00a650",
    margin: "8px 0",
    fontWeight: "bold",
  },

  installments: {
    fontSize: 14,
    color: "#555",
  },

  benefits: {
    textAlign: "left",
    backgroundColor: "#fafafa",
    padding: 16,
    borderRadius: 12,
    marginBottom: 22,
    lineHeight: 1.8,
    color: "#333",
  },

  buttonPrimary: {
    width: "100%",
    backgroundColor: "#3483fa",
    color: "#fff",
    border: "none",
    padding: 18,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 12,
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
    borderRadius: 12,
    cursor: "pointer",
  },

  security: {
    marginTop: 18,
    fontSize: 13,
    color: "#666",
  },
};