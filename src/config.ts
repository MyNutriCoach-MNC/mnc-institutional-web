/**
 * Aviso de "sitio en desarrollo" (componente PreviewNotice).
 *
 * Está activo por defecto. Para sacarlo cuando lancemos:
 * - sin tocar código: buildear con VITE_SHOW_PREVIEW_NOTICE=false;
 * - definitivamente: borrar este flag, src/components/PreviewNotice.tsx, sus dos usos
 *   (App.tsx y PrivacyPage.tsx) y los estilos .preview-notice de index.css.
 */
export const SHOW_PREVIEW_NOTICE =
  import.meta.env.VITE_SHOW_PREVIEW_NOTICE !== "false"
