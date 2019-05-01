export const state = () => ({
  speakers: [{
    id: 1,
    name: 'Sheila Kimura',
    image: 'sheila',
    role: 'Concrete, São Paulo/SP - Brasil',
    description: 'Uma agilista apaixonada por facilitação e formação de times engajados e cheios de propósito, é Pedagoga Multimeios e Informática Educativa em sua formação base e possui, também, título em MBA em Gestão da Qualidade de Software. PACC, CSM, CSPO, M3.0 - mas, acredita que pessoas são mais importantes! Apoia fortemente mulheres a ingressarem na TI e apoia a importância da diversidade lutando por representatividade.',
    twitter: 'https://twitter.com/sheilakimura83',
    linkedin: 'https://www.linkedin.com/in/sheila-kimura'
  },
  {
    id: 2,
    name: 'Daine Santos',
    image: 'daiane',
    role: ' Oktagon Games, Londrina/PR - Brasil',
    description: ' Community Manager, QA, Infosec Enthusiast, LGPD - GDPR',
    twitter: 'https://twitter.com/wh0isdxk',
    linkedin: 'https://www.linkedin.com/in/daianemsantos/'
  },
  {
    id: 3,
    name: 'Yara Senger ',
    image: 'yara',
    role: ' GlobalCode, São Paulo/PR - Brasil',
    description: 'Experienced Founder with a demonstrated history of working in the computer software industry, focused in Java and Internet of Things. Strong entrepreneurship professional skilled in Community Management and Event Management.',
    twitter: 'https://twitter.com/yarasenger',
    linkedin: 'https://www.linkedin.com/in/yarasenger'
  },
  {
    id: 4,
    name: 'Elias Nogueira ',
    image: 'elias',
    role: ' Sicredi',
    description: 'A tester, agile coach and instructor that help people and companies to deliver a high quality software.',
    twitter: 'https://twitter.com/eliasnogueira',
    linkedin: 'https://www.linkedin.com/in/eliasnogueira'
  }],
  schedules: [{
    id: 1,
    time: '8:00',
    title: 'COFFEE',
    name: '',
    tag: [],
    description: 'Café da manhã  / Credenciamento / Networking'
  }, {
    id: 2,
    time: '9:00',
    title: 'ABERTURA',
    name: '',
    tag: [],
    description: ''
  }, {
    id: 3,
    time: '9:10',
    title: 'Pentest em aplicações Mobile',
    name: 'Heitor Gouvêa',
    tag: ['pentest', 'mobile', 'android', 'ios', 'hacking', 'segurança', 'cybersecurity', 'offensive'],
    description: 'Nos últimos anos o desenvolvimento de aplicações mobile para as plataformas Android e iOS cresceram absurdamente e em paralelo a isto começou a surgir os incidentes de segurança envolvendo estas tecnologias. O objetivo desta palestra é mostrar como é realizado o pentest em aplicações desta categoria.'
  }, {
    id: 4,
    time: '10:00',
    title: 'Você se preocupa com performance ou é sempre problema da infra?',
    name: 'Carlos dos Santos',
    tag: ['desenvolvimento', 'performance'],
    description: 'Como melhorar a performance de sua aplicação, olhando para os problemas e não para os sintomas!'
  },
  {
    id: 5,
    time: '10:50',
    title: 'Consistência de dados entre microservices utilizando serverless e FaaS',
    name: 'Elder Moraes',
    tag: ['faas', 'devops', 'microservice', 'consistencia'],
    description: `Eba! Temos microservices! Agora tudo está resolvido: podemos escalar, distribuir e orquestrar nossos serviços sem qualquer preocupação!

      Será ? Já parou para pensar nos dados de cada serviço ? E nos dados compartilhados entre eles ? E pior : já pensou nas transações entre serviços ?

        Transações ACID não servem mais.Transações distribuídas menos ainda.Como fazer então ?

        Para isso existe o padrão de Sagas!Com ele é possível resolver esse problema de uma forma inteligente, consistente e alinhado ao paradigma de microservices.

      Afinal, de que adianta dezenas, centenas...milhares de microservices, se os dados não forem confiáveis ?`
  }, {
    id: 6,
    time: '11:40',
    title: 'ALMOÇO',
    name: '',
    tag: [],
    description: ''
  }, {
    id: 7,
    time: '13:30',
    title: 'Bots além do hype: Como bots estão revolucionando a interação homem X maquina',
    name: 'Guilherme Souza',
    tag: ['chatbos', 'bots'],
    description: 'A interface gráfica permitiu que indústria de software atingisse a grande massa de consumidores, dando abertura a novas possibilidades de negócios e tornando a compra de software antes feita somente por empresas, algo tão simples quanto a AppStore, criou áreas, mercados e profissões, UX, Ui Designer, Front-End Developers, moldou comportamentos de compra, fez com que você escolhesse seu novo smartphone pelo tamanho da tela. Este, é o poder de uma nova interface com o usuário. Chatbots, não são brinquedos.'
  }, {
    id: 8,
    time: '14:20',
    title: '3 Pilares de uma Cultura de Engenharia Eficaz',
    name: 'Paulo Rogério da Silva Antiquera',
    tag: ['Engenharia de Software', 'Cultura, Boas Práticas', 'Eficácia', 'XP', 'Agilidade'],
    description: `"Cultura, dentro das organizações, é algo até meio místico. Mas é a cultura que faz com que as pessoas tomem decisões eficazes, sem nenhuma necessidade de micro-gerenciamento. Quando falamos de cultura de engenharia, neste caso engenharia de software, estamos nos referindo ao conjunto de valores técnicos que definem a identidade do time de desenvolvimento de uma companhia.

Se esta identidade é adaptada a dinâmica do negócio, consegue ser facilmente escalada, e for intrinsicamente ligada a excelência técnica, esta cultura entrega para a companhia: tempo adequado de resposta, confiança nas soluções, satisfação interna e externa além do tão buscado resultado econômico.  De maneira contrária, quando a cultura de engenharia não consegue se conectar às necessidades do negócio, traz problemas de rentabilidade, insatisfação de clientes e colaboradores entre outros problemas graves.

A cultura de engenharia de software pode contribuir e até definir o sucesso ou fracasso de um negócio.

Mas como nós engenheiros de software podemos construir e fortalecer a cultura? Vamos falar sobre isto, assumir a nossa responsabilidade e fazer a coisa acontecer.

Nesta apresentação vamos discutir três elementos essenciais para construção de uma cultura de engenharia realmente eficaz.

* Excelência
* Colaboração e Ownership
* Liderança

Nosso foco será o conjunto de práticas e princípios que podemos seguir no nosso dia-a-dia para que a cultura cresça e atenda as expectativas do negócio, orgulhe os engenheiros e, seja transmitida e respeitada por todas as áreas da companhia."`
  }, {
    id: 9,
    time: '15:10',
    title: 'Jornalismo de Dados: Programando a Democracia no Brasil',
    name: 'Turicas (aka Álvaro Justen)',
    tag: ['ia', 'jornalismo'],
    description: `Com a quantidade absurda de dados disponíveis hoje é praticamente
impossível fazer uma matéria jornalística sem, no mínimo, utilizar uma
planilha eletrônica e é por isso que programadores jornalistas e
jornalistas programadores estão ganhando as redações do mundo inteiro.
Nessa palestra Álvaro Justen mostrará matérias jornalísticas que foram
feitas utilizando código, o estado dos dados abertos no Brasil e
algumas ferramentas que vem desenvolvendo para tornar esses dados mais
acessíveis a leigos, além de bases de dados que ele mesmo libertou de
formatos ingratos e o portal Brasil.IO, que concentra diversas bases
de dados públicas em formatos acessíveis.`

  }, {
    id: 10,
    time: '16:00',
    title: 'COFFEE',
    name: '',
    tag: [],
    description: 'Café / Sorteios / Networking'
  }, {
    id: 11,
    time: '16:30',
    title: 'Virtual DOM "Creating your own Virtual DOM from strach"',
    name: 'Daniel Leite',
    tag: ['frontend', 'virtualdom'],
    description: 'Para entender o funcionamento do Virtual DOM, iremos construir juntos um protótipo com as principais funcionalidades. Com isso iremos ter uma ideia geral de como as bibliotecas reativas funcionam.'
  }, {
    id: 12,
    time: '17:20',
    title: 'Remote work - The good, the bad and the ugly',
    name: 'Pedro Gomes Tavares',
    tag: ['remote', 'trabalho remoto'],
    description: 'Apesar de ter muitos benefícios, trabalho remoto não é um mar de rosas. Existem diversas complexidades adicionais enfrentadas por uma equipe que trabalha remotamente, principalmente em projetos complexos. Inicar trabalho remoto em uma equipe que trabalhava localmente pode ser um desafio ainda maior. Nessa talk vou falar sobre como lidar com esses problemas, e demonstrar como temos resolvido as complexidades que envolvem o trabalho remoto na engenharia de produtos da Locaweb.'
  }, {
    id: 13,
    time: '18:20',
    title: 'ENCERRAMENTO',
    name: '',
    tag: [],
    description: 'Encerramento / Sorteios / Foto oficial'
  }
  ],
  tickets: [{
    id: 1,
    value: 40,
    title: 'Lote Promocional',
    date: '05 de Maio até esgotar',
    link: 'https://www.sympla.com.br/devparana-conference-2018__281357',
    soldout: false
  }],
  sponsors: [
    {
      id: 2,
      name: 'Mandic Cloud Solutions',
      address: 'https://www.mandic.com.br/',
      image: 'mandic',
      type: 'diamond'
    },
    {
      id: 3,
      name: 'Elotech',
      address: 'https://www.elotech.com.br/',
      image: 'elotech',
      type: 'diamond'
    }
  ],
  support: [

  /*  {
    id: 3,
    name: 'PodTag',
    address: 'https://podtag.com.br/',
    image: 'podtag'
  } */
  ]
})
