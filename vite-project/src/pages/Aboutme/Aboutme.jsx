import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./components/Hero";
import ConferenceTimeline from "./components/Timeline";
import SponsorShowcase from "./components/SponsorShowcase";
import Content from "./components/Content";
import Stats from "./components/Stats";
import HeadingSection from "../Header";
import AboutConferenceObjective from "./components/ConferenceObjective";

function Aboutme() {
  // Essential SEO metadata
  const pageTitle =
    "About Us | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Learn about our conference, our mission, objectives, and journey through the years. Discover our sponsors and achievements.";

  return (
    <>
      <Helmet>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.icsift.com/" />
        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />

        {/* Basic Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ICSIFT",
            description: pageDescription,
          })}
        </script>
      </Helmet>

      <div>
        <HeadingSection />
        <HeroSection />
        <AboutConferenceObjective />
        <ConferenceTimeline />
        <SponsorShowcase />
        <Content />
        <Stats />
      </div>
    </>
  );
}

export default Aboutme;
