"use client";

import { useState } from "react";

interface Question {
  question: string;
  correct: boolean;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "Você tem mais de 16 anos e menos de 69 anos?",
    correct: true,
    explanation: "A idade permitida para doação é entre 16 e 69 anos (menores de 18 precisam de autorização dos responsáveis).",
  },
  {
    question: "Você pesa mais de 50kg?",
    correct: true,
    explanation: "O peso mínimo exigido é de 50kg para garantir a segurança da coleta e o bem-estar do doador.",
  },
  {
    question: "Você dormiu pelo menos 6 horas nas últimas 24 horas?",
    correct: true,
    explanation: "Estar descansado é fundamental para evitar tonturas ou mal-estar durante e após a doação.",
  },
  {
    question: "Está com gripe, resfriado ou febre nos últimos 7 dias?",
    correct: false,
    explanation: "É necessário aguardar 7 dias após o desaparecimento completo dos sintomas de gripe, resfriado ou febre.",
  },
  {
    question: "Está grávida ou esteve em período pós-parto recente (90 dias para parto normal / 180 dias para cesariana)?",
    correct: false,
    explanation: "Mulheres grávidas não podem doar. Após o parto, é preciso aguardar 90 dias (parto normal) ou 180 dias (cesariana).",
  },
  {
    question: "Está amamentando um bebê com menos de 12 meses?",
    correct: false,
    explanation: "A amamentação impede a doação de sangue até que o bebê complete 12 meses de vida.",
  },
  {
    question: "Consumiu bebidas alcoólicas nas últimas 12 horas?",
    correct: false,
    explanation: "É preciso respeitar o intervalo mínimo de 12 horas sem ingerir álcool antes da doação.",
  },
  {
    question: "Fez tatuagem, maquiagem definitiva ou piercing nos últimos 12 meses?",
    correct: false,
    explanation: "É necessário aguardar 12 meses após a realização de tatuagens ou piercings (piercings na boca/região genital impedem a doação enquanto mantidos).",
  },
  {
    question: "Passou por extração dentária nos últimos 3 dias (72 horas)?",
    correct: false,
    explanation: "Procedimentos de extração dentária exigem um período de impedimento temporário de 72 horas.",
  },
  {
    question: "Fez cirurgias simples (como apendicite, hérnia ou varizes) nos últimos 3 meses?",
    correct: false,
    explanation: "Para cirurgias de menor porte é necessário aguardar o prazo de recuperação de 3 meses.",
  },
  {
    question: "Fez cirurgias de grande porte (como vesícula, útero ou fraturas) nos últimos 6 meses?",
    correct: false,
    explanation: "Cirurgias maiores e procedimentos com anestesia geral exigem um intervalo de recuperação de 6 meses.",
  },
  {
    question: "Recebeu transfusão de sangue no último ano?",
    correct: false,
    explanation: "Quem recebeu transfusão de sangue ou hemoderivados deve aguardar 12 meses para poder doar.",
  },
  {
    question: "Realizou exames ou procedimentos com endoscopia nos últimos 6 meses?",
    correct: false,
    explanation: "Exames de endoscopia e colonoscopia exigem um período de impedimento de 6 meses.",
  },
  {
    question: "Esteve exposto a situações de risco para infecções sexualmente transmissíveis nos últimos 12 meses?",
    correct: false,
    explanation: "Comportamentos de risco exigem um período de segurança de 12 meses para prevenção da saúde do receptor.",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showImpediment, setShowImpediment] = useState(false);

  const q = questions[currentQuestion];

  function handleSelectAnswer(answer: boolean) {
    const isCorrect = answer === q.correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      advanceToNextQuestion();
    } else {
      setShowImpediment(true);
    }
  }

  function advanceToNextQuestion() {
    setShowImpediment(false);
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setFinished(true);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
    setShowImpediment(false);
  }

  return (
    <section id="quiz" className="bg-[#F7F7F7] py-28">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-[#690808] text-sm font-semibold">
            Autoavaliação
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4 text-zinc-900">
            Posso doar sangue?
          </h2>

          <p className="mt-6 text-zinc-600 leading-relaxed text-lg max-w-2xl mx-auto">
            Responda algumas perguntas rápidas para descobrir se você provavelmente
            está apto para realizar uma doação de sangue.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-100">
          {!finished ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm uppercase tracking-[0.2em] text-[#690808] font-semibold">
                  Pergunta {currentQuestion + 1} de {questions.length}
                </p>
              </div>

              <h3 className="text-2xl font-bold text-zinc-800 leading-snug">
                {q.question}
              </h3>

              {!showImpediment && (
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => handleSelectAnswer(true)}
                    className="px-8 py-4 bg-zinc-100 hover:bg-[#690808] hover:text-white text-zinc-800 rounded-full font-semibold transition"
                  >
                    Sim
                  </button>

                  <button
                    onClick={() => handleSelectAnswer(false)}
                    className="px-8 py-4 border border-zinc-300 hover:bg-[#690808] hover:text-white hover:border-[#690808] text-zinc-800 rounded-full font-semibold transition"
                  >
                    Não
                  </button>
                </div>
              )}

              {showImpediment && (
                <div className="mt-8 space-y-6">
                  <div className="p-5 bg-red-50 border border-red-200 text-red-900 rounded-2xl text-sm leading-relaxed">
                    <strong className="block font-bold mb-1 text-base">
                      ⚠️ Impedimento identificado:
                    </strong>
                    {q.explanation}
                  </div>

                  <button
                    onClick={advanceToNextQuestion}
                    className="w-full md:w-auto px-8 py-4 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition"
                  >
                    {currentQuestion < questions.length - 1
                      ? "Entendi, próxima pergunta →"
                      : "Ver Resultado Final"}
                  </button>
                </div>
              )}
            </>
          ) : (

            <div className="text-center py-6">
              <h3 className="text-4xl font-black text-[#690808]">
                Resultado do Quiz
              </h3>

              <p className="mt-6 text-xl text-zinc-700 leading-relaxed max-w-xl mx-auto">
                {score === questions.length ? (
                  <>
                    🎉 <strong>Você atende aos principais pré-requisitos!</strong>
                    <br />
                    Procure o hemocentro mais próximo e faça sua doação.
                  </>
                ) : (
                  <>
                    Você respondeu <strong>{score} de {questions.length}</strong> itens de forma compatível.
                    <br />
                    Algumas condições exigem um tempo de espera. Consulte a equipe técnica do hemocentro para uma triagem completa.
                  </>
                )}
              </p>

              <button
                onClick={handleReset}
                className="mt-10 bg-[#690808] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Refazer autoavaliação
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

