// import images
import Logo from '../src/img/header/logo.png';
import GalleryImg1 from '../src/img/gallery/1.jpeg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpeg';
import GalleryImg4 from '../src/img/gallery/4.jpeg';
import GalleryImg5 from '../src/img/gallery/5.jpg';
import GalleryImg6 from '../src/img/gallery/6.jpg';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import GalleryImg8 from '../src/img/gallery/8.JPG';
import FullGalleryImg1 from '../src/img/fullgallery/1.jpeg';
import FullGalleryImg2 from '../src/img/fullgallery/2.jpg';
import FullGalleryImg3 from '../src/img/fullgallery/3.jpeg';
import FullGalleryImg4 from '../src/img/fullgallery/4.jpeg';
import FullGalleryImg5 from '../src/img/fullgallery/5.jpg';
import FullGalleryImg6 from '../src/img/fullgallery/6.jpg';
import FullGalleryImg7 from '../src/img/fullgallery/7.jpg';
import FullGalleryImg8 from '../src/img/fullgallery/8.JPG';
import FullGalleryImg9 from '../src/img/fullgallery/9.jpg';
import FullGalleryImg10 from '../src/img/fullgallery/10.jpg';
import FullGalleryImg11 from '../src/img/fullgallery/11.jpg';
import FullGalleryImg12 from '../src/img/fullgallery/12.jpg';
import FullGalleryImg13 from '../src/img/fullgallery/13.jpg';
import FullGalleryImg14 from '../src/img/fullgallery/14.jpg';
import FullGalleryImg15 from '../src/img/fullgallery/15.jpg';
import FullGalleryImg16 from '../src/img/fullgallery/16.jpg';
import FullGalleryImg17 from '../src/img/fullgallery/17.jpg';
import FullGalleryImg18 from '../src/img/fullgallery/18.jpg';
import FullGalleryImg19 from '../src/img/fullgallery/19.jpg';
import FullGalleryImg20 from '../src/img/fullgallery/20.jpg';
import FullGalleryImg21 from '../src/img/fullgallery/21.jpg';
import FullGalleryImg22 from '../src/img/fullgallery/22.jpg';
import FullGalleryImg23 from '../src/img/fullgallery/23.jpg';
import FullGalleryImg24 from '../src/img/fullgallery/24.jpg';
import FullGalleryImg25 from '../src/img/fullgallery/25.jpg';
import FullGalleryImg26 from '../src/img/fullgallery/26.jpg';
import FullGalleryImg27 from '../src/img/fullgallery/27.jpg';
import FullGalleryImg28 from '../src/img/fullgallery/28.jpg';
import FullGalleryImg29 from '../src/img/fullgallery/29.jpg';

// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
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
  { href: 'https://www.facebook.com/TattooAliceVlissingen/', icon: <GrFacebookOption /> },
  { href: 'https://www.instagram.com/tattoo_alice/', icon: <IoLogoInstagram /> },
];

export const heroData = {
  title: 'Tattoo Alice',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
};

export const aboutData = {
  title: 'Welkom:',
  subtitle1:
    'Hoi! Mijn naam is Alicia (Alice) en ik werk in mijn eigen privé studio in Vlissingen. De stijlen die ik doe zijn vooral gebaseerd op fine line, floral/fauna, ornamental en neo traditional (kleur), maar darktrash/blackwork doe ik ook graag! ',
  subtitle2:
    'Samen kunnen we je wensen bespreken voor een design dat bij jou past. Afspraken kunnen gemaakt worden via Whatsapp' ,
  btnText: 'Neem gerust een kijkje op mijn Instagram',
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
      height: 500,
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
      height: 450,
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
      height: 500,
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
      height: 350,
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
      height: 500,
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
      height: 450,
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
      height: 500,
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
      height: 350,
    },
    {
      src: FullGalleryImg9,
      original: FullGalleryImg9,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg10,
      original: FullGalleryImg10,
      width: 465,
      height: 650,
    },
    {
      src: FullGalleryImg11,
      original: FullGalleryImg11,
      width: 465,
      height: 650,
    },
    {
      src: FullGalleryImg12,
      original: FullGalleryImg12,
      width: 465,
      height: 550,
    },
    {
      src: FullGalleryImg13,
      original: FullGalleryImg13,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg14,
      original: FullGalleryImg14,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg15,
      original: FullGalleryImg15,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg16,
      original: FullGalleryImg16,
      width: 465,
      height: 550,
    },
    {
      src: FullGalleryImg17,
      original: FullGalleryImg17,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg18,
      original: FullGalleryImg18,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg19,
      original: FullGalleryImg19,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg20,
      original: FullGalleryImg20,
      width: 465,
      height: 412,
    },
    {
      src: FullGalleryImg21,
      original: FullGalleryImg21,
      width: 465,
      height: 500,
    },
    {
      src: FullGalleryImg22,
      original: FullGalleryImg22,
      width: 465,
      height: 650,
    },
    {
      src: FullGalleryImg23,
      original: FullGalleryImg23,
      width: 465,
      height: 700,
    },
    {
      src: FullGalleryImg24,
      original: FullGalleryImg24,
      width: 465,
      height: 650,
    },
    {
      src: FullGalleryImg25,
      original: FullGalleryImg25,
      width: 465,
      height: 600,
    },
    {
      src: FullGalleryImg26,
      original: FullGalleryImg26,
      width: 465,
      height: 350,
    },
    {
      src: FullGalleryImg27,
      original: FullGalleryImg27,
      width: 465,
      height: 700,
    },
    {
      src: FullGalleryImg28,
      original: FullGalleryImg28,
      width: 465,
      height: 700,
    },
    {
      src: FullGalleryImg29,
      original: FullGalleryImg29,
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
  title: 'Contact:',
  info: [
    {
      title: 'Tattoo Alice',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Blikkenburg 93 Vlissingen',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: <a href="tel:+31627343006">+31627343006</a>,
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
      number: '+31627343006',
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
