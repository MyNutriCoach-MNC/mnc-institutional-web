import PreviewNotice from "./components/PreviewNotice"
import { SiteFooter, SiteHeader } from "./components/site"

const CONTACT_EMAIL = "admin@mynutricoach.com.ar"
const LAST_UPDATED = "18 de noviembre de 2026"

function PrivacyPage() {
  return (
    <div className="site-shell">
      <SiteHeader base="/" />

      <main className="legal section">
        <article className="container legal-content">
          <header className="legal-header">
            <p className="eyebrow">Legal</p>
            <h1>Política de privacidad</h1>
            <p className="legal-updated">Última actualización: {LAST_UPDATED}</p>
            <p className="legal-lead">
              MyNutriCoach es una plataforma de acompañamiento nutricional
              asistida por inteligencia artificial y supervisada por un
              profesional de la nutrición. Esta política explica qué datos
              personales tratamos, para qué los usamos, con quién los
              compartimos y cómo podés ejercer tus derechos, conforme a la Ley
              N.º 25.326 de Protección de los Datos Personales de la República
              Argentina.
            </p>
          </header>

          <section>
            <h2>1. Responsables</h2>
            <p>
              Los responsables del tratamiento son Giselle Rastenis y Nicolás
              Oriti Tizio, titulares de MyNutriCoach. Podés escribirnos a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> por
              cualquier consulta sobre tus datos.
            </p>
          </section>

          <section>
            <h2>2. Qué datos tratamos</h2>
            <p>
              <strong>Profesionales que usan el panel:</strong> email, nombre
              visible y contraseña (guardada cifrada mediante hash).
            </p>
            <p>
              <strong>Pacientes:</strong>
            </p>
            <ul>
              <li>
                Identificación y contacto: nombre, apellido, email, teléfono,
                fecha de nacimiento y género, cargados por tu profesional.
              </li>
              <li>
                Datos de salud que tu profesional registra para el seguimiento:
                motivo de consulta, objetivos, antecedentes, medicación,
                alergias, restricciones, mediciones antropométricas y
                composición corporal, entre otros.
              </li>
              <li>Tu plan nutricional y sus archivos adjuntos.</li>
              <li>
                Lo que registrás o conversás con el asistente: comidas, agua,
                actividad física y mensajes.
              </li>
              <li>
                El identificador del chat con el que te vinculás. En WhatsApp es
                tu número de teléfono.
              </li>
              <li>
                Información derivada del seguimiento: indicadores de adherencia,
                alertas para tu profesional y reportes.
              </li>
            </ul>
            <p>
              Los datos de salud son datos sensibles. Solo los tratamos con tu
              consentimiento y para la finalidad de tu acompañamiento
              nutricional.
            </p>
          </section>

          <section>
            <h2>3. Para qué los usamos</h2>
            <ul>
              <li>
                Brindarte acompañamiento entre consultas: registrar hábitos,
                responder dudas sobre tu plan y recordarte tus objetivos.
              </li>
              <li>
                Darle a tu profesional la información de tu evolución,
                adherencia y alertas para que pueda supervisarte.
              </li>
              <li>
                Detectar situaciones que requieran la atención de tu profesional
                y avisarle.
              </li>
              <li>Mantener la seguridad y el funcionamiento de la plataforma.</li>
            </ul>
            <p>No vendemos tus datos ni los usamos con fines publicitarios.</p>
          </section>

          <section>
            <h2>4. Inteligencia artificial y supervisión profesional</h2>
            <p>
              Las respuestas del asistente las genera un modelo de inteligencia
              artificial. El asistente no diagnostica, no prescribe
              medicamentos ni modifica tu plan: las decisiones clínicas son
              siempre de tu profesional. Para responderte, el modelo recibe tu
              nombre, tu plan, tu conversación reciente y los datos de tu ficha
              necesarios para el acompañamiento: objetivos, antecedentes,
              medicación, alergias, restricciones y actividad física, entre
              otros. No recibe tu email, tu teléfono ni tu fecha de nacimiento.
            </p>
          </section>

          <section>
            <h2>5. Con quién los compartimos</h2>
            <p>
              Solo compartimos datos con los proveedores necesarios para prestar
              el servicio:
            </p>
            <ul>
              <li>
                <strong>Alojamiento:</strong> servidor contratado en DonWeb
                (Argentina), donde se guardan la base de datos y los archivos.
              </li>
              <li>
                <strong>Inteligencia artificial:</strong> Anthropic (Estados
                Unidos), que procesa la información indicada en el punto 4 para
                generar las respuestas.
              </li>
              <li>
                <strong>Mensajería:</strong> WhatsApp (Meta Platforms) o
                Telegram, según el canal que uses, que transmiten los mensajes
                entre vos y el asistente.
              </li>
            </ul>
            <p>
              Tu profesional accede a los datos de sus propios pacientes. Ningún
              profesional puede ver los datos de pacientes de otro.
            </p>
          </section>

          <section>
            <h2>6. Transferencia internacional</h2>
            <p>
              Algunos proveedores procesan datos fuera de la Argentina, en
              particular en Estados Unidos. En esos casos exigimos que apliquen
              medidas de seguridad y confidencialidad adecuadas para proteger tu
              información.
            </p>
          </section>

          <section>
            <h2>7. Cuánto tiempo los conservamos</h2>
            <ul>
              <li>Las conversaciones con el asistente se eliminan a los 30 días.</li>
              <li>
                El resto de los datos se conserva mientras dure tu seguimiento
                con el profesional y luego se elimina o anonimiza, salvo que la
                ley exija conservarlos por más tiempo.
              </li>
            </ul>
          </section>

          <section>
            <h2>8. Seguridad</h2>
            <p>
              Usamos conexiones cifradas (HTTPS), contraseñas protegidas con
              hash, accesos restringidos por rol y separación de la información
              entre profesionales. Ningún sistema es infalible, pero trabajamos
              para prevenir accesos no autorizados, pérdidas o alteraciones.
            </p>
          </section>

          <section>
            <h2>9. Tus derechos</h2>
            <p>
              Podés solicitar el acceso, la rectificación, la actualización o la
              supresión de tus datos, y retirar tu consentimiento en cualquier
              momento, escribiendo al email del punto 1. Respondemos los pedidos
              de acceso dentro de los 10 días corridos y los de rectificación o
              supresión dentro de los 5 días hábiles, según la Ley N.º 25.326.
              Retirar el consentimiento implica dejar de usar el asistente.
            </p>
            <p className="legal-notice">
              El titular de los datos personales tiene la facultad de ejercer el
              derecho de acceso a los mismos en forma gratuita a intervalos no
              inferiores a seis meses, salvo que se acredite un interés legítimo
              al efecto, conforme lo establecido en el artículo 14, inciso 3 de
              la Ley N.º 25.326. La Agencia de Acceso a la Información Pública,
              en su carácter de Órgano de Control de la Ley N.º 25.326, tiene la
              atribución de atender las denuncias y reclamos que interpongan
              quienes resulten afectados en sus derechos por incumplimiento de
              las normas vigentes en materia de protección de datos personales.
            </p>
          </section>

          <section>
            <h2>10. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política. Publicaremos la nueva versión en
              esta página con su fecha de actualización y, si el cambio es
              relevante, te lo informaremos por el canal que usás.
            </p>
          </section>
        </article>
      </main>

      <SiteFooter base="/" />
      <PreviewNotice />
    </div>
  )
}

export default PrivacyPage
