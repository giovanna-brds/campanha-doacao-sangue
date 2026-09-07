export default function Hero() {
  return (
    <>
      <section className="bg-[#690808] text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* TEXTO */}
            <div>
              <p className="uppercase tracking-[0.3em] text-red-200 mb-4 text-sm">
                Campanha Nacional
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Doe sangue.
                <br />
                Salve vidas.
              </h1>

              <p className="mt-8 text-lg text-red-100 leading-relaxed max-w-xl">
                Uma única doação pode salvar até 4 vidas.
                Descubra como doar e veja informações importantes sobre a campanha.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#quiz"
                className="bg-white text-[#690808] px-8 py-4 rounded-full font-semibold hover:scale-105 transition inline-block"
              >
                Posso doar?
              </a>

              <a 
                href="#sobre"
                className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#690808] transition"
              >
                  Saiba mais
              </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white/10 p-6 rounded-2xl">
                  <h3 className="text-4xl font-bold">+3M</h3>
                  <p className="text-red-100 mt-2">
                    Doações por ano
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-2xl">
                  <h3 className="text-4xl font-bold">4</h3>
                  <p className="text-red-100 mt-2">
                    Vidas salvas por doação
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-2xl col-span-2">
                  <h3 className="text-2xl font-bold mb-3">
                    Estoques precisam de ajuda
                  </h3>

                  <p className="text-red-100 leading-relaxed">
                    Os hemocentros frequentemente operam
                    com níveis baixos de estoque.
                    Sua doação pode fazer diferença hoje.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      <section id="por-que-doar" className="bg-[#F7F7F7] py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[0.2em] text-[#690808] text-sm">
              Sobre a campanha
            </p>

            <h2 className="text-4xl md:text-5xl font-black mt-4 text-zinc-900">
              Por que doar sangue?
            </h2>

            <p className="mt-6 text-zinc-600 leading-relaxed text-lg text-left">
              O sangue é um recurso insubstituível. Ele não pode ser fabricado artificialmente 
              e depende exclusivamente da solidariedade de doadores voluntários. 
        
            </p>
            <p className="mb-6 mt-6 text-zinc-600 leading-relaxed text-lg text-left">
             A importância de doar sangue está diretamente ligada à sua capacidade de salvar vidas. Aqui estão algumas 
             razões cruciais pelas quais a doação de sangue é essencial:
            </p>

            {/* Lista Numerada 1 */}
            <ol className="list-decimal pl-5 space-y-4 text-zinc-600 leading-relaxed text-left">
              <li>
                <strong className="text-[#690808] text-left font-semibold">Salva vidas em emergências:</strong> Acidentes, traumas 
                e emergências frequentemente requerem transfusões de sangue imediatas para evitar a perda de vidas.
              </li>
              <li>
                <strong className="text-[#690808] text-left font-semibold">Auxilia no tratamento de doenças:</strong> Muitos pacientes com 
                doenças crônicas, como câncer, doenças hematológicas e distúrbios sanguíneos, dependem de transfusões 
                regulares de sangue para continuar seus tratamentos.
              </li>
              <li>
                <strong className="text-[#690808] font-semibold">Promove a solidariedade humana:</strong> A doação de sangue é um ato de compaixão 
                e solidariedade, que une a comunidade em torno de uma causa nobre e salva vidas.
              </li>
            </ol>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#690808]">
                Processo seguro
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                Todo material utilizado é esterilizado e descartável.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#690808]">
                Rápido
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                A coleta dura poucos minutos e pode ajudar várias pessoas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#690808]">
                Impacto real
              </h3>

              <p className="text-zinc-600 leading-relaxed">
                Hospitais dependem diariamente de doadores voluntários.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}