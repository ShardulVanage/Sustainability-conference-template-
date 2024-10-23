import React from "react";
import VenueContent from "./components/VenueContent";
import HeadingSection from "../Header";
import { Helmet } from "react-helmet";

function DetailVenue() {
  const pageTitle =
    "Venue Details | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Find detailed information about the venue for our conference, including location, facilities, and travel recommendations.";

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
      <VenueContent />
    </div>
  );
}

export default DetailVenue;
