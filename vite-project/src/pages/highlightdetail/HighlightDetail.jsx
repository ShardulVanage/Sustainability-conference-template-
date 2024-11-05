import { Helmet } from "react-helmet";
import DetailInfo from "./components/DetailInfo";

export default function HighlightDetail() {
  const pageTitle =
    "Highlight Detail | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Dive into the key highlights of our conference, featuring notable sessions, speakers, innovations, and achievements in sustainability and future technologies.";

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
      <DetailInfo />
    </>
  );
}
