import React from "react";
import MainTC from "./components/mainTC";
import DarkHeadingSection from "../DarkHeader";
import { Helmet } from "react-helmet";

function TermsCondition() {
  const pageTitle =
    "Terms and Conditions | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Review the terms and conditions for participating in our conference, including registration, attendance, and conduct guidelines for all attendees and partners.";

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
      <DarkHeadingSection />
      <MainTC />
    </div>
  );
}

export default TermsCondition;
