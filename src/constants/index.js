import {
  aboutImg,
  contactImg,
  croatia,
  exploreBg,
  exploreProfile,
  homeBg,
  iceLand,
  italy,
  spain,
  popular1,
  popular2,
  popular3,
} from '../assets';

export const navigation = [
  {
    id: 1,
    title: 'Home',
    href: '#home',
  },
  {
    id: 2,
    title: 'About',
    href: '#about',
  },
  {
    id: 3,
    title: 'Popular',
    href: '#popular',
  },
  {
    id: 4,
    title: 'Explore',
    href: '#explore',
  },
];

export const heroImgs = [
  {
    id: 1,
    state: 'Croatia',
    imageUrl: croatia,
  },
  {
    id: 2,
    state: 'Iceland',
    imageUrl: iceLand,
  },
  {
    id: 3,
    state: 'Italy',
    imageUrl: italy,
  },
  {
    id: 4,
    state: 'Spain',
    imageUrl: spain,
  },
];

export const populars = [
  {
    id: 1,
    title: 'Logan Mountaine',
    region: 'Canada',
    imageUrl: popular1,
  },
  {
    id: 2,
    title: 'Spike Forest',
    region: 'Ireland',
    imageUrl: popular2,
  },
  {
    id: 3,
    title: 'Garda Lake',
    region: 'Italy',
    imageUrl: popular3,
  },
];

export const explore = {
  name: 'Paul Jeams',
  image: exploreProfile,
};

export const footer = [
  {
    title: 'About',
    content: ['about us', 'features', 'news and blogs'],
  },
  {
    title: 'Company',
    content: ['FAQS', 'history', 'testimonials'],
  },
  {
    title: 'Contact',
    content: ['call center', 'support center', 'contact us'],
  },
  {
    title: 'Support',
    content: ['privacy policy', 'terms & services', 'payment'],
  },
];

const footerSocials = [];
