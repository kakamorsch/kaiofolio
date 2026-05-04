import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v3-BWd91g5N.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const profile = {
  name: "KAIO MORSCH",
  title: "SENIOR SOFTWARE ENGINEER",
  subtitle: "Distributed Systems & Financial Tech",
  location: "Urubici, SC, Brazil",
  contact: {
    phone: "+55 21 99536-4470",
    email: "kakamorsch@gmail.com",
    linkedin: "linkedin.com/in/kakamorsch",
    portfolio: "kakamorsch.github.io"
  },
  summary: `Senior Software Engineer with 6+ years of experience architecting and scaling high-throughput e-commerce and financial systems. Core expertise lies in bridging complex backend architectures with high-performance frontends to deliver seamless payment flows and resilient transactional platforms. Proven track record of optimizing payment gateways that directly impact company revenue and driving client adoption through robust API integrations.`,
  specialties: ["Go", "Bun", "Vue/Nuxt", "React", "Distributed Systems", "Payment Gateways", "E-commerce"]
};
const experiences = [
  {
    id: "dot-digital",
    company: "DOT Digital Group",
    role: "Senior Frontend Developer",
    period: "June 2025 - Present",
    location: "Brazil",
    description: "At Dot Digital Group\u2014a leader in corporate education that transforms learning for Fortune 500 companies\u2014I turn Figma designs into high-performance Vue.js applications.",
    highlights: [
      "Proactively proposing UX enhancements and technical improvements",
      "Partnering with UX from the wireframe stage",
      "Collaborating with back-end engineers to design efficient REST contracts",
      "Working hand-in-hand with QA to debug behaviors and fine-tune test cases",
      "Delivering scalable, accessible learning platforms to thousands of corporate learners worldwide"
    ],
    technologies: ["Vue.js", "Figma", "REST APIs", "Accessibility"],
    level: 9,
    hackCommand: "ssh root@dot-digital-group --decode-mission",
    hackOutput: [
      "> Connecting to DOT Digital Group servers...",
      "> Bypassing corporate firewall...",
      "> Access granted. Fortune 500 education protocols active.",
      "> Mission: Transform learning experiences at scale.",
      "> Status: DEPLOYED // Impacting thousands of learners globally"
    ]
  },
  {
    id: "kaze",
    company: "Kaze Solutions",
    role: "Software Engineer",
    period: "August 2024 - Present",
    location: "Brazil",
    description: "Designing and developing a comprehensive e-commerce and inventory management system from the ground up, handling complex state management and high-concurrency data flows.",
    highlights: [
      "System Architecture: Designing e-commerce and inventory management from ground up",
      "Modern Tech Stack: Leveraging Go and Bun for backend microservices",
      "Vue/Nuxt on the frontend for fully customized, ultra-fast UX",
      "End-to-End Delivery: Overseeing entire SDLC from requirements to cloud deployment"
    ],
    technologies: ["Go", "Bun", "Vue", "Nuxt", "Microservices", "Cloud Infrastructure"],
    level: 8,
    hackCommand: "bun run hack --target=kaze-solutions --fullstack",
    hackOutput: [
      "> Initializing Bun runtime...",
      "> Compiling Go microservices...",
      "> Vue/Nuxt frontend modules loaded.",
      "> Fullstack architecture breach successful.",
      "> Status: ARCHITECT // Building from zero to production"
    ]
  },
  {
    id: "pagarme",
    company: "Pagar.me",
    role: "Software Engineer III",
    period: "February 2022 - August 2024",
    location: "Rio de Janeiro, Brazil",
    description: "Architected and maintained critical payment gateway flows, ensuring transaction idempotency and high availability.",
    highlights: [
      "Implemented core features contributing to 45% increase in revenue",
      "Reduced transaction processing errors by 20%",
      "Engineered and deployed 15+ complex e-commerce integrations",
      "Drove 30% increase in client adoption rates through improved DX",
      "Modernized CI/CD pipelines in Azure DevOps",
      "Centralized technical documentation and architecture decisions"
    ],
    technologies: ["Go", "RESTful APIs", "Vue", "React", "Azure DevOps", "Payment Gateways"],
    level: 7,
    hackCommand: "go run breach.go --target=pagarme --payment-flows",
    hackOutput: [
      "> Initializing payment gateway breach protocol...",
      "> Transaction idempotency verified.",
      "> Revenue stream optimized: +45% throughput detected.",
      "> Error rate reduced by 20%.",
      "> 15+ e-commerce integrations deployed.",
      "> Status: ENGINEER III // Payment systems architect"
    ]
  },
  {
    id: "soma",
    company: "Soma Group",
    role: "Front End Software Engineer",
    period: "September 2021 - February 2022",
    location: "Rio de Janeiro, Brazil",
    description: "Developed a new e-commerce experience for the Animale project, modernizing the user interface and enhancing platform usability.",
    highlights: [
      "Created responsive and visually appealing interfaces using JavaScript and React",
      "Integrated VTEX e-commerce platform for product and checkout management",
      "Conducted performance analyses resulting in faster loading times",
      "Participated in agile meetings and code reviews",
      "Contributed to automated tests ensuring code quality"
    ],
    technologies: ["JavaScript", "React", "VTEX", "Performance Optimization"],
    level: 5,
    hackCommand: "npm run exploit --platform=vtex --target=animale",
    hackOutput: [
      "> Detecting VTEX e-commerce platform...",
      "> React components injected successfully.",
      "> Performance optimized. Loading time decreased.",
      "> Checkout flow secured.",
      "> Status: FRONTEND ENGINEER // E-commerce specialist"
    ]
  },
  {
    id: "acct",
    company: "ACCT | Consulting & Technology",
    role: "Junior Front End Developer",
    period: "February 2021 - September 2021",
    location: "Rio de Janeiro, Brazil",
    description: "Enhanced the VTEX e-commerce platform by implementing new features and improving user experience.",
    highlights: [
      "Designed and implemented new features for VTEX platform",
      "Used JavaScript, jQuery, Node.js, React, Sass, and TypeScript",
      "Maintained and optimized existing codebases",
      "Collaborated with UI/UX designers to translate mockups",
      "Participated in testing and debugging across browsers"
    ],
    technologies: ["JavaScript", "jQuery", "Node.js", "React", "Sass", "TypeScript", "VTEX"],
    level: 3,
    hackCommand: "node exploit.js --target=acct --level=junior",
    hackOutput: [
      "> Junior developer access granted...",
      "> VTEX modules discovered.",
      "> Multi-stack payload delivered: React, Sass, TypeScript.",
      "> Code quality protocols established.",
      "> Status: JUNIOR DEV // Rising through the ranks"
    ]
  },
  {
    id: "fabrica",
    company: "Fabrica Digital",
    role: "Systems Analyst",
    period: "September 2018 - January 2021",
    location: "Rio de Janeiro, Brazil",
    description: "Worked in two areas: support and development. In support, provided customer service and infrastructure monitoring. In development, worked on frontend and backend systems.",
    highlights: [
      "Customer service and requirements gathering",
      "Environment monitoring, VPN and Firewall setup",
      "Frontend: jQuery, Vue.js, Vuex, WebPack, Nunjucks, VanillaJS",
      "Backend: Python, Django, NodeJS, MirageJS"
    ],
    technologies: ["jQuery", "Vue.js", "Vuex", "Python", "Django", "NodeJS"],
    level: 2,
    hackCommand: "python3 breach.py --target=fabrica-digital --dual-role",
    hackOutput: [
      "> Dual-role access detected: Support + Development...",
      "> VPN tunnels established. Firewalls configured.",
      "> Vue.js frontend compiled. Django backend synced.",
      "> Status: SYSTEMS ANALYST // Full-stack foundations"
    ]
  },
  {
    id: "linx",
    company: "Linx S.A.",
    role: "Junior Systems Support Analyst",
    period: "May 2017 - September 2018",
    location: "Rio de Janeiro, Brazil",
    description: "Assisted stores with issues in the P2K system of their POS terminals. Analyzed, prioritized, and addressed support tickets via Telnet and SSH access.",
    highlights: [
      "Created and executed SHELL scripts for ticket automation",
      "Responsible for macros that automated ticket handling",
      "Optimized productivity of the frontline support team"
    ],
    technologies: ["Shell Script", "Telnet", "SSH", "POS Systems"],
    level: 1,
    hackCommand: "ssh linx-pos --script=automation.sh",
    hackOutput: [
      "> Connecting to P2K POS terminals...",
      "> Telnet session established.",
      "> Shell scripts deployed. Ticket automation active.",
      "> Frontline productivity optimized.",
      "> Status: SUPPORT ANALYST // First breach into tech"
    ]
  },
  {
    id: "promotional",
    company: "Promotional Travel",
    role: "Analista de Suporte",
    period: "October 2015 - March 2017",
    location: "Brazil",
    description: "Computer maintenance, infrastructure problem analysis, network creation and implementation of technological solutions.",
    highlights: [
      "Reduced departmental expenses through tech solutions",
      "Improved internal communication between collaborators",
      "Network infrastructure design and maintenance"
    ],
    technologies: ["Network Infrastructure", "Hardware Maintenance", "IT Support"],
    level: 0,
    hackCommand: "init --target=promotional-travel --role=support",
    hackOutput: [
      "> Initializing first tech role...",
      "> Hardware diagnostics running.",
      "> Network topology mapped.",
      "> Cost-reduction protocols activated.",
      "> Status: LEVEL 0 // The journey begins"
    ]
  },
  {
    id: "altech",
    company: "Altech Inform\xE1tica",
    role: "Estagi\xE1rio em An\xE1lise de Suporte",
    period: "November 2014 - May 2015",
    location: "Brazil",
    description: "Level 1 and 2 support, ticket evaluation and diagnosis for resolution.",
    highlights: [
      "Level 1 and 2 technical support",
      "Ticket evaluation and diagnosis",
      "On-site problem resolution when necessary"
    ],
    technologies: ["IT Support", "Hardware", "Diagnostics"],
    level: 0,
    hackCommand: "connect --target=altech --level=intern",
    hackOutput: [
      "> Intern access granted...",
      "> Level 1 support protocols loaded.",
      "> Ticket queue initialized.",
      "> Status: INTERN // Entry point established"
    ]
  }
];
const certifications = [
  { name: "jQuery: Domine a biblioteca mais popular do mercado parte 1", issuer: "Alura" },
  { name: "JavaScript Avan\xE7ado II: ES6, orienta\xE7\xE3o a objetos e padr\xF5es de projetos", issuer: "Alura" },
  { name: "JavaScript Avan\xE7ado I: ES6, orienta\xE7\xE3o a objetos e padr\xF5es de projetos", issuer: "Alura" },
  { name: "Scrum Foundation Professional Certificate (SFPC)", issuer: "CertiProf" },
  { name: "Front-end", issuer: "Alura" }
];
const education = {
  institution: "Unicarioca",
  degree: "Higher Education Technology Course, Analysis and Systems Development",
  period: "2013 - 2017"
};
const skills = [
  "Generative AI",
  "AI-Assisted Development",
  "Prompt Engineering for Developers",
  "Go",
  "Bun",
  "Vue.js",
  "Nuxt.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Django",
  "RESTful APIs",
  "Microservices",
  "Payment Gateways",
  "E-commerce",
  "VTEX",
  "Azure DevOps",
  "CI/CD",
  "Shell Script",
  "Distributed Systems"
];
const languages = [
  { name: "Portugu\xEAs", level: "Native" },
  { name: "Ingl\xEAs", level: "Full Professional" }
];
const hobbies = [
  {
    name: "Explora\xE7\xE3o de Sistemas",
    description: "An\xE1lise de arquiteturas de software e explora\xE7\xE3o de novas tecnologias.",
    icon: "Cpu"
  },
  {
    name: "IA Generativa",
    description: "Experimenta\xE7\xE3o com modelos de linguagem e ferramentas de IA assistida.",
    icon: "BrainCircuit"
  },
  {
    name: "Open Source",
    description: "Contribui\xE7\xF5es e estudo de c\xF3digo aberto.",
    icon: "GitBranch"
  },
  {
    name: "Tecnologia Financeira",
    description: "Acompanhamento de inova\xE7\xF5es em pagamentos e sistemas transacionais.",
    icon: "Wallet"
  }
];
const nextMission = {
  title: "MISS\xC3O INTERNACIONAL",
  description: "Expans\xE3o para mercados globais. Buscando oportunidades fora do Brasil para aplicar expertise em sistemas distribu\xEDdos e tecnologia financeira em escala planet\xE1ria.",
  status: "EM BREVE",
  location: "GLOBAL",
  requiredLevel: 10
};
const _sfc_main$6 = {
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const displayText = ref("KAIO");
    const glitchActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden" }, _attrs))} data-v-732346cb><div class="absolute inset-0 opacity-20" data-v-732346cb><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px)", "background-size": "60px 60px" })}" data-v-732346cb></div></div><div class="absolute top-20 left-10 w-2 h-2 bg-cyber-accent rounded-full animate-pulse opacity-60" data-v-732346cb></div><div class="absolute top-40 right-20 w-1 h-1 bg-cyber-accent-secondary rounded-full animate-pulse opacity-40" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-732346cb></div><div class="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyber-accent-tertiary rounded-full animate-pulse opacity-50" style="${ssrRenderStyle({ "animation-delay": "1s" })}" data-v-732346cb></div><div class="relative z-10 max-w-6xl mx-auto w-full" data-v-732346cb><div class="mb-8 flex items-center gap-2 text-xs font-tech text-cyber-mutedFg uppercase tracking-[0.3em]" data-v-732346cb><span class="text-cyber-accent" data-v-732346cb>&gt;</span><span class="terminal-type" data-v-732346cb>system.init --user=kaio.morsch --mode=portfolio</span><span class="animate-blink text-cyber-accent" data-v-732346cb>\u2588</span></div><div class="grid lg:grid-cols-5 gap-12 items-center" data-v-732346cb><div class="lg:col-span-3 space-y-6" data-v-732346cb><div class="inline-flex items-center gap-2 px-4 py-2 bg-cyber-accent/10 border border-cyber-accent/30 cyber-chamfer-sm" data-v-732346cb><div class="w-2 h-2 bg-cyber-accent rounded-full animate-pulse" data-v-732346cb></div><span class="text-xs font-tech text-cyber-accent uppercase tracking-widest" data-v-732346cb>Online // Available for hire</span></div><h1 class="${ssrRenderClass([{ "cyber-glitch": glitchActive.value }, "font-orbitron text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider leading-none cyber-text-glow"])}"${ssrRenderAttr("data-text", displayText.value)} data-v-732346cb>${ssrInterpolate(displayText.value)}</h1><div class="space-y-2" data-v-732346cb><p class="font-orbitron text-xl md:text-2xl lg:text-3xl font-bold text-cyber-accent uppercase tracking-wide" data-v-732346cb>${ssrInterpolate(unref(profile).title)}</p><p class="font-tech text-lg md:text-xl text-cyber-accent-tertiary tracking-wider" data-v-732346cb>${ssrInterpolate(unref(profile).subtitle)}</p></div><p class="text-base md:text-lg text-cyber-fg/80 leading-relaxed max-w-2xl" data-v-732346cb>${ssrInterpolate(unref(profile).summary)}</p><div class="flex flex-wrap gap-2" data-v-732346cb><!--[-->`);
      ssrRenderList(unref(profile).specialties, (specialty) => {
        _push(`<span class="px-3 py-1 text-xs font-tech uppercase tracking-wider border border-cyber-border cyber-chamfer-sm text-cyber-mutedFg hover:border-cyber-accent hover:text-cyber-accent transition-all duration-300" data-v-732346cb>${ssrInterpolate(specialty)}</span>`);
      });
      _push(`<!--]--></div><div class="flex flex-wrap gap-4 pt-4" data-v-732346cb><a${ssrRenderAttr("href", `mailto:${unref(profile).contact.email}`)} class="group relative px-8 py-3 bg-cyber-accent text-cyber-bg font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:brightness-110 transition-all duration-150 cyber-glow" data-v-732346cb><span class="relative z-10" data-v-732346cb>Iniciar Contato</span></a><a${ssrRenderAttr("href", `https://${unref(profile).contact.linkedin}`)} target="_blank" class="group relative px-8 py-3 border-2 border-cyber-accent-secondary text-cyber-accent-secondary font-tech uppercase tracking-widest text-sm cyber-chamfer-sm hover:bg-cyber-accent-secondary hover:text-cyber-bg transition-all duration-150 cyber-glow-secondary" data-v-732346cb><span class="relative z-10" data-v-732346cb>LinkedIn</span></a></div></div><div class="lg:col-span-2 hidden lg:block" data-v-732346cb><div class="holographic cyber-chamfer p-6 space-y-4" data-v-732346cb><div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-accent" data-v-732346cb></div><div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-accent" data-v-732346cb></div><div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-accent" data-v-732346cb></div><div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-accent" data-v-732346cb></div><div class="text-xs font-tech text-cyber-accent uppercase tracking-widest mb-4 flex items-center gap-2" data-v-732346cb><span class="w-2 h-2 bg-cyber-accent animate-pulse" data-v-732346cb></span> Status do Sistema </div><div class="space-y-3 font-mono text-sm" data-v-732346cb><div class="flex justify-between" data-v-732346cb><span class="text-cyber-mutedFg" data-v-732346cb>Nome:</span><span class="text-cyber-fg" data-v-732346cb>Kaio Morsch</span></div><div class="flex justify-between" data-v-732346cb><span class="text-cyber-mutedFg" data-v-732346cb>Level:</span><span class="text-cyber-accent" data-v-732346cb>9 // Senior</span></div><div class="flex justify-between" data-v-732346cb><span class="text-cyber-mutedFg" data-v-732346cb>Location:</span><span class="text-cyber-fg" data-v-732346cb>${ssrInterpolate(unref(profile).location)}</span></div><div class="flex justify-between" data-v-732346cb><span class="text-cyber-mutedFg" data-v-732346cb>Exp:</span><span class="text-cyber-accent-tertiary" data-v-732346cb>6+ Years</span></div><div class="flex justify-between" data-v-732346cb><span class="text-cyber-mutedFg" data-v-732346cb>Stack:</span><span class="text-cyber-accent-secondary" data-v-732346cb>Go / Bun / Vue</span></div><div class="flex justify-between" data-v-732346cb><span class="text-cyber-mutedFg" data-v-732346cb>Focus:</span><span class="text-cyber-fg" data-v-732346cb>Payments &amp; E-com</span></div></div><div class="space-y-2 pt-2" data-v-732346cb><div class="text-xs font-tech text-cyber-mutedFg uppercase" data-v-732346cb>Backend</div><div class="h-1 bg-cyber-border overflow-hidden" data-v-732346cb><div class="h-full bg-cyber-accent w-[90%] animate-pulse" data-v-732346cb></div></div><div class="text-xs font-tech text-cyber-mutedFg uppercase" data-v-732346cb>Frontend</div><div class="h-1 bg-cyber-border overflow-hidden" data-v-732346cb><div class="h-full bg-cyber-accent-tertiary w-[85%]" data-v-732346cb></div></div><div class="text-xs font-tech text-cyber-mutedFg uppercase" data-v-732346cb>Architecture</div><div class="h-1 bg-cyber-border overflow-hidden" data-v-732346cb><div class="h-full bg-cyber-accent-secondary w-[88%]" data-v-732346cb></div></div></div></div></div></div><div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" data-v-732346cb><span class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest" data-v-732346cb>Scroll para hackear</span><div class="w-px h-8 bg-gradient-to-b from-cyber-accent to-transparent animate-pulse" data-v-732346cb></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-732346cb"]]);
const _sfc_main$5 = {
  __name: "ExperienceSection",
  __ssrInlineRender: true,
  setup(__props) {
    const expandedExp = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experiencias",
        class: "relative py-24 md:py-32 px-4"
      }, _attrs))}><div class="max-w-6xl mx-auto"><div class="mb-16 space-y-4"><div class="flex items-center gap-3"><div class="w-12 h-px bg-cyber-accent"></div><span class="text-xs font-tech text-cyber-accent uppercase tracking-[0.3em]">Trajet\xF3ria Profissional</span></div><h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide cyber-text-glow"> ACESSANDO <span class="text-cyber-accent">HIST\xD3RICO</span></h2><p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base"> Clique em cada miss\xE3o para executar o breach e revelar os detalhes da opera\xE7\xE3o. Cada experi\xEAncia representa um n\xEDvel desbloqueado na sua jornada. </p></div><div class="space-y-6"><!--[-->`);
      ssrRenderList(unref(experiences), (exp, index) => {
        _push(`<div class="group"><div class="relative bg-cyber-card border border-cyber-border cyber-chamfer transition-all duration-300 hover:border-cyber-accent hover:shadow-neon cursor-pointer overflow-hidden"><div class="absolute top-0 left-0 bg-cyber-accent text-cyber-bg font-orbitron font-bold text-xs px-3 py-1 cyber-chamfer-sm z-10"> LV.${ssrInterpolate(exp.level)}</div><div class="p-6 md:p-8"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"><div class="space-y-2"><div class="flex items-center gap-3"><h3 class="font-orbitron text-xl md:text-2xl font-bold uppercase text-cyber-fg group-hover:text-cyber-accent transition-colors">${ssrInterpolate(exp.company)}</h3>`);
        if (index === 0) {
          _push(`<span class="px-2 py-0.5 text-[10px] font-tech uppercase tracking-wider bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/50"> Atual </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="font-tech text-cyber-accent-tertiary uppercase tracking-wider text-sm">${ssrInterpolate(exp.role)}</p></div><div class="flex items-center gap-4 text-xs font-tech text-cyber-mutedFg"><span class="flex items-center gap-1"><span class="text-cyber-accent">&gt;</span> ${ssrInterpolate(exp.period)}</span><span class="hidden md:inline text-cyber-border">|</span><span class="hidden md:inline">${ssrInterpolate(exp.location)}</span></div></div><div class="mt-4 flex items-center gap-2 text-xs font-mono"><span class="text-cyber-accent">$</span><span class="text-cyber-mutedFg">${ssrInterpolate(exp.hackCommand)}</span><span class="${ssrRenderClass([expandedExp.value === exp.id ? "rotate-90" : "", "transition-transform duration-300"])}"><svg class="w-4 h-4 text-cyber-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span></div></div><div class="border-t border-cyber-border bg-cyber-bg/80" style="${ssrRenderStyle(expandedExp.value === exp.id ? null : { display: "none" })}"><div class="flex items-center gap-2 px-4 py-2 bg-cyber-muted/50 border-b border-cyber-border"><div class="w-3 h-3 rounded-full bg-red-500/80"></div><div class="w-3 h-3 rounded-full bg-yellow-500/80"></div><div class="w-3 h-3 rounded-full bg-green-500/80"></div><span class="ml-2 text-[10px] font-tech text-cyber-mutedFg uppercase">${ssrInterpolate(exp.company)} \u2014 breach.log</span></div><div class="p-6 md:p-8 space-y-6"><div class="font-mono text-sm space-y-1"><!--[-->`);
        ssrRenderList(exp.hackOutput, (line, i) => {
          _push(`<div class="text-cyber-accent/90" style="${ssrRenderStyle({ animationDelay: `${i * 200}ms` })}">${ssrInterpolate(line)}</div>`);
        });
        _push(`<!--]--></div><div><h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">Descri\xE7\xE3o da Miss\xE3o</h4><p class="text-cyber-fg/80 text-sm leading-relaxed">${ssrInterpolate(exp.description)}</p></div><div><h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">Objetivos Completados</h4><ul class="space-y-2"><!--[-->`);
        ssrRenderList(exp.highlights, (highlight, i) => {
          _push(`<li class="flex items-start gap-2 text-sm text-cyber-fg/80"><span class="text-cyber-accent mt-1">[+]</span><span>${ssrInterpolate(highlight)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div><h4 class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest mb-2">Arsenal Tecnol\xF3gico</h4><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(exp.technologies, (tech) => {
          _push(`<span class="px-3 py-1 text-xs font-tech uppercase tracking-wider bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/30 cyber-chamfer-sm">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExperienceSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "capacitacoes",
        class: "relative py-24 md:py-32 px-4"
      }, _attrs))}><div class="absolute inset-0 opacity-10"><div class="absolute inset-0" style="${ssrRenderStyle({ "background-image": "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)", "background-size": "40px 40px" })}"></div></div><div class="relative max-w-6xl mx-auto"><div class="mb-16 space-y-4"><div class="flex items-center gap-3"><div class="w-12 h-px bg-cyber-accent-tertiary"></div><span class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-[0.3em]">Capacita\xE7\xF5es</span></div><h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide"> ARSENAL <span class="text-cyber-accent-tertiary cyber-text-glow">TECNOLOGICO</span></h2><p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base"> Stack t\xE9cnico constru\xEDdo ao longo de 6+ anos de opera\xE7\xF5es em ambientes de alta disponibilidade. </p></div><div class="grid lg:grid-cols-2 gap-8"><div class="bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8"><div class="text-xs font-tech text-cyber-accent-tertiary uppercase tracking-widest mb-6 flex items-center gap-2"><span class="w-2 h-2 bg-cyber-accent-tertiary animate-pulse"></span> Skills Matrix </div><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(unref(skills), (skill, index) => {
        _push(`<span class="group relative px-4 py-2 text-xs font-tech uppercase tracking-wider border border-cyber-border cyber-chamfer-sm text-cyber-mutedFg hover:border-cyber-accent-tertiary hover:text-cyber-accent-tertiary hover:shadow-neon-tertiary transition-all duration-200 cursor-default" style="${ssrRenderStyle({ animationDelay: `${index * 50}ms` })}">${ssrInterpolate(skill)}</span>`);
      });
      _push(`<!--]--></div></div><div class="bg-cyber-bg border border-cyber-border cyber-chamfer overflow-hidden"><div class="flex items-center gap-2 px-4 py-2 bg-cyber-muted/50 border-b border-cyber-border"><div class="w-3 h-3 rounded-full bg-red-500/80"></div><div class="w-3 h-3 rounded-full bg-yellow-500/80"></div><div class="w-3 h-3 rounded-full bg-green-500/80"></div><span class="ml-2 text-[10px] font-tech text-cyber-mutedFg uppercase">certifications.log</span></div><div class="p-6 space-y-3"><!--[-->`);
      ssrRenderList(unref(certifications), (cert, index) => {
        _push(`<div class="flex items-start gap-3 group"><span class="text-cyber-accent-tertiary mt-0.5">&gt;</span><div><p class="text-sm text-cyber-fg group-hover:text-cyber-accent-tertiary transition-colors">${ssrInterpolate(cert.name)}</p><p class="text-xs text-cyber-mutedFg font-tech">${ssrInterpolate(cert.issuer)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8 lg:col-span-2"><div class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest mb-4 flex items-center gap-2"><span class="w-2 h-2 bg-cyber-accent-secondary animate-pulse"></span> Forma\xE7\xE3o Acad\xEAmica </div><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"><div><h3 class="font-orbitron text-lg md:text-xl font-bold uppercase text-cyber-fg">${ssrInterpolate(unref(education).institution)}</h3><p class="text-cyber-mutedFg text-sm mt-1">${ssrInterpolate(unref(education).degree)}</p></div><div class="flex items-center gap-2 text-xs font-tech text-cyber-accent-secondary"><span class="w-2 h-2 bg-cyber-accent-secondary rounded-full"></span> ${ssrInterpolate(unref(education).period)}</div></div></div><div class="bg-cyber-bg border border-cyber-border cyber-chamfer p-6 md:p-8 lg:col-span-2"><div class="text-xs font-tech text-cyber-accent uppercase tracking-widest mb-4 flex items-center gap-2"><span class="w-2 h-2 bg-cyber-accent animate-pulse"></span> Linguagens </div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(unref(languages), (lang) => {
        _push(`<div class="flex items-center justify-between p-4 border border-cyber-border cyber-chamfer-sm hover:border-cyber-accent transition-colors"><span class="font-tech text-sm uppercase tracking-wider text-cyber-fg">${ssrInterpolate(lang.name)}</span><span class="text-xs font-tech text-cyber-accent">${ssrInterpolate(lang.level)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SkillsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "HobbiesSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hobbies",
        class: "relative py-24 md:py-32 px-4"
      }, _attrs))}><div class="max-w-6xl mx-auto"><div class="mb-16 space-y-4"><div class="flex items-center gap-3"><div class="w-12 h-px bg-cyber-accent-secondary"></div><span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-[0.3em]">Fora do Terminal</span></div><h2 class="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide"> INTERESSES <span class="text-cyber-accent-secondary cyber-text-glow-secondary">PARALELOS</span></h2><p class="text-cyber-mutedFg max-w-2xl font-mono text-sm md:text-base"> Atividades que alimentam a curiosidade e mant\xEAm a mente afiada para novos desafios. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><!--[-->`);
      ssrRenderList(unref(hobbies), (hobby, index) => {
        _push(`<div class="${ssrRenderClass([index % 2 === 1 ? "md:translate-y-4" : "", "group relative bg-cyber-card border border-cyber-border cyber-chamfer p-6 md:p-8 hover:border-cyber-accent-secondary hover:shadow-neon-secondary transition-all duration-300"])}"><div class="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyber-border group-hover:border-cyber-accent-secondary transition-colors"></div><div class="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-border group-hover:border-cyber-accent-secondary transition-colors"></div><div class="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyber-border group-hover:border-cyber-accent-secondary transition-colors"></div><div class="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyber-border group-hover:border-cyber-accent-secondary transition-colors"></div><div class="mb-4 w-12 h-12 flex items-center justify-center border border-cyber-border group-hover:border-cyber-accent-secondary group-hover:bg-cyber-accent-secondary/10 transition-all duration-300"><svg class="w-6 h-6 text-cyber-mutedFg group-hover:text-cyber-accent-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">`);
        if (hobby.icon === "Cpu") {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>`);
        } else if (hobby.icon === "BrainCircuit") {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"></path>`);
        } else if (hobby.icon === "GitBranch") {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path>`);
        } else if (hobby.icon === "Wallet") {
          _push(`<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"></path>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</svg></div><h3 class="font-orbitron text-lg font-bold uppercase text-cyber-fg group-hover:text-cyber-accent-secondary transition-colors mb-2">${ssrInterpolate(hobby.name)}</h3><p class="text-sm text-cyber-mutedFg leading-relaxed">${ssrInterpolate(hobby.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HobbiesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "NextMissionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-24 md:py-32 px-4 overflow-hidden" }, _attrs))}><div class="absolute inset-0"><div class="absolute inset-0 bg-gradient-to-b from-cyber-bg via-cyber-muted/20 to-cyber-bg"></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-accent/5 rounded-full blur-3xl animate-pulse"></div></div><div class="relative max-w-4xl mx-auto text-center"><div class="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyber-accent-secondary/50 bg-cyber-accent-secondary/10 cyber-chamfer-sm"><svg class="w-4 h-4 text-cyber-accent-secondary animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg><span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-[0.3em]">Pr\xF3xima Fase Desbloqueada em Breve</span></div><h2 class="font-orbitron text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wide mb-6"><span class="text-cyber-accent-secondary cyber-text-glow-secondary">${ssrInterpolate(unref(nextMission).title)}</span></h2><div class="flex items-center justify-center gap-4 mb-8"><div class="h-px w-16 bg-cyber-accent-secondary/50"></div><span class="text-xs font-tech text-cyber-accent-secondary uppercase tracking-widest">${ssrInterpolate(unref(nextMission).status)}</span><div class="h-px w-16 bg-cyber-accent-secondary/50"></div></div><p class="text-lg md:text-xl text-cyber-fg/80 leading-relaxed max-w-2xl mx-auto mb-8">${ssrInterpolate(unref(nextMission).description)}</p><div class="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyber-accent-secondary text-cyber-accent-secondary font-tech uppercase tracking-widest cyber-chamfer hover:bg-cyber-accent-secondary hover:text-cyber-bg transition-all duration-300 cursor-default"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path></svg><span>${ssrInterpolate(unref(nextMission).location)}</span></div><div class="mt-8 text-xs font-tech text-cyber-mutedFg uppercase tracking-widest"> Requer: Level ${ssrInterpolate(unref(nextMission).requiredLevel)} // Senior Software Engineer </div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NextMissionSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const nodeVersion = "22.x";
const _sfc_main$1 = {
  __name: "FooterSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative py-16 px-4 border-t border-cyber-border" }, _attrs))}><div class="max-w-6xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"><div class="space-y-4"><h3 class="font-orbitron text-2xl font-bold uppercase text-cyber-fg"> KAIO <span class="text-cyber-accent">MORSCH</span></h3><p class="text-sm text-cyber-mutedFg leading-relaxed"> Senior Software Engineer especializado em sistemas distribu\xEDdos, tecnologia financeira e solu\xE7\xF5es de e-commerce escal\xE1veis. </p></div><div class="space-y-4"><h4 class="font-tech text-xs uppercase tracking-widest text-cyber-accent">Navega\xE7\xE3o</h4><nav class="space-y-2"><a href="#" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Perfil</a><a href="#experiencias" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Experi\xEAncias</a><a href="#capacitacoes" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Capacita\xE7\xF5es</a><a href="#hobbies" class="block text-sm text-cyber-mutedFg hover:text-cyber-accent transition-colors">Hobbies</a></nav></div><div class="space-y-4"><h4 class="font-tech text-xs uppercase tracking-widest text-cyber-accent">Contato</h4><div class="space-y-2 font-mono text-sm"><a${ssrRenderAttr("href", `mailto:${unref(profile).contact.email}`)} class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors"><span class="text-cyber-accent">&gt;</span> ${ssrInterpolate(unref(profile).contact.email)}</a><a${ssrRenderAttr("href", `https://${unref(profile).contact.linkedin}`)} target="_blank" class="flex items-center gap-2 text-cyber-mutedFg hover:text-cyber-accent transition-colors"><span class="text-cyber-accent">&gt;</span> ${ssrInterpolate(unref(profile).contact.linkedin)}</a><div class="flex items-center gap-2 text-cyber-mutedFg"><span class="text-cyber-accent">&gt;</span> ${ssrInterpolate(unref(profile).contact.phone)}</div></div></div></div><div class="pt-8 border-t border-cyber-border flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-xs font-tech text-cyber-mutedFg uppercase tracking-widest"><span class="text-cyber-accent">\xA9</span> 2025 Kaio Morsch. Todos os sistemas operacionais. </p><div class="flex items-center gap-2 text-xs font-tech text-cyber-mutedFg"><span class="w-2 h-2 bg-cyber-accent rounded-full animate-pulse"></span><span>Sistema Online</span><span class="text-cyber-border">|</span><span>Node.js ${ssrInterpolate(nodeVersion)}</span><span class="text-cyber-border">|</span><span>Nuxt 3</span></div></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "KAIO MORSCH // SENIOR SOFTWARE ENGINEER",
      meta: [
        { name: "description", content: "Senior Software Engineer | Distributed Systems & Financial Tech | Go, Bun, Vue/Nuxt | Scalable E-commerce Solutions" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_ExperienceSection = _sfc_main$5;
      const _component_SkillsSection = _sfc_main$4;
      const _component_HobbiesSection = _sfc_main$3;
      const _component_NextMissionSection = _sfc_main$2;
      const _component_FooterSection = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_ExperienceSection, null, null, _parent));
      _push(ssrRenderComponent(_component_SkillsSection, null, null, _parent));
      _push(ssrRenderComponent(_component_HobbiesSection, null, null, _parent));
      _push(ssrRenderComponent(_component_NextMissionSection, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterSection, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B888bN1F.mjs.map
