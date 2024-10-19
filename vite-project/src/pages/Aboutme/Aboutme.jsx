import React from "react";
import HeroSection from "./components/Hero";
import ConferenceTimeline from "./components/Timeline";
import SponsorShowcase from "./components/SponsorShowcase";
import Content from "./components/Content";
import Stats from "./components/Stats";

function Aboutme() {
  return (
    <div>
      <HeroSection />
      <ConferenceTimeline />
      <SponsorShowcase />
      <Content />
      <Stats />
    </div>
  );
}

export default Aboutme;
