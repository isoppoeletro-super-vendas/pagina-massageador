"use client";

const LINK_AFILIADO = "https://meli.la/1Rn4azU";

export default function Home() {
  const comprar = () => {
    if (window.fbq) fbq("track", "AddToCart");
    window.location.href = LINK_AFILIADO;
  };

  const checkout = () => {
    if (window.fbq) fbq("track", "InitiateCheckout");
    window.location.href = LINK_AFILIADO;
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Encosto Massageador</h1>

        <p style={styles.subtitle}>
          Mais conforto e alívio para sua coluna no dia a dia
        </p>

        <div style={styles.box}>
          <p>✔ Reduz dores lombares</p>
          <p>✔ Mais conforto ao dirigir</p>
          <p>✔ Fácil instalação</p>
        </div>

        <button style={styles.buttonPrimary} onClick={comprar}>
          Comprar agora
        </button>

        <button style={styles.buttonSecondary} onClick={checkout}>
          Finalizar compra
        </button>

        <p style={styles.footer}>
          Produto disponível via Mercado Livre
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef0f4",
    padding: 20,
    fontFamily: "Arial",
  },

  card: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 14,
    maxWidth: 420,
    width: "100%",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  },

  title: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },

  box: {
    textAlign: "left",
    backgroundColor: "#f7f7f7",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    lineHeight: 1.6,
  },

  buttonPrimary: {
    width: "100%",
    padding: 16,
    fontSize: 18,
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    marginBottom: 10,
    fontWeight: "bold",
  },

  buttonSecondary: {
    width: "100%",
    padding: 14,
    fontSize: 16,
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },

  footer: {
    marginTop: 15,
    fontSize: 12,
    color: "#777",
  },
};