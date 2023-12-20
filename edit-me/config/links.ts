import {
  faGithub,
  faInstagram,
  faLinkedin,
/**  faNpm,*/
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { CMSLink } from 'edit-me/types/CMSLink';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/danehkar',
    icon: faGithub,
    title: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/ashkbiz.danehkar',
    icon: faInstagram,
    title: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/danehkar',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
/**
*  {
*    href: 'https://www.npmjs.com',
*    icon: faNpm,
*    title: 'NPM',
*  },
*/
  {
    href: 'https://twitter.com/danehkar',
    icon: faTwitter,
    title: 'Twitter',
  },
];
