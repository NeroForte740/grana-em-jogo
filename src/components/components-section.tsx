export function ComponentsSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-white">Componentes do Jogo</h2>
        <p className="text-center text-gray-400 mb-12">Tudo que você precisa para jogar</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-600 rounded-xl w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">
                🎴
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">50 Cartas de Produto</h3>
                <p className="text-white/90 text-sm text-justify mb-3">
                  Cada carta contém: nome do produto, valor em dinheiro, categoria (Necessário / Útil / Dispensável) e
                  descrição
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-justify text-xs">Ex: Caderno novo - Valor 15 - Necessário</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-700 rounded-xl w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">
                📋
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">12 Cartas de Cenário</h3>
                <p className="text-white/90 text-sm text-justify mb-3">
                  Situações do dia a dia que definem o contexto das suas escolhas
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-justify text-xs">Ex: Volta às aulas, Aniversário, Viagem</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="bg-white text-red-800 rounded-xl w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">
                💵
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fichas de Dinheiro</h3>
                <p className="text-white/90 text-sm text-justify mb-3">
                  Fichas ou marcadores para representar o orçamento disponível
                </p>
                <div className="bg-white/20 rounded-lg p-2 text-xs">Valores: 5, 10 e 20</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-6 text-white shadow-xl border-2 border-red-600">
            <div className="flex items-start gap-4">
              <div className="bg-red-600 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl flex-shrink-0">
                📝
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Folha de Pontuação</h3>
                <p className="text-white/90 text-sm text-justify mb-3">
                  Para anotar os pontos de cada jogador em cada round
                </p>
                <div className="bg-white/10 rounded-lg p-2 text-xs">Pode usar papel ou quadro branco</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
