import aboutpic from './components/Access/mePhoto.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'HB.',
}

const about = {
  photo: aboutpic,
  name: 'Hans Buraqsson',
  role: 'Full stack developer',
  description:
    "I'm a creative at heart, with a love for visual art, UX design, and web development. I started my journey in education, sharing my passion for learning. After two decades, I craved a new challenge. Transitioning to web development felt like a natural step, where I could blend my artistic sensibilities with coding skills. Today, I thrive in the world of UX design and frontend development, bridging the gap between aesthetics and technology. I'm all about creating captivating digital experiences that make an impact.",
  resume:
    'https://drive.google.com/file/d/1aTx0JLyqGnbrgg_NhRdqv_TTCLtwkxwS/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/hans-buraqsson-73324111a/',
    github: 'https://github.com/Buraqsson',
  },
}

const projects = [
  {
    name: 'Woda',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium eos temporibus beatae eum fugit consectetur deserunt voluptate, debitis quia fuga magni corporis possimus libero dicta reprehenderit. Iusto, cum voluptates.',
    stack: ['JavaScript', 'React', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/Buraqsson/Woda',
    livePreview: '',
  },
  {
    name: ' E-wallet',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium eos temporibus beatae eum fugit consectetur deserunt voluptate, debitis quia fuga magni corporis possimus libero dicta reprehenderit. Iusto, cum voluptates.',
    stack: ['JavaScript', 'React', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/Buraqsson/E-wallet',
    livePreview: '',
  },
  {
    name: 'HighScore',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium eos temporibus beatae eum fugit consectetur deserunt voluptate, debitis quia fuga magni corporis possimus libero dicta reprehenderit. Iusto, cum voluptates.',
    stack: ['JavaScript', 'React', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/Buraqsson/Highscore',
    livePreview: '',
  },
  {
    name: 'Cool Fashion)',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium eos temporibus beatae eum fugit consectetur deserunt voluptate, debitis quia fuga magni corporis possimus libero dicta reprehenderit. Iusto, cum voluptates.',
    stack: ['JavaScript', 'React', 'CSS', 'HTML', 'MySQL', 'NodeJS'],
    sourceCode: 'https://github.com/Buraqsson/Cool_Fashion',
  },
  {
    name: 'Digital White Board',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laudantium eos temporibus beatae eum fugit consectetur deserunt voluptate, debitis quia fuga magni corporis possimus libero dicta reprehenderit. Iusto, cum voluptates.',
    stack: ['JavaScript', 'React', 'CSS', 'HTML', 'Fairbase', 'NodeJS'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue.js',
  'Material UI',
  'Express',
  'MySQL',
  'PostgreSQL',
  'Node JS',
  'React Native',
  'Redux',
  'Git',
  'Docker',
  'Figma',
]

const contact = {
  email: 'hans.buraqsson',
}

export { header, about, projects, skills, contact }
