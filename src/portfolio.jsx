import ImgProyect1 from './assets/project1/screenshot.png'
import ImgProyect2 from './assets/project2/screenshot.png'
import ImgProyect3 from './assets/project3/screenshot.png'
import ImgProyect4 from './assets/project4/screenshot.png'
import ImgProyect5 from './assets/project5/screenshot.png'
import ImgProyect6 from './assets/project6/screenshot.png'
import LogoUniversity from './assets/UPTM_logo.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jesusdevfolio.vercel.app/',
  title: 'JP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jesús Peña',
  role: 'Desarrollador Front End',
  description:
    'Entusiasta de todo lo relacionado en tecnologias de información, mi mayor interés es el desarrollo Web donde puedo aportar mis facultades como Ingeniero en Informática para crear y aportar soluciones.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/jesusleo/',
    github: 'https://github.com/jesusleonel10',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Screen Guide',
    screenshot: ImgProyect1,
    description:
      'App Web para buscar información sobre películas y series de TV',
    stack: ['React', 'SASS', 'Material UI'],
    sourceCode: 'https://github.com/jesusleonel10/screen-guide',
    livePreview: 'https://screen-guide.vercel.app/',
  },
  {
    name: 'Todo App',
    screenshot: ImgProyect2,
    description:
      'App para listas de tareas. Permite agregar, editar y borrar tareas.',
    stack: ['React', 'CSS Grid', 'Material UI'],
    sourceCode: 'https://github.com/jesusleonel10/todoapp',
    livePreview: 'https://todoapp-jesusleonel10.vercel.app/',
  },
  {
    name: 'App Calculadora',
    description:
      'App Calculadora con tres temas de color',
    screenshot: ImgProyect3,
    stack: ['HTML', 'CSS Grid', 'JS'],
    sourceCode: 'https://github.com/jesusleonel10/Calculator-App',
    livePreview: 'https://calculator-app-eight-khaki.vercel.app/',
  },
  {
    name: 'E-commerce Product Page',
    description:
      'Pagina E-commerce con funcionalidad de carrito de compra.',
    screenshot: ImgProyect4,
    stack: ['React', 'Styled Components', 'CSS Grid'],
    sourceCode: 'https://github.com/jesusleonel10/ecommerce-product-page',
    livePreview: 'https://ecommerce-product-page-ruby.vercel.app/',
  },
  {
    name: 'Landing Page App Bancaria',
    description:
      'Landing Page de App Bancaria. Totalmente responsiva',
    screenshot: ImgProyect5,
    stack: ['HTML', 'CSS Grid', 'JS'],
    sourceCode: 'https://github.com/jesusleonel10/EasybankPage',
    livePreview: 'https://jesusleonel10.github.io/EasybankPage/',
  },
  {
    name: 'Movie Ticket App',
    description:
      'App Web simula la compra de entradas para el cine.',
    screenshot: ImgProyect6,
    stack: ['React', 'CSS Grid'],
    sourceCode: 'https://github.com/jesusleonel10/movie-ticket',
    livePreview: 'https://movie-ticket-hazel.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'html5',
  'css3',
  'sass',
  'js',
  'react',
  'git',
  'github',
]

const education = {
  name: 'Universidad Politécnica Territorial de Mérida "Klébler Ramírez"',
  logo: LogoUniversity,
  title: 'Ingeniería en Informática',
  date: 'Mérida -  Venezuela | Julio 2015 - Julio 2021',
  text: 'Especialidad en Tecnologías de Información y Comunicación via Web'
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jesusleot10@gmail.com',
}

export { header, about, projects, skills, education, contact }
