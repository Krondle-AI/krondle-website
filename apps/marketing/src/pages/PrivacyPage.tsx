import { LegalPageLayout } from "../components/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      eyebrow="Privacidade"
      title="Politica de Privacidade"
      intro="Esta Politica de Privacidade explica de forma objetiva que dados pessoais podem ser tratados pela Krondle, para que finalidades, em que base legal, com quem podem ser partilhados e como o titular dos dados pode exercer os seus direitos."
      updatedAt="16 de abril de 2026"
      sections={[
        {
          title: "1. Quem trata os dados",
          children: (
            <>
              <p>
                A Krondle trata dados pessoais no contexto deste website e dos servicos associados,
                atuando como responsavel pelo tratamento relativamente aos dados recolhidos
                diretamente para fins comerciais, de contacto, demonstracao do servico ou suporte.
              </p>
              <p>
                Para pedidos relacionados com privacidade, contacto ou exercicio de direitos, o
                endereco publico disponibilizado e{" "}
                <a className="font-medium text-cyan-700 dark:text-cyan-300" href="mailto:krondleai@gmail.com">
                  krondleai@gmail.com
                </a>.
              </p>
            </>
          ),
        },
        {
          title: "2. Dados que podemos recolher",
          children: (
            <>
              <p>Podemos recolher, consoante a interacao do utilizador:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>nome, email, telefone e dados fornecidos em formularios ou pedidos de contacto;</li>
                <li>dados de utilizacao do website, logs tecnicos e informacao basica de dispositivo e navegador;</li>
                <li>conteudo de mensagens trocadas connosco em canais de suporte, contacto ou demonstracao;</li>
                <li>dados operacionais estritamente necessarios para avaliar, configurar ou prestar o servico.</li>
              </ul>
            </>
          ),
        },
        {
          title: "3. Finalidades e base legal",
          children: (
            <>
              <p>Os dados podem ser tratados para as seguintes finalidades:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>responder a pedidos de contacto, demonstracao ou suporte;</li>
                <li>apresentar, configurar e disponibilizar os servicos da Krondle;</li>
                <li>garantir seguranca, prevencao de abuso, auditoria tecnica e continuidade operacional;</li>
                <li>cumprir obrigacoes legais e regulatórias aplicaveis;</li>
                <li>melhorar o website e os servicos, com base em interesse legitimo e analise operacional.</li>
              </ul>
              <p>
                O tratamento e realizado, consoante o caso, com base na execucao de diligencias
                pre-contratuais, execucao contratual, cumprimento de obrigacoes legais, interesse
                legitimo ou consentimento quando este seja exigido.
              </p>
            </>
          ),
        },
        {
          title: "4. Partilha de dados e fornecedores",
          children: (
            <>
              <p>
                A Krondle pode recorrer a fornecedores e subcontratantes que prestem servicos
                tecnicos, de infraestrutura, alojamento, analise, comunicacao ou integracao com
                plataformas de terceiros.
              </p>
              <p>
                Sempre que tal aconteca, a partilha e limitada ao necessario para a prestacao do
                servico. Entre esses terceiros podem incluir-se plataformas de cloud, fornecedores
                de email, ferramentas de analytics e canais de comunicacao como Meta, WhatsApp ou
                outras plataformas utilizadas pelo cliente.
              </p>
            </>
          ),
        },
        {
          title: "5. Conservacao e seguranca",
          children: (
            <>
              <p>
                Conservamos os dados apenas durante o periodo necessario para cumprir as finalidades
                descritas nesta politica, para satisfazer obrigacoes legais ou para defender direitos
                da Krondle em caso de incidente, auditoria ou litigio.
              </p>
              <p>
                Sao adotadas medidas tecnicas e organizativas razoaveis para proteger os dados contra
                acesso nao autorizado, perda, divulgacao, alteracao ou destruicao indevida.
              </p>
            </>
          ),
        },
        {
          title: "6. Direitos dos titulares",
          children: (
            <>
              <p>
                O titular dos dados pode, nos termos aplicaveis, solicitar acesso, retificacao,
                apagamento, limitacao do tratamento, oposicao ou portabilidade, bem como retirar
                consentimento quando este seja a base do tratamento.
              </p>
              <p>
                Esses pedidos podem ser enviados para{" "}
                <a className="font-medium text-cyan-700 dark:text-cyan-300" href="mailto:krondleai@gmail.com">
                  krondleai@gmail.com
                </a>.
              </p>
            </>
          ),
        },
        {
          title: "7. Atualizacoes desta politica",
          children: (
            <>
              <p>
                A presente politica pode ser revista sempre que exista alteracao de processos,
                fornecedores, requisitos legais ou evolucao do servico. A versao em vigor sera sempre
                a que estiver publicada neste website.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
