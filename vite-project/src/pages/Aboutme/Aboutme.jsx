import React from "react";
import HeroSection from "./components/Hero";
import ConferenceTimeline from "./components/Timeline";
import SponsorShowcase from "./components/SponsorShowcase";
import Content from "./components/Content";
import Stats from "./components/Stats";
import HeadingSection from "../Header";
import AboutConferenceObjective from "./components/ConferenceObjective";

function Aboutme() {
  return (
    <div>
      <HeadingSection />
      <HeroSection />
      <AboutConferenceObjective />
      <ConferenceTimeline />
      <SponsorShowcase />
      <Content />
      <Stats />
    </div>
  );
}

export default Aboutme;
