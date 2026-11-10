// All the text on the site lives here. Edit this file to update the portfolio.
import photo from '../assets/kevin.jpg'
import aticeLogo from '../assets/atice-logo.png'
import aticeLogoSmall from '../assets/atice-logo-small.png'

// Devicon icons, saved in public/icons so they load with the site
const icon = (name, file) => `/icons/${file}.svg`

export const profile = {
  name: 'Kevin O. Abad',
  firstName: 'Kevin',
  photo,
  status: 'Available for work',
  role: 'Full Stack Developer',
  tags: ['4th Year BSIT Student', 'Project Manager, AT-ICE', 'React + Laravel'],
  intro:
    'I design and ship complete web systems, from REST APIs and database design to fast, accessible interfaces that people actually enjoy using.',
  current:
    'Right now I lead AT-ICE, a cross-platform ERP my capstone team is building for our client Bella Erin. It handles inventory, sales, deliveries and customer engagement for small to medium-sized retail businesses.',
  card: {
    label: 'Profile card',
    title: 'Design-driven developer with a bold visual edge.',
    text: 'Clean architecture on the backend, polished UI on the front, built for mobile and desktop.',
  },
  stats: [
    { value: '10+', label: 'Technologies' },
    { value: '3', label: 'Featured projects' },
    { value: '1', label: 'ERP system in progress' },
    { value: 'PM', label: 'Leading the AT-ICE team' },
  ],
  links: {
    github: 'https://github.com',
    linkedin: 'https://www.youtube.com/watch?v=z3jE7ZoTp-I',
    facebook: 'https://www.facebook.com/kvnsnts0',
  },
}

export const stack = {
  eyebrow: 'My tech stack',
  title: 'Built on a decoupled architecture',
  text: 'For AT-ICE I work with a React frontend and a Laravel REST API backend, with MySQL for transactional data and Redis for real-time caching.',
  // Click a tile to open its card: what it is, where it came from, how I use it
  items: [
    {
      name: 'React',
      role: 'Frontend',
      icon: icon('react', 'react-original'),
      since: 'Released by Meta in 2013',
      definition: 'A JavaScript library for building user interfaces out of small, reusable components that update when their data changes.',
      background: 'Built at Facebook to handle fast-changing news feeds, then open sourced. Its component model and virtual DOM changed how most modern web apps are made.',
      usage: [
        'Built the whole AT-ICE frontend: dashboard, deliveries, customers, stock approvals and HR performance pages.',
        'Shared layouts and guards for each role, plus an idle timeout guard that logs users out safely.',
        'This portfolio is a React app too.',
      ],
    },
    {
      name: 'HTML5',
      role: 'Markup',
      icon: icon('html5', 'html5-original'),
      since: 'Finalized by the W3C in 2014',
      definition: 'The standard markup language that gives every web page its structure: headings, text, forms, images and media.',
      background: 'HTML began with Tim Berners-Lee in 1991. Version 5 added native audio, video, canvas and semantic tags like header, nav and section.',
      usage: [
        'Semantic sections, forms and accessible labels across AT-ICE and this site.',
        'Form validation with required fields that block submit until they are filled.',
      ],
    },
    {
      name: 'CSS3',
      role: 'Styling',
      icon: icon('css3', 'css3-original'),
      since: 'Modules rolled out from 2011',
      definition: 'The style sheet language that controls layout, color, spacing and animation on the web.',
      background: 'CSS was proposed by Håkon Wium Lie in 1994. CSS3 split it into modules, which brought flexbox, grid, custom properties and animations.',
      usage: [
        'The neumorphic look here: soft raised and pressed shadows built from CSS variables.',
        'The chameleon colors come from one animated hue variable that every color is based on.',
        'Light and dark mode for every screen in AT-ICE.',
      ],
    },
    {
      name: 'JavaScript',
      role: 'Language',
      icon: icon('javascript', 'javascript-original'),
      since: 'Created in 1995',
      definition: 'The programming language of the web. It runs in every browser and makes pages interactive.',
      background: 'Brendan Eich wrote the first version in 10 days at Netscape. Today it also runs on servers through Node.js and is standardized as ECMAScript.',
      usage: [
        'All the client logic in AT-ICE: API calls, filters, forms and session handling.',
        'The scroll slides, reveal animations and slide counter on this site.',
      ],
    },
    {
      name: 'Laravel',
      role: 'Backend API',
      icon: icon('laravel', 'laravel-original'),
      since: 'First released in 2011',
      definition: 'A PHP framework for building web applications and APIs, with routing, authentication, database tools and queues built in.',
      background: 'Created by Taylor Otwell as a cleaner alternative to older PHP frameworks. It is now one of the most used backend frameworks in the world.',
      usage: [
        'The AT-ICE REST API: inventory, deliveries, store contracts, HR rates and approvals.',
        'Authentication with session isolation and an idle timeout middleware.',
        'Feature tests with php artisan test before every push.',
      ],
    },
    {
      name: 'MySQL',
      role: 'Database',
      icon: icon('mysql', 'mysql-original'),
      since: 'First released in 1995',
      definition: 'An open source relational database that stores data in tables and is queried with SQL.',
      background: 'Started by a Swedish company, MySQL AB, and now owned by Oracle. It powers a huge part of the web, from small sites to large platforms.',
      usage: [
        'Stores all AT-ICE business data: stock, FIFO dispatch, deliveries, contracts and employees.',
        'Relational tables with migrations so every teammate gets the same schema.',
      ],
    },
    {
      name: 'Redis',
      role: 'Caching',
      icon: icon('redis', 'redis-original'),
      since: 'First released in 2009',
      definition: 'An in-memory data store used as a cache, message broker and fast key-value database.',
      background: 'Created by Salvatore Sanfilippo to speed up a real-time web analytics tool. Keeping data in memory makes reads take well under a millisecond.',
      usage: [
        'Caches heavy AT-ICE queries like the BI dashboard so pages load fast.',
        'Short-lived data such as password reset and place search lookups.',
      ],
    },
    {
      name: 'Python',
      role: 'Language',
      icon: icon('python', 'python-original'),
      since: 'First released in 1991',
      definition: 'A general-purpose language known for clean, readable code. Widely used for automation, data and AI.',
      background: 'Created by Guido van Rossum in the Netherlands. Its huge library ecosystem made it the main language for machine learning and computer vision.',
      usage: [
        'VisionVault: object detection with OpenCV and a Flask backend.',
        'Small scripts for school work and data tasks.',
      ],
    },
    {
      name: 'Java',
      role: 'Language',
      icon: icon('java', 'java-original'),
      since: 'Released by Sun Microsystems in 1995',
      definition: 'An object-oriented language that runs on the Java Virtual Machine, so the same code works on any device.',
      background: 'Led by James Gosling with the idea of write once, run anywhere. It is still a core language for enterprise systems and Android.',
      usage: [
        'Object-oriented programming in my BSIT courses: classes, inheritance and data structures.',
        'Earned the Oracle Academy Java Fundamentals certificate in 2024.',
      ],
    },
    {
      name: 'C#',
      role: 'Language',
      icon: icon('csharp', 'csharp-original'),
      since: 'Released by Microsoft in 2000',
      definition: 'A modern, type-safe language from Microsoft, used for desktop apps, web backends and games in Unity.',
      background: 'Designed by Anders Hejlsberg for the .NET platform. Unity chose it as its scripting language, which made it a standard for game development.',
      usage: [
        "All the game code in Bathala's Shadow: player, enemies, bosses, combat and the story system.",
        'Pixel art drawn in code and music synthesized in code, with no audio files.',
        'A save system with three slots and autosave.',
      ],
    },
  ],
  more: ['Web Design', 'Game Development', 'Mobile Applications', 'SAP Business One', 'ERP Systems', 'Git & GitHub'],
}

export const about = {
  eyebrow: 'About me',
  title: 'Driven by intelligent design.',
  text: 'I focus on AI-driven interfaces, computer vision experiments and software systems that feel premium yet stay approachable for the people using them.',
  goal: 'My goal is to build a strong career in IT: start in frontline support, grow into network administration, and specialize in cybersecurity, keeping company infrastructure safe while delivering secure, reliable technical solutions.',
  focus: ['Software Development', 'Network Administration', 'Cybersecurity', 'UI / UX Design'],
  capstone: {
    label: 'Capstone highlight',
    title: 'Smart Campus Workspace Finder',
    meta: 'Computer Vision • Full Stack • Mobile-first',
    text: 'A web app that maps the best study zones, open labs and campus events using real-time campus data.',
  },
  education: {
    label: 'Education',
    degree: 'Bachelor of Science in Information Technology',
    school: 'STI College San Jose del Monte',
    year: '4th Year Student',
    focus: '2024 to present. Software systems, ERP and enterprise workflows.',
    previous: [
      { level: 'Senior High School', school: 'Arellano University, Pasig Campus', years: '2022 to 2024', note: 'STEM strand, With Honors' },
      { level: 'Junior High School', school: 'Kapt. Eddie T. Reyes Integrated School, Taguig', years: '2017 to 2022' },
    ],
  },
  building: {
    label: 'Currently building',
    title: 'AT-ICE ERP System',
    text: 'Project manager. Inventory, sales, deliveries and HR for Bella Erin.',
    logo: aticeLogoSmall,
  },
}

export const experience = {
  eyebrow: 'Experience',
  title: 'Where I have worked and trained.',
  jobs: [
    {
      role: 'Invoice Encoder & Bookkeeper',
      place: 'Alexandra Tube Ice Inc.',
      years: '2024 to 2026',
      points: [
        'Encoded raw transaction data and customer invoices into the system.',
        'Worked with voucher and billing staff to verify records, prepare bills and approve vendor payments.',
        'Organized financial records to keep company balances accurate.',
      ],
    },
    {
      role: 'ERP Navigation Training',
      place: 'STI College',
      years: '2024 to 2025',
      points: [
        'Gained hands-on experience in SAP Business One practice.',
        'Applied ERP concepts to manage integrated enterprise data and business workflows.',
      ],
    },
  ],
  seminars: [
    { title: 'National Youth Convention: Mental Health Awareness', place: 'SM Mall of Asia', date: 'December 2025' },
    { title: 'GitHub Seminar', place: 'STI College San Jose del Monte', date: 'May 2025' },
    { title: 'SAP Business One', place: 'STI College San Jose del Monte', date: 'December 2024' },
  ],
}

export const certificates = {
  eyebrow: 'Certificates',
  title: 'Proof of the work behind the skills.',
  text: 'Click a certificate to see the full details.',
  items: [
    {
      title: 'Java Fundamentals',
      award: 'Award of Course Completion',
      issuer: 'Oracle Academy',
      course: 'Computer Programming 2',
      term: 'SY 2023-2024, 2nd Term',
      awarded: 'June 19, 2024',
      posted: 'September 5, 2024',
      summary: 'Awarded for satisfactory completion of all coursework in the Oracle Academy Java Fundamentals course.',
      skills: ['Java', 'Object-oriented programming', 'Problem solving'],
      // set to '/certificates/file.pdf' to show a View PDF button
      file: null,
    },
  ],
}

export const projects = {
  eyebrow: 'Selected projects',
  title: 'Creative systems built for scale.',
  text: 'Each project pairs polished visuals with practical workflows and a clean developer experience.',
  items: [
    {
      name: 'AT-ICE ERP System',
      year: '2026',
      tech: ['React', 'Laravel', 'MySQL', 'Redis'],
      roles: ['Project Manager', 'Full Stack Developer'],
      highlights: ['Inventory with FIFO dispatch', 'Deliveries and store contracts', 'HR rates and employee performance'],
      preview: 'AT-ICE logo',
      logo: aticeLogo,
      image: null,
      link: null,
    },
    {
      name: "Bathala's Shadow: Rise of the Bakunawa",
      year: '2026',
      tech: ['Unity 6', 'C#', '2D Pixel Art', 'Procedural Audio'],
      roles: ['Game Developer', 'Team of 4'],
      highlights: [
        '2D top-down action RPG based on Philippine mythology',
        'Four lands with Living and Dead Worlds, levels 1 to 50',
        'Five boss fights and two story endings',
        'Code-drawn pixel art and kulintang-inspired music',
      ],
      preview: "Bathala's Shadow gameplay",
      figure: 'bathala',
      image: null,
      link: null,
    },
    {
      name: 'Campus Connect AI',
      year: '2025',
      tech: ['React', 'TensorFlow', 'Node.js', 'Figma'],
      roles: ['UI/UX Lead', 'Frontend Architect', 'AI Integration'],
      highlights: ['Real-time study zone prediction', 'Mobile-friendly campus map', 'Smart scheduling assistant'],
      preview: 'Campus mobile dashboard',
      figure: 'campus',
      image: null,
      link: null,
    },
    {
      name: 'VisionVault',
      year: '2024',
      tech: ['Python', 'OpenCV', 'Flask', 'MongoDB'],
      roles: ['Computer Vision Engineer', 'Backend Developer'],
      highlights: ['Automated image annotation', 'Secure data pipeline', 'Custom object detection models'],
      preview: 'Vision dashboard',
      figure: 'vision',
      image: null,
      link: null,
    },
    {
      name: 'Pulse UI Kit',
      year: '2024',
      tech: ['Tailwind CSS', 'React', 'Animation', 'Storybook'],
      roles: ['Design Systems', 'Component Library'],
      highlights: ['Modular design system', 'Accessible interaction flows', 'Dark and light themes'],
      preview: 'Component system tiles',
      figure: 'uikit',
      image: null,
      link: null,
    },
  ],
}

export const contact = {
  eyebrow: 'Send a message',
  title: "Let's work together.",
  text: "Have a project or a question? I'd love to hear from you.",
  email: 'WoltaWoite@gmail.com',
  location: 'San Jose del Monte, Bulacan, Philippines',
  phone: '+63 994 824 4084',
}
