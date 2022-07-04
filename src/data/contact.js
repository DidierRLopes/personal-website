import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/DidierRLopes',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/didier-lopes',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  /*
  {
    link: 'https://facebook.com/md',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/dangelosaurus/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: '',
    label: 'Angel List',
    icon: faAngellist,
  }, */
  {
    link: 'https://twitter.com/didier_lopes',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:didier.lopes@openbb.finance',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
