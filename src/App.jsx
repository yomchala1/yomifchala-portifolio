
import { useState } from 'react'
import './App.css'

const translations = {
  en: {
    home: 'Home', about: 'About Me', skills: 'Skills',
    projects: 'Projects', education: 'Education', contact: 'Contact',
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
    projects: 'Pirojektoota', Education: 'Barnoota', Contact: 'Quunnamtii',
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
    projects: 'ፕሮጀክቶች', education: 'ትምህርት', contact: 'አግኙኝ',
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
  }
]

function App() {
  const [language, setLanguage] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[language]

  const navItems = [
    ['home', t.home], ['about', t.about], ['skills', t.skills],
    ['projects', t.projects], ['education', t.education], ['contact', t.contact]
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

        <section className="section education-section" id="education">
          <p className="eyebrow">04 / {t.education}</p>
          <h2 className="section-title">{t.educationTitle}</h2>
          <div className="education-card">
            <div className="education-icon">✦</div>
            <div>
              <h3>{t.degree}</h3>
              <p>{t.status}</p>
              <span>Relevant interests: Web Development, Databases, Networking</span>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">05 / {t.contact}</p>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="section-description">{t.contactText}</p>
          <a className="button primary" href="mailto:your-yomchala1@gmail.com">
            {t.email} ↗
          </a>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <p className="note">Update the email and social links with your real accounts.</p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">YC<span>.</span></a>
        <p>© {new Date().getFullYear()} Yomif Chala {t.footer}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
