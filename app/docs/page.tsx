import { DEPLOYED_URL, PROPER_NAME, TAGLINE } from "@/utils/constants";
import { type NextPage } from "next";

const DocsPage: NextPage = () => {
  // Create JSON-LD for documentation index page
  const docsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${PROPER_NAME} Documentation`,
    description: `Official documentation for ${PROPER_NAME} - ${TAGLINE}`,
    url: `${DEPLOYED_URL}/docs`,
    isPartOf: {
      "@type": "WebSite",
      name: PROPER_NAME,
      url: DEPLOYED_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: DEPLOYED_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Documentation",
          item: `${DEPLOYED_URL}/docs`,
        },
      ],
    },
    about: {
      "@type": "SoftwareApplication",
      name: PROPER_NAME,
      applicationCategory: "AIApplication",
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(docsJsonLd) }}
      />
      Docs
    </div>
  );
};

export default DocsPage;
