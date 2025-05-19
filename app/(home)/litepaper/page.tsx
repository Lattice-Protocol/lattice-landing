import { litepaperLoader } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
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
  const { body: Mdx } = await page.data.load();

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
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-20 xl:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(litepaperJsonLd) }}
      />

      <div className="flex flex-col">
        <h1 className="mb-4 text-5xl font-bold text-foreground mt-8">
          {page.data.title}
        </h1>

        {page.data.description && (
          <p className="text-lg leading-relaxed text-foreground/80 mt-4">
            {page.data.description}
          </p>
        )}
      </div>

      <div className="w-full h-0 border-t border-primary/20 my-12" />

      <div className="prose prose-invert min-w-0 flex-1 max-w-full prose-img:max-w-full prose-img:rounded-md">
        <Mdx components={getMDXComponents()} />
      </div>
    </section>
  );
};

export default Page;
