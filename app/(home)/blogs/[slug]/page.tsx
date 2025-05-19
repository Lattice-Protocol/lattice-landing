import { blogsLoader } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { CaretRightIcon } from "@/public/icons";
import { DEPLOYED_URL, PROPER_NAME } from "@/utils/constants";
import { TOCItem } from "fumadocs-core/toc";
import { ArrowLeft } from "lucide-react";
import { Metadata, type NextPage } from "next";
import Link from "next/link";
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
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-20 xl:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="flex flex-col">
        <Link
          href="/blogs"
          className="group inline-flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blogs
        </Link>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 md:mt-8">
          {[
            {
              label: "Written by",
              value: page.data.author,
            },
            {
              label: "Published on",
              value: formattedDate,
            },
          ].map((item) => (
            <div
              key={item.label + item.value}
              className="flex flex-row sm:flex-col items-start sm:items-center gap-2 sm:gap-1 justify-start"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-medium text-foreground/60">{item.value}</p>
            </div>
          ))}
        </div>

        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-6 md:mt-8">
          {page.data.title}
        </h1>

        {page.data.description && (
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mt-4">
            {page.data.description}
          </p>
        )}
      </div>

      <div className="w-full h-0 border-t border-primary/20 my-8 md:my-12" />

      <article className="flex flex-col lg:flex-row lg:gap-12">
        <div className="lg:hidden mt-8 mb-4 border border-primary/50 rounded-md sticky top-16 bg-background">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer p-4">
              <h3 className="font-semibold text-white">Table of Contents</h3>

              <span className="w-5 h-5 transition-transform rotate-90 group-open:rotate-0 flex">
                <CaretRightIcon />
              </span>
            </summary>

            <ul className="flex flex-col min-h-1 overflow-y-auto h-64 p-4 pt-0">
              {toc.map(({ depth, title, url }) =>
                depth > 3 || depth === 1 ? null : (
                  <TOCItem
                    key={url}
                    href={url}
                    className={`${
                      depth === 2
                        ? "text-foreground/60 mt-4"
                        : "text-muted-foreground pl-4 mt-2"
                    } first:mt-0 last:mb-0 text-sm hover:text-foreground transition-colors duration-200`}
                  >
                    {title}
                  </TOCItem>
                )
              )}
            </ul>
          </details>
        </div>

        <div className="prose prose-invert min-w-0 flex-1 max-w-full prose-img:max-w-full prose-img:rounded-md">
          <Mdx components={getMDXComponents()} />
        </div>

        <aside className="hidden lg:flex sticky flex-col top-20 w-72 xl:w-96 border border-primary/50 h-[36rem]">
          <h3 className="font-semibold text-white p-4">Table of Contents</h3>
          <ul className="flex flex-col min-h-1 overflow-y-auto p-4 pt-0">
            {toc.map(({ depth, title, url }) =>
              depth > 3 || depth === 1 ? null : (
                <TOCItem
                  key={url}
                  href={url}
                  className={`${
                    depth === 2
                      ? "text-foreground/60 mt-4"
                      : "text-muted-foreground pl-4 mt-2"
                  } first:mt-0 last:mb-0 text-sm hover:text-foreground transition-colors duration-200`}
                >
                  {title}
                </TOCItem>
              )
            )}
          </ul>
        </aside>
      </article>
    </section>
  );
};

export default Page;
