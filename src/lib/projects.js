import Nikehome from '../assets/Nikehome.png';
import Nike2 from '../assets/Nike2.png';
import Nike3 from '../assets/Nike3.png';
import Nike4 from '../assets/Nike4.png';

import Iphonehome from '../assets/Iphonehome.png';
import Iphone2 from '../assets/Iphone2.png';
import Iphone3 from '../assets/Iphone3.png';

import Brainwavehome from '../assets/Brainwavehome.png';
import Brainwave3 from '../assets/Brainwave3.png';
import Brainwave4 from '../assets/Brainwave4.png';
import Brainwave5 from '../assets/Brainwave5.png';

import Sirtonamain from '../assets/Sirtonamain.png';
import Sirtona4 from '../assets/Sirtona4.png';

import BiruhT from '../assets/BiruhT.png';
import Biruh2 from '../assets/Biruh2.png';
import Biruh4 from '../assets/Biruh4.png';
import Biruh5 from '../assets/Biruh5.png';
import Biruhmain from '../assets/Biruhmain.png';

export const projects = [
  {
    slug: 'nike-landing-page-clone',
    title: 'Nike Landing Page Clone',
    category: 'Web Development',
    description:
      'A modern, fully responsive clone of the official Nike website Landing Page, designed to deliver an immersive online shopping experience.',
    image: Nikehome,
    size: 'large',
    client: 'Portfolio Project',
    role: 'Developer',
    timeline: '1 Weeks',
    technologies: 'React.js and TailwindCSS',
    overview: 'This project incorporates smooth navigation, product display.',
    gallery: [Nikehome, Nike2, Nike3, Nike4],
    liveUrl: 'https://binanikeclone.netlify.app/',
    githubUrl: 'https://github.com/Biniyam-Belay/NIkeClone',
  },
  {
    slug: 'iphone-website-clone',
    title: 'Iphone Website Clone',
    category: 'Web Development',
    description:
      'An Iphone 15 website clone, with integrated 3D product display with ThreeJs.',
    image: Iphonehome,
    size: 'small',
    client: 'Portfolio Project',
    role: 'Developer',
    timeline: '2 Weeks',
    technologies: 'React, TailwindCSS, ThreeJs, Gsap',
    overview:
      'An Iphone 15 website clone, with integrated 3D product display with ThreeJs.',
    gallery: [Iphonehome, Iphone2, Iphone3],
    liveUrl: 'https://binaiphoneclone.netlify.app/',
    githubUrl: 'https://github.com/Biniyam-Belay/IphoneWebsite_Clone',
  },
  {
    slug: 'biruh-tutors',
    title: 'Biruh Tutors',
    category: 'Branding',
    description:
      'Complete brand identity design for tech startup providing online learning platform for student.',
    image: BiruhT,
    size: 'tall',
    client: 'Biruh Tutors',
    role: 'Brand Designer',
    timeline: '2 months',
    technologies: 'Adobe Suite, Figma',
    overview:
      'Comprehensive brand identity system including logo, typography, color palette, and brand guidelines.',
    process:
      'Deep market research, competitor analysis, and multiple design iterations to create a unique and memorable brand identity.',
    gallery: [Biruh2, Biruhmain, Biruh5, Biruh4],
  },
  {
    slug: 'sirtona',
    title: 'Sirtona',
    category: 'Branding',
    description:
      'Complete brand identity design for tech startup collecting and providing realtime user experience and marketing strategies for companies and customer on different products',
    image: Sirtonamain,
    size: 'small',
    client: 'Sirtona',
    role: 'Graphic Designer',
    timeline: '4 months',
    technologies:
      'Adobe Photoshop , Adobe Illustrator, Affinity Designer, Affinity Publisher',
    overview:
      'Comprehensive brand identity system including logo, typography, color palette, and brand guidelines.',
    gallery: [Sirtona4],
  },
  {
    slug: 'brainwave',
    title: 'Brainwave',
    category: 'Web Development',
    description:
      'A modern, fully responsive website, with customize animation and eye catching UI design.',
    image: Brainwavehome,
    size: 'wide',
    client: 'Portfolio Project',
    role: 'Developer',
    timeline: '2 Weeks',
    technologies: 'React, TailwindCSS, Gsap',
    overview:
      'A modern, fully responsive website, with customize animation and eye catching UI design.',
    gallery: [Brainwavehome, Brainwave3, Brainwave4, Brainwave5],
    liveUrl: 'https://binabrainwaveclone.netlify.app/',
    githubUrl: 'https://github.com/Biniyam-Belay/brainwave',
  },
];


