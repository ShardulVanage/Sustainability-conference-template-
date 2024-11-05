import React from "react";
import PPContent from "./components/PPContent";
import DarkHeadingSection from "../DarkHeader";
import { Helmet } from "react-helmet";
function PrivacyPolicy() {
  const pageTitle =
    "Privacy Policy | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Read our privacy policy to understand how we collect, use, and protect your personal information when you engage with our conference website.";

  return (
    <div>
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
      <DarkHeadingSection />
      <PPContent />
    </div>
  );
}

export default PrivacyPolicy;
