import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PreparationSection } from "@/components/preparation-section"
import { HowToPlaySection } from "@/components/how-to-play-section"
import { DownloadDialog } from "@/components/download-dialog"
import { GameModesSection } from "@/components/game-modes-section"
import { ComponentsSection } from "@/components/components-section"
import { Button } from "./ui/button"
import { Gamepad2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden max-w-full">
      <HeroSection />

      <div className="sticky top-4 z-50 flex justify-center pointer-events-none -mt-16">
        <div className="grid sm:flex justify-between pb-8 sm:py-0 items-center pointer-events-auto gap-4">
          <DownloadDialog />
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold shadow-xl" asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0IKkteFvTg8Rn-P8NjqSM2wWQLSPEo_m2Dy4bvwvV3gs-xA/viewform?usp=sharing&ouid=111465094171124022074"
              target="_blank"
            >
              <Gamepad2 className="mr-1 h-5 w-5" />
              Jogo Online
            </a>
          </Button>
        </div>
      </div>

      <AboutSection />
      <PreparationSection />

      <HowToPlaySection />

      <GameModesSection />
      <ComponentsSection />

      <footer className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-6 px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-black mb-2">Necessário vs Dispensável</h3>
          <p className="text-sm opacity-90 mb-1">Aprenda educação financeira brincando!</p>
          <p className="text-xs opacity-75">🎓 Desenvolvido para crianças e adolescentes de 9 a 16 anos</p>
        </div>
      </footer>
    </div>
  )
}
