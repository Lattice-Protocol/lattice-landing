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
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-20 xl:py-28 w-10/12 mx-auto">
      <div className="flex flex-col">
        {metadata?.length ? (
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-6 md:mt-8">
            {metadata.map(({ title, content }) => (
              <div
                key={title}
                className="flex flex-row sm:flex-col items-start sm:items-center gap-2 sm:gap-1 justify-start"
              >
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="font-medium text-foreground/60">{content}</p>
              </div>
            ))}
          </div>
        ) : null}

        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-6 md:mt-8">
          {data.title}
        </h1>

        {data.description && (
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mt-4">
            {data.description}
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
