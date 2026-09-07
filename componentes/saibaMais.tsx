export default function SaibaMais() {
    return (
      <section id="sobre" className="bg-white py-28">
  
        <div className="max-w-6xl mx-auto px-6">
  
          <div className="text-center max-w-3xl mx-auto">
  
            <p className="uppercase tracking-[0.2em] text-[#690808] text-sm">
              Informações importantes
            </p>
  
            <h2 className="text-4xl md:text-5xl font-black mt-4 text-zinc-900">
              Saiba mais sobre a doação
            </h2>
  
            <p className="mt-6 text-zinc-600 leading-relaxed text-lg">
              Entenda quem pode doar, conheça alguns mitos
              comuns e descubra informações importantes sobre
              o processo de doação de sangue.
            </p>
  
          </div>
  
        
          <div className="grid lg:grid-cols-3 gap-8 mt-20">
  
            {/* CARD 1 */}
            <div className="bg-[#F7F7F7] rounded-3xl p-8">
  
              <h3 className="text-2xl font-bold text-[#690808] mb-6">
                Quem pode doar?
              </h3>
  
              <ul className="space-y-4 text-zinc-700 leading-relaxed">
  
                <li>• Pessoas entre 16 e 69 anos</li>
                <li>• Mais de 50kg</li>
                <li>• Estar bem de saúde</li>
                <li>• Ter dormido pelo menos 6 horas</li>
                <li>• Intervalo mínimo entre uma doação de sangue e outra. 
                    O mais indicado é o período de dois meses para o público masculino 
                    e de três meses para as mulheres.

                </li>
  
              </ul>
  
            </div>
  
            {/* CARD 2 */}
            <div className="bg-[#F7F7F7] rounded-3xl p-8">
  
              <h3 className="text-2xl font-bold text-[#690808] mb-6">
                Mitos e verdades
              </h3>
  
              <div className="space-y-5 text-zinc-700">
  
                <p>
                  ❌ “Doar sangue engrossa o sangue”
                </p>
  
                <p>
                  ✅ Isso é mito. O organismo repõe o volume normalmente.
                </p>
  
                <p>
                  ❌ “Quem tem tatuagem nunca pode doar”
                </p>
  
                <p>
                  ✅ Após 12 meses geralmente já é permitido.
                </p>

                <p>
                  ❌ “O organismo fica "viciado" e terei que doar para sempre.”
                </p>

                <p>
                  ✅ O corpo produz a mesma quantidade de sangue de forma regular, 
                  independente de você doar uma única vez ou várias vezes ao ano.
                </p>
  
              </div>
  
            </div>
  
            {/* CARD 3 */}
            <div className="bg-[#690808] text-white rounded-3xl p-8">
  
              <h3 className="text-2xl font-bold mb-6">
                Uma doação salva vidas
              </h3>
  
              <p className="leading-relaxed text-red-100">
                Hospitais e hemocentros dependem diariamente
                da solidariedade de doadores para manter os
                estoques abastecidos. 
              </p>
              <p className="leading-relaxed text-red-100">
                A escassez constante nos bancos de sangue é outro fator crítico. 
                Segundo o Ministério da Saúde, apenas 16 a cada mil habitantes doam sangue no Brasil (1,6% da população),
                 um percentual significativamente abaixo do ideal para manter a rede hospitalar abastecida.
              </p>
  
              <div className="mt-6 border-t border-white/20 pt-6">
  
                <p className="text-5xl font-black">
                  4
                </p>
  
                <p className="mt-2 text-red-100">
                  vidas podem ser ajudadas com uma única doação.
                </p>
  
              </div>
  
            </div>
  
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">
  
            {/* CARD 4 */}
            <div className="bg-[#F7F7F7] rounded-3xl p-8">
  
              <h3 className="text-2xl font-bold text-[#690808] mb-6">
                Quem definitivamente não pode doar?
              </h3>
  
              <ul className="space-y-4 text-zinc-700 leading-relaxed">
  
                <li>• Quadro de hepatite após os 11 anos de idade;</li>
                <li>• Evidência clínica ou laboratorial de doenças transmissíveis pelo sangue,
                       como: Hepatites B e C; portadores do vírus HIV, doenças relacionadas ao vírus HTLV I e II e Doença de Chagas;</li>
                <li>• Uso de drogas ilícitas;</li>
                <li>• Malária.</li>
  
              </ul>
  
            </div>
  
            {/* CARD 5 */}
            <div className="bg-[#F7F7F7] rounded-3xl p-8">
  
              <h3 className="text-2xl font-bold text-[#690808] mb-6">
                Benefícios Garantidos por Lei
              </h3>
  
              <div className="space-y-5 text-zinc-700">
  
                <p>
                  ✅ Abono de falta no trabalho.
                </p>
  
                <p>
                  ✅ Isenção de taxa em concursos públicos.
                </p>
  
                <p>
                  ✅ Meia-entrada cultural.
                </p>
  
                <p>
                  ✅ Atendimento prioritário.
                </p>
  
              </div>
  
            </div>
  
            {/* CARD 6 */}
            <div className="bg-[#690808] text-white rounded-3xl p-8">
  
              <h3 className="text-2xl font-bold mb-6">
                Uma doação pode salvar a SUA vida
              </h3>
  
              <p className="leading-relaxed text-red-100">
                Estudos científicos apontam que a doação regular de sangue pode estar 
                associada a um menor risco de infarto do miocárdio. Isso ocorre porque a doação 
                reduz os estoques excessivos de ferro no sangue, diminuindo o estresse oxidativo e a 
                oxidação dos lipídios nas artérias.
              </p>
  
              <div className="mt-6 border-t border-white/20 pt-6">
  
                <p className="text-2xl font-black">
                  Referência:
                </p>
  
                <p className="mt-2 text-red-100">
                  American Journal of Epidemiology (Salonen et al., 
                  "Donation of blood is associated with reduced risk of myocardial infarction").
                </p>
  
              </div>
  
            </div>
  
          </div>

          <p className="mt-24 text-[#690808] text-center font-semibold">

            Se este texto motivou você a se tornar um doador voluntário, procure o banco de sangue mais próximo em sua cidade.

          </p>

          <p className="mt-8 text-[#690808] text-center font-semibold">

            Consulte sempre o Disque Saúde 136 do Ministério da Saúde para informações oficiais.
          </p>
  
        </div>
      </section>
    )
  }

  