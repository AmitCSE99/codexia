import { TemplateNode } from "../../../convex/projects";

export const reactViteTemplate: TemplateNode[] = [
    {
        type: "folder",
        name: "src",
        children: [
            {
                type: "file",
                name: "main.tsx",
                content: `import React from "react";
  import ReactDOM from "react-dom/client";
  import App from "./App";
  import "./index.css";
  
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
  `,
            },
            {
                type: "file",
                name: "App.tsx",
                content: `import React from "react";
  import "./index.css";
  
  function App() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Vite + React</h1>
          <p>Starter template running in Codexia.</p>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
            className="app-link"
          >
            Learn Vite
          </a>
        </header>
      </div>
    );
  }
  
  export default App;
  `,
            },
            {
                type: "file",
                name: "index.css",
                content: `:root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.5;
    color-scheme: light dark;
    background-color: #020617;
    color: #e5e7eb;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  
  .app {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at top, #1e293b, #020617);
  }
  
  .app-header {
    text-align: center;
  }
  
  .app-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .app-header p {
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  .app-link {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 500;
  }
  
  .app-link:hover {
    text-decoration: underline;
  }
  `,
            },
        ],
    },
    {
        type: "folder",
        name: "public",
        children: [
            {
                type: "file",
                name: "vite.svg",
                content: `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="410" height="404" viewBox="0 0 410 404">
    <defs>
      <linearGradient id="vite-a" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#41D1FF"/>
        <stop offset="1" stop-color="#BD34FE"/>
      </linearGradient>
      <linearGradient id="vite-b" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#FFEA83"/>
        <stop offset="0.5" stop-color="#FFDD35"/>
        <stop offset="1" stop-color="#FFA800"/>
      </linearGradient>
    </defs>
    <path fill="url(#vite-a)" d="M399.6 59.5L215.6 388.5c-3.9 7.1-14 7.2-18 0.1L10.6 59.5c-4.4-7.6 1.3-17.1 9.7-16.3l184.4 19.3a10.5 10.5 0 0 0 11.5-8.2l17.3-88.7c1.8-9.1 14.6-9.1 16.4 0l17.3 88.7a10.5 10.5 0 0 0 11.5 8.2l184.4-19.3c8.4-.9 14.2 8.7 9.8 16.3z"/>
    <path fill="url(#vite-b)" d="M248.1 33.5L205.5 240.5 162.9 33.5a4 4 0 0 1 3.9-4.8h77.3a4 4 0 0 1 3.9 4.8z"/>
  </svg>
  `,
            },
        ],
    },
    {
        type: "file",
        name: "index.html",
        content: `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vite + React</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>
  </html>
  `,
    },
    {
        type: "file",
        name: "package.json",
        content: `{
    "name": "vite-react-app",
    "version": "0.0.0",
    "private": true,
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    "dependencies": {
      "react": "^18.3.1",
      "react-dom": "^18.3.1"
    },
    "devDependencies": {
      "@types/react": "^18.3.3",
      "@types/react-dom": "^18.3.0",
      "@vitejs/plugin-react-swc": "^3.7.0",
      "typescript": "^5.6.3",
      "vite": "^5.0.0"
    }
  }
  `,
    },
    {
        type: "file",
        name: "tsconfig.json",
        content: `{
    "compilerOptions": {
      "target": "ESNext",
      "useDefineForClassFields": true,
      "lib": ["DOM", "DOM.Iterable", "ESNext"],
      "allowJs": false,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "types": ["vite/client"]
    },
    "include": ["src"]
  }
  `,
    },
    {
        type: "file",
        name: "vite.config.ts",
        content: `import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react-swc";
  
  export default defineConfig({
    plugins: [react()],
  });
  `,
    },
];

export const nextJsTemplate: TemplateNode[] = [
    {
        type: "folder",
        name: "app",
        children: [
            {
                type: "file",
                name: "layout.tsx",
                content: `import type { Metadata } from "next";
  import "./globals.css";
  
  export const metadata: Metadata = {
    title: "Next.js App",
    description: "Starter template running in Codexia",
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  `,
            },
            {
                type: "file",
                name: "page.tsx",
                content: `export default function Home() {
    return (
      <main className="main">
        <div className="container">
          <h1>Next.js</h1>
          <p>Starter template running in Codexia.</p>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Learn Next.js
          </a>
        </div>
      </main>
    );
  }
  `,
            },
            {
                type: "file",
                name: "globals.css",
                content: `:root {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.5;
    color-scheme: light dark;
    background-color: #020617;
    color: #e5e7eb;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  
  .main {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at top, #1e293b, #020617);
  }
  
  .container {
    text-align: center;
  }
  
  .container h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  
  .container p {
    opacity: 0.8;
    margin-bottom: 1rem;
  }
  
  .link {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 500;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  `,
            },
        ],
    },
    {
        type: "folder",
        name: "public",
        children: [],
    },
    {
        type: "file",
        name: "package.json",
        content: `{
    "name": "nextjs-app",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    },
    "dependencies": {
      "react": "^18.3.1",
      "react-dom": "^18.3.1",
      "next": "^14.2.0"
    },
    "devDependencies": {
      "@types/node": "^20.14.0",
      "@types/react": "^18.3.3",
      "@types/react-dom": "^18.3.0",
      "typescript": "^5.6.3"
    }
  }
  `,
    },
    {
        type: "file",
        name: "tsconfig.json",
        content: `{
    "compilerOptions": {
      "target": "ES2017",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [
        {
          "name": "next"
        }
      ],
      "paths": {
        "@/*": ["./*"]
      }
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
    "exclude": ["node_modules"]
  }
  `,
    },
    {
        type: "file",
        name: "next.config.js",
        content: `/** @type {import('next').NextConfig} */
  const nextConfig = {};
  
  module.exports = nextConfig;
  `,
    },
    {
        type: "file",
        name: ".gitignore",
        content: `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
  
  # dependencies
  /node_modules
  /.pnp
  .pnp.js
  
  # testing
  /coverage
  
  # next.js
  /.next/
  /out/
  
  # production
  /build
  
  # misc
  .DS_Store
  *.pem
  
  # debug
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  
  # local env files
  .env*.local
  
  # vercel
  .vercel
  
  # typescript
  *.tsbuildinfo
  next-env.d.ts
  `,
    },
];