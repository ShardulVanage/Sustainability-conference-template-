import DarkHeadingSection from "../DarkHeader";
import Cards from "./components/Cards";
import { Helmet } from "react-helmet";

export default function Awards() {
  const pageTitle =
    "Awards | International Conference on Sustainability, Innovation and Future Technologies";
  const pageDescription =
    "Explore the prestigious awards and recognitions presented at our conference, honoring innovation and excellence in sustainability and future technologies.";

  return (
    <>
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
      <Cards />
    </>
  );
}
