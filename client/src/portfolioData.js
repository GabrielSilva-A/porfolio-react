const portfolioData = {
  name: 'Gabriel Silva',
  title: 'Desarrollador Full Stack (Junior)',
  email: 'ags0014@gmail.com',
  phone: '2475 - 414146',
  location: 'Rojas, Argentina',
  about:
    'Soy estudiante en Programación, mi mayor fortaleza es mi capacidad de aprendizaje y la adaptabilidad. Me tomo con entusiasmo cada nuevo desafío porque es la oportunidad perfecta para aprender algo nuevo.',
  skills: [
    { name: 'Python', level: 'Intermedio', category: 'Backend', icon: 'fab fa-python' },
    { name: 'Flask', level: 'Intermedio', category: 'Backend', icon: 'fas fa-flask' },
    { name: 'JavaScript', level: 'Intermedio', category: 'Frontend', icon: 'fab fa-js-square' },
    { name: 'HTML/CSS', level: 'Intermedio', category: 'Frontend', icon: 'fab fa-html5' },
    { name: 'Git', level: 'Básico', category: 'Herramientas', icon: 'fab fa-git-alt' },
    { name: 'SQL', level: 'Básico', category: 'Base de Datos', icon: 'fas fa-database' },
    { name: 'Bootstrap', level: 'Básico', category: 'Frontend', icon: 'fab fa-bootstrap' },
    { name: 'Node.js', level: 'Básico', category: 'Backend', icon: 'fab fa-node-js' },
    { name: 'Express', level: 'Avanzado', category: 'Backend', icon: 'fas fa-server' }
  ],
  projects: [
    {
      title: 'Portfolio Personal',
      description: 'Portfolio desarrollado con Flask y Bootstrap',
      technologies: ['Python', 'Flask', 'Bootstrap', 'Git'],
      github_url: 'https://github.com/GabrielSilva-A/Porfolio-flask',
      demo_url: 'https://porfolio-react-zh4v.onrender.com/',
      image: 'project1.jpg'
    },
    {
      title: 'Sistema de Gestión de Tareas',
      description: 'Aplicación full stack para gestionar tareas por usuario con autenticación JWT y persistencia en PostgreSQL, desplegada en Render.',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Render'],
      github_url: 'https://porfolio-react-zh4v.onrender.com/',
      demo_url: '#',
      image: 'project2.jpg'
    },
    {
      title: 'API REST',
      description: 'API REST desarrollada con Flask',
      technologies: ['Python', 'Flask', 'JWT', 'MongoDB'],
      github_url: 'https://github.com/tuusuario/api-rest',
      demo_url: '#',
      image: 'project3.jpg'
    },
    {
      title: 'Login y Register',
      description: 'Interfaz de usuario para login y registro creada con React',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github_url: 'https://github.com/tuusuario/login-register',
      demo_url: '#',
      image: 'project4.jpg'
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
