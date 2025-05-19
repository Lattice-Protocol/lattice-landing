import { ArticlePage } from "@/components/shared/article-page";
import { litepaperLoader } from "@/lib/source";
import { DEPLOYED_URL, PROPER_NAME } from "@/utils/constants";
import { Metadata, type NextPage } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Litepaper",
  description: "Lattice AI Litepaper",
};

const Page: NextPage = async () => {
  const page = litepaperLoader.getPages()[0];

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();

  // Create JSON-LD for the litepaper
  const litepaperJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: page.data.title,
    description: page.data.description,
    author: {
      "@type": "Organization",
      name: PROPER_NAME,
      url: DEPLOYED_URL,
    },
    publisher: {
      "@type": "Organization",
      name: PROPER_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${DEPLOYED_URL}/logo.png`,
      },
    },
    url: `${DEPLOYED_URL}/litepaper`,
    inLanguage: "en-US",
    datePublished: new Date().toISOString().split("T")[0],
    about: {
      "@type": "Thing",
      name: "Decentralized AI Platform",
    },
    audience: {
      "@type": "Audience",
      name: "Developers, AI Researchers, Technology Enthusiasts",
    },
    educationalUse: "Research",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DEPLOYED_URL}/litepaper`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(litepaperJsonLd) }}
      />

      <ArticlePage data={page.data} Mdx={Mdx} toc={toc} />
    </>
  );
};

export default Page;
