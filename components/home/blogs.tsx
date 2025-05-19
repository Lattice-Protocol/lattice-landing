import { type BlogsProps } from "@/utils/types/home.types";
import Image from "next/image";
import Link from "next/link";

export const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <section className="px-12 md:px-20 xl:px-36 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Latest Blogs
      </h2>

      <main className="flex flex-wrap gap-8">
        {blogs.map(({ data, url }) => (
          <article
            key={data.title}
            className="relative flex flex-col w-96 items-center bg-[#1A1310]/70 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <figure className="relative w-full h-80">
              <Image
                src={data.image}
                alt="Lattice AI"
                fill
                className="object-cover object-center"
              />
            </figure>

            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {data.title}
              </h3>

              <p className="text-foreground/80 mb-4 line-clamp-2 [text-overflow:clip]">
                {data.description}
              </p>

              <Link
                href={url}
                className="text-primary hover:text-[#FFB067] transition-colors"
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
