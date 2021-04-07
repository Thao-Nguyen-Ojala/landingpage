import myCVImg from '../media/myCV.png';
import covidAppImg from '../media/covidApp.png';
import photoAppImg from '../media/photoApp.png';
import warehouseAppImg from '../media/warehouseApp.png';
import carouselMockUpImg from '../media/carousel-mockup.png';
import landingPage from '../media/landingPage.png'
import webStore from '../media/webstore1.png'

export const Data = [
  {
    topLine: 'First project',
    name: 'Photo App Project',
    language: 'JS',
    description:
      'In this photo app the user can randomly check through the photos from https://picsum.photos, select their favourite photo, name, sort it and save it in category',
    mainFocus: 'frontend',
    status: 'completed',
    webpage: 'http://thao-ngo-photo-app.surge.sh/photos',
    gitHub: 'https://github.com/Thao-Nguyen-Ojala/photo-app',
    img: photoAppImg,
    alt: 'photoApp img',
  },
  {
    topLine: 'Second project',
    name: 'COVID-19 tracking app',
    language: 'JS',
    description:
      'User can check the newest update of new infected cases, recovered as well as deaths cause by Covid-19 globally daily or a specific country since its first case',
    mainFocus: 'frontend',
    status: 'completed',
    webpage: 'http://thao-covid19-tracker.surge.sh/',
    gitHub: 'https://github.com/Thao-Nguyen-Ojala/covid-19-tracker-app',
    img: covidAppImg,
    alt: 'covidApp img',
  },

  {
    topLine: 'Third project',
    name: 'My curriculum vitae',
    language: 'JS',
    description: 'This is my digital CV, which is made with React',
    mainFocus: 'frontend',
    status: 'completed',
    webpage: 'http://thao-cv.surge.sh/',
    gitHub: 'https://github.com/Thao-Nguyen-Ojala/my-CV-app',
    img: myCVImg,
    alt: 'cvApp img',
  },
 
  {
    topLine: 'Fouth project',
    name: 'Warehouse App',
    language: 'JS',
    description:
      'This is a warehouse fullstack app, where the focus is on handling the data. The backend is using APIs provided by Reaktor on backend for items and combining and caching the data for faster requests',
    mainFocus: 'backend',
    status: 'completed',
    webpage: 'http://thao-warehouse.surge.sh/',
    gitHub: 'https://github.com/Thao-Nguyen-Ojala/warehouse-app-frontend',
    img: warehouseAppImg,
    alt: 'warehouseApp img',
  },
  {
    topLine: 'Fifth project',
    name: 'Carousel Mockup',
    language: 'TS',
    description: 'My first project using Typescript with React to create the infinity carousel',
    mainFocus: 'frontend',
    status: 'completed',
    webpage: 'http://thao-carousel-project.surge.sh/',
    gitHub: 'https://github.com/Thao-Nguyen-Ojala/carousel-project',
    img: carouselMockUpImg,
    alt: 'carouselMockUp img',
  },
  {
    topLine: 'Sixth project',
    name: 'Webstore',
    language: 'TS',
    description: 'Practise project to get hand on a bit more complicated Typescript project',
    mainFocus: 'frontend',
    status: 'processing',
    webpage: '...',
    gitHub: 'https://github.com/Thao-Nguyen-Ojala/webstore1',
    img: webStore,
    alt: 'webStore img',
  },
  {
    topLine: 'Seventh project',
    name: 'Landing Page',
    language: 'TS',
    description: 'Made with Typecript and React, new landing/portfolio page',
    mainFocus: 'frontend',
    status: 'completed',
    webpage: '...',
    gitHub: '...',
    img: landingPage,
    alt: 'landingPage img',
  },
  
];
