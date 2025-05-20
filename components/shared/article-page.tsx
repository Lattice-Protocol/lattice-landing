import { getMDXComponents } from "@/mdx-components";
import { CaretRightIcon } from "@/public/icons";
import { type ArticlePageProps } from "@/utils/types/shared.types";
import { TOCItem } from "fumadocs-core/toc";

export const ArticlePage: React.FC<ArticlePageProps> = ({
  data,
  metadata,
  Mdx,
  toc,
}) => {
  return (
    <section className="mx-auto w-10/12 px-4 py-20 sm:px-6 md:px-12 lg:px-20 xl:px-28 xl:py-28">
      <div className="flex flex-col">
        {metadata?.length ? (
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-8 md:mt-8">
            {metadata.map(({ title, content }) => (
              <div
                key={title}
                className="flex flex-row items-start justify-start gap-2 sm:flex-col sm:items-center sm:gap-1"
              >
                <p className="text-muted-foreground text-sm">{title}</p>
                <p className="text-foreground/60 font-medium">{content}</p>
              </div>
            ))}
          </div>
        ) : null}

        <h1 className="text-foreground mt-6 mb-4 text-3xl font-bold sm:text-4xl md:mt-8 md:text-5xl">
          {data.title}
        </h1>

        {data.description && (
          <p className="text-foreground/80 mt-4 text-base leading-relaxed sm:text-lg">
            {data.description}
          </p>
        )}
      </div>

      <div className="border-primary/20 my-8 h-0 w-full border-t md:my-12" />

      <article className="flex flex-col lg:flex-row lg:gap-12">
        <div className="border-primary/50 bg-background sticky top-16 mt-8 mb-4 rounded-md border lg:hidden">
          <details className="group">
            <summary className="flex cursor-pointer items-center justify-between p-4">
              <h3 className="font-semibold text-white">Table of Contents</h3>

              <span className="flex h-5 w-5 rotate-90 transition-transform group-open:rotate-0">
                <CaretRightIcon />
              </span>
            </summary>

            <ul className="flex h-64 min-h-1 flex-col overflow-y-auto p-4 pt-0">
              {toc.map(({ depth, title, url }) =>
                depth > 3 || depth === 1 ? null : (
                  <TOCItem
                    key={url}
                    href={url}
                    className={`${
                      depth === 2
                        ? "text-foreground/60 mt-4"
                        : "text-muted-foreground mt-2 pl-4"
                    } hover:text-foreground text-sm transition-colors duration-200 first:mt-0 last:mb-0`}
                  >
                    {title}
                  </TOCItem>
                )
              )}
            </ul>
          </details>
        </div>

        <div className="prose prose-invert prose-img:max-w-full prose-img:rounded-md max-w-full min-w-0 flex-1">
          <Mdx components={getMDXComponents()} />
        </div>

        <aside className="border-primary/50 sticky top-20 hidden h-[36rem] w-72 flex-col border lg:flex xl:w-96">
          <h3 className="p-4 font-semibold text-white">Table of Contents</h3>
          <ul className="flex min-h-1 flex-col overflow-y-auto p-4 pt-0">
            {toc.map(({ depth, title, url }) =>
              depth > 3 || depth === 1 ? null : (
                <TOCItem
                  key={url}
                  href={url}
                  className={`${
                    depth === 2
                      ? "text-foreground/60 mt-4"
                      : "text-muted-foreground mt-2 pl-4"
                  } hover:text-foreground text-sm transition-colors duration-200 first:mt-0 last:mb-0`}
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
