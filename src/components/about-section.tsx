export function AboutSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-black">O que é o jogo?</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-sm md:text-base">
          Um jogo de cartas educativo, lúdico e imersivo que ensina controle financeiro e pensamento crítico através de
          decisões práticas do dia a dia
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-5 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">🎴</div>
            <h3 className="text-lg font-bold mb-2">Escolha suas cartas</h3>
            <p className="text-white/90 text-justify text-sm leading-relaxed">
              Cada carta representa um produto ou serviço. Você precisa decidir se é necessário, útil ou dispensável para
              sua situação.
            </p>
          </div>

          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-5 text-white shadow-xl hover:scale-105 transition-transform border-2 border-red-600">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-bold mb-2">Gerencie seu orçamento</h3>
            <p className="text-white/90 text-justify text-sm leading-relaxed">
              Aprenda a controlar gastos, priorizar necessidades e tomar decisões financeiras dentro de um orçamento
              limitado.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-5 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="text-lg font-bold mb-2">Ganhe pontos</h3>
            <p className="text-white/90 text-justify text-sm leading-relaxed">
              Faça escolhas inteligentes e estratégicas para acumular pontos. Quem tiver mais pontos ao final vence!
            </p>
          </div>
        </div>

        <div className="bg-black rounded-2xl p-6 border-2 border-red-600">
          <h3 className="text-xl font-bold text-white mb-3 text-center">🎯 Objetivo do Jogo</h3>
          <p className="text-gray-300 text-justify text-center max-w-3xl mx-auto leading-relaxed">
            Marcar mais pontos ao final de 3 rounds escolhendo cartas apropriadas para cada situação. O jogo ensina
            julgamento entre necessidade e desejo, noções básicas de orçamento e pensamento crítico sobre consumo.
          </p>
        </div>
      </div>
    </section>
  )
}
