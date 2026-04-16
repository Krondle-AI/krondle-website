import { LegalPageLayout } from "../components/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Termos e Condicoes de Utilizacao"
      intro="Estes Termos e Condicoes regulam o acesso e a utilizacao do website e dos servicos digitais da Krondle. O utilizador deve ler este documento antes de utilizar o website, solicitar uma demonstracao ou iniciar qualquer relacao comercial connosco."
      updatedAt="16 de abril de 2026"
      sections={[
        {
          title: "1. Identificacao do servico",
          children: (
            <>
              <p>
                A Krondle disponibiliza software e servicos digitais orientados a negocios locais,
                incluindo ferramentas de gestao operacional, automacao de atendimento e integracoes
                com canais de comunicacao de terceiros.
              </p>
              <p>
                Para questoes legais, operacionais ou pedidos de informacao, o contacto publico
                disponivel neste website e <a className="font-medium text-cyan-700 dark:text-cyan-300" href="mailto:krondleai@gmail.com">krondleai@gmail.com</a>.
              </p>
            </>
          ),
        },
        {
          title: "2. Aceitacao e utilizacao adequada",
          children: (
            <>
              <p>
                Ao aceder ao website ou utilizar qualquer funcionalidade disponibilizada pela
                Krondle, o utilizador declara que utiliza o servico de forma licita, de boa-fe e em
                conformidade com a legislacao aplicavel.
              </p>
              <p>
                Nao e permitida a utilizacao do website ou dos servicos para praticas ilicitas,
                envio de conteudo abusivo, interferencia com sistemas, tentativa de acesso nao
                autorizado ou qualquer uso que possa comprometer a seguranca, disponibilidade ou
                reputacao da Krondle e dos seus clientes.
              </p>
            </>
          ),
        },
        {
          title: "3. Conta, acessos e responsabilidade do utilizador",
          children: (
            <>
              <p>
                O utilizador e responsavel pela veracidade das informacoes fornecidas, pela guarda
                segura das suas credenciais e pela utilizacao adequada das integracoes, numeros,
                contas ou canais associados ao servico.
              </p>
              <p>
                Sempre que o servico dependa de plataformas externas, incluindo Meta, WhatsApp ou
                outros fornecedores, o utilizador reconhece que a disponibilidade dessas
                plataformas, os respetivos requisitos e as respetivas politicas podem afetar o
                funcionamento de determinadas funcionalidades.
              </p>
            </>
          ),
        },
        {
          title: "4. Propriedade intelectual",
          children: (
            <>
              <p>
                O conteudo deste website, incluindo texto, identidade visual, codigo, estrutura,
                graficos, interfaces e documentacao, pertence a Krondle ou e utilizado ao abrigo de
                licenca valida, estando protegido pela legislacao aplicavel.
              </p>
              <p>
                Nao e permitida a reproducao, adaptacao, distribuicao ou utilizacao comercial sem
                autorizacao previa por escrito.
              </p>
            </>
          ),
        },
        {
          title: "5. Disponibilidade, alteracoes e limitacao de responsabilidade",
          children: (
            <>
              <p>
                A Krondle pode atualizar, alterar, suspender ou remover funcionalidades, conteudos ou
                integracoes do website e do servico sempre que tal se revele necessario por motivos
                tecnicos, operacionais, legais ou comerciais.
              </p>
              <p>
                Embora exista preocupacao continua com seguranca e fiabilidade, o website e os
                servicos sao disponibilizados numa logica de melhoria continua. A Krondle nao garante
                disponibilidade ininterrupta nem ausencia total de falhas, sobretudo quando existam
                dependencias de infraestrutura ou APIs de terceiros.
              </p>
            </>
          ),
        },
        {
          title: "6. Privacidade e dados pessoais",
          children: (
            <>
              <p>
                O tratamento de dados pessoais realizado no contexto deste website e descrito na
                respetiva Politica de Privacidade, que faz parte integrante deste enquadramento
                legal.
              </p>
              <p>
                Sempre que o servico envolva integracoes com plataformas de terceiros, o utilizador
                podera ficar tambem sujeito aos termos, politicas e requisitos desses fornecedores.
              </p>
            </>
          ),
        },
        {
          title: "7. Lei aplicavel e contacto",
          children: (
            <>
              <p>
                Estes Termos e Condicoes sao interpretados de acordo com a legislacao aplicavel em
                Portugal, sem prejuizo de normas imperativas que resultem de outras jurisdicoes
                aplicaveis.
              </p>
              <p>
                Quaisquer questoes relacionadas com este documento podem ser remetidas para{" "}
                <a className="font-medium text-cyan-700 dark:text-cyan-300" href="mailto:krondleai@gmail.com">
                  krondleai@gmail.com
                </a>.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
