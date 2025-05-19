"use client";

import {
  GITHUB_URL,
  PROPER_NAME,
  TAGLINE,
  TWITTER_URL,
  DEPLOYED_URL,
} from "@/utils/constants";
import { usePathname } from "next/navigation";
import { WithContext, Organization, WebSite, BreadcrumbList } from "schema-dts";

export const StructuredData: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: PROPER_NAME,
    url: DEPLOYED_URL,
    logo: `${DEPLOYED_URL}/logo.png`,
    sameAs: [TWITTER_URL, GITHUB_URL],
    description: TAGLINE,
  };

  const websiteSchema: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: PROPER_NAME,
    url: DEPLOYED_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${DEPLOYED_URL}/search?q={search_term_string}`,
      },
      query: "required name=search_term_string",
    },
  };

  const getBreadcrumbSchema = () => {
    if (isHomePage) return null;

    const paths = pathname.split("/").filter(Boolean);
    const itemListElement = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: DEPLOYED_URL,
      },
      ...paths.map((path, index) => {
        const position = index + 2;
        const name = path.charAt(0).toUpperCase() + path.slice(1);
        const item = `${DEPLOYED_URL}/${paths.slice(0, index + 1).join("/")}`;

        return {
          "@type": "ListItem",
          position,
          name,
          item,
        };
      }),
    ];

    const breadcrumbSchema: WithContext<BreadcrumbList> = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemListElement as BreadcrumbList["itemListElement"],
    };

    return breadcrumbSchema;
  };

  const breadcrumbSchema = getBreadcrumbSchema();

  return (
    <>
      {/* Organization Schema - Always present */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Website Schema - Homepage only */}
      {isHomePage && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      )}

      {/* Breadcrumb Schema - Non-homepage paths */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
    </>
  );
};
