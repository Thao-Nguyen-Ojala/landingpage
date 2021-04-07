import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import Portfolio from '../components/Portfolio/Portfolio';
import { Data } from './Data';

export default function LandingPage() {
  return (
    <div>
      <HeroCarousel projects={Data} />
      <Portfolio projects={Data} />
    </div>
  );
}
