import './styles/App.css'

type Experience = {
  role: string
  company: string
  timeframe: string
  location: string
  summary: string
}

type Project = {
  name: string
  description: string
  tech: string
  link?: string
}

const experiences: Experience[] = [
  {
    role: 'Administrador contable',
    company: 'RVC Servicios Contables SA',
    timeframe: 'ene. 2022 - dic. 2025 · 4 años',
    location: 'Miraflores, Lima, Perú · Presencial',
    summary:
      'Gestión integral de contabilidad para empresas de Tercera Categoría: declaraciones mensuales/anuales, balances, estados financieros y control de datos en CONCAR.',
  },
]

const projects: Project[] = [
  {
    name: 'ContabIA',
    description:
      'Plataforma integral para gestionar facturas y servicios contables con un backend en TypeScript + Express y frontend en React + Vite.',
    tech: 'TypeScript · Express · React · Vite',
    link: 'https://github.com/dev101101/ContabIA',
  },
  {
    name: 'Contab',
    description:
      'Aplicación de escritorio para gestión contable y análisis de datos, empaquetada con Tauri 2 para rendimiento nativo en Windows.',
    tech: 'TypeScript · React · Tauri · Rust',
    link: 'https://github.com/dev101101/Contab',
  },
]

const skills = {
  stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'React', 'MySQL'],
  soft: ['Situaciones de alta presión', 'Colaboración en investigación'],
}

const analytics = [
  { label: 'Visualizaciones de perfil', value: '2' },
  { label: 'Impresiones de publicaciones', value: '4' },
  { label: 'Apariciones en búsquedas', value: '1' },
]

const contactEmail = 'tu.correo@ejemplo.com'

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="badge">Verificado</div>
        <div className="hero__titles">
          <p className="eyebrow">Portfolio · Diego (Felix) Amachi Flores</p>
          <h1>Desarrollador web</h1>
          <p className="location">Área metropolitana de Lima · UTP Universidad Tecnológica del Perú</p>
        </div>
        <div className="cta-row">
          <a className="cta primary" href={`mailto:${contactEmail}`}>
            Contacto
          </a>
          <a className="cta ghost" href="#projects">Ver proyectos</a>
        </div>
      </header>

      <section className="panel about">
        <div>
          <h2>Acerca de</h2>
          <p>
            Desarrollador de software con más de un año de experiencia en el desarrollo web y dos años
            como auxiliar contable. Experiencia en JavaScript, HTML, CSS y MySQL, con dominio de
            bibliotecas y frameworks modernos.
          </p>
        </div>
        <div className="chips">
          <span className="chip">En busca de empleo</span>
          <span className="chip">Ingeniero de software júnior</span>
          <span className="chip">Developer</span>
        </div>
      </section>

      <section className="panel analytics">
        <h2>Últimos 7 días</h2>
        <div className="analytics__grid">
          {analytics.map((item) => (
            <div key={item.label} className="card metric">
              <span className="metric__value">{item.value}</span>
              <span className="metric__label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel skills">
        <div>
          <h2>Principales aptitudes</h2>
          <div className="pill-row">
            {skills.stack.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3>Habilidades blandas</h3>
          <div className="pill-row">
            {skills.soft.map((item) => (
              <span key={item} className="pill soft">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="panel experience">
        <div className="panel__header">
          <h2>Experiencia</h2>
          <span className="tag">Contabilidad + Tecnología</span>
        </div>
        <div className="list">
          {experiences.map((exp) => (
            <article key={exp.company} className="card">
              <div className="card__header">
                <h3>{exp.role}</h3>
                <span className="muted">{exp.company}</span>
              </div>
              <p className="muted">{exp.timeframe}</p>
              <p className="muted">{exp.location}</p>
              <p>{exp.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel education">
        <h2>Educación</h2>
        <article className="card">
          <div className="card__header">
            <h3>UTP Universidad Tecnológica del Perú</h3>
            <span className="muted">Bachillerato, Ingeniería de software</span>
          </div>
          <p className="muted">ene. 2023 - jul. 2028</p>
          <p>Enfoque en Node.js, Express.js y desarrollo de software moderno.</p>
        </article>
      </section>

      <section className="panel certifications">
        <h2>Certificaciones</h2>
        <article className="card">
          <div className="card__header">
            <h3>OpenBootcamp</h3>
            <span className="muted">SQL y Programación orientada a objetos (POO)</span>
          </div>
          <p className="muted">Licencia · OpenBootcamp</p>
        </article>
      </section>

      <section id="projects" className="panel projects">
        <div className="panel__header">
          <h2>Proyectos</h2>
          <span className="tag highlight">React · TypeScript</span>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.name} className="card project">
              <div className="card__header">
                <h3>{project.name}</h3>
                <span className="muted">{project.tech}</span>
              </div>
              <p>{project.description}</p>
              {project.link && (
                <a className="link" href={project.link} target="_blank" rel="noreferrer">
                  Ver en GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact" id="contact">
        <div>
          <h2>Contacto</h2>
          <p className="muted">158 contactos · 157 seguidores</p>
          <div className="contact__grid">
            <div>
              <p className="muted">Email</p>
              <a className="link" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
            <div>
              <p className="muted">Ubicación</p>
              <p>Lima, Perú</p>
            </div>
          </div>
        </div>
        <a className="cta primary" href={`mailto:${contactEmail}`}>
          Hablemos
        </a>
      </section>
    </div>
  )
}

export default App
