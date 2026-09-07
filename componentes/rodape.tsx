export default function Footer() {
    return (
      <footer className="bg-[#690808] text-white py-14">
  
        <div className="max-w-6xl mx-auto px-6">
  
          <div className="flex flex-col md:flex-row justify-between gap-10">
  
            <div>
              <p className="uppercase tracking-[0.2em] text-red-200 text-sm">
                Campanha
              </p>
  
              <h2 className="text-3xl font-black mt-3">
                Doe Sangue
              </h2>
  
              <p className="mt-4 text-red-100 max-w-md leading-relaxed">
                Incentivando a conscientização sobre a
                importância da doação de sangue.
              </p>
            </div>
  
            <div>
              <h3 className="font-bold text-xl mb-4">
                Informações
              </h3>
  
              <ul className="space-y-3 text-red-100">
  
                <li>
                  <a href="#por-que-doar" className="hover:text-white transition-colors">
                    Importância da doação de sangue
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-white transition-colors">
                    Mitos e verdades
                  </a>
                </li>
                
                <li>
                  <a href="#quiz" className="hover:text-white transition-colors">
                    Quiz
                  </a>
                </li>
  
              </ul>
            </div>
  
          </div>
  
          <div className="border-t border-white/20 mt-12 pt-8 text-red-200 text-sm">
  
            © 2026 Campanha Doe Sangue — Projeto educativo sem fins lucrativos.
  
          </div>

          <div className="border-t border-white/20 mt-6 pt-8 text-red-200 text-sm">
  
            Desenvolvido por Giovanna B.R de Souza.
          </div>
        </div>
  
      </footer>
    )
  }