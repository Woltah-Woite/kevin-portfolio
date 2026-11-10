// All the text on the site lives here. Edit this file to update the portfolio.
import photo from '../assets/kevin.jpg'
import aticeLogo from '../assets/atice-logo.png'

const icon = (name, file) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${file}.svg`

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
    { value: '7+', label: 'Core technologies' },
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
  items: [
    { name: 'React', role: 'Frontend', icon: icon('react', 'react-original') },
    { name: 'HTML5', role: 'Markup', icon: icon('html5', 'html5-original') },
    { name: 'CSS3', role: 'Styling', icon: icon('css3', 'css3-original') },
    { name: 'JavaScript', role: 'Language', icon: icon('javascript', 'javascript-original') },
    { name: 'Laravel', role: 'Backend API', icon: icon('laravel', 'laravel-original') },
    { name: 'MySQL', role: 'Database', icon: icon('mysql', 'mysql-original') },
    { name: 'Redis', role: 'Caching', icon: icon('redis', 'redis-original') },
  ],
}

export const about = {
  eyebrow: 'About me',
  title: 'Driven by intelligent design.',
  text: 'I focus on AI-driven interfaces, computer vision experiments and software systems that feel premium yet stay approachable for the people using them.',
  focus: ['Software Development', 'Artificial Intelligence', 'Computer Vision', 'UI / UX Design'],
  capstone: {
    label: 'Capstone highlight',
    title: 'Smart Campus Workspace Finder',
    meta: 'Computer Vision • Full Stack • Mobile-first',
    text: 'A web app that maps the best study zones, open labs and campus events using real-time campus data.',
  },
  education: {
    label: 'Education',
    degree: 'Bachelor of Science in Information Technology',
    school: 'New York University',
    year: '4th Year Student',
    focus: 'Software Systems, UX, Artificial Intelligence, ERP Automation',
  },
  building: {
    label: 'Currently building',
    title: 'AT-ICE ERP System',
    text: 'Project manager. Inventory, sales, deliveries and HR for Bella Erin.',
    logo: aticeLogo,
  },
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
  email: 'kitamotoOTOMOBUS@gmail.com',
  location: 'Crawford Notch, White Mountain region of New Hampshire',
  phone: '+63 929 229 9667',
}
