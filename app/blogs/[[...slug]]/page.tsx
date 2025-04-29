import { blogsLoader } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { type NextPage } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogsLoader.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug?: string[];
  }>;
}) {
  const { slug } = await params;
  const page = blogsLoader.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

const Page: NextPage<{
  params: Promise<{
    slug?: string[];
  }>;
}> = async ({ params }) => {
  const { slug } = await params;
  const page = blogsLoader.getPage(slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(blogsLoader, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
};

export default Page;
