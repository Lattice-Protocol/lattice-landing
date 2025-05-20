import { ArticlePage } from "@/components/shared";
import { blogsLoader } from "@/lib/source";
import { DEPLOYED_URL, PROPER_NAME } from "@/utils/constants";
import type { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogsLoader.getPage([params.slug]);

  if (!page) notFound();

  const publishedTime =
    typeof page.data.date === "string"
      ? page.data.date
      : page.data.date?.toISOString();

  return {
    title: page.data.title,
    description: page.data.description ?? "Lattice AI Blogs",
    openGraph: {
      title: page.data.title,
      description: page.data.description ?? "Lattice AI Blogs",
      type: "article",
      publishedTime: publishedTime,
      authors: [page.data.author],
      images: [
        {
          url: page.data.image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: page.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.data.title,
      description: page.data.description ?? "Lattice AI Blogs",
      images: [page.data.image || "/twitter-image.jpg"],
    },
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blogsLoader.getPages().map((page) => ({
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
  const page = blogsLoader.getPage([slug]);

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();

  // Format the publication date
  const formattedDate = new Date(
    page.data.date ?? page.file.name
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Create JSON-LD schema for blog article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page.data.title,
    description: page.data.description,
    image: page.data.image
      ? `${DEPLOYED_URL}${page.data.image}`
      : `${DEPLOYED_URL}/og-image.jpg`,
    author: {
      "@type": "Person",
      name: page.data.author,
    },
    publisher: {
      "@type": "Organization",
      name: PROPER_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${DEPLOYED_URL}/logo.png`,
      },
    },
    datePublished: page.data.date || new Date(page.file.name).toISOString(),
    dateModified: page.data.date || new Date(page.file.name).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${DEPLOYED_URL}/blogs/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <ArticlePage
        metadata={[
          {
            title: "Written by",
            content: page.data.author,
          },
          {
            title: "Published on",
            content: formattedDate,
          },
        ]}
        Mdx={Mdx}
        toc={toc}
        data={page.data}
      />
    </>
  );
};

export default Page;
