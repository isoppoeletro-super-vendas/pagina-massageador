"use client";

const LINK_AFILIADO = "https://meli.la/1Rn4azU";

export default function Home() {
  const handleCompra = () => {
    if (window.fbq) fbq("track", "AddToCart");
    window.location.href = LINK_AFILIADO;
  };

  const handleCheckout = () => {
    if (window.fbq) fbq("track", "InitiateCheckout");
    window.location.href = LINK_AFILIADO;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Encosto Massageador</h1>

      <p style={styles.subtitle}>
        Mais conforto e alívio para sua coluna no dia a dia
      </p>

      <div style={styles.box}>
        <p>✔ Reduz dores lombares</p>
        <p>✔ Mais conforto ao dirigir</p>
        <p>✔ Fácil instalação</p>
      </div>

      <button style={styles.buttonPrimary} onClick={handleCompra}>
        Comprar agora
      </button>

      <button style={styles.buttonSecondary} onClick={handleCheckout}>
        Finalizar compra
      </button>

      <p style={styles.footer}>
        Produto disponível via Mercado Livre
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: 30,
    textAlign: "center",
    fontFamily: "Arial",
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: "#555",
  },
  box: {
    margin: "20px auto",
    padding: 20,
    maxWidth: 320,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    textAlign: "left",
  },
  buttonPrimary: {
    padding: 15,
    fontSize: 18,
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 20,
    width: "100%",
    maxWidth: 320,
  },
  buttonSecondary: {
    padding: 15,
    fontSize: 16,
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    marginTop: 10,
    width: "100%",
    maxWidth: 320,
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#888",
  },
};