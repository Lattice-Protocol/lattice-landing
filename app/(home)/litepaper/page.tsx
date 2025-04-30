import { litepaperLoader } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { type NextPage } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const page = litepaperLoader.getPages()[0];
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

const Page: NextPage = async () => {
  const page = litepaperLoader.getPages()[0];

  if (!page) notFound();
  const { body: Mdx, toc } = await page.data.load();

  return (
    <>
      <Mdx
        components={getMDXComponents({
          // this allows you to link to other pages with relative file paths
          a: createRelativeLink(litepaperLoader, page),
        })}
      />
    </>
  );
};

export default Page;
