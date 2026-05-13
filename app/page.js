"use client";

import { useState } from "react";

export default function Home() {
  const [zoomImage, setZoomImage] = useState(null);

  const link =
    "https://www.mercadolivre.com.br/encosto-almofada-massageador-para-carro-assento-de-bolinhas/up/MLBU1428683038";

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 pb-24">

      {/* BARRA SUPERIOR */}
      <div className="bg-red-600 text-white text-center py-3 font-bold text-sm">
        🔥 OFERTA LIMITADA • ENTREGA PARA TODO BRASIL
      </div>

      {/* TOPO */}
      <section className="text-center px-6 pt-8 pb-4 max-w-4xl mx-auto">

        <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-5 shadow">
          🚗 MAIS CONFORTO PARA MOTORISTAS
        </div>

        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
          Dirija com mais conforto e reduza o desconforto nas costas em minutos
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Ideal para trânsito, viagens longas e quem passa horas dirigindo todos os dias.
        </p>

                 <div className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500">
          ⭐⭐⭐⭐⭐
          <span>Mais de 10.000 motoristas satisfeitos</span>
        </div>

      </section>

{/* GALERIA */}
      <section className="grid grid-cols-2 gap-4 p-4 max-w-4xl mx-auto">

        <img
          src="/images/1.jpg"
          alt="Produto"
          className="col-span-2 rounded-2xl shadow-xl cursor-zoom-in"
          onClick={() => setZoomImage("/images/1.jpg")}
        />

        <img
          src="/images/2.jpg"
          alt="Imagem 2"
          className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setZoomImage("/images/2.jpg")}
        />

        <img
          src="/images/3.jpg"
          alt="Imagem 3"
          className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setZoomImage("/images/3.jpg")}
        />

        <img
          src="/images/4.jpg"
          alt="Imagem 4"
          className="rounded-xl shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setZoomImage("/images/4.jpg")}
        />

      </section>

      {/* BENEFÍCIOS */}
      <section className="p-6 max-w-4xl mx-auto grid md:grid-cols-3 gap-4 text-center">

        <div className="bg-white p-4 rounded-xl shadow">
          🚗
          <p className="font-bold mt-2">Mais conforto</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          😌
          <p className="font-bold mt-2">Menos desconforto</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          ⚡
          <p className="font-bold mt-2">Instalação rápida</p>
        </div>

      </section>

      {/* ANTES / DEPOIS */}
      <section className="grid md:grid-cols-2 gap-4 p-6 max-w-4xl mx-auto">

        <div className="bg-red-50 p-5 rounded-xl">
          <h3 className="text-red-600 font-bold text-lg mb-2">
            ANTES
          </h3>

          <p>
            Desconforto, cansaço e dores ao dirigir por muito tempo.
          </p>
        </div>

        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="text-green-600 font-bold text-lg mb-2">
            DEPOIS
          </h3>

          <p>
            Mais conforto e direção muito mais agradável.
          </p>
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
            <p className="mt-2">
              "Muito confortável para viagens longas."
            </p>
            <span className="text-sm text-gray-500">
              - Carlos M.
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            ⭐⭐⭐⭐⭐
            <p className="mt-2">
              "Fez diferença no meu dia a dia."
            </p>
            <span className="text-sm text-gray-500">
              - Rafael S.
            </span>
          </div>

        </div>

      </section>

      {/* BOTÃO */}
      <section className="text-center p-6">

        <a
          href={link}
          target="_blank"
          className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl inline-block"
        >
          🛒 COMPRAR COM DESCONTO NO MERCADO LIVRE
        </a>

        <div className="mt-4 space-y-2">

  <p className="text-red-600 font-bold text-sm">
    🔥 Produto com alta procura esta semana
  </p>

  <p className="text-sm text-gray-500">
    ⚠️ Estoque sujeito à disponibilidade no Mercado Livre
  </p>

</div>

      </section>

      {/* ZOOM */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoom"
            className="max-w-4xl max-h-[90vh] rounded-xl"
          />
        </div>
      )}

      {/* BOTÃO FIXO MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg md:hidden">

        <a
          href={link}
          target="_blank"
          className="block text-center bg-red-600 text-white font-black py-4 rounded-2xl"
        >
          🛒 COMPRAR AGORA
        </a>

      </div>

    </main>
  );
}