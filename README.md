# ContableXpert Web

Aplicación web desarrollada para la gestión contable.
Este proyecto busca ser escalable, mantenible y fácil de extender.

---

## 🚀 Scripts disponibles

| Script    | Comando                  | Descripción                             |
| --------- | ------------------------ | ---------------------------------------- |
| `dev`   | `next dev --turbopack` | Inicia la aplicación en modo desarrollo |
| `lint`  | `next lint`            | Ejecuta ESLint para revisar el código   |



## 🔹 Estructura de carpetas
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
 │   │  └─ ...
 │   ├─ layout/          # Define la estructura general o contenedores de la página (Se enfoca en cómo se organiza la página, no en el contenido específico)
 │   │  ├─ page          # Contenedores, grids y wrappers
 │   │  └─ nav           # componentes fijos o recurrentes que aparecen en muchas páginas
 │   │    
 │   ├─ sections/        # Componentes de contenido que forman parte de una página (Hero, Features, CTA, etc.)
 │   └─ forms/           # Formularios (LoginForm, RegisterForm, etc.)
 │
 ├─ utils.ts             # Utilidades y funciones auxiliares
 ├─ hooks/               # Custom hooks de React
 ├─ styles/              # Estilos 
 └─ config/              # Configuración centralizada (Constantes)
```
---

## 🛠️ Dependencias principales

| Paquete         | Versión | Uso principal                    |
| --------------- | -------- | -------------------------------- |
| `next`        | 15.4.5   | Framework React para SSR y rutas |
| `react`       | 19.1.0   | Librería principal de UI        |
| `react-dom`   | 19.1.0   | Renderizado de React en el DOM   |
| `axios`       | ^1.11.0  | Cliente HTTP para consumir APIs  |
| `react-icons` | ^5.5.0   | Íconos para la interfaz         |

---

## ⚙️ Dependencias de desarrollo

| Paquete                  | Versión | Uso principal                                 |
| ------------------------ | -------- | --------------------------------------------- |
| `typescript`           | ^5       | Tipado estático                              |
| `tailwindcss`          | ^4       | Framework CSS para estilos utility-first      |
| `@tailwindcss/postcss` | ^4       | Integración Tailwind + PostCSS               |
| `eslint`               | ^9       | Linter para mantener calidad de código       |
| `eslint-config-next`   | 15.4.5   | Configuración ESLint recomendada por Next.js |
| `@types/react`         | ^19      | Tipos TypeScript para React                   |
| `@types/react-dom`     | ^19      | Tipos TypeScript para ReactDOM                |
| `@types/node`          | ^20      | Tipos Node.js                                 |
| `@eslint/eslintrc`     | ^3       | Configuración de ESLint                      |

## 🔹 Notas adicionales

- Se utiliza **Turbopack** para acelerar el desarrollo (`dev`).