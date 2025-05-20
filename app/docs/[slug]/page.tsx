import { docsLoader } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { DEPLOYED_URL, PROPER_NAME } from "@/utils/constants";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = docsLoader.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description ?? "Lattice AI Documentation",
  };
}

export function generateStaticParams(): { slug: string }[] {
  return docsLoader.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

const Page: NextPage<{
  params: Promise<{
    slug?: string;
  }>;
}> = async ({ params }) => {
  const { slug } = await params;
  if (!slug) notFound();
  const page = docsLoader.getPage([slug]);
  if (!page) notFound();

  const MDXContent = page.data.body;

  // Create JSON-LD for documentation page
  const docPageJsonLd = {
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
    url: `${DEPLOYED_URL}/docs/${slug}`,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DEPLOYED_URL}/docs/${slug}`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: PROPER_NAME,
    },
    articleSection: "Technical Documentation",
    audience: {
      "@type": "Audience",
      audienceType: "Developers",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(docPageJsonLd) }}
      />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDXContent
            components={getMDXComponents({
              // this allows you to link to other pages with relative file paths
              a: createRelativeLink(docsLoader, page),
            })}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
};

export default Page;
