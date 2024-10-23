import React from "react";
import MultiImg from "./components/MultiImg";
import HeadingSection from "../Header";
import { Helmet } from "react-helmet";

function Gallery() {
  const pageTitle =
    "Gallery | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Browse our gallery to relive moments from past conferences, showcasing key events, speakers, and achievements in sustainability and innovation.";

  return (
    <div>
      <Helmet>
        {/* Essential Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
      <HeadingSection />
      <MultiImg />
    </div>
  );
}

export default Gallery;
