// Cole aqui a URL do Web App do Apps Script após a publicação.
const API_URL = "COLE_AQUI_A_URL_DO_WEB_APP";

const STATUS_OPTIONS = ["Não iniciado", "Em andamento", "Aguardando terceiros", "Concluído", "Atrasado", "Suspenso", "Cancelado"];
const PRIORIDADE_OPTIONS = ["Baixa", "Média", "Alta", "Crítica"];
const FASE_OPTIONS = [
  "1-Diagnóstico",
  "2-Intervenção integrada",
  "3-Estabilização",
  "4-Consolidação",
  "5-Transformação",
  "6-Governança transversal"
];

const SAMPLE_DATA = {
  "updatedAt": "2026-06-23T19:45:14.637467",
  "acoes": [
    {
      "acao_id": "1.1",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Realização de Operação de Retomada Integrada entre forças de segurança estaduais e, se necessário, as Forças de Segurança Federais e Forças Armadas.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.2",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Implementação de Bases Integradas de Segurança Territorial (BIST) funcionando 24h com policiamento comunitário e tecnologia de monitoramento.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.3",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Oferta de Justiça Itinerante com Defensoria, Ministério Público e Juizados nos territórios.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.4",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Repressão ao tráfico de armas, drogas e lavagem de dinheiro com apoio do Departamento da Polícia Federal, Receita Federal e COAF.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.5",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Implantação de guarda municipal comunitária com formação em direitos humanos.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.6",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Criação de postos avançados da Ouvidoria e Defensoria Pública nas áreas retomadas.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.7",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Apoio à criação de espaços de mediação de conflitos e justiça restaurativa.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.8",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Estímulo à formação de lideranças comunitárias juvenis em territórios vulneráveis.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.9",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Estabelecimento de conselhos locais de segurança cidadã com reuniões regulares entre comunidade e poder público.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "1.10",
      "eixo_id": 1,
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "objetivo_estrategico": "Restabelecer a ordem e a paz social",
      "acao_estrategica": "Implementação do Urbanismo Tático para requalificação de becos, vielas e áreas degradadas com impacto na segurança pública.",
      "foco_monitoramento": "Justiça e segurança pública"
    },
    {
      "acao_id": "2.1",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Realização de mutirões de cidadania, saúde, educação e assistência social nas comunidades retomadas.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.2",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Requalificação das escolas públicas com implantação de tempo integral e atividades extracurriculares.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.3",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Criação de Centros da Juventude e Oportunidades (CJO) com cursos técnicos, orientação vocacional e inclusão digital.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.4",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Elaboração de programas de apoio familiar e combate ao aliciamento de crianças e adolescentes pelo crime.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.5",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Implantação de serviços móveis intersetoriais (CRAS itinerante, saúde, cidadania, juventude).",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.6",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Adoção de protocolos padronizados nas escolas e postos de saúde para identificação e encaminhamento de situações de violência.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.7",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Fortalecimento da rede de proteção local (CREAS, Conselho Tutelar, UBSs e escolas).",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.8",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Implantação de Casas da Mulher ou centros integrados de atendimento a vítimas de violência.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.9",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Realização de campanhas educativas permanentes nas escolas sobre prevenção à violência de gênero e abuso sexual.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.10",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Criação de espaços de contraturno escolar com oficinas culturais, esportivas e profissionalizantes.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.11",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Apoio a coletivos culturais e iniciativas juvenis como forma de expressão e pertencimento.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "2.12",
      "eixo_id": 2,
      "eixo": "Eixo 2 – Desenvolvimento Social",
      "objetivo_estrategico": "Ampliar acesso a Direitos Fundamentais",
      "acao_estrategica": "Realização de oficinas de masculinidades positivas e cultura de paz para adolescentes e jovens.",
      "foco_monitoramento": "Direitos fundamentais e rede de proteção"
    },
    {
      "acao_id": "3.1",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Realização de obras de infraestrutura (saneamento, iluminação, moradia) com participação da comunidade.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.2",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Regularização fundiária com assistência técnica gratuita e entrega de títulos de propriedade.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.3",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Implementação de conectividade pública com Wi-Fi livre em espaços coletivos.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.4",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Promover a mobilidade urbana com transporte acessível e seguro.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.5",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Instalação de iluminação pública estratégica em áreas com risco de domínio armado.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.6",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Revitalização de espaços públicos com urbanismo tático e participação comunitária.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.7",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Fiscalização de loteamentos irregulares e construções exploradas por milícias.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.8",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Regulamentação clara de uso e ocupação do solo em áreas de interesse social.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.9",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Criação de zonas especiais de regularização fundiária com enfoque em permanência de moradores.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "3.10",
      "eixo_id": 3,
      "eixo": "Eixo 3 – Urbanismo e Infraestrutura",
      "objetivo_estrategico": "Reurbanizar e integrar espaços à cidade formal",
      "acao_estrategica": "Urbanização de áreas críticas com priorização de acessos, saneamento e mobilidade local.",
      "foco_monitoramento": "Infraestrutura, ordenamento e integração urbana"
    },
    {
      "acao_id": "4.1",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Criação das Zonas de Incentivo ao Empreendedorismo (ZIE) com benefícios fiscais e microcrédito.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.2",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Fomento a polos produtivos e cooperativas comunitárias.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.3",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Estabelecimento de parcerias com empresas para contratação de mão de obra local.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.4",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Incentivo ao turismo comunitário, cultural e gastronômico.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.5",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Implantação de programas de primeiro emprego e bolsa permanência para juventude em risco.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.6",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Apoio a cooperativas populares e empreendimentos de economia solidária, como costura, gastronomia e reciclagem.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.7",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Apoio à formalização de trabalhadores e pequenos negócios locais.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.8",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Cursos profissionalizantes e técnicos com bolsa permanência durante a formação.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.9",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Apoio à comercialização de produtos comunitários em feiras, eventos e e-commerce.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "4.10",
      "eixo_id": 4,
      "eixo": "Eixo 4 – Desenvolvimento Econômico",
      "objetivo_estrategico": "Criar oportunidade de geração de renda, trabalho e empreendedorismo local",
      "acao_estrategica": "Incentivo à inserção de jovens no setor privado com cotas em empresas parceiras.",
      "foco_monitoramento": "Geração de renda e inclusão produtiva"
    },
    {
      "acao_id": "5.1",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Implementação do Gabinete Integrado de Gestão Territorial (GIGT) com representantes da União, Estado e Municípios.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.2",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Implementação de Comitês locais com metas, cronogramas e acompanhamento contínuo.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.3",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Constituição de conselhos populares de acompanhamento com poder de voz e fiscalização.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.4",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Implementação de plataforma digital de transparência com indicadores públicos de desempenho.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.5",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Pactuação de metas territoriais específicas por eixo temático e comunidade atendida.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.6",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Formação continuada de gestores públicos e conselheiros locais em urbanismo social e segurança cidadã.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.7",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Criação de observatórios municipais de violência e criminalidade, com dados territorializados.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    },
    {
      "acao_id": "5.8",
      "eixo_id": 5,
      "eixo": "Eixo 5 – Governança e Sustentabilidade do Projeto",
      "objetivo_estrategico": "Promover a articulação entre entes públicos e população local",
      "acao_estrategica": "Realização de pesquisas de vitimização e percepção sobre violência e presença estatal.",
      "foco_monitoramento": "Governança, transparência e avaliação"
    }
  ],
  "tasks": [
    {
      "task_id": "1.1.001",
      "acao_id": "1.1",
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "acao_estrategica": "Realização de Operação de Retomada Integrada entre forças de segurança estaduais e, se necessário, as Forças de Segurança Federais e Forças Armadas.",
      "task": "Solicitar o Plano de Ação de cada Secretaria (SEPOL e SEPM)",
      "descricao": "Solicitar o Plano de Ação Operacional de cada Secretaria (SEPOL e SEPM) para fins de integração",
      "medidas": "Enviar ofício via SEI",
      "status": "Concluído",
      "responsavel": "",
      "orgao": "",
      "territorio": "Gardênia Azul / Rio das Pedras / Muzema",
      "fase": "1-Diagnóstico",
      "prioridade": "Alta",
      "inicio": "",
      "prazo": "",
      "conclusao": "",
      "percentual": "100%",
      "dependencia": "",
      "interdependencia": "",
      "anexos": "",
      "ultima_atualizacao": "",
      "dias_para_prazo": "",
      "alerta": "",
      "observacoes": ""
    },
    {
      "task_id": "1.1.002",
      "acao_id": "1.1",
      "eixo": "Eixo 1 – Segurança Pública e Justiça",
      "acao_estrategica": "Realização de Operação de Retomada Integrada entre forças de segurança estaduais e, se necessário, as Forças de Segurança Federais e Forças Armadas.",
      "task": "Confeccionar Plano de Ação Operacional Integrado",
      "descricao": "",
      "medidas": "",
      "status": "Não iniciado",
      "responsavel": "",
      "orgao": "",
      "territorio": "Gardênia Azul / Rio das Pedras / Muzema",
      "fase": "1-Diagnóstico",
      "prioridade": "Alta",
      "inicio": "",
      "prazo": "",
      "conclusao": "",
      "percentual": "0%",
      "dependencia": "",
      "interdependencia": "",
      "anexos": "",
      "ultima_atualizacao": "",
      "dias_para_prazo": "",
      "alerta": "",
      "observacoes": ""
    }
  ]
};

const state = {
  data: { tasks: [], acoes: [], updatedAt: null },
  filtered: [],
  charts: {}
};

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  bindEvents();
  loadData();
});

function bindEvents() {
  ["searchInput", "axisFilter", "actionFilter", "statusFilter", "priorityFilter", "phaseFilter", "territoryFilter"]
    .forEach(id => $(id).addEventListener("input", () => applyAndRender()));
  $("refreshBtn").addEventListener("click", loadData);
  $("exportBtn").addEventListener("click", exportCSV);
  $("newTaskBtn").addEventListener("click", openNewTaskForm);
  $("closeDialog").addEventListener("click", () => $("taskDialog").close());
  $("closeFormDialog").addEventListener("click", () => $("taskFormDialog").close());
  $("cancelFormBtn").addEventListener("click", () => $("taskFormDialog").close());
  $("formAcaoId").addEventListener("change", updateActionPreview);
  $("newTaskForm").addEventListener("submit", submitNewTask);
}

async function loadData() {
  setLoading(true);
  try {
    const useSample = !API_URL || API_URL.includes("COLE_AQUI");
    const payload = useSample
      ? SAMPLE_DATA
      : await fetch(API_URL + "?t=" + Date.now()).then(r => {
          if (!r.ok) throw new Error("Falha ao consultar Google Sheets");
          return r.json();
        });

    state.data = normalizePayload(payload);
    renderFilters();
    applyAndRender();
  } catch (error) {
    console.error(error);
    alert("Não foi possível carregar a base. Confira a URL do Apps Script e a publicação como Web App.");
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  $("refreshBtn").textContent = isLoading ? "Atualizando..." : "Atualizar dados";
  $("refreshBtn").disabled = isLoading;
}

function normalizePayload(payload) {
  const acoes = (payload.acoes || []).map(row => normalizeKeys(row));
  const tasks = (payload.tasks || [])
    .map(row => normalizeKeys(row))
    .filter(row => (row.task_id || row.task || row.acao_id));

  const actionById = new Map(acoes.map(a => [String(a.acao_id || "").trim(), a]));
  tasks.forEach(t => {
    const action = actionById.get(String(t.acao_id || "").trim());
    if (action) {
      t.eixo = t.eixo || action.eixo;
      t.acao_estrategica = t.acao_estrategica || action.acao_estrategica;
      t.objetivo_estrategico = action.objetivo_estrategico;
    }
    t.status = titleStatus(t.status || "Não iniciado");
    t.alerta = (t.alerta || buildAlert(t)).toUpperCase();
  });
  return { tasks, acoes, updatedAt: payload.updatedAt || payload.updated_at || new Date().toISOString() };
}

function normalizeKeys(row) {
  const out = {};
  Object.entries(row || {}).forEach(([key, value]) => {
    const k = String(key)
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .toLowerCase().trim()
      .replace(/%/g, "percentual")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "");
    out[k] = value == null ? "" : String(value).trim();
  });
  if (out.percentual_execucao && !out.percentual) out.percentual = out.percentual_execucao;
  if (out.acoes_estrategicas && !out.acao_estrategica) out.acao_estrategica = out.acoes_estrategicas;
  return out;
}

function titleStatus(status) {
  const s = String(status || "").trim().toLowerCase();
  const normalized = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const map = {
    "concluido": "Concluído",
    "em andamento": "Em andamento",
    "aguardando terceiros": "Aguardando terceiros",
    "nao iniciado": "Não iniciado",
    "atrasado": "Atrasado",
    "suspenso": "Suspenso",
    "cancelado": "Cancelado"
  };
  return map[normalized] || status || "Não iniciado";
}

function buildAlert(task) {
  if (task.status === "Concluído") return "OK";
  if (!task.prazo) return "SEM PRAZO";
  const parsed = parseDate(task.prazo);
  if (!parsed) return "SEM PRAZO";
  const today = new Date(); today.setHours(0,0,0,0);
  const due = new Date(parsed); due.setHours(0,0,0,0);
  const diff = Math.round((due - today) / 86400000);
  if (diff < 0) return "ATRASADO";
  if (diff <= 7) return "VENCE EM 7 DIAS";
  return "NO PRAZO";
}

function parseDate(value) {
  if (!value) return null;
  const raw = String(value).trim();
  const br = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (br) return new Date(Number(br[3]), Number(br[2]) - 1, Number(br[1]));
  const iso = Date.parse(raw);
  return Number.isNaN(iso) ? null : new Date(iso);
}


function openNewTaskForm() {
  if (!state.data.acoes.length) {
    alert("Carregue a base antes de cadastrar uma nova task.");
    return;
  }

  if (!API_URL || API_URL.includes("COLE_AQUI")) {
    alert("Para salvar novas tasks, primeiro publique o Apps Script e cole a URL do Web App em API_URL no arquivo app.js.");
  }

  fillActionSelect();
  fillSimpleSelect("formStatus", STATUS_OPTIONS, "Não iniciado");
  fillSimpleSelect("formPrioridade", PRIORIDADE_OPTIONS, "Alta");
  fillSimpleSelect("formFase", FASE_OPTIONS, "1-Diagnóstico");
  $("newTaskForm").reset();
  $("formStatus").value = "Não iniciado";
  $("formPrioridade").value = "Alta";
  $("formFase").value = "1-Diagnóstico";
  $("formSaveNote").textContent = "";
  $("formSaveNote").className = "form-note";
  updateActionPreview();
  $("taskFormDialog").showModal();
}

function fillActionSelect() {
  const actions = [...state.data.acoes]
    .filter(a => a.acao_id)
    .sort((a, b) => String(a.acao_id).localeCompare(String(b.acao_id), "pt-BR", { numeric: true }));

  $("formAcaoId").innerHTML = `<option value="">Selecione...</option>` + actions.map(a => {
    const label = `${a.acao_id} | ${truncate(a.acao_estrategica || "", 100)}`;
    return `<option value="${escapeAttr(a.acao_id)}">${escapeHtml(label)}</option>`;
  }).join("");
}

function fillSimpleSelect(id, values, defaultValue = "") {
  $(id).innerHTML = values.map(v => `<option value="${escapeAttr(v)}">${escapeHtml(v)}</option>`).join("");
  if (defaultValue) $(id).value = defaultValue;
}

function updateActionPreview() {
  const acaoId = $("formAcaoId").value;
  const action = state.data.acoes.find(a => String(a.acao_id) === String(acaoId));
  if (!action) {
    $("formActionPreview").innerHTML = "Selecione uma ação para visualizar o eixo e o texto estratégico.";
    return;
  }
  $("formActionPreview").innerHTML = `
    <strong>${escapeHtml(action.acao_id)} • ${escapeHtml(action.eixo || "Eixo não informado")}</strong><br>
    ${escapeHtml(action.acao_estrategica || "")}
  `;
}

async function submitNewTask(event) {
  event.preventDefault();

  if (!API_URL || API_URL.includes("COLE_AQUI")) {
    $("formSaveNote").textContent = "Configure a URL do Apps Script em API_URL para permitir gravação no Google Sheets.";
    $("formSaveNote").className = "form-note err";
    return;
  }

  const submitButton = $("newTaskForm").querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Salvando...";
  $("formSaveNote").textContent = "Enviando cadastro para o Google Sheets...";
  $("formSaveNote").className = "form-note";

  try {
    const formData = new FormData($("newTaskForm"));
    formData.set("action", "addTask");
    await postToAppsScript(formData);

    $("formSaveNote").textContent = "Task enviada. Atualizando painel...";
    $("formSaveNote").className = "form-note ok";

    setTimeout(async () => {
      $("taskFormDialog").close();
      $("newTaskForm").reset();
      await loadData();
    }, 1600);
  } catch (error) {
    console.error(error);
    $("formSaveNote").textContent = "Não foi possível enviar a task. Verifique a URL do Apps Script e a implantação como Web App.";
    $("formSaveNote").className = "form-note err";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Salvar task";
  }
}

function postToAppsScript(formData) {
  return new Promise((resolve) => {
    const iframeName = "appsScriptSubmitFrame";
    let iframe = document.querySelector(`iframe[name="${iframeName}"]`);
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = API_URL;
    form.target = iframeName;
    form.style.display = "none";

    for (const [key, value] of formData.entries()) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
    setTimeout(() => {
      form.remove();
      resolve();
    }, 900);
  });
}


function renderFilters() {
  const tasks = state.data.tasks;
  fillSelect("axisFilter", unique(tasks.map(t => t.eixo)), "Todos os eixos");
  fillSelect("actionFilter", unique(tasks.map(t => `${t.acao_id} | ${truncate(t.acao_estrategica, 80)}`)), "Todas as ações");
  fillSelect("statusFilter", unique(tasks.map(t => t.status)), "Todos os status");
  fillSelect("priorityFilter", unique(tasks.map(t => t.prioridade)), "Todas");
  fillSelect("phaseFilter", unique(tasks.map(t => t.fase)), "Todas");
  fillSelect("territoryFilter", unique(tasks.map(t => t.territorio)), "Todos");
}

function fillSelect(id, values, label) {
  const selected = $(id).value;
  $(id).innerHTML = `<option value="">${label}</option>` + values
    .filter(Boolean)
    .map(v => `<option value="${escapeAttr(v)}">${escapeHtml(v)}</option>`)
    .join("");
  if ([...$(id).options].some(o => o.value === selected)) $(id).value = selected;
}

function unique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "pt-BR", { numeric: true }));
}

function applyAndRender() {
  const query = $("searchInput").value.trim().toLowerCase();
  const axis = $("axisFilter").value;
  const action = $("actionFilter").value.split("|")[0]?.trim();
  const status = $("statusFilter").value;
  const priority = $("priorityFilter").value;
  const phase = $("phaseFilter").value;
  const territory = $("territoryFilter").value;

  state.filtered = state.data.tasks.filter(t => {
    const haystack = [
      t.task_id, t.acao_id, t.eixo, t.acao_estrategica, t.task, t.descricao, t.medidas,
      t.status, t.responsavel, t.orgao, t.territorio, t.fase, t.prioridade, t.alerta
    ].join(" ").toLowerCase();

    return (!query || haystack.includes(query))
      && (!axis || t.eixo === axis)
      && (!action || String(t.acao_id) === action)
      && (!status || t.status === status)
      && (!priority || t.prioridade === priority)
      && (!phase || t.fase === phase)
      && (!territory || t.territorio === territory);
  });

  renderMeta();
  renderKpis();
  renderCharts();
  renderActionCards();
  renderTable();
}

function renderMeta() {
  const dt = state.data.updatedAt ? new Date(state.data.updatedAt) : new Date();
  $("updatedAt").textContent = Number.isNaN(dt.getTime()) ? state.data.updatedAt : dt.toLocaleString("pt-BR");
}

function renderKpis() {
  const tasks = state.filtered;
  const total = tasks.length;
  const done = tasks.filter(isDone).length;
  const progress = tasks.filter(t => t.status === "Em andamento").length;
  const late = tasks.filter(isLate).length;
  const blocked = tasks.filter(t => t.status === "Aguardando terceiros" || hasText(t.dependencia)).length;
  const donePct = total ? Math.round((done / total) * 100) : 0;

  $("kpiTotal").textContent = total;
  $("kpiDone").textContent = done;
  $("kpiDonePct").textContent = `${donePct}% do total filtrado`;
  $("kpiProgress").textContent = progress;
  $("kpiLate").textContent = late;
  $("kpiBlocked").textContent = blocked;
}

function renderCharts() {
  const byStatus = countBy(state.filtered, t => t.status || "Não informado");
  const byAxis = countBy(state.filtered, t => t.eixo || "Não informado");

  drawChart("statusChart", "doughnut", Object.keys(byStatus), Object.values(byStatus));
  drawChart("axisChart", "bar", Object.keys(byAxis), Object.values(byAxis), {
    indexAxis: "y",
    plugins: { legend: { display: false } }
  });
}

function drawChart(id, type, labels, values, extraOptions = {}) {
  if (state.charts[id]) state.charts[id].destroy();
  const ctx = $(id);
  state.charts[id] = new Chart(ctx, {
    type,
    data: { labels, datasets: [{ label: "Tasks", data: values, borderWidth: 1 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: type === "bar" ? { x: { beginAtZero: true, ticks: { precision: 0 } } } : undefined,
      ...extraOptions
    }
  });
}

function renderActionCards() {
  const groups = groupBy(state.filtered, t => t.acao_id || "Sem ID");
  const cards = Object.entries(groups)
    .sort(([a], [b]) => a.localeCompare(b, "pt-BR", { numeric: true }))
    .map(([acaoId, tasks]) => {
      const action = state.data.acoes.find(a => String(a.acao_id) === String(acaoId)) || {};
      const total = tasks.length;
      const done = tasks.filter(isDone).length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      const late = tasks.filter(isLate).length;
      const title = action.acao_estrategica || tasks[0]?.acao_estrategica || "Ação estratégica não informada";
      const eixo = action.eixo || tasks[0]?.eixo || "Eixo não informado";

      return `
        <article class="action-card">
          <div class="action-top">
            <span class="badge">${escapeHtml(acaoId)}</span>
            <span class="${late ? "alert-pill alert-danger" : "alert-pill alert-ok"}">${late ? `${late} atraso(s)` : "No radar"}</span>
          </div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(eixo)}</p>
          <div class="progress" title="${pct}% concluído"><div style="width:${pct}%"></div></div>
          <div class="action-meta"><span>${done}/${total} concluídas</span><span>${pct}%</span></div>
        </article>`;
    }).join("");

  $("actionCards").innerHTML = cards || `<p class="empty">Nenhuma ação encontrada para os filtros selecionados.</p>`;
  $("actionCountLabel").textContent = `${Object.keys(groups).length} ações com task cadastrada`;
}

function renderTable() {
  const rows = state.filtered
    .sort((a, b) => sortTask(a, b))
    .map(t => `
      <tr data-id="${escapeAttr(t.task_id)}">
        <td><strong>${escapeHtml(t.task || "Task sem título")}</strong><br><small>${escapeHtml(t.descricao || "")}</small></td>
        <td>${escapeHtml(t.acao_id || "")}</td>
        <td>${escapeHtml(t.eixo || "")}</td>
        <td><span class="status-pill ${statusClass(t.status)}">${escapeHtml(t.status || "")}</span></td>
        <td>${escapeHtml(t.prioridade || "")}</td>
        <td>${escapeHtml(t.prazo || "")}</td>
        <td>${escapeHtml(t.responsavel || t.orgao || "")}</td>
        <td><span class="alert-pill ${alertClass(t.alerta)}">${escapeHtml(t.alerta || "")}</span></td>
        <td>${renderLink(t.anexos)}</td>
      </tr>
    `).join("");

  $("taskTable").innerHTML = rows || `<tr><td colspan="9">Nenhuma task encontrada.</td></tr>`;
  $("tableCount").textContent = `${state.filtered.length} registros`;

  [...$("taskTable").querySelectorAll("tr[data-id]")].forEach(row => {
    row.addEventListener("click", () => openTask(row.dataset.id));
  });
}

function openTask(taskId) {
  const t = state.filtered.find(item => item.task_id === taskId);
  if (!t) return;
  $("dialogContent").innerHTML = `
    <h2>${escapeHtml(t.task || "Task sem título")}</h2>
    <p><strong>${escapeHtml(t.acao_id || "")}</strong> • ${escapeHtml(t.acao_estrategica || "")}</p>
    <div class="detail-grid">
      <div><span>Status</span>${escapeHtml(t.status || "")}</div>
      <div><span>Alerta</span>${escapeHtml(t.alerta || "")}</div>
      <div><span>Eixo</span>${escapeHtml(t.eixo || "")}</div>
      <div><span>Fase</span>${escapeHtml(t.fase || "")}</div>
      <div><span>Responsável</span>${escapeHtml(t.responsavel || "")}</div>
      <div><span>Órgão</span>${escapeHtml(t.orgao || "")}</div>
      <div><span>Prazo</span>${escapeHtml(t.prazo || "")}</div>
      <div><span>Prioridade</span>${escapeHtml(t.prioridade || "")}</div>
      <div><span>Medidas</span>${escapeHtml(t.medidas || "")}</div>
      <div><span>Dependência</span>${escapeHtml(t.dependencia || t.interdependencia || "")}</div>
    </div>
    <p><strong>Descrição:</strong><br>${escapeHtml(t.descricao || "—")}</p>
    <p><strong>Observações:</strong><br>${escapeHtml(t.observacoes || "—")}</p>
    <p>${renderLink(t.anexos)}</p>`;
  $("taskDialog").showModal();
}

function exportCSV() {
  const fields = [
    ["TASK_ID", "task_id"], ["ACAO_ID", "acao_id"], ["EIXO", "eixo"],
    ["ACAO_ESTRATEGICA", "acao_estrategica"], ["TASK", "task"], ["STATUS", "status"],
    ["PRIORIDADE", "prioridade"], ["PRAZO", "prazo"], ["RESPONSAVEL", "responsavel"],
    ["ORGAO", "orgao"], ["TERRITORIO", "territorio"], ["FASE", "fase"], ["ALERTA", "alerta"]
  ];
  const lines = [fields.map(f => f[0]).join(";")].concat(
    state.filtered.map(t => fields.map(f => csvCell(t[f[1]] || "")).join(";"))
  );
  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `monitoramento_adpf635_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const s = String(value ?? "").replace(/"/g, '""');
  return /[;"\n]/.test(s) ? `"${s}"` : s;
}

function renderLink(value) {
  if (!value) return "";
  const url = String(value).trim();
  if (/^https?:\/\//i.test(url)) return `<a href="${escapeAttr(url)}" target="_blank" rel="noopener">Abrir</a>`;
  return escapeHtml(url);
}

function sortTask(a, b) {
  if (isLate(a) !== isLate(b)) return isLate(a) ? -1 : 1;
  return String(a.acao_id || "").localeCompare(String(b.acao_id || ""), "pt-BR", { numeric: true });
}

function countBy(items, fn) {
  return items.reduce((acc, item) => {
    const key = fn(item) || "Não informado";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function groupBy(items, fn) {
  return items.reduce((acc, item) => {
    const key = fn(item) || "Não informado";
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
}

function isDone(t) { return t.status === "Concluído"; }
function isLate(t) { return !isDone(t) && String(t.alerta || "").toUpperCase().includes("ATRASADO"); }
function hasText(v) { return String(v || "").trim().length > 0; }
function truncate(text, n) { return String(text || "").length > n ? String(text).slice(0, n - 1) + "…" : String(text || ""); }

function statusClass(status) {
  const s = String(status || "").toLowerCase();
  if (s.includes("concl")) return "status-concluido";
  if (s.includes("andamento")) return "status-andamento";
  if (s.includes("aguard")) return "status-aguardando";
  if (s.includes("atras")) return "status-atrasado";
  return "status-default";
}
function alertClass(alert) {
  const s = String(alert || "").toUpperCase();
  if (s.includes("ATRAS")) return "alert-danger";
  if (s.includes("VENCE") || s.includes("SEM PRAZO")) return "alert-warn";
  return "alert-ok";
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[m]));
}
function escapeAttr(value) { return escapeHtml(value).replace(/`/g, "&#096;"); }
