import { Button } from "@/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog"
import { Download, FileText, ImageIcon } from "lucide-react"

export function DownloadDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-xl">
          <Download className="mr-1 h-5 w-5" />
          Baixar Material
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white border-2 border-red-600">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-3xl font-black text-red-500">Baixe o Material do Jogo</DialogTitle>
          <DialogDescription className="text-gray-400 text-base">
            Faça o download de todos os materiais necessários para começar a jogar
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 py-4">
          {/* Card: Download das Cartas */}
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-xl border-2 border-red-500 min-h-[420px] flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-xl p-3">
                <ImageIcon className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Cartas do Jogo</h3>
                <p className="text-red-100 text-sm">PDF para impressão</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-5 mb-6 border border-white/20">
              <ul className="space-y-3 text-white">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-lg">✓</span>
                  <span className="text-base">Cartas de Produto</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-lg">✓</span>
                  <span className="text-base">Cartas de Cenário</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-300 text-lg">✓</span>
                  <span className="text-base">Pronto para imprimir</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <Button
                size="lg"
                className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold shadow-xl h-12"
                asChild
              >
                <a href="https://drive.google.com/file/d/1Halgl9CmdMb3cnvnHkgVxjCu5SOjqN5s/view" target="_blank">
                  <Download className="mr-1 h-5 w-5" />
                  Baixar Cartas (PDF)
                </a>
              </Button>

              <p className="text-white/70 text-sm text-center mt-4">
                Recomendamos imprimir em papel cartão ou colar em papelão
              </p>
            </div>
          </div>

          {/* Card: Manual do Jogo */}
          <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 shadow-xl border-2 border-red-600 min-h-[420px] flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 rounded-xl p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Manual do Jogo</h3>
                <p className="text-gray-400 text-sm">Guia completo</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-xl p-5 mb-6 border border-white/10">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span className="text-base">Regras detalhadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span className="text-base">Exemplos de jogadas</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-500 text-lg">✓</span>
                  <span className="text-base">Como contar os pontos</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold shadow-xl h-12"
                asChild
              >
                <a href="https://drive.google.com/file/d/1mPN5o4_MwjI7CD1tPMhpWSeK8j1SgAXL/view" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Manual (PDF)
                </a>
              </Button>

              <p className="text-gray-500 text-sm text-center mt-4">Inclui instruções para educadores e pais</p>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-4 bg-black/50 backdrop-blur rounded-2xl p-6 border border-red-600/30">
          <h3 className="text-lg font-bold text-white mb-4 text-center">📦 O que você vai precisar</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-3xl">🖨️</div>
              <p className="text-gray-300 text-sm font-medium">Impressora colorida</p>
              <p className="text-gray-500 text-xs">Para melhor experiência</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">✂️</div>
              <p className="text-gray-300 text-sm font-medium">Tesoura</p>
              <p className="text-gray-500 text-xs">Para recortar as cartas</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">📄</div>
              <p className="text-gray-300 text-sm font-medium">Papel cartão</p>
              <p className="text-gray-500 text-xs">Opcional, mais durável</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
