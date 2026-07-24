import { useEffect, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { getPortfolioData, submitContactForm } from './services/portfolioApi';

function App() {
  const [data, setData] = useState(null);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    async function loadPortfolio() {
      const json = await getPortfolioData();
      setData(json);
    }

    loadPortfolio();
  }, []);

  if (!data) {
    return <div className="loading">Cargando portfolio...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    const result = await submitContactForm(payload);
    setFormStatus(result);
    e.target.reset();
  };

  return (
    <>
      <nav className="navbar navbar-modern">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand">{data.name}</NavLink>
          <div className="nav-links">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Sobre mí</NavLink>
            <NavLink to="/projects">Proyectos</NavLink>
            <NavLink to="/contact">Contacto</NavLink>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/projects" element={<Projects data={data} />} />
          <Route path="/contact" element={<Contact data={data} onSubmit={handleSubmit} formStatus={formStatus} />} />
        </Routes>
      </main>

      <footer className="footer-modern">
        <div className="container footer-content">
          <p>© 2024 {data.name}. Todos los derechos reservados.</p>
          <div className="social-links">
            {data.social_links.github && <a href={data.social_links.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>}
            {data.social_links.linkedin && <a href={data.social_links.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>}
          </div>
        </div>
      </footer>
    </>
  );
}

function Home({ data }) {
  const categories = [...new Set(data.skills.map((skill) => skill.category))];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badge">Desarrollador Full Stack · Junior</div>
            <h1>{data.name}</h1>
            <h2>{data.title}</h2>
            <p>{data.about}</p>
            <div className="hero-highlights">
              <span><i className="fas fa-code"></i> React + Express</span>
              <span><i className="fas fa-rocket"></i> Aprendizaje continuo</span>
            </div>
            <div className="hero-buttons">
              <NavLink to="/projects" className="btn btn-light">Ver Proyectos</NavLink>
              <NavLink to="/contact" className="btn btn-outline">Contacto</NavLink>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="image-ring">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Foto de perfil"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Stack y herramientas</p>
            <h2 className="section-title">Habilidades Técnicas</h2>
          </div>
          <div className="skills-grid">
            {categories.map((category) => (
              <div className="skill-category" key={category}>
                <h4>{category}</h4>
                {data.skills.filter((skill) => skill.category === category).map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="skill-info">
                      <div className="skill-name">{skill.name}</div>
                      <span className={`level-badge level-${skill.level.toLowerCase().normalize('NFD').replace(/[^a-z]/g, '')}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Selección de trabajos</p>
            <h2 className="section-title">Proyectos Destacados</h2>
          </div>
          <div className="projects-grid">
            {data.projects.slice(0, 3).map((project, index) => (
              <div className="modern-card" key={project.title}>
                <div className="card-gradient-header">
                  <i className={`fas fa-${['laptop-code', 'mobile-alt', 'database'][index % 3]}`}></i>
                </div>
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="buttons-row">
                    <a href={project.github_url} target="_blank" rel="noreferrer" className="btn btn-outline">Código</a>
                    {project.demo_url !== '#' && <a href={project.demo_url} target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function About({ data }) {
  const journey = [
    {
      title: 'FreeCodeCamp - Certificación Web',
      period: 'Marzo 2023 - Diciembre 2023',
      description: 'Certificación completa en desarrollo web con HTML, CSS y JavaScript.',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Curso de Python Inicial',
      period: 'Enero 2024 - Abril 2024',
      description: 'Fundamentos de Python, estructuras de datos y POO.',
      icon: 'fab fa-python'
    },
    {
      title: 'Teclab - Bootcamp Full Stack',
      period: 'Enero 2025 - Actualidad',
      description: 'Aprendizaje de backend con Node.js, APIs REST y React.',
      icon: 'fas fa-rocket'
    }
  ];

  return (
    <section className="container section">
      <div className="section-heading">
        <p className="section-kicker">Trayectoria</p>
        <h2 className="section-title">Mi Curva de Aprendizaje</h2>
      </div>
      <div className="about-grid">
        <div className="modern-card about-card">
          <h3>Mi Historia</h3>
          <p>{data.about}</p>
        </div>
        <div className="modern-card about-card">
          <h3>Información personal</h3>
          <p><strong>Nombre:</strong> {data.name}</p>
          <p><strong>Profesión:</strong> {data.title}</p>
          <p><strong>Ubicación:</strong> {data.location}</p>
        </div>
      </div>

      <div className="learning-timeline">
        {journey.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={item.title}>
            <div className="timeline-content">
              <div className="course-header">
                <div className="course-icon"><i className={item.icon}></i></div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.period}</p>
                </div>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="experience-grid">
        {data.experience.map((exp, index) => (
          <div className="modern-card simple-card timeline-content" key={index}>
            <h3>{exp.position}</h3>
            <h4>{exp.company}</h4>
            <span className="badge">{exp.period}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="education-grid">
        {data.education.map((edu, index) => (
          <div className="modern-card simple-card timeline-content" key={index}>
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <span className="badge success">{edu.period}</span>
          </div>
        ))}
      </div> */}
    </section>
  );
}

function Projects({ data }) {
  return (
    <section className="container section">
      <div className="section-heading">
        <p className="section-kicker">Portafolio</p>
        <h2 className="section-title">Mis Proyectos</h2>
      </div>
      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <div className="modern-card" key={project.title}>
            <div className="card-gradient-header">
              <i className={`fas fa-${['laptop-code', 'mobile-alt', 'database', 'server'][index % 4]}`}></i>
            </div>
            <div className="card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <div className="buttons-row">
                <a href={project.github_url} target="_blank" rel="noreferrer" className="btn btn-outline">Código</a>
                {project.demo_url !== '#' && <a href={project.demo_url} target="_blank" rel="noreferrer" className="btn btn-primary">Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ data, onSubmit, formStatus }) {
  return (
    <section className="container section contact-section">
      <div className="section-heading">
        <p className="section-kicker">Hablemos</p>
        <h2 className="section-title">Contacto</h2>
      </div>
      <div className="contact-grid">
        <div className="modern-card contact-card">
          <h3>Información de contacto</h3>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Ubicación:</strong> {data.location}</p>
          <div className="buttons-row contact-links">
            {data.social_links.linkedin && (
              <a href={data.social_links.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
            )}
            {data.social_links.github && (
              <a href={data.social_links.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            )}
          </div>
        </div>

        <form className="modern-card form-card" onSubmit={onSubmit}>
          <input name="name" placeholder="Nombre completo" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="subject" placeholder="Asunto" />
          <textarea name="message" placeholder="Mensaje" rows="6" required></textarea>
          <button className="btn btn-primary" type="submit">Enviar Mensaje</button>
          {formStatus && <p className="form-status">{formStatus.message}</p>}
        </form>
      </div>
    </section>
  );
}

export default App;
