export const profile = {
  name: 'KAIO MORSCH',
  title: 'SENIOR SOFTWARE ENGINEER',
  subtitle: 'Distributed Systems & Financial Tech',
  location: 'Urubici, SC, Brazil',
  contact: {
    phone: '+55 21 99536-4470',
    email: 'kakamorsch@gmail.com',
    linkedin: 'linkedin.com/in/kakamorsch',
    portfolio: 'kakamorsch.github.io'
  },
  summary: `Senior Software Engineer with 6+ years of experience architecting and scaling high-throughput e-commerce and financial systems. Core expertise lies in bridging complex backend architectures with high-performance frontends to deliver seamless payment flows and resilient transactional platforms. Proven track record of optimizing payment gateways that directly impact company revenue and driving client adoption through robust API integrations.`,
  specialties: ['Go', 'Bun', 'Vue/Nuxt', 'React', 'Distributed Systems', 'Payment Gateways', 'E-commerce']
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
  level: number
  hackCommand: string
  hackOutput: string[]
}

export const experiences: Experience[] = [
  {
    id: 'dot-digital',
    company: 'DOT Digital Group',
    role: 'Senior Frontend Developer',
    period: 'June 2025 - Present',
    location: 'Brazil',
    description: 'At Dot Digital Group—a leader in corporate education that transforms learning for Fortune 500 companies—I turn Figma designs into high-performance Vue.js applications.',
    highlights: [
      'Proactively proposing UX enhancements and technical improvements',
      'Partnering with UX from the wireframe stage',
      'Collaborating with back-end engineers to design efficient REST contracts',
      'Working hand-in-hand with QA to debug behaviors and fine-tune test cases',
      'Delivering scalable, accessible learning platforms to thousands of corporate learners worldwide'
    ],
    technologies: ['Vue.js', 'Figma', 'REST APIs', 'Accessibility'],
    level: 9,
    hackCommand: 'ssh root@dot-digital-group --decode-mission',
    hackOutput: [
      '> Connecting to DOT Digital Group servers...',
      '> Bypassing corporate firewall...',
      '> Access granted. Fortune 500 education protocols active.',
      '> Mission: Transform learning experiences at scale.',
      '> Status: DEPLOYED // Impacting thousands of learners globally'
    ]
  },
  {
    id: 'kaze',
    company: 'Kaze Solutions',
    role: 'Software Engineer',
    period: 'August 2024 - Present',
    location: 'Brazil',
    description: 'Designing and developing a comprehensive e-commerce and inventory management system from the ground up, handling complex state management and high-concurrency data flows.',
    highlights: [
      'System Architecture: Designing e-commerce and inventory management from ground up',
      'Modern Tech Stack: Leveraging Go and Bun for backend microservices',
      'Vue/Nuxt on the frontend for fully customized, ultra-fast UX',
      'End-to-End Delivery: Overseeing entire SDLC from requirements to cloud deployment'
    ],
    technologies: ['Go', 'Bun', 'Vue', 'Nuxt', 'Microservices', 'Cloud Infrastructure'],
    level: 8,
    hackCommand: 'bun run hack --target=kaze-solutions --fullstack',
    hackOutput: [
      '> Initializing Bun runtime...',
      '> Compiling Go microservices...',
      '> Vue/Nuxt frontend modules loaded.',
      '> Fullstack architecture breach successful.',
      '> Status: ARCHITECT // Building from zero to production'
    ]
  },
  {
    id: 'pagarme',
    company: 'Pagar.me',
    role: 'Software Engineer III',
    period: 'February 2022 - August 2024',
    location: 'Rio de Janeiro, Brazil',
    description: 'Architected and maintained critical payment gateway flows, ensuring transaction idempotency and high availability.',
    highlights: [
      'Implemented core features contributing to 45% increase in revenue',
      'Reduced transaction processing errors by 20%',
      'Engineered and deployed 15+ complex e-commerce integrations',
      'Drove 30% increase in client adoption rates through improved DX',
      'Modernized CI/CD pipelines in Azure DevOps',
      'Centralized technical documentation and architecture decisions'
    ],
    technologies: ['Go', 'RESTful APIs', 'Vue', 'React', 'Azure DevOps', 'Payment Gateways'],
    level: 7,
    hackCommand: 'go run breach.go --target=pagarme --payment-flows',
    hackOutput: [
      '> Initializing payment gateway breach protocol...',
      '> Transaction idempotency verified.',
      '> Revenue stream optimized: +45% throughput detected.',
      '> Error rate reduced by 20%.',
      '> 15+ e-commerce integrations deployed.',
      '> Status: ENGINEER III // Payment systems architect'
    ]
  },
  {
    id: 'soma',
    company: 'Soma Group',
    role: 'Front End Software Engineer',
    period: 'September 2021 - February 2022',
    location: 'Rio de Janeiro, Brazil',
    description: 'Developed a new e-commerce experience for the Animale project, modernizing the user interface and enhancing platform usability.',
    highlights: [
      'Created responsive and visually appealing interfaces using JavaScript and React',
      'Integrated VTEX e-commerce platform for product and checkout management',
      'Conducted performance analyses resulting in faster loading times',
      'Participated in agile meetings and code reviews',
      'Contributed to automated tests ensuring code quality'
    ],
    technologies: ['JavaScript', 'React', 'VTEX', 'Performance Optimization'],
    level: 5,
    hackCommand: 'npm run exploit --platform=vtex --target=animale',
    hackOutput: [
      '> Detecting VTEX e-commerce platform...',
      '> React components injected successfully.',
      '> Performance optimized. Loading time decreased.',
      '> Checkout flow secured.',
      '> Status: FRONTEND ENGINEER // E-commerce specialist'
    ]
  },
  {
    id: 'acct',
    company: 'ACCT | Consulting & Technology',
    role: 'Junior Front End Developer',
    period: 'February 2021 - September 2021',
    location: 'Rio de Janeiro, Brazil',
    description: 'Enhanced the VTEX e-commerce platform by implementing new features and improving user experience.',
    highlights: [
      'Designed and implemented new features for VTEX platform',
      'Used JavaScript, jQuery, Node.js, React, Sass, and TypeScript',
      'Maintained and optimized existing codebases',
      'Collaborated with UI/UX designers to translate mockups',
      'Participated in testing and debugging across browsers'
    ],
    technologies: ['JavaScript', 'jQuery', 'Node.js', 'React', 'Sass', 'TypeScript', 'VTEX'],
    level: 3,
    hackCommand: 'node exploit.js --target=acct --level=junior',
    hackOutput: [
      '> Junior developer access granted...',
      '> VTEX modules discovered.',
      '> Multi-stack payload delivered: React, Sass, TypeScript.',
      '> Code quality protocols established.',
      '> Status: JUNIOR DEV // Rising through the ranks'
    ]
  },
  {
    id: 'fabrica',
    company: 'Fabrica Digital',
    role: 'Systems Analyst',
    period: 'September 2018 - January 2021',
    location: 'Rio de Janeiro, Brazil',
    description: 'Worked in two areas: support and development. In support, provided customer service and infrastructure monitoring. In development, worked on frontend and backend systems.',
    highlights: [
      'Customer service and requirements gathering',
      'Environment monitoring, VPN and Firewall setup',
      'Frontend: jQuery, Vue.js, Vuex, WebPack, Nunjucks, VanillaJS',
      'Backend: Python, Django, NodeJS, MirageJS'
    ],
    technologies: ['jQuery', 'Vue.js', 'Vuex', 'Python', 'Django', 'NodeJS'],
    level: 2,
    hackCommand: 'python3 breach.py --target=fabrica-digital --dual-role',
    hackOutput: [
      '> Dual-role access detected: Support + Development...',
      '> VPN tunnels established. Firewalls configured.',
      '> Vue.js frontend compiled. Django backend synced.',
      '> Status: SYSTEMS ANALYST // Full-stack foundations'
    ]
  },
  {
    id: 'linx',
    company: 'Linx S.A.',
    role: 'Junior Systems Support Analyst',
    period: 'May 2017 - September 2018',
    location: 'Rio de Janeiro, Brazil',
    description: 'Assisted stores with issues in the P2K system of their POS terminals. Analyzed, prioritized, and addressed support tickets via Telnet and SSH access.',
    highlights: [
      'Created and executed SHELL scripts for ticket automation',
      'Responsible for macros that automated ticket handling',
      'Optimized productivity of the frontline support team'
    ],
    technologies: ['Shell Script', 'Telnet', 'SSH', 'POS Systems'],
    level: 1,
    hackCommand: 'ssh linx-pos --script=automation.sh',
    hackOutput: [
      '> Connecting to P2K POS terminals...',
      '> Telnet session established.',
      '> Shell scripts deployed. Ticket automation active.',
      '> Frontline productivity optimized.',
      '> Status: SUPPORT ANALYST // First breach into tech'
    ]
  },
  {
    id: 'promotional',
    company: 'Promotional Travel',
    role: 'Analista de Suporte',
    period: 'October 2015 - March 2017',
    location: 'Brazil',
    description: 'Computer maintenance, infrastructure problem analysis, network creation and implementation of technological solutions.',
    highlights: [
      'Reduced departmental expenses through tech solutions',
      'Improved internal communication between collaborators',
      'Network infrastructure design and maintenance'
    ],
    technologies: ['Network Infrastructure', 'Hardware Maintenance', 'IT Support'],
    level: 0,
    hackCommand: 'init --target=promotional-travel --role=support',
    hackOutput: [
      '> Initializing first tech role...',
      '> Hardware diagnostics running.',
      '> Network topology mapped.',
      '> Cost-reduction protocols activated.',
      '> Status: LEVEL 0 // The journey begins'
    ]
  },
  {
    id: 'altech',
    company: 'Altech Informática',
    role: 'Estagiário em Análise de Suporte',
    period: 'November 2014 - May 2015',
    location: 'Brazil',
    description: 'Level 1 and 2 support, ticket evaluation and diagnosis for resolution.',
    highlights: [
      'Level 1 and 2 technical support',
      'Ticket evaluation and diagnosis',
      'On-site problem resolution when necessary'
    ],
    technologies: ['IT Support', 'Hardware', 'Diagnostics'],
    level: 0,
    hackCommand: 'connect --target=altech --level=intern',
    hackOutput: [
      '> Intern access granted...',
      '> Level 1 support protocols loaded.',
      '> Ticket queue initialized.',
      '> Status: INTERN // Entry point established'
    ]
  }
]

export const certifications = [
  { name: 'jQuery: Domine a biblioteca mais popular do mercado parte 1', issuer: 'Alura' },
  { name: 'JavaScript Avançado II: ES6, orientação a objetos e padrões de projetos', issuer: 'Alura' },
  { name: 'JavaScript Avançado I: ES6, orientação a objetos e padrões de projetos', issuer: 'Alura' },
  { name: 'Scrum Foundation Professional Certificate (SFPC)', issuer: 'CertiProf' },
  { name: 'Front-end', issuer: 'Alura' }
]

export const education = {
  institution: 'Unicarioca',
  degree: 'Higher Education Technology Course, Analysis and Systems Development',
  period: '2013 - 2017'
}

export const skills = [
  'Generative AI',
  'AI-Assisted Development',
  'Prompt Engineering for Developers',
  'Go',
  'Bun',
  'Vue.js',
  'Nuxt.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Django',
  'RESTful APIs',
  'Microservices',
  'Payment Gateways',
  'E-commerce',
  'VTEX',
  'Azure DevOps',
  'CI/CD',
  'Shell Script',
  'Distributed Systems'
]

export const languages = [
  { name: 'Português', level: 'Native' },
  { name: 'Inglês', level: 'Full Professional' }
]

export const hobbies = [
  {
    name: 'Exploração de Sistemas',
    description: 'Análise de arquiteturas de software e exploração de novas tecnologias.',
    icon: 'Cpu'
  },
  {
    name: 'IA Generativa',
    description: 'Experimentação com modelos de linguagem e ferramentas de IA assistida.',
    icon: 'BrainCircuit'
  },
  {
    name: 'Open Source',
    description: 'Contribuições e estudo de código aberto.',
    icon: 'GitBranch'
  },
  {
    name: 'Tecnologia Financeira',
    description: 'Acompanhamento de inovações em pagamentos e sistemas transacionais.',
    icon: 'Wallet'
  }
]

export const nextMission = {
  title: 'MISSÃO INTERNACIONAL',
  description: 'Expansão para mercados globais. Buscando oportunidades fora do Brasil para aplicar expertise em sistemas distribuídos e tecnologia financeira em escala planetária.',
  status: 'EM BREVE',
  location: 'GLOBAL',
  requiredLevel: 10
}