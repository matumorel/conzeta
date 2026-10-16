import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChartNoAxesCombined,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Workflow,
} from 'lucide-react'
import styles from './functional-analysis-page.module.css'

const focusAreas = [
  {
    number: '01',
    title: 'Estructura y roles',
    description: 'Quién hace qué, quién decide y dónde se superponen o se diluyen las responsabilidades.',
  },
  {
    number: '02',
    title: 'Procesos y circuitos',
    description: 'Cómo fluye el trabajo de principio a fin y dónde se demora, se duplica o depende de una sola persona.',
  },
  {
    number: '03',
    title: 'Información e indicadores',
    description: 'Qué datos existen, cuáles faltan y cuáles resultan realmente útiles para decidir.',
  },
  {
    number: '04',
    title: 'Finanzas y costos',
    description: 'Rentabilidad real, estructura de costos y flujo de fondos, vinculados con la operación.',
  },
  {
    number: '05',
    title: 'Herramientas y sistemas',
    description: 'Qué se utiliza, qué se subutiliza y qué conviene incorporar o automatizar antes de invertir.',
  },
  {
    number: '06',
    title: 'Circuito comercial',
    description: 'Cómo llega un cliente, cómo se lo atiende y cómo una consulta se convierte en venta.',
  },
]

const methodSteps = [
  {
    title: 'Relevamiento',
    description: 'Entrevistas con la dirección y el equipo, observación de la operación y revisión de la información disponible.',
  },
  {
    title: 'Mapeo',
    description: 'Representación de cómo funciona hoy la empresa: procesos, roles, circuitos y números, con evidencia.',
  },
  {
    title: 'Priorización',
    description: 'Ordenamiento de las mejoras según impacto y esfuerzo, para comenzar por las de mayor rendimiento.',
  },
  {
    title: 'Acompañamiento',
    description: 'Traducción del plan en responsables, herramientas e indicadores, con seguimiento de su implementación.',
  },
]

const deliverables = [
  ['Radiografía de la empresa', 'Diagnóstico por área con hallazgos documentados.'],
  ['Mapa de procesos', 'Situación actual y situación propuesta.'],
  ['Plan de mejoras priorizado', 'Qué hacer primero, quién lo lleva adelante y cómo se mide.'],
  ['Tablero de indicadores', 'Los números relevantes, reunidos en un solo lugar.'],
  ['Requerimientos funcionales', 'Si se necesita un sistema, una definición precisa de qué solicitar.'],
]

const outcomes = [
  ['Menor dependencia de personas clave', 'Procesos claros y documentados.'],
  ['Decisiones basadas en datos', 'Indicadores simples en lugar de intuición.'],
  ['Menos errores y retrabajo', 'Se eliminan tareas duplicadas y pasos innecesarios.'],
  ['Inversión tecnológica eficiente', 'Primero se define la necesidad; después, la herramienta.'],
  ['Tiempo para dirigir', 'La dirección deja de resolver urgencias y vuelve a pensar el negocio.'],
]

const signals = [
  'La empresa creció, pero la forma de trabajar sigue siendo la de sus comienzos.',
  'Las ventas aumentan, pero la rentabilidad no acompaña y no está claro por qué.',
  'Los mismos problemas y las mismas consultas se repiten cada semana.',
  'Cada área trabaja con su propia planilla y nadie tiene la visión completa.',
  'Se evalúa invertir en un sistema sin una definición clara de qué se necesita.',
  'La ausencia de una persona clave durante una semana afecta a toda la operación.',
]

const questions = [
  {
    question: '¿El análisis es adecuado para una pyme?',
    answer:
      'Sí. Las pymes son las que más lo aprovechan, porque cada hora y cada recurso tienen un peso significativo. El alcance se ajusta al tamaño y a la complejidad de cada organización.',
  },
  {
    question: '¿Interrumpe la operación diaria?',
    answer:
      'Lo mínimo indispensable. Las entrevistas se coordinan con anticipación y la mayor parte del trabajo de análisis se realiza fuera de la operación.',
  },
  {
    question: '¿Es necesario contar con un sistema de gestión?',
    answer:
      'No. En muchos casos, el análisis sirve precisamente para definir si hace falta un sistema y cuál. Se trabaja con lo que la empresa ya utiliza, incluidas las planillas.',
  },
  {
    question: '¿Cuánto tiempo demanda?',
    answer:
      'Depende del tamaño de la empresa y de las áreas incluidas. En la primera reunión se define el alcance y se entrega un cronograma concreto.',
  },
  {
    question: '¿Cómo se resguarda la información de la empresa?',
    answer:
      'Toda la información es confidencial. Se utiliza exclusivamente para el análisis y no se comparte con terceros.',
  },
]

function CheckList({ items, arrow = false }: { items: string[][]; arrow?: boolean }) {
  return (
    <ul className={styles.checkList}>
      {items.map(([title, detail]) => (
        <li key={title}>
          {arrow ? <ArrowRight className={styles.arrowIcon} aria-hidden="true" /> : <Check aria-hidden="true" />}
          <div>
            {title}
            <span>{detail}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function FunctionalAnalysisPage() {
  return (
    <main id="analisis" className={styles.main}>
      <section className={`${styles.section} ${styles.first}`}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>05 / Análisis funcional y de gestión</p>
              <h1>
                Lo que pasa <span className={styles.mint}>adentro</span> explica lo que se ve{' '}
                <span className={styles.lavender}>afuera</span>.
              </h1>
              <p className={styles.lead}>
                Un análisis de la organización por dentro: procesos, roles, información y números.
                Identificamos dónde se pierden tiempo y recursos, y lo traducimos en mejoras
                concretas que el equipo pueda sostener.
              </p>
              <div className={styles.actions}>
                <a className={`${styles.button} ${styles.primaryButton}`} href="#contacto">
                  Solicitar una reunión
                </a>
                <a className={`${styles.button} ${styles.outlineButton}`} href="#metodo">
                  Conocer el método <ArrowDownRight className={styles.inlineIcon} aria-hidden="true" />
                </a>
              </div>
            </div>
            <aside className={styles.profileCard} aria-label="Analista a cargo">
              <div className={styles.profileTop}>
                <div className={styles.avatar} aria-hidden="true">MM</div>
                <div>
                  <p className={styles.profileName}>Mateo Manuel Morello</p>
                  <p className={styles.profileRole}>Analista funcional y de gestión</p>
                </div>
              </div>
              <ul className={styles.credentials}>
                {[
                  'Licenciado en Finanzas',
                  'Analista técnico y funcional',
                  'Diplomado en prompting de inteligencia artificial',
                  'Socio fundador de ConZeta Consultora',
                ].map((credential) => (
                  <li key={credential}><Check aria-hidden="true" />{credential}</li>
                ))}
              </ul>
            </aside>
          </div>
          <div className={styles.tension}>
            <div>
              <h3>Todo pasa por las mismas personas.</h3>
              <p>Cuando alguien falta, la operación se detiene. El conocimiento está en las personas, no en los procesos.</p>
            </div>
            <div>
              <h3>Hay datos. Faltan respuestas.</h3>
              <p>Planillas, sistemas e informes que nadie cruza. Se decide por intuición aunque la información exista.</p>
            </div>
            <div>
              <h3>La herramienta está. El uso, no.</h3>
              <p>Se incorporó un sistema para ordenar, pero el trabajo real sigue ocurriendo por fuera de él.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Enfoque</p>
          <div className={styles.split}>
            <div>
              <h2>Un puente entre el <span className={styles.violet}>negocio</span> y su <span className={styles.mint}>operación</span>.</h2>
              <blockquote className={styles.quote}>
                “Las empresas rara vez fallan por falta de esfuerzo. Fallan cuando ese esfuerzo avanza en direcciones distintas.”
                <cite>Mateo Manuel Morello</cite>
              </blockquote>
            </div>
            <div className={styles.bodyCopy}>
              <p>El área está a cargo de <strong>Mateo Manuel Morello</strong>, licenciado en Finanzas, analista técnico y funcional, y socio fundador de ConZeta.</p>
              <p>El trabajo comienza por escuchar, observar y medir. Las recomendaciones llegan después, cada una con su fundamento, su prioridad y su responsable.</p>
              <p>El análisis combina tres perspectivas: <strong>los números, los procesos y la tecnología.</strong></p>
            </div>
          </div>
          <div className={`${styles.cardGrid} ${styles.threeColumns}`}>
            <article className={styles.infoCard}>
              <ChartNoAxesCombined className={styles.cardIcon} aria-hidden="true" />
              <span className={styles.tag}>Finanzas</span>
              <h3>Lectura de los números</h3>
              <p>Costos, márgenes, flujo de fondos y rentabilidad por producto o cliente, para saber dónde mirar cuando algo no cierra.</p>
            </article>
            <article className={styles.infoCard}>
              <Workflow className={styles.cardIcon} aria-hidden="true" />
              <span className={styles.tag}>Análisis funcional</span>
              <h3>Comprensión de los procesos</h3>
              <p>Mapeo de circuitos, roles y requerimientos para encontrar el origen operativo de lo que luego se refleja en los resultados.</p>
            </article>
            <article className={styles.infoCard}>
              <Sparkles className={styles.cardIcon} aria-hidden="true" />
              <span className={styles.tag}>IA aplicada</span>
              <h3>Criterio para automatizar</h3>
              <p>Identificación de tareas repetitivas que la tecnología y la inteligencia artificial pueden resolver sin sumar complejidad.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Alcance del análisis</p>
          <h2>Una lectura <span className={styles.mint}>completa</span> de la organización.</h2>
          <p className={styles.lead}>Cada área se analiza en relación con las demás. Un problema financiero puede originarse en el circuito comercial; una demora operativa, en la forma en que circula la información.</p>
          <div className={`${styles.cardGrid} ${styles.threeColumns} ${styles.twoRows}`}>
            {focusAreas.map((area) => (
              <article className={styles.infoCard} key={area.number}>
                <span className={styles.tag}>{area.number}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="metodo">
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Método de trabajo</p>
          <h2>Primero comprender. <span className={styles.lavender}>Después mejorar.</span></h2>
          <ol className={styles.steps}>
            {methodSteps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Resultados</p>
          <h2>Insumos para decidir. <span className={styles.mint}>Arquitectura para avanzar.</span></h2>
          <div className={styles.twoColumns}>
            <article className={styles.panel}>
              <h3>Entregables</h3>
              <CheckList items={deliverables} />
            </article>
            <article className={styles.panel}>
              <h3>Qué cambia en la organización</h3>
              <CheckList items={outcomes} arrow />
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.band}`}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Señales a considerar</p>
          <h2>Cuándo es el momento de un análisis.</h2>
          <ul className={styles.signals}>
            {signals.map((signal) => <li key={signal}>{signal}</li>)}
          </ul>
          <p className={styles.note}>Si dos o más de estas situaciones le resultan familiares, <strong>conviene conversar.</strong></p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Modalidades</p>
          <h2>Dos formas de <span className={styles.mint}>trabajar</span>.</h2>
          <div className={styles.twoColumns}>
            <article className={`${styles.panel} ${styles.mode}`}>
              <h3>Análisis integral</h3>
              <p>Para obtener una lectura completa de la empresa y un plan claro, listo para ejecutar con el equipo interno.</p>
              <ul>
                <li>Relevamiento de las seis áreas</li>
                <li>Radiografía y mapa de procesos</li>
                <li>Plan de mejoras priorizado</li>
                <li>Presentación de resultados a la dirección</li>
              </ul>
            </article>
            <article className={`${styles.panel} ${styles.mode} ${styles.featured}`}>
              <span className={styles.badge}>Recomendado</span>
              <h3>Análisis integral con seguimiento</h3>
              <p>Para que el plan no quede en un informe: se acompaña la implementación y se miden los avances.</p>
              <ul>
                <li>Todo lo incluido en el análisis integral</li>
                <li>Reuniones periódicas de seguimiento</li>
                <li>Tablero de indicadores en funcionamiento</li>
                <li>Ajustes del plan según los resultados</li>
              </ul>
            </article>
          </div>
          <p className={styles.specialists}><strong>Especialistas cuando hacen falta.</strong> Si el diagnóstico lo requiere, se incorporan profesionales del equipo de ConZeta en comunicación, diseño, comercio internacional o desarrollo de equipos. Solo cuando aportan valor, y con un propósito explícito.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>Preguntas frecuentes</p>
          <h2>Consultas habituales.</h2>
          <div className={styles.faq}>
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="contacto">
        <div className={`${styles.wrap} ${styles.contact}`}>
          <div>
            <p className={styles.eyebrow}>Contacto</p>
            <h2>Hablemos de su empresa</h2>
            <p className={styles.contactSubtitle}>La primera reunión es para comprender, no para vender.</p>
            <ul className={styles.contactData}>
              <li><Mail aria-hidden="true" /><a href="mailto:mmorello@conzeta.com.ar">mmorello@conzeta.com.ar</a></li>
              <li><Phone aria-hidden="true" /><a href="tel:+5493424484274">+54 9 342 4484274</a></li>
              <li><MapPin aria-hidden="true" /><span>Santa Fe de la Vera Cruz, Santa Fe, Argentina</span></li>
            </ul>
          </div>
          <aside className={styles.contactCard}>
            <h3>Solicitar una primera reunión</h3>
            <p>Cuéntenos cómo funciona hoy su empresa y qué aspectos le preocupan. Le indicaremos con honestidad si un análisis resulta conveniente y por dónde comenzaríamos.</p>
            <div className={styles.actions}>
              <a className={`${styles.button} ${styles.primaryButton}`} href="mailto:mmorello@conzeta.com.ar?subject=Consulta%20sobre%20an%C3%A1lisis%20funcional%20y%20de%20gesti%C3%B3n">Escribir un correo</a>
              <a className={`${styles.button} ${styles.outlineButton}`} href="/#contacto">Formulario de contacto</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
