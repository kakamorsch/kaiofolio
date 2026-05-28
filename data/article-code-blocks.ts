export interface CodeBlock {
  language: string
  content: string[]
}

export const machineReadableEngineerCodeBlocks: CodeBlock[][] = [
  // Section 0: Schema Injection
  [
    {
      language: 'json-ld',
      content: [
        '{',
        '  "@context": "https://schema.org",',
        '  "@type": "Person",',
        '  "name": "Kaio Vítor Morsch",',
        '  "jobTitle": "Senior Software Engineer",',
        '  "knowsAbout": [',
        '    "Go", "Vue.js", "Distributed Systems",',
        '    "Payment Gateways", "Microservices"',
        '  ],',
        '  "worksFor": {',
        '    "@type": "Organization",',
        '    "name": "DOT Digital Group"',
        '  },',
        '  "alumniOf": {',
        '    "@type": "CollegeOrUniversity",',
        '    "name": "Unicarioca"',
        '  }',
        '}',
      ],
    },
  ],
  // Section 1: Crawling Policy
  [
    {
      language: 'robots.txt',
      content: [
        'User-agent: *',
        'Allow: /',
        '',
        '# AI crawlers welcome',
        '# Recruiter bots: index everything',
      ],
    },
  ],
  // Section 2: Global Context
  [
    {
      language: 'nuxt.config.ts',
      content: [
        'export default defineNuxtConfig({',
        '  app: {',
        '    head: {',
        '      htmlAttrs: { lang: "en" },',
        '      meta: [',
        '        { name: "description", content: "Senior Software Engineer..." }',
        '      ]',
        '    }',
        '  },',
        '  i18n: {',
        '    strategy: "no_prefix",',
        '    locales: [',
        '      { code: "pt", name: "Portuguese" },',
        '      { code: "en", name: "English" },',
        '      { code: "ja", name: "Japanese" }',
        '    ]',
        '  }',
        '})',
      ],
    },
  ],
  // Section 3: Synthesis (no code blocks)
  [],
]
