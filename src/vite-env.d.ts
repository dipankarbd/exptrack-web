/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_API_URL: string;
  readonly GRAPHQL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
