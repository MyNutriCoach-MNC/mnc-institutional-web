import { SHOW_PREVIEW_NOTICE } from "../config"

/** Aviso fijo de que el sitio todavía no está en producción. Se apaga desde src/config.ts. */
function PreviewNotice() {
  if (!SHOW_PREVIEW_NOTICE) return null

  return (
    <aside aria-label="Aviso" className="preview-notice" role="note">
      <span className="preview-notice__badge">Versión preliminar</span>
      <p>
        MyNutriCoach está en desarrollo y todavía no está disponible en
        producción.
      </p>
    </aside>
  )
}

export default PreviewNotice
