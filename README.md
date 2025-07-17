# 🚀 RailsReact

**RailsReact** es un entorno de desarrollo full-stack que combina un backend API en **Ruby on Rails** con un frontend moderno en **React (Vite)**. Está diseñado para permitir un desarrollo rápido, eficiente y escalable de aplicaciones web, siguiendo buenas prácticas y herramientas modernas.

---

## 🎯 Este proyecto dinámico y responsivo con facilidad. Sus principales características incluyen:

- ⚡ **Frontend moderno con Vite + React** para recarga rápida (hot reload) y desarrollo fluido.
- 🧹 **Calidad de código** con ESLint y convenciones claras para facilitar el mantenimiento.
- 🔗 **Integración transparente con Rails API**, estructura limpia y lógica desacoplada.
- 🔒 **Arquitectura segura y escalable**, con gestión de ambientes y flujos de despliegue productivos.
- 🚀 **Alto rendimiento**, con soporte para TypeScript y compilación con SWC (opcional).
- 🐳 **Soporte para Docker** para estandarizar el entorno de desarrollo y despliegue.
- 🧪 **Tests integrados** para garantizar calidad y prevenir errores.

# 🧱 Estructura del Proyecto

Este proyecto está dividido en dos grandes módulos: **backend** con Rails API y **frontend** con React + Vite. Además, se utiliza Docker para facilitar el despliegue y la configuración del entorno.

```plaintext
mi-proyecto/
├── backend/               💡 Backend con Ruby on Rails (API)
│   ├── app/              🔧 Lógica de negocio, modelos, controladores, etc.
│   ├── config/           🔧 Configuración de entorno, rutas, inicializadores
│   ├── Dockerfile        🐋 Imagen Docker para el backend
│   └── ...               🗂️ Otros archivos y carpetas del backend
│
├── frontend/              🎨 Frontend con React + Vite
│   ├── src/              🌐 Componentes, vistas, lógica del cliente
│   ├── vite.config.js    ⚙️ Configuración de Vite
│   ├── Dockerfile        🐋 Imagen Docker para el frontend
│   └── ...               🗂️ Otros archivos y carpetas del frontend
│
├── docker-compose.yml     ⚙️ Orquestación de servicios con Docker Compose
└── README.md              📘 Documentación general del proyecto
```

## 🔧 Requisitos previos

- Docker y Docker Compose
- Node.js ≥ 18 (si trabajás sin Docker)
- Ruby ≥ 3.1 y Rails ≥ 7.1 (si trabajás sin Docker)
- PostgreSQL (o SQLite, según tu configuración)

---

## ⚙️ Instalación manual (sin Docker)

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/mi-proyecto.git
cd mi-proyecto
```
Backend (Rails)
```bash
cd backend
bundle install
rails db:setup
rails server
```
Frontend (React)
```bash
cd ../frontend
npm install
npm run dev
```
La app estará disponible en:

API Rails: http://localhost:3000

React App: http://localhost:5173

🐳 Instalación con Docker
1. Construir e iniciar los servicios
```bash
docker-compose up --build
```
Esto levantará:

Rails API en http://localhost:3000

React (Vite) en http://localhost:5173

📦 Asegurate de que los puertos 3000 y 5173 estén disponibles.

⚗️ Tests
Test Backend (Rails)
```bash
cd backend
bundle exec rspec
```
Test Frontend (React con Vitest)
```bash
cd frontend
npm run test
```
🧪 Correr tests con Docker

# Backend
docker compose exec backend bundle exec rspec

# Frontend
docker compose exec frontend npm run test































