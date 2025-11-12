# ProyectSubs 📋

Gestión de suscripciones con React + TypeScript + Vite

## Descripción breve
ProyectSubs es una aplicación frontend construida con **React 19**, **TypeScript** y **Vite**. Permite gestionar (mostrar, crear, editar) suscripciones — por ejemplo a servicios, plataformas, productos o membresías. Está configurada para desarrollo veloz usando SWC y tiene reglas base de ESLint para mantener la calidad del código.

## Características principales
- 🚀 React 19 + TypeScript
- ⚡️ Vite + plugin [react-swc](https://github.com/vitejs/vite-plugin-react-swc) para compilación rápida y Fast Refresh
- 🔍 Configuración base de ESLint
- 📐 Estructura escalable (_components_, _hooks_, _services_)
- 🛠️ Scripts listos: desarrollo, build, preview y lint

## Tecnologías usadas
- React 19
- TypeScript
- Vite
- SWC (`@vitejs/plugin-react-swc`)
- ESLint

## Requisitos previos
- [Node.js](https://nodejs.org/) (recomendado >= 18, preferiblemente LTS actual)
- npm (o yarn / pnpm si prefieres: los comandos abajo usan `npm`)

## Instalación y primer uso

```sh
git clone https://github.com/XhavielC/ProyectSubs.git
cd ProyectSubs
npm install
npm run dev
```

Luego abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts útiles

- `npm run dev` — Arranca el servidor de desarrollo (HMR) en `http://localhost:5173`.
- `npm run build` — Compila la aplicación para producción (`tsc -b && vite build`).
- `npm run preview` — Sirve la versión optimizada localmente.
- `npm run lint` — Ejecuta ESLint sobre el proyecto.

## Producción local

```sh
npm run build
npm run preview
```
Abre el URL que aparece en consola (por defecto `http://localhost:5173`).

---

## Ejemplos rápidos

### Props tipadas

```typescript
// src/components/SubscriptionCard.tsx
interface SubscriptionCardProps {
  id: string;
  name: string;
  active: boolean;
}

export default function SubscriptionCard({ id, name, active }: SubscriptionCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{active ? 'Activa' : 'Inactiva'}</p>
    </article>
  );
}
```

### useEffect con abort controller

```typescript
useEffect(() => {
  const ac = new AbortController();

  fetch('/api/subscriptions', { signal: ac.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err);
    });

  return () => ac.abort();
}, []);
```

## Sugerencias para manejo de datos

- Para _fetch_ rápidos: `fetch` o `axios`.
- Para cache y sincronización: [TanStack Query (React Query)](https://tanstack.com/query/latest).
- Mantén la lógica de fetch en _services_ o _hooks_ personalizados (`useSubscriptions`).

## Calidad de código

- ESLint incluido. Ajusta reglas en `eslint.config.js`.
- Se recomienda añadir:
  - [Prettier](https://prettier.io/) para formato.
  - [husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) para formateo/linteo previo a commits.
- Pruebas: añadir [Vitest](https://vitest.dev/) + [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/).

## Estructura y rutas principales

- `src/App.tsx` — Punto de entrada y definición de rutas.
- `src/pages/Home.tsx` — Lista de suscripciones.
- `src/pages/Create.tsx` — Formulario de nueva suscripción.
- `src/components/SubscriptionCard.tsx` — Tarjeta para mostrar suscripción.
- `src/hooks/useSubscriptions.ts` — Hook para lógica de fetch/CRUD.

---

## Creación

- **Autor original**: garu2 (Gary AT)
- **Adaptación a TypeScript**: XhavielC
- **Año**: 2022
