"use client";

import { useState } from "react";

export default function Home() {
  const [zoomImage, setZoomImage] = useState(null);

  const link =
    "https://www.mercadolivre.com.br/encosto-almofada-massageador-para-carro-assento-de-bolinhas/up/MLBU1428683038";

  const price = "59,90";

  // 🔥 TRACKING BASE (Meta / Google Ads)
  const handleBuyClick = () => {
    if (typeof window !== "undefined") {
      // FUTURO PIXEL META / GOOGLE ADS
      console.log("click_buy");

      window.open(link, "_blank");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-24">

      {/* BARRA URGÊNCIA */}
      <div className="bg-red-600 text-white text-center py-3 font-bold text-sm">
        🔥 OFERTA LIMITADA • ENVIO PARA TODO BRASIL
      </div>

      {/* TOPO */}
      <section className="text-center px-6 pt-8 pb-4 max-w-4xl mx-auto">

        <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-5 shadow">
          🚗 MAIS CONFORTO PARA DIRIGIR
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          Dirija por horas sem desconforto nas costas
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Ideal para motoristas, viagens longas e uso diário no carro.
        </p>

        {/* PREÇO */}
        <div className="mt-6">
          <p className="text-4xl md:text-5xl font-black text-red-600">
            A partir de R$ {price}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Parcelamento disponível no Mercado Livre
          </p>
        </div>

        {/* PROVA SOCIAL */}
        <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500">
          ⭐⭐⭐⭐⭐
          <span>+10.000 motoristas satisfeitos</span>
        </div>

      </section>

      {/* GALERIA */}
      <section className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">

        <img
          src="/images/1.jpg"
          className="col-span-2 rounded-2xl shadow-xl cursor-zoom-in"
          onClick={() => setZoomImage("/images/1.jpg")}
        />

        <img src="/images/2.jpg" className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setZoomImage("/images/2.jpg")} />

        <img src="/images/3.jpg" className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setZoomImage("/images/3.jpg")} />

        <img src="/images/4.jpg" className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setZoomImage("/images/4.jpg")} />

      </section>

      {/* BENEFÍCIOS */}
      <section className="p-6 max-w-4xl mx-auto grid md:grid-cols-3 gap-4 text-center">

        <div className="bg-white p-4 rounded-xl shadow">
          🚗 <p className="font-bold mt-2">Mais conforto</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          😌 <p className="font-bold mt-2">Menos fadiga</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          ⚡ <p className="font-bold mt-2">Fácil instalação</p>
        </div>

      </section>

      {/* ANTES / DEPOIS */}
      <section className="grid md:grid-cols-2 gap-4 p-6 max-w-4xl mx-auto">

        <div className="bg-red-50 p-5 rounded-xl">
          <h3 className="text-red-600 font-bold text-lg mb-2">ANTES</h3>
          <p>Dores e desconforto ao dirigir por muito tempo.</p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="text-green-600 font-bold text-lg mb-2">DEPOIS</h3>
          <p>Mais conforto e experiência de direção muito melhor.</p>
        </div>

      </section>

      {/* DEPOIMENTOS */}
      <section className="p-6 max-w-4xl mx-auto">

        <h2 className="text-2xl font-black mb-4">
          Quem comprou aprovou
        </h2>

        <div className="space-y-4">

          <div className="bg-white p-4 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-2">"Muito confortável para viagens longas."</p>
            <span className="text-sm text-gray-500">- Carlos M.</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-2">"Melhorou muito minha dor ao dirigir."</p>
            <span className="text-sm text-gray-500">- Rafael S.</span>
          </div>

        </div>
      </section>

      {/* CTA PRINCIPAL */}
      <section className="text-center p-6">

        <button
          onClick={handleBuyClick}
          className="bg-red-600 hover:bg-red-700 transition text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl"
        >
          🛒 COMPRAR COM DESCONTO AGORA
        </button>

        <p className="text-sm text-gray-600 mt-3">
          ✔ Compra segura pelo Mercado Livre • ✔ Envio rápido • ✔ Garantia
        </p>

        <p className="text-red-600 font-bold text-sm mt-3">
          🔥 Últimas unidades com desconto ativo
        </p>

      </section>

      {/* ZOOM */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            className="max-w-4xl max-h-[90vh] rounded-xl"
          />
        </div>
      )}

      {/* BOTÃO FIXO MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg md:hidden">

        <button
          onClick={handleBuyClick}
          className="block w-full text-center bg-red-600 text-white font-black py-4 rounded-2xl"
        >
          🛒 COMPRAR AGORA
        </button>

      </div>

    </main>
  );
}