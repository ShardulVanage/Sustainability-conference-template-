import React from "react";
import Date from "./components/Date";
import HeadingSection from "../Header";
import { Helmet } from "react-helmet";

function Schedule() {
  const pageTitle =
    "Schedule | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "View the complete schedule of our conference, featuring keynote sessions, workshops, and panel discussions on sustainability and future technologies.";

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
      <HeadingSection />
      <Date />
    </div>
  );
}

export default Schedule;
