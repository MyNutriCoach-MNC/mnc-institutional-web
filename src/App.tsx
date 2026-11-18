import { FormEvent, ReactNode, useLayoutEffect, useState } from "react"
import brandSymbol from "./assets/mynutricoach-symbol.png"

type IconName = "arrow" | "calendar" | "chart" | "check" | "clipboard" | "close" | "data" | "heart" | "menu" | "message" | "people" | "shield" | "spark" | "user"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
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

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      aria-label="MyNutriCoach, inicio"
      className={`logo ${inverse ? "logo--inverse" : ""}`}
      href="#inicio"
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

function ButtonLink({
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

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string
  title: string
  text?: string
  align?: "left" | "center"
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-heading__text">{text}</p>}
    </div>
  )
}

function DashboardPreview() {
  return (
    <div
      className="product-visual"
      aria-label="Vista ilustrativa del dashboard clínico y conversación"
    >
      <div className="dashboard-card">
        <div className="dashboard-sidebar">
          <span className="mini-mark">
            <Icon name="heart" size={15} />
          </span>
          <span className="side-nav side-nav--active">
            <Icon name="chart" size={14} />
          </span>
          <span className="side-nav">
            <Icon name="people" size={14} />
          </span>
          <span className="side-nav">
            <Icon name="message" size={14} />
          </span>
          <span className="side-nav">
            <Icon name="calendar" size={14} />
          </span>
        </div>
        <div className="dashboard-content">
          <div className="dashboard-top">
            <div className="dashboard-brand">
              <span>
                <Icon name="heart" size={14} />
              </span>
              <div>
                <small>MyNutriCoach</small>
                <strong>Panel profesional</strong>
              </div>
            </div>
            <span className="avatar">LR</span>
          </div>
          <div className="dashboard-title">
            <div>
              <p>Resumen de seguimiento</p>
              <h3>Panel de pacientes</h3>
            </div>
            <span className="date-pill">
              <Icon name="calendar" size={13} /> Esta semana
            </span>
          </div>
          <div className="stat-grid">
            <div className="stat-card">
              <span className="stat-icon stat-icon--blue">
                <Icon name="people" size={16} />
              </span>
              <small>Pacientes activos</small>
              <strong className="stat-value">12</strong>
              <span>Datos ilustrativos</span>
            </div>
            <div className="stat-card">
              <span className="stat-icon stat-icon--green">
                <Icon name="message" size={16} />
              </span>
              <small>Registros semanales</small>
              <strong className="stat-value stat-value--updated">28</strong>
              <span>Datos ilustrativos</span>
            </div>
            <div className="stat-card stat-card--wide">
              <div className="stat-row">
                <div>
                  <small>Continuidad de hábitos</small>
                  <strong>Vista general</strong>
                </div>
                <span className="trend">Semana</span>
              </div>
              <div className="bars">
                {[36, 52, 44, 68, 60, 77, 71].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="patient-row">
            <span className="avatar avatar--green">JM</span>
            <div>
              <strong>Julieta M.</strong>
              <small>Último registro: hoy</small>
            </div>
            <span className="status-dot">Seguimiento activo</span>
          </div>
          <div className="dashboard-update">
            <span>
              <Icon name="check" size={14} />
            </span>
            <p>
              <strong>Nuevo registro organizado</strong>
              Disponible para revisión profesional
            </p>
          </div>
        </div>
      </div>

      <div className="phone-card">
        <div className="phone-top">
          <span className="avatar avatar--small">MN</span>
          <div>
            <strong>MyNutriCoach</strong>
            <small>Acompañamiento nutricional</small>
          </div>
        </div>
        <div className="chat-body">
          <span className="chat-time">HOY</span>
          <div className="bubble bubble--coach bubble--one">
            <p>Hola Julieta, ¿cómo te fue con la merienda que planificaron?</p>
            <span className="bubble-meta">09:32</span>
          </div>
          <div className="bubble bubble--patient bubble--two">
            <p>Bien. Elegí yogur con fruta y me resultó práctico.</p>
            <span className="bubble-meta">
              09:34 <Icon name="check" size={9} />
              <Icon name="check" size={9} />
            </span>
          </div>
          <div className="typing-bubble" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="bubble bubble--coach bubble--three">
            <p>
              Buenísimo. Lo registro para que tu profesional pueda revisarlo.
            </p>
            <span className="bubble-meta">09:35</span>
          </div>
          <div className="chat-input">
            <span>Escribí un mensaje</span>
            <span className="send">
              <Icon name="arrow" size={13} />
            </span>
          </div>
        </div>
      </div>
      <div className="visual-note">
        <Icon name="shield" size={16} />
        <span>
          <strong>Supervisión profesional</strong>
          El criterio clínico sigue en el centro
        </span>
      </div>
    </div>
  )
}

const problemCards = [
  {
    icon: "message" as IconName,
    title: "Adherencia y abandono",
    text: "Entre consultas puede disminuir la motivación y volverse difícil sostener el plan o los hábitos acordados.",
  },
  {
    icon: "calendar" as IconName,
    title: "Señales que llegan tarde",
    text: "El profesional tiene poca visibilidad cotidiana y algunos desvíos o riesgos pueden aparecer recién en la próxima consulta.",
  },
  {
    icon: "data" as IconName,
    title: "Carga operativa",
    text: "El seguimiento, las consultas recurrentes y la preparación de propuestas personalizadas demandan tiempo profesional.",
  },
]

const specificGoals = [
  "Incrementar la adherencia a los planes nutricionales.",
  "Reducir el abandono de los tratamientos.",
  "Detectar tempranamente riesgos y desvíos.",
  "Facilitar la comunicación profesional-paciente.",
  "Reducir el tiempo operativo dedicado al seguimiento.",
  "Generar acompañamiento continuo entre consultas.",
]

const audiences = [
  {
    icon: "user" as IconName,
    label: "Práctica individual",
    title: "Nutricionistas",
    text: "Para acompañar procesos con información más ordenada entre consultas.",
  },
  {
    icon: "people" as IconName,
    label: "Atención coordinada",
    title: "Equipos interdisciplinarios",
    text: "Para facilitar una lectura compartida del seguimiento, respetando cada rol profesional.",
  },
  {
    icon: "heart" as IconName,
    label: "Gestión institucional",
    title: "Centros de salud",
    text: "Para explorar nuevas formas de continuidad y supervisión en la atención nutricional.",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useLayoutEffect(() => {
    const revealSelectors = [
      ".section-heading",
      ".info-card",
      ".purpose-card",
      ".step-card",
      ".step-connector",
      ".solution-heading > *",
      ".solution-card",
      ".guiding-principle",
      ".split-heading > p",
      ".audience-card",
      ".benefit-bar",
      ".principle-list > div",
      ".boundary-card",
      ".about-visual",
      ".about-copy > p",
      ".contact-copy > *",
      ".contact-form",
      ".footer-main > *",
    ]
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelectors.join(",")),
    )
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal")
      element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`)
    })

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav aria-label="Navegación principal" className="desktop-nav">
            <a href="#vision">Visión</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#profesionales">Profesionales</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <div className="header-actions">
            <ButtonLink href="#contacto">Solicitar una demo</ButtonLink>
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
          <a href="#vision" onClick={closeMenu}>
            Visión
          </a>
          <a href="#como-funciona" onClick={closeMenu}>
            Cómo funciona
          </a>
          <a href="#profesionales" onClick={closeMenu}>
            Profesionales
          </a>
          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>
          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
          <ButtonLink href="#contacto">Solicitar una demo</ButtonLink>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-orb hero-orb--one" />
          <div className="hero-orb hero-orb--two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                Acompañamiento nutricional inteligente,{" "}
                <em>siempre en manos del profesional</em>
              </h1>
              <p>
                MyNutriCoach acompaña al paciente en su día a día, favoreciendo
                la adherencia al tratamiento y facilitando un seguimiento más
                cercano de su evolución entre consultas.
              </p>
              <div className="hero-actions">
                <ButtonLink href="#contacto" icon>
                  Solicitar una demo
                </ButtonLink>
                <ButtonLink href="#propuesta" variant="secondary">
                  Conocer la propuesta
                </ButtonLink>
              </div>
              <div className="hero-trust">
                <span>
                  <Icon name="check" size={16} /> Diseñado junto a profesionales
                </span>
                <span>
                  <Icon name="check" size={16} /> Criterio clínico en el centro
                </span>
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        <section className="problem section" id="propuesta">
          <div className="container">
            <SectionHeading
              align="center"
              eyebrow="El problema"
              title="La consulta es el punto de partida. El tratamiento continúa."
              text="La baja adherencia no responde a una sola causa: también influyen la imposibilidad de acompañar cada decisión cotidiana, la poca visibilidad y la carga operativa."
            />
            <div className="card-grid">
              {problemCards.map((card, index) => (
                <article className="info-card" key={card.title}>
                  <span className="card-number">0{index + 1}</span>
                  <span className="icon-box">
                    <Icon name={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="purpose section" id="vision">
          <div className="container">
            <SectionHeading
              align="center"
              eyebrow="Nuestro propósito"
              title="Transformar la forma de acompañar la nutrición."
              text="Queremos que cada paciente pueda sentirse acompañado durante su tratamiento y que cada profesional cuente con mejores herramientas para estar presente más allá de la consulta."
            />
            <div className="purpose-grid">
              <article className="purpose-card purpose-card--vision">
                <div className="purpose-card__top">
                  <span className="purpose-icon">
                    <Icon name="spark" size={24} />
                  </span>
                  <span className="purpose-index">01</span>
                </div>
                <p className="eyebrow">Visión</p>
                <h3>Nutrición más accesible y confiable</h3>
                <p>
                  Convertirnos en la plataforma de acompañamiento nutricional
                  más confiable y accesible para pacientes y profesionales,
                  ayudando a mejorar la adherencia a los tratamientos y
                  potenciando el impacto de la nutrición en la calidad de vida.
                </p>
              </article>
              <article className="purpose-card purpose-card--mission">
                <div className="purpose-card__top">
                  <span className="purpose-icon">
                    <Icon name="heart" size={24} />
                  </span>
                  <span className="purpose-index">02</span>
                </div>
                <p className="eyebrow">Misión</p>
                <h3>Ampliar la capacidad de acompañar</h3>
                <p>
                  Empoderar a los profesionales de la salud con herramientas
                  inteligentes para el seguimiento y la prevención, brindando a
                  los pacientes apoyo continuo entre consultas que favorezca
                  hábitos sostenibles y mejores resultados.
                </p>
              </article>
              <article className="purpose-card purpose-card--objective">
                <div className="objective-copy">
                  <div className="purpose-card__top">
                    <span className="purpose-icon">
                      <Icon name="chart" size={24} />
                    </span>
                    <span className="purpose-index">03</span>
                  </div>
                  <p className="eyebrow">Objetivo</p>
                  <h3>Más visibilidad, control y continuidad</h3>
                  <p>
                    Desarrollar una plataforma asistida por inteligencia
                    artificial que ayude a mejorar la adherencia, reducir el
                    abandono y dar al profesional mayor visibilidad sobre la
                    evolución de sus pacientes, sin incrementar
                    significativamente su carga operativa.
                  </p>
                </div>
                <div className="objective-list">
                  <p>Objetivos específicos</p>
                  <ul>
                    {specificGoals.map((goal) => (
                      <li key={goal}>
                        <span>
                          <Icon name="check" size={14} />
                        </span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="how section" id="como-funciona">
          <div className="container">
            <SectionHeading
              align="center"
              eyebrow="Cómo funciona"
              title="Un circuito simple, con el profesional al mando"
              text="MyNutriCoach busca ordenar el seguimiento sin reemplazar el vínculo ni las decisiones clínicas."
            />
            <div className="steps">
              <div className="step-card">
                <span className="step-number">1</span>
                <span className="step-icon">
                  <Icon name="clipboard" size={26} />
                </span>
                <p>Profesional</p>
                <h3>Define el plan</h3>
                <span>
                  Establece objetivos y lineamientos según el criterio
                  profesional.
                </span>
              </div>
              <div className="step-connector">
                <span />
                <Icon name="arrow" size={19} />
                <span />
              </div>
              <div className="step-card step-card--featured">
                <span className="step-number">2</span>
                <span className="step-icon">
                  <Icon name="message" size={26} />
                </span>
                <p>Paciente</p>
                <h3>Interactúa por WhatsApp</h3>
                <span>
                  Registra situaciones cotidianas y recibe orientación dentro
                  del plan definido.
                </span>
                <small>Canal familiar y accesible</small>
              </div>
              <div className="step-connector">
                <span />
                <Icon name="arrow" size={19} />
                <span />
              </div>
              <div className="step-card">
                <span className="step-number">3</span>
                <span className="step-icon">
                  <Icon name="chart" size={26} />
                </span>
                <p>Seguimiento</p>
                <h3>Consulta registros</h3>
                <span>
                  El profesional revisa información organizada e indicadores del
                  proceso.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="solution section" id="solucion">
          <div className="container">
            <div className="solution-heading">
              <SectionHeading
                eyebrow="La solución"
                title="Acompañamiento inteligente que potencia. Criterio profesional que decide."
              />
            </div>
            <div className="solution-grid">
              <article className="solution-card solution-card--product">
                <span className="solution-card__icon">
                  <Icon name="message" size={26} />
                </span>
                <p className="eyebrow">Cómo ayuda</p>
                <h3>Seguimiento continuo y asistencia inteligente</h3>
                <p>
                  La plataforma busca acompañar al paciente entre consultas,
                  ordenar sus registros y detectar señales que puedan requerir
                  la atención del profesional.
                </p>
                <ul>
                  <li>
                    <Icon name="check" size={16} />
                    Alertas tempranas ante posibles desvíos o riesgo de
                    abandono.
                  </li>
                  <li>
                    <Icon name="check" size={16} />
                    Información organizada para una revisión profesional más
                    clara.
                  </li>
                  <li>
                    <Icon name="check" size={16} />
                    Propuestas de menús basadas en objetivos y macros definidos
                    por el nutricionista.
                  </li>
                </ul>
              </article>
              <article className="solution-card solution-card--value">
                <span className="solution-card__icon">
                  <Icon name="people" size={26} />
                </span>
                <p className="eyebrow">Propuesta de valor</p>
                <h3>Dos experiencias, un mismo propósito.</h3>
                <div className="value-audience">
                  <span>
                    <Icon name="clipboard" size={18} />
                  </span>
                  <p>
                    <strong>
                      Para profesionales
                      <small>Más visibilidad, menos carga operativa.</small>
                    </strong>
                    Seguimiento más claro de la evolución del paciente,
                    automatización de tareas repetitivas y detección temprana de
                    situaciones que requieren atención.
                  </p>
                </div>
                <div className="value-audience">
                  <span>
                    <Icon name="user" size={18} />
                  </span>
                  <p>
                    <strong>
                      Para pacientes
                      <small>Más acompañamiento entre consultas.</small>
                    </strong>
                    Apoyo cotidiano para sostener hábitos, resolver dudas y
                    favorecer la continuidad del tratamiento.
                  </p>
                </div>
              </article>
            </div>
            <blockquote className="guiding-principle">
              <span className="guiding-principle__icon">
                <Icon name="shield" size={25} />
              </span>
              <div>
                <p>Concepto rector</p>
                <strong>
                  “No reemplazar al nutricionista, sino ampliar su capacidad de
                  acompañamiento.”
                </strong>
              </div>
            </blockquote>
          </div>
        </section>

        <section className="audience section" id="profesionales">
          <div className="container">
            <div className="split-heading">
              <SectionHeading
                eyebrow="Para quién"
                title="Para quienes eligieron cuidar a través de la nutrición."
              />
              <p>
                MyNutriCoach acompaña a profesionales y equipos que buscan
                llevar su vocación más allá de la consulta, con herramientas
                que les permitan estar más cerca de sus pacientes.
              </p>
            </div>
            <div className="audience-grid">
              {audiences.map((item) => (
                <article className="audience-card" key={item.title}>
                  <div className="audience-top">
                    <span className="large-icon">
                      <Icon name={item.icon} size={26} />
                    </span>
                    <small>{item.label}</small>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#contacto">
                    Conversar sobre mi caso <Icon name="arrow" size={16} />
                  </a>
                </article>
              ))}
            </div>
            <div className="benefit-bar">
              <div>
                <span>
                  <Icon name="calendar" size={20} />
                </span>
                <p>
                  <strong>Continuidad</strong>Acompañar el proceso entre
                  consultas.
                </p>
              </div>
              <div>
                <span>
                  <Icon name="data" size={20} />
                </span>
                <p>
                  <strong>Información organizada</strong>Reunir registros
                  relevantes en un solo lugar.
                </p>
              </div>
              <div>
                <span>
                  <Icon name="shield" size={20} />
                </span>
                <p>
                  <strong>Supervisión</strong>Mantener el criterio profesional
                  como guía.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="principles section">
          <div className="container principles-grid">
            <div>
              <SectionHeading
                eyebrow="Nuestros principios"
                title="Tecnología al servicio del cuidado"
                text="Diseñamos MyNutriCoach con una premisa simple: la tecnología debe potenciar el acompañamiento, respetando siempre el criterio profesional y poniendo a las personas en el centro."
              />
              <div className="principle-list">
                <div>
                  <span>
                    <Icon name="spark" />
                  </span>
                  <p>
                    <strong>Simplicidad</strong>Una experiencia clara, cercana y
                    fácil de incorporar.
                  </p>
                </div>
                <div>
                  <span>
                    <Icon name="user" />
                  </span>
                  <p>
                    <strong>Criterio profesional</strong>La tecnología acompaña
                    y potencia. El profesional decide.
                  </p>
                </div>
                <div>
                  <span>
                    <Icon name="shield" />
                  </span>
                  <p>
                    <strong>Confianza y privacidad</strong>Diseñamos cada
                    interacción poniendo el cuidado de la información del
                    paciente en el centro.
                  </p>
                </div>
              </div>
            </div>
            <aside className="boundary-card">
              <span className="boundary-icon">
                <Icon name="shield" size={30} />
              </span>
              <p className="eyebrow">Alcance responsable</p>
              <ul>
                <li>
                  <Icon name="check" size={17} /> No reemplazar las decisiones
                  clínicas.
                </li>
                <li>
                  <Icon name="check" size={17} /> No diagnosticar ni prescribir
                  tratamientos.
                </li>
                <li>
                  <Icon name="check" size={17} /> No sustituir la atención
                  profesional ni los canales de urgencia.
                </li>
              </ul>
              <p className="boundary-note">
                Ante una urgencia, deben utilizarse los canales de atención
                correspondientes.
              </p>
            </aside>
          </div>
        </section>

        <section className="about section" id="nosotros">
          <div className="container about-grid">
            <div className="about-visual" aria-hidden="true">
              <div className="founder founder--one">
                <span>GR</span>
                <div>
                  <strong>Giselle Rastenis</strong>
                  <small>Cofundadora</small>
                </div>
              </div>
              <div className="founder founder--two">
                <span>NO</span>
                <div>
                  <strong>Nicolás Oriti Tizio</strong>
                  <small>Cofundador</small>
                </div>
              </div>
              <div className="origin-badge">
                <span>AR</span>
                <p>
                  <strong>Hecho en Argentina</strong>Con una mirada local
                </p>
              </div>
            </div>
            <div className="about-copy">
              <SectionHeading
                eyebrow="Nuestra historia"
                title="Dos caminos, una experiencia compartida y la búsqueda de una solución."
              />
              <p>
                MyNutriCoach nació a partir de una experiencia personal
                compartida que nos permitió conocer de cerca uno de los grandes
                desafíos de un proceso nutricional: sostenerlo en el tiempo.
              </p>
              <p>
                Como pacientes, nos hicimos una pregunta simple: ¿qué podría
                ayudarnos a mantenernos en el tratamiento y no abandonarlo?
              </p>
              <p>
                La búsqueda de esa respuesta fue el punto de partida de
                MyNutriCoach.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="container contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">Conversemos</p>
              <h2>¿Te interesa conocer el proyecto?</h2>
              <p>
                Buscamos conversar con profesionales y centros de salud para
                aprender, validar la propuesta y construir una solución útil.
              </p>
              <div className="contact-detail">
                <span>
                  <Icon name="message" />
                </span>
                <p>
                  <strong>Una conversación exploratoria</strong>Sin compromiso y
                  adaptada a tu contexto.
                </p>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              {sent ? (
                <div className="success-message" role="status">
                  <span>
                    <Icon name="check" size={28} />
                  </span>
                  <h3>Gracias por tu interés</h3>
                  <p>
                    Recibimos tu consulta. Nos pondremos en contacto para
                    coordinar una conversación.
                  </p>
                  <button
                    className="text-button"
                    onClick={() => setSent(false)}
                    type="button"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-row">
                    <label>
                      Nombre y apellido
                      <input
                        name="name"
                        placeholder="Tu nombre"
                        required
                        type="text"
                      />
                    </label>
                    <label>
                      Correo electrónico
                      <input
                        name="email"
                        placeholder="nombre@ejemplo.com"
                        required
                        type="email"
                      />
                    </label>
                  </div>
                  <label>
                    Soy
                    <select defaultValue="" name="profile" required>
                      <option disabled value="">
                        Seleccioná una opción
                      </option>
                      <option>Profesional de la nutrición</option>
                      <option>Parte de un equipo interdisciplinario</option>
                      <option>Representante de un centro de salud</option>
                      <option>Otra persona interesada</option>
                    </select>
                  </label>
                  <label>
                    ¿Qué te gustaría conversar?
                    <textarea
                      name="message"
                      placeholder="Contanos brevemente sobre tu interés"
                      rows={4}
                    />
                  </label>
                  <button
                    className="button button--light form-submit"
                    type="submit"
                  >
                    Solicitar una demo <Icon name="arrow" size={18} />
                  </button>
                  <small>
                    Al enviar aceptás que te contactemos para responder esta
                    consulta.
                  </small>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

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
            <a href="#propuesta">Propuesta</a>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#profesionales">Profesionales</a>
          </div>
          <div className="footer-links">
            <p>Proyecto</p>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 MyNutriCoach. Proyecto argentino.</span>
          <span>La IA no reemplaza el criterio profesional.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
