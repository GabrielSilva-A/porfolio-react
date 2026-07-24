const portfolioData = {
  name: 'Gabriel Silva',
  title: 'Desarrollador Full Stack (Junior)',
  email: 'ags0014@gmail.com',
  location: 'Rojas, Argentina',
  about:
    'Soy estudiante en Programación, mi mayor fortaleza es mi capacidad de aprendizaje y la adaptabilidad. Me tomo con entusiasmo cada nuevo desafío porque es la oportunidad perfecta para aprender algo nuevo.',
  skills: [
    { name: 'React', level: 'Intermedio', category: 'Frontend', icon: 'fab fa-react' },
    { name: 'Vite', level: 'Intermedio', category: 'Frontend', icon: 'fas fa-bolt' },
    { name: 'HTML/CSS', level: 'Intermedio', category: 'Frontend', icon: 'fab fa-html5' },
    { name: 'Node.js', level: 'Intermedio', category: 'Backend', icon: 'fab fa-node-js' },
    { name: 'Express', level: 'Intermedio', category: 'Backend', icon: 'fas fa-server' },
    { name: 'JWT', level: 'Intermedio', category: 'Backend', icon: 'fas fa-key' },
    { name: 'PostgreSQL', level: 'Intermedio', category: 'Base de Datos', icon: 'fas fa-database' },
    { name: 'Render', level: 'Intermedio', category: 'Deploy', icon: 'fas fa-cloud' },
    { name: 'Git', level: 'Intermedio', category: 'Herramientas', icon: 'fab fa-git-alt' },
    { name: 'Nodemailer', level: 'Básico', category: 'Herramientas', icon: 'fas fa-envelope' }
  ],
  projects: [
    {
      title: 'Portfolio Personal',
      description: 'Portfolio full stack con React y Express para mostrar proyectos y recibir mensajes de contacto.',
      technologies: ['React', 'Vite', 'Node.js', 'Express', 'Nodemailer', 'Render'],
      github_url: 'https://porfolio-react-zh4v.onrender.com/',
      demo_url: '#',
      image: 'project1.jpg'
    },
    {
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación full stack para gestionar tareas por usuario con autenticación JWT y persistencia en PostgreSQL, desplegada en Render.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Render'],
      github_url: 'https://gestion-de-tareas-pc6r.onrender.com',
      demo_url: '#',
      image: 'project2.jpg'
    }
  ],
  experience: [
    {
      position: 'Estudiante Autónomo',
      company: 'FreeCodeCamp',
      period: '2023 - 2024',
      description: 'Certificación en HTML y CSS'
    },
    {
      position: 'Estudiante de la provincia de Bs.As',
      company: 'Codo a Codo 4.0',
      period: '2024 - 2024',
      description: 'Python'
    }
  ],
  education: [
    {
      degree: 'Python Inicial',
      institution: 'Codo a Codo 4.0',
      period: '2024 - 2025'
    },
    {
      degree: 'Tecnico en Programación',
      institution: 'Techlabs',
      period: '2025 - 2026'
    }
  ],
  social_links: {
    github: 'https://github.com/GabrielSilva-A',
    linkedin: 'https://www.linkedin.com/in/gabriel-silva-75341a219/'
  }
};

export default portfolioData;
