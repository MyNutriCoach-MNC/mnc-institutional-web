/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** "false" oculta el aviso de sitio en desarrollo. Ver src/config.ts. */
  readonly VITE_SHOW_PREVIEW_NOTICE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
