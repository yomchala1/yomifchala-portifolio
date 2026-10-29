
import { useState } from 'react'
import './App.css'

const translations = {
  en: {
    home: 'Home', about: 'About Me', skills: 'Skills',
    projects: 'Projects', certificates: 'Certificates', education: 'Education', contact: 'Contact',
    greeting: "Hello, I'm",
    role: 'Information Systems Student | Aspiring Full-Stack Developer',
    intro: 'I build modern websites and practical digital solutions. Explore my skills, projects, and learning journey.',
    view: 'View My Projects', hire: 'Contact Me',
    aboutTitle: 'About Me',
    aboutText: 'I am an Information Systems student passionate about web development, databases, networking, and technology. I enjoy learning new skills and building useful projects.',
    skillsTitle: 'My Skills',
    projectsTitle: 'Featured Projects',
    projectsText: 'Projects I am building and learning from.',
    educationTitle: 'Education',
    degree: 'Bachelor’s Degree in Information Systems',
    status: 'Fourth-Year Student',
    contactTitle: 'Let’s Connect',
    contactText: 'Have an opportunity or want to collaborate? Send me a message.',
    email: 'Email Me',
    footer: 'Built with React. Always learning, always improving.'
  },
  om: {
    Home: 'Mana', About: 'Waa’ee Koo', skills: 'Dandeettii',
    projects: 'Pirojektoota', certificates: 'Ragaalee', Education: 'Barnoota', Contact: 'Quunnamtii',
    greeting: 'Akkam, ani',
    role: 'Barataa Information Systems | Full-Stack Developer ta’uuf hojjechaa jira',
    intro: 'Weebsaayitii ammayyaa fi furmaata dijitaalaa nan ijaara. Dandeettii, pirojektootaa fi adeemsa barnoota koo ilaalaa.',
    view: 'Pirojektoota Ilaali', hire: 'Na Quunnami',
    aboutTitle: 'Waa’ee Koo',
    aboutText: 'Ani barataa Information Systems yoo ta’u, web development, database, networking fi teeknooloojii jaalladha. Dandeettii haaraa barachuu fi pirojektoota faayidaa qaban ijaaruu nan jaalladha.',
    skillsTitle: 'Dandeettii Koo',
    projectsTitle: 'Pirojektoota Koo',
    projectsText: 'Pirojektoota ani ijaaruu fi irraa barachaa jiru.',
    educationTitle: 'Barnoota',
    degree: 'Digrii Information Systems',
    status: 'Barataa Waggaa Afraffaa',
    contactTitle: 'Wal Quunnamnaa',
    contactText: 'Carraa hojii qabdaa ykn na waliin hojjechuu barbaaddaa? Ergaa naa ergi.',
    email: 'Email Naaf Ergi',
    footer: 'React fayyadamuun kan ijaarame. Yeroo hunda barachaa fi fooyya’aa jira.'
  },
  am: {
    home: 'الرئيسية', about: 'ስለ እኔ', skills: 'ክህሎቶች',
    projects: 'ፕሮጀክቶች', certificates: 'ሰርተፊኬቶች', education: 'ትምህርት', contact: 'አግኙኝ',
    greeting: 'ሰላም፣ እኔ',
    role: 'የInformation Systems ተማሪ | የFull-Stack Developer ሙያ ተማሪ',
    intro: 'ዘመናዊ ድረ-ገጾችን እና ዲጂታል መፍትሄዎችን እገነባለሁ።',
    view: 'ፕሮጀክቶቼን ይመልከቱ', hire: 'ያግኙኝ',
    aboutTitle: 'ስለ እኔ',
    aboutText: 'የInformation Systems ተማሪ ስሆን የድር ልማት፣ ዳታቤዝ፣ ኔትወርኪንግ እና ቴክኖሎጂን እወዳለሁ።',
    skillsTitle: 'ክህሎቶቼ',
    projectsTitle: 'ፕሮጀክቶቼ',
    projectsText: 'እየገነባኋቸው እና እየተማርኩባቸው ያሉ ፕሮጀክቶች።',
    educationTitle: 'ትምህርት',
    degree: 'የInformation Systems ዲግሪ',
    status: 'የአራተኛ ዓመት ተማሪ',
    contactTitle: 'እንገናኝ',
    contactText: 'የሥራ ዕድል ወይም የትብብር ሐሳብ ካለዎት መልዕክት ይላኩልኝ።',
    email: 'ኢሜይል ይላኩልኝ',
    footer: 'በReact የተሠራ። ሁልጊዜ እየተማርኩ እና እየተሻሻልኩ ነው።'
  }
}

const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MySQL', 'Git', 'GitHub']

const projects = [
  {
    number: '01',
    name: 'Personal Portfolio',
    description: 'A responsive website showcasing my skills, education, and projects.',
    tech: 'React · CSS'
  },
  {
    number: '02',
    name: 'Student Management System',
    description: 'A learning project for managing student information and records.',
    tech: 'JavaScript · MySQL'
  },
  {
    number: '03',
    name: 'Networking Lab',
    description: 'Networking practice and network topology designs using Packet Tracer.',
    tech: 'Networking · Cisco'
  },
  {
  number: '04',
  name: 'Graphic Design',
  description: 'Creative graphic designs, logos, posters, branding, and social media visuals.',
  tech: 'Graphic Design · Photoshop · Illustrator'
}
]
const certificates = [
  {
    id: 1,
    title: 'Web Development',
    issuer: 'Haramaya University',
    year: '2025',
    image: '/Certificates/full-stack.jpg'
  },
  {
    id: 2,
    title: 'Graphic Design',
    issuer: 'Amen Creative',
    year: '2025',
    image: '/Certificates/graphic-design.jpg'
  },
  {
    id: 3,
    title: 'Database Management',
    issuer: 'Organization Name',
    year: '2026',
    image: '/certificates/database.png'
  }
]

function App() {
  const [language, setLanguage] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[language]

  const navItems = [
    ['home', t.home], ['about', t.about], ['skills', t.skills],
    ['projects', t.projects], ['certificates', t.certificates], ['education', t.education], ['contact', t.contact]
  ]

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">YC<span>.</span></a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <select
          className="language-select"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          aria-label="Choose language"
        >
          <option value="en">English</option>
          <option value="om">Afaan Oromo</option>
          <option value="am">አማርኛ</option>
        </select>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">{t.greeting}</p>
            <h1>Yomif <span>Chala</span></h1>
            <h2>{t.role}</h2>
            <p className="hero-description">{t.intro}</p>
            <div className="hero-buttons">
              <a className="button primary" href="#projects">{t.view}</a>
              <a className="button secondary" href="#contact">{t.hire}</a>
            </div>
            <p className="availability">● Open to learning and internship opportunities</p>
          </div>

          <div className="hero-visual">
            <div className="visual-ring"></div>
            <img className="profile-picture" src="/yom.png" alt="Yomif Chala" />
            <div className="floating-tag tag-one">{"<Code />"}</div>
            <div className="floating-tag tag-two">Full-Stack</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">01 / {t.about}</p>
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p className="section-description">{t.aboutText}</p>
          <div className="about-facts">
            <div><strong>01</strong><span>Curiosity</span></div>
            <div><strong>02</strong><span>Problem Solving</span></div>
            <div><strong>03</strong><span>Continuous Learning</span></div>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">02 / {t.skills}</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span className="skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="eyebrow">03 / {t.projects}</p>
          <h2 className="section-title">{t.projectsTitle}</h2>
          <p className="section-description">{t.projectsText}</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="project-tech">{project.tech}</span>
              </article>
            ))}
          </div>
          <p className="note">Replace these sample projects with your own work as you complete it.</p>
        </section>

        <section className="section certificates-section" id="certificates">
  <p className="eyebrow">04 / {t.certificates}</p>

  <h2 className="section-title">My Certificates</h2>

  <p className="section-description">
    Certificates and courses I have completed.
  </p>

  <div className="certificates-grid">
    {certificates.map((certificate) => (
      <article className="certificate-card" key={certificate.id}>
        <div className="certificate-info">
          <h3>{certificate.title}</h3>

          <p>{certificate.issuer}</p>

          <span>{certificate.year}</span>

          <a
            className="button secondary certificate-button"
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate ↗
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

        <section className="section education-section" id="education">
          <p className="eyebrow">05 / {t.education}</p>
          <h2 className="section-title">{t.educationTitle}</h2>
          <div className="education-card">
            <div className="education-icon">✦</div>
            <div>
              <h3>{t.degree}</h3>
              <p>{t.status}</p>
              <span>Relevant interests: Web Development, Databases, Networking, Graphic Design</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">06 / {t.contact}</p>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="section-description">{t.contactText}</p>
          <a className="button primary" href="mailto:your-yomchala1@gmail.com">
            {t.email} ↗
          </a>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <p className="note">Oromummaan Dhiiga!</p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">YC<span>.</span></a>
        <p>© {new Date().getFullYear()} Yomif Chala {t.footer}</p>
        <nav className="footer-social-links" aria-label="Social links">
          <a href="mailto:your-yomchala1@gmail.com" aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18v14H3z" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.5 1.2 15 3a13.3 13.3 0 0 0-7 0C5.5 1.2 4.3 1.5 4.3 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7A3.4 3.4 0 0 0 8 18v4" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v11M4 4v.01M10 20v-6a4 4 0 0 1 8 0v6M10 10v10" />
            </svg>
          </a>
        </nav>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
