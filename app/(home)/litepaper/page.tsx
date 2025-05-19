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
  const { body: Mdx } = await page.data.load();

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-20 xl:py-28">
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
