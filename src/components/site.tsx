import { ReactNode, useState } from "react"
import brandSymbol from "../assets/mynutricoach-symbol.png"

export type IconName = "arrow" | "calendar" | "chart" | "check" | "clipboard" | "close" | "data" | "heart" | "menu" | "message" | "people" | "shield" | "spark" | "user"

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        <path d="m4 8 6-5 6 7 5-4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="3" />
        <path d="M9 4.5V3h6v1.5M9 10h6M9 14h6" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    data: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    message: (
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-4-.9L3 21l1.8-4.4A8.2 8.2 0 0 1 3 11.5a8.4 8.4 0 0 1 9-8.5 8.4 8.4 0 0 1 9 8.5Z" />
    ),
    people: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />,
    spark: (
      <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className="shrink-0"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {paths[name]}
    </svg>
  )
}

export function Logo({
  inverse = false,
  href = "#inicio",
}: {
  inverse?: boolean
  href?: string
}) {
  return (
    <a
      aria-label="MyNutriCoach, inicio"
      className={`logo ${inverse ? "logo--inverse" : ""}`}
      href={href}
    >
      <img alt="" src={brandSymbol} />
      <span className="brand-name">
        <span>My</span>
        <span>Nutri</span>
        <span>Coach</span>
      </span>
    </a>
  )
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  icon = false,
}: {
  children: ReactNode
  href: string
  variant?: "primary" | "secondary" | "light"
  icon?: boolean
}) {
  return (
    <a className={`button button--${variant}`} href={href}>
      {children}
      {icon && <Icon name="arrow" size={18} />}
    </a>
  )
}

const navLinks = [
  { id: "vision", label: "Visión" },
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "profesionales", label: "Profesionales" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
]

/** base: "" en la landing (anclas locales) o "/" en otras páginas (vuelven a la landing). */
export function SiteHeader({ base = "" }: { base?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo href={`${base}#inicio`} />
        <nav aria-label="Navegación principal" className="desktop-nav">
          {navLinks.map((link) => (
            <a href={`${base}#${link.id}`} key={link.id}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ButtonLink href={`${base}#contacto`}>Solicitar una demo</ButtonLink>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav
        aria-hidden={!menuOpen}
        aria-label="Navegación móvil"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        inert={!menuOpen}
      >
        {navLinks.map((link) => (
          <a href={`${base}#${link.id}`} key={link.id} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <ButtonLink href={`${base}#contacto`}>Solicitar una demo</ButtonLink>
      </nav>
    </header>
  )
}

export function SiteFooter({ base = "" }: { base?: string }) {
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand">
          <span className="brand-name-white">
            <span>My</span>
            <span>Nutri</span>
            <span>Coach</span>
          </span>
          <p>
            Tecnología y supervisión profesional para acompañar hábitos
            nutricionales.
          </p>
        </div>
        <div className="footer-links">
          <p>Explorar</p>
          <a href={`${base}#propuesta`}>Propuesta</a>
          <a href={`${base}#como-funciona`}>Cómo funciona</a>
          <a href={`${base}#profesionales`}>Profesionales</a>
        </div>
        <div className="footer-links">
          <p>Proyecto</p>
          <a href={`${base}#nosotros`}>Nosotros</a>
          <a href={`${base}#contacto`}>Contacto</a>
          <a href="/privacidad/">Privacidad</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2025 MyNutriCoach. Proyecto argentino.</span>
        <span>La IA no reemplaza el criterio profesional.</span>
      </div>
    </footer>
  )
}
