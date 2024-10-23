import React from "react";
import OrganizingCommittee from "./components/OrganizingCommittee";
import IACommittee from "./components/IACommitte";
import ScientificCommittee from "./components/ScientificCommittee";
import HeadingSection from "../Header";
import { Helmet } from "react-helmet";
function Committe() {
  const pageTitle =
    "Committee | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Meet the organizing committee behind our conference, comprising experts and leaders in sustainability, innovation, and future technologies.";

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
      <OrganizingCommittee />
      <ScientificCommittee />
      <IACommittee />
    </div>
  );
}

export default Committe;
