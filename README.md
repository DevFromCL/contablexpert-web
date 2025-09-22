# ContableXpert Web

Aplicación web desarrollada para la gestión contable.
Este proyecto busca ser escalable, mantenible y fácil de extender.

---

## 🚀 Scripts disponibles

| Script    | Comando                  | Descripción                             |
| --------- | ------------------------ | ---------------------------------------- |
| `dev`   | `next dev --turbopack` | Inicia la aplicación en modo desarrollo |
| `lint`  | `next lint`            | Ejecuta ESLint para revisar el código   |
| `update-readme`  | `node scripts/update-readme.js`            | Actualiza dependencias al README.md   |

## 📒 Notas adicionales
Se utiliza Turbopack para acelerar el desarrollo (dev).

## 🏗️ Estructura de carpetas
```bash
src/
 ├─ app/                 # Rutas y páginas (Next.js App Router)
 │   ├─ (private)        # Rutas privadas
 │   │  └─ ...
 │   ├─ page.tsx         # Rutas publicas
 │   └─ ...
 │
 ├─ components/          # Componentes de UI y bloques reutilizables
 │   ├─ ui/              # Componentes atómicos y sus variantes (Button, Card, Input, etc.)
 │   │
 │   ├─ layout/          # Define la estructura general o contenedores de la página (Se enfoca en cómo se organiza la página, no en el contenido específico)
 │   │  ├─ page          # Contenedores, grids y wrappers
 │   │  └─ nav           # Componentes fijos o recurrentes que aparecen en muchas páginas
 │   │  └─ view          # Layouts específicos de secciones o vistas
 │   │    
 │   ├─ sections/        # Componentes de contenido que forman parte de una página (Hero, Features, CTA, etc.)
 │   └─ forms/           # Formularios (LoginForm, RegisterForm, etc.)
 │
 ├─ utils.ts             # Utilidades y funciones auxiliares
 ├─ hooks/               # Custom hooks de React
 ├─ store/               # Contexto global
 ├─ styles/              # Estilos 
 └─ config/              # Configuración centralizada (Constantes)
```
---

## 🛠️ Dependencias principales

| Paquete | Versión |
| ------- | ------- |
| `axios` | ^1.11.0 |
| `next` | 15.4.5 |
| `react` | 19.1.0 |
| `react-dom` | 19.1.0 |
| `react-icons` | ^5.5.0 |
| `zustand` | ^5.0.8 |

## ⚙️ Dependencias de desarrollo

| Paquete | Versión |
| ------- | ------- |
| `@eslint/eslintrc` | ^3 |
| `@tailwindcss/postcss` | ^4 |
| `@types/node` | ^20 |
| `@types/react` | ^19 |
| `@types/react-dom` | ^19 |
| `eslint` | ^9 |
| `eslint-config-next` | 15.4.5 |
| `tailwindcss` | ^4 |
| `typescript` | ^5 |