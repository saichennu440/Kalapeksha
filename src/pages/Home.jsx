import React from 'react';
import Navbar from '../components/kalapeksha/Navbar';
import HeroNew from '../components/kalapeksha/HeroNew';
import AboutSection from '../components/kalapeksha/AboutSection';
import ProgramsSection from '../components/kalapeksha/ProgramsSection';
import ArtistsSection from '../components/kalapeksha/ArtistsSection';
import GalleryNew from '../components/kalapeksha/GalleryNew';
import EventsSection from '../components/kalapeksha/EventsSection';
import ManifestoSection from '../components/kalapeksha/ManifestoSection';
import JoinSection from '../components/kalapeksha/JoinSection';
import FooterNew from '../components/kalapeksha/FooterNew';
import ScrollProgress from '../components/kalapeksha/ScrollProgress';

export default function Home() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroNew />
        <AboutSection />
        <ProgramsSection />
        <ArtistsSection />
        <GalleryNew />
        <EventsSection />
        <ManifestoSection />
        <JoinSection />
      </main>
      <FooterNew />
    </div>
  );
}