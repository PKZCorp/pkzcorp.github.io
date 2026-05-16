# Plano do Projeto — Site da PKZCorp

**Versão:** 1.0
**Data:** Maio/2026
**Objetivo:** Documentar a estrutura, funcionalidades e fluxos do site institucional da PKZCorp, hospedado via GitHub Pages

---

## 📑 Índice

1. [Visão Geral](#1-visão-geral)
2. [Estrutura do Site](#2-estrutura-do-site)
3. [Especificação de Funcionalidades](#3-especificação-de-funcionalidades)
4. [Módulo de Jams](#4-módulo-de-jams)
5. [Stack Técnica e Implementação](#5-stack-técnica-e-implementação)
  - [5.1 Opções de Stack para GitHub Pages](#51-opções-de-stack-para-github-pages)
  - [5.2 Estrutura de Pastas (Astro)](#52-estrutura-de-pastas-astro)
  - [5.3 Deploy com GitHub Pages](#53-deploy-com-github-pages)
  - [5.4 Decisões de Design](#54-decisões-de-design)
  - [5.5 Acessibilidade](#55-acessibilidade)
  - [5.6 SEO e Observabilidade](#56-seo-e-observabilidade)
  - [5.7 Qualidade e Testes](#57-qualidade-e-testes)
  - [5.8 Convenções de Assets](#58-convenções-de-assets)
  - [5.9 Backups e Versionamento](#59-backups-e-versionamento)
  - [5.10 Internacionalização](#510-internacionalização)
  - [5.11 Identidade da Marca e Sistema Visual](#511-identidade-da-marca-e-sistema-visual)
6. [Cronograma](#6-cronograma)
7. [Anexos](#7-anexos)

---

## 1. Visão Geral

### 1.1 Sobre a PKZCorp

A PKZCorp é uma empresa de desenvolvimento de software e criação de conteúdo digital. O site funciona como vitrine pública do trabalho da empresa, portfólio individual de cada membro, e plataforma interna para organizar e registrar as jams criativas.

### 1.2 Objetivos do Site

| #   | Objetivo                                                          | Prioridade |
| --- | ----------------------------------------------------------------- | ---------- |
| 1   | **Apresentar** a PKZCorp e seus valores para visitantes externos  | Alta       |
| 2   | **Expor** o portfólio de membros com habilidades e produções      | Alta       |
| 3   | **Catalogar** projetos com filtros por categoria, membro e status | Alta       |
| 4   | **Registrar e conduzir** jams criativas de múltiplos tipos        | Alta       |
| 5   | **Servir de hub** para links, redes sociais e contato             | Média      |

### 1.3 Público-Alvo

| Persona                   | Motivação                           | Conteúdo Prioritário       |
| ------------------------- | ----------------------------------- | -------------------------- |
| **Visitante externo**     | Conhecer o trabalho da empresa      | Home, Membros, Projetos    |
| **Recrutador / Parceiro** | Avaliar portfólio e habilidades     | Membros, Projetos, Contato |
| **Membro da empresa**     | Acompanhar jams, submeter trabalhos | Jams, Projetos             |
| **Fã / Seguidor**         | Ver novidades e produções           | Home, Projetos, Jams       |

### 1.4 Restrições e Contexto

- **Hospedagem:** GitHub Pages (site estático — sem backend próprio)
- **Custo:** Zero
- **Manutenção:** Feita pelos próprios membros via pull requests / edição direta
- **Autenticação:** Nenhuma para o visitante externo; gestão de jams feita de forma simplificada (ver seção 4)
- **Idioma:** português como idioma principal; inglês como segunda camada de navegação e conteúdo

---

## 2. Estrutura do Site

### 2.1 Arquitetura de Informação

```
root/
│
├── / — Home
│   ├── Hero com apresentação da PKZCorp
│   ├── Destaques de projetos recentes
│   ├── Jam ativa (se houver)
│   └── Links para redes sociais / contato
│
├── /sobre — Sobre a PKZCorp
│   ├── História e missão
│   ├── Valores e áreas de atuação
│   └── Como entrar em contato
│
├── /membros — Membros
│   ├── Grid de cards de cada membro
│   └── /membros/[slug] — Página individual
│       ├── Bio
│       ├── Habilidades (tags)
│       ├── Produções (lista linkada)
│       └── Links externos (GitHub, SoundCloud, etc.)
│
├── /projetos — Projetos
│   ├── Filtros (categoria, membro, status, tag)
│   ├── Grid/lista de projetos
│   └── /projetos/[slug] — Página individual
│       ├── Descrição, screenshots, links
│       ├── Membros envolvidos
│       └── Tags e categoria
│
├── /jams — Jams
│   ├── Jam ativa (destaque)
│   ├── Histórico de jams encerradas
│   └── /jams/[slug] — Página individual de jam
│       ├── Briefing e regras
│       ├── Prazo e status
│       ├── Submissões dos membros
│       └── Resultado / destaque
│
└── /contato — Contato
    ├── Email da empresa
    └── Links de redes sociais
```

**Convenção de idioma:** as rotas principais ficam em português na raiz do site. A versão em inglês replica a estrutura sob `/en`, com conteúdo traduzido nas páginas institucionais e fallback para os textos em português quando uma tradução ainda não existir.

### 2.2 Wireframe Conceitual — Home

```
┌──────────────────────────────────────────────────────────┐
│  [LOGO]          Sobre | Membros | Projetos | Jams       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                        PKZCorp                           │
│              tagline curta e marcante aqui               │
│                                                          │
│                [VER PROJETOS]    [JAMS]                  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  MEMBROS                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ Del  │  │ Gab  │  │Markin│  │ Wig  │  │ Emy  │        │
│  │ dev  │  │ ...  │  │ ...  │  │ ...  │  │ ...  │        │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘        │
├──────────────────────────────────────────────────────────┤
│  PROJETOS EM DESTAQUE                                    │
│  [Card Projeto 1]   [Card Projeto 2]   [Card Projeto 3]  │
│                        [VER TODOS →]                     │
├──────────────────────────────────────────────────────────┤
│  JAM ATIVA                                               │
│  "Nome da Jam" — tipo: jogo / música / poema             │
│  ⏱ X dias restantes        [VER JAM →]                   │
├──────────────────────────────────────────────────────────┤
│  Footer: © PKZCorp | GitHub | Links                      │
└──────────────────────────────────────────────────────────┘
```

### 2.3 Wireframe Conceitual — Membros (Grid)

```
┌──────────────────────────────────────────────────────────┐
│  MEMBROS DA PKZCorp                                      │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐                  │
│  │  [foto/avatar] │  │  [foto/avatar] │                  │
│  │  Nome          │  │  Nome          │                  │
│  │  "tagline"     │  │  "tagline"     │                  │
│  │  [tag][tag]    │  │  [tag][tag]    │                  │
│  │  [Ver perfil→] │  │  [Ver perfil→] │                  │
│  └────────────────┘  └────────────────┘                  │
│                                                          │
│  ┌────────────────┐  ┌────────────────┐  ┌─────────────┐ │
│  │  ...           │  │  ...           │  │  ...        │ │
│  └────────────────┘  └────────────────┘  └─────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## 3. Especificação de Funcionalidades

### 3.1 Página de Membro — Estrutura de Dados

Cada membro é descrito por um arquivo YAML em uma Content Collection do Astro. YAML foi escolhido como formato padrão dos dados porque é simples de manter, facilita validação de schema e separa conteúdo estruturado de páginas editoriais.

```yaml
# /data/members/del.yaml  (exemplo)

slug: del
name: Del
avatar: /assets/avatars/del.png
tagline: "dev, poeta, criador de mundos"
bio: >
  Parágrafo de apresentação livre. Pode ser escrito em
  primeira pessoa, tom informal.

skills:
  - Python
  - JavaScript / p5.js
  - Pygame
  - Game Design
  - Poesia

links:
  github: https://github.com/del
  itch: https://del.itch.io
  # outros campos opcionais: soundcloud, instagram, site

productions:
  - title: "Nome do Projeto"
    type: game          # game | music | poem | art | software | other
    url: https://...
    year: 2025
  - title: "Outro Trabalho"
    type: poem
    url: https://...
    year: 2026
```

**Regra de modelo:**
- `members` guarda perfil, habilidades e links externos.
- `projects` guarda catálogo público de trabalhos, com filtros e vínculo opcional com jams.
- `jams` guarda briefing, prazo, submissões, destaque e resultado.
- Campos traduzíveis podem ganhar sufixo `en` quando houver versão em inglês, por exemplo `name_en`, `tagline_en`, `title_en`, `description_en`, `brief_en`.
- Quando um campo em inglês não existir, a interface usa o texto em português como fallback.

**Campos:**

| Campo         | Obrigatório | Tipo   | Descrição                                |
| ------------- | ----------- | ------ | ---------------------------------------- |
| `slug`        | ✅           | string | Identificador único, usado na URL        |
| `name`        | ✅           | string | Nome de exibição                         |
| `avatar`      | ✅           | path   | Foto ou avatar (quadrado, mín 400×400px) |
| `tagline`     | ✅           | string | Frase curta de identificação             |
| `bio`         | ✅           | string | Texto de apresentação                    |
| `skills`      | ✅           | list   | Lista de habilidades (tags)              |
| `links`       | ❌           | map    | Links externos (qualquer rede)           |
| `productions` | ❌           | list   | Trabalhos anteriores do membro           |

### 3.2 Página de Projetos — Filtros e Estrutura

#### 3.2.1 Categorias de Projeto

| Categoria  | Ícone | Exemplos                                   |
| ---------- | ----- | ------------------------------------------ |
| `game`     | 🎮     | Jogos digitais, jogos de tabuleiro         |
| `music`    | 🎵     | Músicas, EPs, trilhas                      |
| `software` | 💻     | Apps, ferramentas, scripts                 |
| `poem`     | 📝     | Poemas, crônicas, textos                   |
| `art`      | 🎨     | Ilustrações, design, artes visuais         |
| `collab`   | 🤝     | Projetos colaborativos multi-disciplinares |
| `other`    | ✨     | Qualquer coisa que não se encaixe acima    |

#### 3.2.2 Estrutura de Dados — Projeto

```yaml
# /data/projects/nome-do-projeto.yaml  (exemplo)

slug: nome-do-projeto
title: "Nome do Projeto"
category: game
tags:
  - pygame
  - puzzle
  - solo
status: released   # released | wip | jam | archived
year: 2025
members:
  - del
  - gabriel
description: >
  Descrição do projeto. Pode ter múltiplos parágrafos.
  Explica o que é, como surgiu, tecnologias usadas.
thumbnail: /assets/projects/nome-do-projeto/thumb.png
images:
  - /assets/projects/nome-do-projeto/screen1.png
  - /assets/projects/nome-do-projeto/screen2.png
links:
  play: https://...
  source: https://github.com/...
  itch: https://...
jam: slug-da-jam    # opcional, se o projeto surgiu de uma jam
```

#### 3.2.3 Sistema de Filtros

Os filtros da página `/projetos` devem ser combináveis (AND logic):

```
[Categoria ▾]  [Membro ▾]  [Status ▾]  [Tag: _____ ]
```

| Filtro        | Tipo              | Valores                                         |
| ------------- | ----------------- | ----------------------------------------------- |
| Categoria     | Checkbox múltiplo | game, music, software, poem, art, collab, other |
| Membro        | Checkbox múltiplo | Nomes dos membros                               |
| Status        | Toggle            | Todos / released / wip / jam / archived         |
| Busca por tag | Input texto       | Livre                                           |

**Comportamento:**
- Filtros ativos ficam visualmente marcados
- Contador de resultados visível ("X projetos encontrados")
- URL atualizada com query params para links compartilháveis (ex: `/projetos?cat=game&member=del`)
- Animação suave ao filtrar (fade ou slide dos cards)
- A filtragem deve acontecer no cliente, sem recarregar a página, com estado sincronizado com a URL para permitir compartilhar a lista filtrada

---

## 4. Módulo de Jams

### 4.1 O Que é uma Jam?

Uma **jam** é um desafio criativo com tema, prazo e tipo definidos. Qualquer membro do coletivo pode participar, e o resultado fica registrado publicamente na página da jam.

**Exemplos de jams possíveis:**
- 🎮 Game Jam — fazer um jogo em um fim de semana com tema sorteado
- 🎵 Music Jam — compor uma música a partir de um sample ou palavra-chave
- 📝 Poem Jam — escrever um poema em 24h com uma restrição formal
- 🎨 Art Jam — ilustrar um personagem ou cena com referência visual
- 🔀 Crossover Jam — cada membro cria em sua área mas com o mesmo tema

### 4.2 Estrutura de Dados — Jam

```yaml
# /data/jams/nome-da-jam.yaml

slug: nome-da-jam
title: "Nome da Jam"
type: game          # game | music | poem | art | mixed
status: active      # upcoming | active | voting | closed

theme: "O tema revelado aqui"
brief: >
  Descrição completa da jam. Explica o contexto, a
  motivação do tema e o espírito do desafio.

rules:
  - "Regra 1"
  - "Regra 2"
  - "Regra 3"

dates:
  announced: 2026-05-01
  theme_reveal: 2026-05-03  # pode ser diferente do anúncio para criar suspense
  start: 2026-05-03
  end: 2026-05-10
  results: 2026-05-12       # opcional

cover: /assets/jams/nome-da-jam/cover.png

submissions:
  - member: del
    title: "Nome da Submissão"
    description: "Descrição curta"
    url: https://...
    media:
      - /assets/jams/nome-da-jam/del-screenshot.png
    highlight: false  # true = destaque especial no resultado

  - member: gabriel
    title: "..."
    description: "..."
    url: https://...
    highlight: true

result_note: >
  Texto opcional pós-jam: reflexões, favoritos,
  links para replay, etc.
```

### 4.3 Ciclo de Vida de uma Jam

```
┌─────────────┐
│  upcoming   │  Jam anunciada, tema ainda não revelado
└──────┬──────┘
       │  theme_reveal date
┌──────▼──────┐
│   active    │  Tema revelado, submissões abertas
└──────┬──────┘
       │  end date
┌──────▼──────┐
│   voting    │  (opcional) período de apreciação interna
└──────┬──────┘
       │  results date
┌──────▼──────┐
│   closed    │  Resultado publicado, jam arquivada
└─────────────┘
```

**Estados e comportamento visual:**

| Status     | Badge           | Destaque na Home?        | Submissões visíveis? |
| ---------- | --------------- | ------------------------ | -------------------- |
| `upcoming` | 🔜 Em breve      | Sim (tema oculto)        | Não                  |
| `active`   | 🟢 Aberta        | Sim (destaque principal) | À medida que chegam  |
| `voting`   | 🟡 Em apreciação | Sim                      | Sim                  |
| `closed`   | ⬛ Encerrada     | Não                      | Sim                  |

### 4.4 Página Individual de Jam — Layout

```
┌──────────────────────────────────────────────────────────┐
│  [Cover da Jam]                                          │
│                                                          │
│  🟢 ABERTA          type: GAME JAM                       │
│  "Nome da Jam"                                           │
│                                                          │
│  ⏱ Encerra em 5 dias  (ou: Encerrou em 12/05/2026)       │
├──────────────────────────────────────────────────────────┤
│  TEMA                                                    │
│  ┌────────────────────────────────────────────────────┐  │
│  │  "O Tema Em Destaque Visual"                       │  │
│  └────────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────────┤
│  BRIEFING                                                │
│  [texto do brief]                                        │
│                                                          │
│  REGRAS                                                  │
│  • Regra 1                                               │
│  • Regra 2                                               │
├──────────────────────────────────────────────────────────┤
│  SUBMISSÕES (3/5 membros)                                │
│  ┌──────────────────┐  ┌──────────────────┐              │
│  │ [thumb]          │  │ [thumb]          │              │
│  │ Del — "Título"   │  │ Gabriel — "..."  │              │
│  │ [Jogar →]        │  │ [Ver →]          │              │
│  └──────────────────┘  └──────────────────┘              │
│                                                          │
│  ┌──────────────────────────────────────────────────┐    │
│  │  ⭐ DESTAQUE DA JAM                              │    │
│  │  [card em destaque especial]                     │    │
│  └──────────────────────────────────────────────────┘    │
├──────────────────────────────────────────────────────────┤
│  RESULTADO / NOTA FINAL                                  │
│  [result_note se status=closed]                          │
└──────────────────────────────────────────────────────────┘
```

### 4.5 Fluxo de Gestão de uma Jam (sem backend)

Como o site é estático (GitHub Pages), a gestão das jams é feita por um maintainer no GitHub, usando edição do arquivo YAML no repositório e pull requests quando necessário. O formulário de submissão serve para coletar entradas sem exigir edição manual pelos participantes:

```
1. Maintainer cria arquivo /data/jams/[slug].yaml
   └─ status: upcoming, theme: oculto

2. No dia da revelação, edita o yaml:
   └─ theme: "O Tema Real", status: active

3. Membros enviam submissões pelo formulário da jam
  └─ a submissão cai para revisão do maintainer

4. Ao encerrar:
  └─ status: closed, result_note: "...", highlight: true nos favoritos escolhidos pelo maintainer

5. Projeto gerado na jam pode virar um /projetos/[slug]
   com campo `jam: slug-da-jam`
```

**Decisão de votação e destaque:** não haverá votação pública no v1. Depois do prazo, o maintainer revisa as submissões, escolhe o destaque da jam e registra o resultado no YAML. Se o coletivo quiser uma mecânica de votação mais tarde, isso pode ser adicionada como campo extra no modelo de jam.

**Formulário de submissão:** o formulário pode ser implementado com um serviço estático como **Formspree** ou **Netlify Forms**, enviando os dados ao maintainer para inclusão manual no repositório. O conteúdo oficial continua sendo o YAML versionado no GitHub.

---

## 5. Stack Técnica e Implementação

### 5.1 Opções de Stack para GitHub Pages

Como o site é **estático** (GitHub Pages não executa backend), as opções principais são:

| Opção                         | Vantagens                                                 | Desvantagens                  | Indicada para                    |
| ----------------------------- | --------------------------------------------------------- | ----------------------------- | -------------------------------- |
| **HTML/CSS/JS puro**          | Zero dependências, simples                                | Mais código manual            | Times pequenos, sites simples    |
| **Astro** ⭐ Recomendado       | SSG moderno, suporta MDX, componentes, zero JS por padrão | Requer build step             | Melhor equilíbrio                |
| **Next.js (export estático)** | Ecossistema React, familiaridade                          | Bundle maior, config complexa | Quem já conhece React            |
| **Hugo**                      | Extremamente rápido, Markdown nativo                      | Templates Go, menos flexível  | Conteúdo pesado                  |
| **11ty (Eleventy)**           | Simples, flexível, rápido                                 | Menos popular                 | Devs que preferem controle total |

**Recomendação: Astro**
- Suporta YAML para os dados de membros, projetos e jams via Content Collections
- Componentes em estilo React/Vue sem bundle de JS no cliente
- Build step simples, integração nativa com GitHub Pages via GitHub Actions
- Coleções de conteúdo com tipagem (Content Collections) — perfeito para o modelo de dados proposto
- Estilo com SCSS/Sass para manter organização de tokens, partials e componentes

### 5.2 Estrutura de Pastas (Astro)

```
/
├── public/
│   └── assets/
│       ├── avatars/
│       ├── projects/
│       └── jams/
│
├── src/
│   ├── styles/
│   │   ├── global.scss
│   │   ├── tokens.scss
│   │   └── components/
│   ├── content/
│   │   ├── members/      ← Um .yaml por membro
│   │   ├── projects/     ← Um .yaml por projeto
│   │   └── jams/         ← Um .yaml por jam
│   │
│   ├── components/
│   │   ├── MemberCard.astro
│   │   ├── ProjectCard.astro
│   │   ├── JamCard.astro
│   │   ├── JamSubmissions.astro
│   │   └── FilterBar.astro
│   │
│   ├── layouts/
│   │   ├── Base.astro
│   │   └── Page.astro
│   │
│   └── pages/
│       ├── index.astro        ← Home
│       ├── sobre.astro
│       ├── membros/
│       │   ├── index.astro    ← Grid de membros
│       │   └── [slug].astro   ← Perfil individual
│       ├── projetos/
│       │   ├── index.astro    ← Lista com filtros
│       │   └── [slug].astro   ← Página do projeto
│       └── jams/
│           ├── index.astro    ← Lista de jams
│           └── [slug].astro   ← Página da jam
│
├── astro.config.mjs
└── package.json
```

**Conteúdo e idioma:** as coleções usam português como fonte primária. Páginas e campos em inglês são gerados a partir dos mesmos registros, usando os campos `*_en` quando existirem.

### 5.3 Deploy com GitHub Pages

```yaml
# .github/workflows/deploy.yml

name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
      - uses: actions/deploy-pages@v4
```

**Configuração do Pages:** o repositório deve publicar o site via GitHub Actions, com a branch principal como origem do build e a pasta `dist/` como artefato de deploy.

### 5.4 Decisões de Design

| Decisão            | Escolha atual no repositório                  | Observações / próximos passos                 |
| ------------------ | --------------------------------------------- | --------------------------------------------- |
| CSS Framework      | **SCSS/Sass** (parciais em `src/styles/`)     | Estrutura já implementada com tokens e mixins |
| Fontes             | `Inter`, `IBM Plex Sans`, `JetBrains Mono` via Google Fonts | Importadas em `src/layouts/Base.astro`        |
| Ícones             | Lucide (via `@lucide/astro`)                  | Component `src/components/Icon.astro` usa Lucide
| Animações          | CSS transitions; respects `prefers-reduced-motion` | Intersection Observer patterns prepared in styles; reduce-motion handled
| Tema               | Dark-first color tokens (`$color-bg: #0a0a0a`) | Dark mode is default in styles; no theme toggle implemented yet
| Imagens            | Logos present as PNG/SVG in `public/images/`  | Thumbnails in content currently use external placeholder images; recommend exporting WebP versions
| Filtro de projetos | Planned: client-side JS                       | Pages currently placeholders — implement vanilla JS filters when building `/projetos`

### 5.5 Acessibilidade

O site deve nascer com requisitos mínimos de acessibilidade:

- Navegação completa por teclado em menus, cards, formulários e filtros
- Contraste de cor compatível com leitura confortável em dark mode e light mode
- Uso consistente de `aria-label`, `aria-current`, `alt` e `label` em elementos interativos e imagens
- Estrutura semântica com `header`, `nav`, `main`, `section`, `article` e `footer`
- Foco visível em todos os controles interativos
- Respeito a `prefers-reduced-motion` para reduzir animações quando o sistema do usuário pedir
- Textos traduzidos com o mesmo conteúdo funcional nas versões em português e inglês

### 5.6 SEO e Observabilidade

**SEO básico:**
- Título e descrição únicos por página
- Metadados Open Graph e Twitter Card para compartilhamento social
- Favicon e imagem social configurados desde o início
- Sitemap gerado no build
- `robots.txt` permitindo indexação pública das páginas institucionais
- URLs limpas e previsíveis, com a versão em inglês espelhando a estrutura principal

**Observabilidade:**
- Sem analytics invasivo por padrão
- Se for necessário medir acesso depois, usar uma solução leve e privacy-friendly, como Plausible ou Simple Analytics
- Eventos de UI importantes podem ser registrados apenas de forma agregada, sem rastreamento individual

### 5.7 Qualidade e Testes

**Obrigatório no projeto:**
- Validação do build em CI com `npm run build`
- Lint/format se a base adotar um linter ou formatter desde o início
- Verificação manual das rotas principais: home, membros, projetos, jams e contato
- Teste de filtros em `/projetos` com combinação de categoria, membro, status e tag
- Revisão dos campos obrigatórios dos arquivos YAML antes de publicar conteúdo novo
- Checagem de responsividade em larguras mobile, tablet e desktop
- Confirmação de acessibilidade básica com navegação por teclado e contraste

### 5.8 Convenções de Assets

- Avatares em `public/assets/avatars/`
- Projetos em `public/assets/projects/[slug]/`
- Jams em `public/assets/jams/[slug]/`
- Arquivos nomeados em `kebab-case`
- Preferência por `webp` para thumbnails e imagens principais
- Usar `png` apenas quando transparência ou fidelidade visual exigir
- Todo asset deve ter texto alternativo definido no conteúdo ou no componente que o consome
- Tamanho alvo de thumbnail: até 300 KB, com largura pensada para o layout real

### 5.9 Backups e Versionamento

- O GitHub será a fonte de verdade para conteúdo e histórico
- Pull requests e commits servem como backup natural para mudanças de texto, imagens e dados
- Tags ou releases podem marcar marcos como primeira publicação, nova jam ou reformulação visual
- Se um conteúdo precisar ser revertido, a versão anterior do arquivo no GitHub deve ser restaurada em vez de duplicar registros manualmente

### 5.10 Internacionalização

- Português é a língua padrão do site
- Inglês é a segunda língua, priorizada nas páginas institucionais e nas rotas espelhadas em `/en`
- Conteúdo novo deve nascer em português e receber tradução quando houver tempo ou necessidade
- Campos traduzíveis ficam no mesmo registro de conteúdo, para evitar duplicação desnecessária de arquivos
- Se uma tradução faltar, o site mostra o texto em português como fallback temporário

### 5.11 Identidade da Marca e Sistema Visual

A PKZCorp já tem nome, logo e uma paleta base. O projeto agora precisa de um sistema visual documentado para aplicar essa identidade de forma consistente no site e em materiais futuros.

**O que precisa ser definido com o designer:**
- Paleta completa com papéis semânticos: `main accent`, `background`, `surface`, `surface elevated`, `text primary`, `text secondary`, `border`, `success`, `warning`, `error`, `info`
- Uso das cinco pétalas do logo como cores de membros, categorias ou destaques controlados
- Versões do logo: principal, reduzida, monocromática, clara/escura e ícone para favicon
- Sistema tipográfico: fonte de títulos, fonte de texto corrido, pesos, escalas e hierarquia
- Estilo de ícones: família escolhida, espessura, preenchimento, cantos e regras de uso
- Estilo de imagens: recorte, proporção, bordas, molduras, filtros e tratamento visual
- Tokens de design: espaçamento, raio, sombra, borda, motion, z-index e estados interativos
- Motivos gráficos secundários: padrões, linhas, círculos, pétalas, fundos e separadores
- Diretrizes para componentes: botões, cards, badges, tags, formulários e hover/focus states
- Regras de uso para social cards, banners, avatars e demais assets públicos

**Documento de referência da marca:** o arquivo [pkzcorp-brand-workbook.md](pkzcorp-brand-workbook.md) deve ser preenchido pelo designer e usado como checklist visual único para o projeto.

**Decisão de sistema:** o visual deve equilibrar a força do logo com uma interface legível. A paleta base permanece escura, com o branco e os acentos coloridos da logo como contraste principal. O restante do sistema deve ser derivado de tokens, não de escolhas ad hoc por página ou componente.

---

## 6. Cronograma

### 6.1 Fases do Projeto

```
Fase 1 — Fundação
├── Definir nome, identidade visual e paleta do coletivo
├── Configurar repositório, Astro, SCSS e GitHub Pages
├── Criar estrutura de pastas e schemas dos dados
└── Entrega: projeto rodando localmente com dados fake

Fase 2 — Membros e Projetos
├── Componentes MemberCard e ProjectCard
├── Páginas /membros e /membros/[slug]
├── Páginas /projetos com sistema de filtros
└── Entrega: site navegável com dados reais dos membros

Fase 3 — Jams
├── Schema e componentes do módulo de jams
├── Páginas /jams e /jams/[slug]
├── Integração da jam ativa na Home
└── Entrega: módulo completo com primeira jam de teste

Fase 4 — Polimento
├── Home page completa (hero, destaques, seções)
├── Página /sobre e /contato
├── Responsividade mobile
├── SEO básico (meta tags, og:image, sitemap)
├── Acessibilidade básica e troca de tema clara/escura
└── Entrega: site pronto para domínio público

Fase 5 — Lançamento
├── Apontar domínio (se houver) ou usar [user].github.io
├── Revisão de conteúdo de todos os membros
└── Entrega: site no ar 🚀
```

### 6.2 Estimativas de Esforço

| Entrega                          | Horas Est. | Responsável Sugerido      |
| -------------------------------- | ---------- | ------------------------- |
| Setup e configuração             | 4h         | Dev principal             |
| Schemas e dados dos membros      | 3h         | Todos preenchem o próprio |
| Componentes base (cards, layout) | 8h         | Dev principal             |
| Página de Membros                | 6h         | Dev principal             |
| Página de Projetos + filtros     | 10h        | Dev principal             |
| Módulo de Jams                   | 12h        | Dev principal             |
| Home page                        | 8h         | Dev + designer            |
| Páginas Sobre / Contato          | 3h         | Redator                   |
| Mobile e polimento               | 6h         | Dev principal             |
| Testes e ajustes                 | 4h         | Todos                     |
| **TOTAL**                        | **~64h**   |                           |

---

## 7. Anexos

### 7.1 Checklist de Conteúdo por Membro

Cada membro deve preparar:

```
[ ] Avatar (foto ou ilustração, quadrado, mín 400×400px)
[ ] Tagline (frase curta, máx 60 caracteres)
[ ] Bio (2-4 parágrafos, tom livre)
[ ] Lista de habilidades / tecnologias / áreas
[ ] Lista de produções anteriores (título + link + tipo + ano)
[ ] Links externos (GitHub, SoundCloud, itch.io, etc.)
```

### 7.2 Checklist de Lançamento

**Antes de publicar:**
- [ ] Todos os membros revisaram sua própria página
- [ ] Todos os links externos funcionando
- [ ] Site testado em mobile (iOS e Android)
- [ ] Imagens otimizadas (WebP, < 300KB por thumbnail)
- [ ] Meta tags preenchidas (título, descrição, og:image)
- [ ] Favicon configurado
- [ ] Primeira jam criada ou anunciada
- [ ] README.md do repositório atualizado com instruções de contribuição
- [ ] Versão em inglês publicada nas páginas principais ou marcada com fallback explícito
- [ ] Navegação por teclado e contraste testados nos temas claro e escuro

**Após lançamento:**
- [ ] Compartilhar link nos grupos do coletivo
- [ ] Adicionar link ao bio das redes sociais dos membros
- [ ] Documentar processo de adicionar nova jam / projeto no README

### 7.3 Guia Rápido — Como Adicionar um Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/[org]/[repo]
cd [repo]

# 2. Crie o arquivo do projeto
cp src/content/projects/_template.yaml src/content/projects/nome-do-projeto.yaml

# 3. Edite com seus dados
# (preencha slug, title, category, description, etc.)

# 4. Adicione assets
mkdir -p public/assets/projects/nome-do-projeto
cp thumbnail.png public/assets/projects/nome-do-projeto/

# 5. Rode localmente para conferir
npm run dev

# 6. Commite e faça push
git add .
git commit -m "feat: adiciona projeto nome-do-projeto"
git push origin main

# O GitHub Actions faz o deploy automaticamente ✅
```

### 7.4 Guia Rápido — Como Criar uma Jam

```bash
# 1. Crie o arquivo da jam
cp src/content/jams/_template.yaml src/content/jams/nome-da-jam.yaml

# 2. Preencha o briefing
# - Deixe theme: "[TEMA OCULTO]" se quiser revelar depois
# - status: upcoming

# 3. Na data de revelação, atualize
# - theme: "O Tema Real"
# - status: active

# 4. Membros enviam submissões pelo formulário da jam
# (o maintainer revisa e inclui no YAML versionado no GitHub)

# 5. Ao encerrar
# - status: closed
# - preencha result_note
# - marque highlight: true no favorito escolhido pelo maintainer
```

### 7.5 Perguntas Frequentes Internas

**Preciso saber programar para contribuir com conteúdo?**
Não para textos e dados — editar um arquivo YAML é similar a editar um formulário. Mas para criar novos componentes visuais, sim.

**Como adiciono uma rede social nova ao perfil?**
No arquivo YAML do seu membro, adicione qualquer chave em `links:`. O componente exibirá automaticamente se houver ícone correspondente; se não, exibe o URL genérico.

**E se ainda não houver tradução em inglês?**
A versão em inglês usa fallback para o texto em português até a tradução ser adicionada ao mesmo registro de conteúdo.

**Posso ter projetos no site que não são da PKZCorp?**
Sim — produções individuais ficam na aba de produções do seu perfil de membro. A página `/projetos` lista projetos do coletivo (com `members:` preenchido).

**O que acontece se o link de um projeto morrer?**
Atualiza o YAML e remove ou substitui o link. Não há automação de checagem de links (por enquanto).

**Quem decide o tema da próxima jam?**
A definir internamente — sugestão: rodízio entre membros ou votação no grupo.

**Como ficam as votações das jams?**
No v1 não existe votação pública no site. O maintainer revisa as submissões, escolhe o destaque e publica o resultado no arquivo YAML.

---

**Fim do Documento**

**Próxima Revisão:** Após kickoff com todos os membros
**Repositório:** A definir
