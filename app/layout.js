import "./globals.css";
import MetaPixel from "../components/MetaPixel";

export const metadata = {
  title: "Encosto Massageador",
  description: "Página de vendas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}