import { type BlogsProps } from "@/utils/types/home.types";
import Image from "next/image";
import Link from "next/link";

export const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <section className="mb-20 px-12 md:px-20 xl:px-36">
      <h2 className="text-foreground mb-4 text-2xl font-bold md:mb-8 md:text-3xl">
        Latest Blogs
      </h2>

      <main className="flex flex-wrap gap-8">
        {blogs.map(({ data, url }) => (
          <article
            key={data.title}
            className="border-primary/20 hover:border-primary/40 relative flex w-96 flex-col items-center overflow-hidden rounded-lg border bg-[#1A1310]/70 transition-all duration-300"
          >
            <figure className="relative h-80 w-full">
              <Image
                src={data.image}
                alt="Lattice AI"
                fill
                className="object-cover object-center"
              />
            </figure>

            <div className="p-4 md:p-6">
              <h3 className="text-foreground mb-3 text-xl font-bold">
                {data.title}
              </h3>

              <p className="text-foreground/80 mb-4 line-clamp-2 [text-overflow:clip]">
                {data.description}
              </p>

              <Link
                href={url}
                className="text-primary transition-colors hover:text-[#FFB067]"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </main>
    </section>
  );
};
