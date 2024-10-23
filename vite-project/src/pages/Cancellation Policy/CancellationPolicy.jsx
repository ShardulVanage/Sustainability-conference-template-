import React from "react";
import CancellationContent from "./components/Content";
import HeadingSection from "../Header";
import { Helmet } from "react-helmet";

function CancellationPolicy() {
  const pageTitle =
    "Cancellation Policy | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Review the cancellation policy for our conference, including important deadlines, refund processes, and terms and conditions for attendees.";

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
      <CancellationContent />
    </div>
  );
}

export default CancellationPolicy;
