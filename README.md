## stromovaveza

Jednoduchý one‑page web pre „Domček na strome“, postavený na **Vite + React + TypeScript + styled-components** s multijazyčnosťou (SK/EN) a Bookio widgetom.

### Inštalácia

```bash
npm install
```

### Vývoj

```bash
npm run dev
```

Vite dev server beží typicky na `http://localhost:5173`.

### Build

```bash
npm run build
```

### Testy

Projekt používa **Vitest** + **Testing Library**:

```bash
npm test
```

### Lint

ESLint pre TypeScript/React:

```bash
npm run lint
```

### Technológie

- Vite
- React 18
- TypeScript
- styled-components (globálny `ThemeProvider`, `GlobalStyle`)
- Vitest + @testing-library/react + jest-dom
