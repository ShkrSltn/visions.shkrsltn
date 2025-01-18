import {
  faAngular,
  faJs,
  faNode,
  faPython,
  faDocker,
  faGitAlt,
  faJava,
  faHtml5,
  faCss3,
  faVuejs
} from '@fortawesome/free-brands-svg-icons';
import {
  faComments,
  faBrain,
  faCloud,
  faCogs
} from '@fortawesome/free-solid-svg-icons';
import { Skill } from '../interfaces/skill.interface';

export const SKILLS: Skill[] = [
  {
    name: 'Angular',
    type: 'hard',
    icon: faAngular,
    details: {
      level: 'Intermediate',
      experience: 'Some months',
      description: 'Development of complex web applications using Angular. I mean, I can do it, just trust me.',
      projects: ['Current Work Projects', 'Personal Portfolio']
    }
  },
  {
    name: 'Vue',
    type: 'hard',
    icon: faVuejs,
    details: {
      level: 'Intermediate',
      experience: 'Quite enough',
      description: 'I do not decide yet, which I like more Angular or Vue.js, Its like choosing between my two favorite children.',
      projects: ['Carpool App', 'Green Kidney App','SAFI DAVI']
    }
  },
  {
    name: 'Spring Boot',
    type: 'hard',
    icon: faJava,
    details: {
      level: 'Beginner',
      experience: 'Few months',
      description: 'Started working with Spring Boot after FastAPI, two different approaches, but both are good. I like both. Belive me.',
      projects: ['Backend Services', 'FaciMath']
    }
  },
  {
    name: 'FastAPI',
    type: 'hard',
    icon: faPython,
    details: {
      level: 'Intermediate',
      experience: 'Enough to work with it',
      description: 'Building high-performance APIs using FastAPI its kind of cool and easy, I can create whole backend in blink of an eye. Maybe a few blinks, but who counts, right ?',
      projects: ['Green Kidney App', 'Carpool App','SAFI DAVI']
    }
  },
  {
    name: 'Docker',
    type: 'hard',
    icon: faDocker,
    details: {
      level: 'Intermediate',
      experience: 'Many times',
      description: 'We are using Docker almost on every project, because we live in era of diversity, and Its good to have possibility to run application on different machines. And software also needs home, warm and love.',
      projects: ['Carpool App', 'Green Kidney App', 'SAFI DAVI']
    }
  },
  {
    name: 'Google Cloud Platform',
    type: 'hard',
    icon: faCloud,
    details: {
      level: 'Beginner',
      experience: 'Few times',
      description: 'I put some of our projects on GCP, but I am not expert in this field, I am learning. And I will be expert soon, maybe I am already, you never know. ',
      projects: ['Green Kidney App', 'SAFI DAVI']
    }
  },
  {
    name: 'Git',
    type: 'hard',
    icon: faGitAlt,
    details: {
      level: 'Advanced',
      experience: 'Very long time',
      description: 'There are no questions about Git. Git is everything. Sometimes we hate it, sometimes it makes us angry, but there is no life in IT without Git. Git or not to Git, that\'s the question.',
      projects: ['All Projects']
    }
  },
  {
    name: 'CI/CD',
    type: 'hard',
    icon: faCogs,
    details: {
      level: 'Advanced',
      experience: 'Few times',
      description: 'Setting up pipelines in GitLab CI/CD.',
      projects: ['Green Kidney App', 'SAFI DAVI', "SHARADA"]
    }
  },
  {
    name: 'HTML5',
    type: 'hard',
    icon: faHtml5,
    details: {
      level: 'Advanced',
      experience: '3+ years',
      description: 'I saw millions of HTML code and pages, its just like a regular speaking language to me.',
      projects: ['All Frontend Projects', 'Green Kidney App', 'Carpool App', 'SAFI DAVI', 'FaciMath']
    }
  },
  {
    name: 'CSS3',
    type: 'hard',
    icon: faCss3,
    details: {
      level: 'Advanced',
      experience: '3+ years',
      description: 'Responsive design, CSS Grid, Flexbox, animation. Etc, etc, etc. I know all this stuff, just trust me.',
      projects: ['All Frontend Projects', 'Green Kidney App', 'Carpool App', 'SAFI DAVI', 'FaciMath']
    }
  },
  {
    name: 'JavaScript',
    type: 'hard',
    icon: faJs,
    details: {
      level: 'Advanced',
      experience: '3+ years',
      description: 'ES6+, asynchronous programming, DOM manipulation. Still not sure how promises work, but I promise you, I will try to catch it and finally understand it.',
      projects: ['All Frontend Projects', 'Green Kidney App', 'Carpool App', 'SAFI DAVI', 'FaciMath']
    }
  },
  {
    name: 'Communication',
    type: 'soft',
    icon: faComments,
    details: {
      level: 'Advanced',
      experience: 'Ongoing',
      description: 'I have a mouth, I can talk, I can explain, I can learn. I can do it all, sometimes super good, sometimes super bad, but the idea to try to improve my skills is always in my mind.',
      projects: ['Team Projects']
    }
  },
  /* {
    name: 'Problem Solving',
    type: 'soft',
    icon: faBrain,
    details: {
      level: 'Advanced',
      experience: 'Ongoing',
      description: 'Analytical thinking and solving complex technical challenges',
      projects: ['All Projects']
    }
  }, */
  {
    name: 'English',
    type: 'soft',
    icon: faComments,
    details: {
      level: 'Professional (B2-C1)',
      experience: '10+ years',
      description: 'Learning whole my life from school, work, universty and more. High level of English to work and study.',
      projects: ['All Projects']
    }
  },
  {
    name: 'Turkish',
    type: 'soft',
    icon: faComments,
    details: {
      level: 'Native',
      experience: 'Lifetime',
      description: 'Native language, heritage language from family roots',
      projects: ['All Projects']
    }
  },
  {
    name: 'Russian',
    type: 'soft',
    icon: faComments,
    details: {
      level: 'Native',
      experience: 'Lifetime',
      description: 'Native proficiency, grew up speaking Russian in Ukraine',
      projects: ['All Projects']
    }
  },
  {
    name: 'Ukrainian',
    type: 'soft',
    icon: faComments,
    details: {
      level: 'Native',
      experience: 'Lifetime',
      description: 'Native proficiency, grew up in Ukraine',
      projects: ['All Projects']
    }
  },
  {
    name: 'German',
    type: 'soft',
    icon: faComments,
    details: {
      level: 'A1-A2',
      experience: '1.5 years',
      description: 'Currently learning German since moving to Switzerland. ',
      projects: ['All Projects']
    }
  }
];


