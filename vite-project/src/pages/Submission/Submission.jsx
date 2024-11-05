import React from "react";
import Form from "./components/form";
import HeadingSection from "../Header";
import Guideline from "./components/Guidline";
import { Helmet } from "react-helmet";

function Submission() {
  const pageTitle =
    "Submission | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Submit your papers, proposals, or projects for presentation at our conference. Showcase your research and innovations in sustainability and future technologies.";

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
      <Form />

      <Guideline />
    </div>
  );
}

export default Submission;
