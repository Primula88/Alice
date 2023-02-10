// import images
import Logo from '../src/img/header/logo.png';
import GalleryImg1 from '../src/img/gallery/1.jpg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpg';
import GalleryImg4 from '../src/img/gallery/4.jpg';
import GalleryImg5 from '../src/img/gallery/5.jpg';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import FullGalleryImg1 from '../src/img/fullgallery/1.jpeg';
import FullGalleryImg2 from '../src/img/fullgallery/2.jpeg';
import FullGalleryImg3 from '../src/img/fullgallery/3.jpeg';
import FullGalleryImg4 from '../src/img/fullgallery/4.jpeg';
import FullGalleryImg5 from '../src/img/fullgallery/5.jpeg';
import FullGalleryImg6 from '../src/img/fullgallery/6.jpeg';
import FullGalleryImg7 from '../src/img/fullgallery/7.jpeg';
import FullGalleryImg8 from '../src/img/fullgallery/8.jpeg';
import FullGalleryImg9 from '../src/img/fullgallery/9.jpeg';
import FullGalleryImg10 from '../src/img/fullgallery/10.jpeg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/#About', name: 'About' },
    { href: '/#Gallery', name: 'Gallery' },
    { href: '/#Contact', name: 'Contact' },
    { href: '/Nazorg.pdf', name: 'Nazorg' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Tattoo Alice',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
  subtitle2:
    'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 445,
      height: 580,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 485,
      height: 580,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 445,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const FullgalleryData = {
  title: 'Check my gallery:',
  images: [
    {
      src: FullGalleryImg1,
      original: FullGalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: FullGalleryImg2,
      original: FullGalleryImg2,
      width: 445,
      height: 580,
    },
    {
      src: FullGalleryImg3,
      original: FullGalleryImg3,
      width: 485,
      height: 580,
    },
    {
      src: FullGalleryImg4,
      original: FullGalleryImg4,
      width: 445,
      height: 540,
    },
    {
      src: FullGalleryImg5,
      original: FullGalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: FullGalleryImg6,
      original: FullGalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: FullGalleryImg7,
      original: FullGalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: FullGalleryImg8,
      original: FullGalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: FullGalleryImg9,
      original: FullGalleryImg9,
      width: 465,
      height: 412,
    },
    {
      src: FullGalleryImg10,
      original: FullGalleryImg10,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};


export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Tattoo Alice',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Blikkenburg 93 Vlissingen',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+31 06 273430063',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'Tattoo Alice',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Blikkenburg 93 Vlissingen',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+31 06 27343006',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
};
