import Hero from "@/componentes/Hero"
import Quiz from "@/componentes/Quiz"
import SaibaMais from "@/componentes/saibaMais"
import Footer from "@/componentes/rodape"

export default function Home(){
  return(
    <main>
      <Hero/>
      <Quiz/>
      <SaibaMais/>
      <Footer/>
    </main>
  )
}
