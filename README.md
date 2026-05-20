# Kaiofolio — Engineering Portfolio

> **A gamified, high-conversion portfolio engineered for Senior Software Engineer positioning.**  
> Deployed at: [kakamorsch.github.io](https://kakamorsch.github.io)

---

## Executive Summary

Kaiofolio is not a conventional developer portfolio. It is a **technical case study in itself** — a Nuxt 3 application designed to demonstrate senior-level engineering decisions in architecture, performance, internationalization, and test-driven development.

The target audience is **CTOs and Tech Recruiters** evaluating candidates for Senior/Staff Software Engineer roles in distributed systems, fintech, and high-traffic B2C platforms.

**Key differentiators:**
- SSR-first with dynamic Schema.org JSON-LD for ATS and search indexers.
- Triple-locale i18n (PT / EN / JA) targeting Brazil, US/Europe, and APAC markets.
- Full TDD coverage: Vitest for units, Playwright for critical user journeys.
- Cyberpunk design system built entirely on Tailwind CSS utility tokens — no component library dependencies.

---

## Architecture Decisions (ADRs)

### Nuxt 3 + SSR

- **Why:** SEO nativo sem trade-offs de SPA. Meta tags OG/Twitter, schemas dinâmicos e atributos `lang` no `<html>` são resolvidos no servidor.
- **Trade-off:** Maior complexidade de deploy vs. SPA estático. Mitigado com preset `vercel` do Nitro.

### Vitest + Playwright (TDD Obrigatório)

- **Vitest:** Testes unitários para composables e componentes Vue com `@nuxt/test-utils`.
- **Playwright:** Jornadas críticas end-to-end (troca de idioma, filtro de experiências, expansão de cards, navegação para resume).
- **Regra:** Nenhuma alteração de comportamento é commitada sem teste que a valide.

### i18n Triplo — Estratégia `no_prefix`

| Locale | Mercado-Alvo | Estratégia |
|--------|-------------|------------|
| `pt` (default) | Brasil | Cookie-based, sem prefixo na URL |
| `en` | EUA, Europa | Cookie-based, sem prefixo na URL |
| `ja` | Japão, APAC | Cookie-based, sem prefixo na URL |

- **Por quê `no_prefix`:** Evita diluição de SEO entre rotas duplicadas e mantém URLs limpas para compartilhamento.
- **DetectBrowserLanguage:** Cookie `i18n_locale` com redirect apenas na raiz (`redirectOn: 'root'`).

### Tailwind Cyberpunk Theme

- Design system customizado via `theme.extend` no `tailwind.config.js`.
- Tokens semânticos: `cyber-bg`, `cyber-fg`, `cyber-accent`, `cyber-accent-secondary`, `cyber-accent-tertiary`.
- Classes utilitárias customizadas: `cyber-chamfer`, `cyber-text-glow`, `cyber-glow`, `holographic`.
- Zero dependências de UI kits — controle total sobre tokens e animações.

---

## Performance & SEO

### Core Web Vitals
- **LCP otimizado:** SSR elimina hidratação bloqueante de conteúdo acima da dobra.
- **Fontes:** Google Fonts com `preconnect` e `display=swap`.
- **Assets estáticos:** Favicon e `robots.txt` em `public/`.

### Schema.org Dinâmico
- Composable `useSchemaOrgProfile()` injeta schemas `Person` e `ProfilePage` reativos conforme o locale ativo.
- Campos mapeados: `knowsAbout`, `worksFor`, `alumniOf`, `knowsLanguage`.

### Tags Semânticas Ocultas (SR-Only)
- Todas as seções principais possuem `<h2 class="sr-only">` traduzido.
- Garante anúncio correto por screen readers e indexação semântica por ATS.

### Open Graph / Twitter Cards
- Tags `og:image` e `twitter:image` apontando para `/og-image.jpg` (asset a ser gerado).
- `twitter:card: summary_large_image`, `og:type: website`.

> **Nota:** O arquivo `public/og-image.jpg` é um placeholder. Gerar o asset visual final é pendente.

---

## Screenshots

> Placeholders para futuras capturas de tela:

![Hero Section — Cyberpunk Terminal UI](docs/screenshots/hero.png)
![Skills Matrix — Distributed Systems & Go](docs/screenshots/skills.png)
![Experience Timeline — Filterable](docs/screenshots/experience.png)

---

## Quick Start

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Testes unitários (watch mode)
npm run test:unit

# Testes E2E
npm run test:e2e

# Suite completa (unit + e2e)
npm run test:all

# Build de produção
npm run build
```

---

## Estrutura de Diretórios

```
components/      # Componentes Vue de seções e UI
composables/     # Lógica reutilizável (useLocalizedProfile, useTechFilter, useSchemaOrgProfile)
locales/         # Traduções e dados de conteúdo (pt.ts, en.ts, ja.ts)
pages/           # Rotas da aplicação
assets/css/      # Estilos globais e tema cyberpunk
public/          # Arquivos estáticos (favicon, robots.txt, og-image.jpg)
tests/           # Testes unitários (Vitest) e E2E (Playwright)
```

---

## Licença

Proprietário — Kaio Morsch. Uso do código como referência permitido com atribuição.
