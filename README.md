# Hylodes

> `Hylodes` é um género de anfíbios da família Hylodidae.

Este repositório contém principalmente uma aplicação frontend Angular na pasta `app`. O README abaixo documenta o projeto com base na estrutura e arquivos presentes no repositório.

![Angular](https://img.shields.io/badge/Angular-DB1F1F?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

---

## Visão Geral

Hylodes é uma aplicação front-end construída com Angular que organiza componentes por níveis (`atoms`, `molecules`, `organisms`, `pages`, `templates`). O foco atual do repositório é a interface que gerencia e lista ideias/itens.

---

## Tecnologias

- Angular 21
- TypeScript
- Ng Icons
- Prettier

---

## Estrutura do Projeto (resumo)

```
app/
  ├─ src/
  │  ├─ app/
  │  │  ├─ app.ts, app.routes.ts, app.config.ts
  │  ├─ components/
  │  │  ├─ atoms/
  │  │  ├─ molecules/
  │  │  ├─ organisms/
  │  │  └─ pages/
  │  ├─ main.ts
  │  └─ index.html
```

Principais pastas de componentes:

- `atoms/` — elementos básicos (ex.: `button`, `select`, `title`)
- `organisms/` — composição maior (ex.: `navbar`, `card`)
- `pages/` — páginas completas (ex.: `ideas`, `auth`)

---

## Pré-requisitos

- Node.js 18+
- npm ou pnpm
- Angular CLI (opcional)

---

## Instalação

```bash
cd app
# com pnpm (se você usa pnpm no workspace)
pnpm install

# ou com npm
npm install
```

---

## Scripts úteis (em `app/package.json`)

- `start` — `ng serve` (inicia servidor de desenvolvimento em `http://localhost:4200/`)
- `build` — `ng build` (build de produção)
- `test` — `ng test` (testes unitários)

Exemplo:

```bash
cd app
npm run start
```

---

## Como o frontend está organizado

- `app/src/app/app.routes.ts` — define rotas principais
- `app/src/app/app.ts` — bootstrap da app
- `app/src/components/atoms` — componentes atômicos
- `app/src/components/organisms/navbar` — navbar e lógica de abas
- `app/src/components/pages/ideas` — página de listagem e popup de criação

Dica: o projeto segue uma convenção de design system (atoms → molecules → organisms → pages).

---

## Eventos e comunicação entre componentes

Algumas convenções observadas no código:

- Componentes `atom-button` usam `@Output() action` para emitir cliques.
- Organisms como `organism-popup` reemitem eventos para pages via `@Output()`.

---

## Desenvolvimento e debug

- Rode `npm run start` dentro de `app` e inspeccione `http://localhost:4200/`.
- Use `console.log` ou o DevTools para inspecionar eventos entre componentes enquanto desenvolve.

---

## Contribuição

- Abra uma issue descrevendo a proposta.
- Faça um fork e envie PRs com mudanças pequenas e documentadas.

---

## Próximos passos sugeridos

1. Se existir um backend separado (API), inclua sua pasta `api/` com instruções de execução e variáveis de ambiente.
2. Adicionar exemplos de `env` e configurações de build para produção.
3. Expandir o README com screenshots e exemplos de uso das rotas principais.

---

## Autor

Lucas Carinhanha

---

Feito com código, café e um pouco de caos.
