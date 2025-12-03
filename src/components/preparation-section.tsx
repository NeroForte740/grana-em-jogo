export function PreparationSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-black">Preparação</h2>
        <p className="text-center text-gray-600 mb-10 text-base">Como começar a jogar</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-l-4 border-red-600 shadow-lg">
            <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-black mb-4">
              1
            </div>
            <h3 className="text-lg font-bold mb-3 text-black">Embaralhe as cartas</h3>
            <p className="text-gray-700 text-justify text-base leading-relaxed">
              Embaralhe as 50 cartas de produto e distribua 5 cartas para cada jogador. Coloque o resto como monte de
              compra.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-red-700 shadow-lg">
            <div className="bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-black mb-4">
              2
            </div>
            <h3 className="text-lg font-bold mb-3 text-black">Prepare os cenários</h3>
            <p className="text-gray-700 text-justify text-base leading-relaxed">
              Embaralhe as 12 cartas de cenário e deixe em uma pilha separada. Elas serão reveladas durante o jogo.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-red-800 shadow-lg">
            <div className="bg-red-800 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-black mb-4">
              3
            </div>
            <h3 className="text-lg font-bold mb-3 text-black">Organize o dinheiro</h3>
            <p className="text-gray-700 text-justify text-base leading-relaxed">
              Separe as fichas de dinheiro (valores 5, 10 e 20) e prepare a folha de pontuação para anotar os
              resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
