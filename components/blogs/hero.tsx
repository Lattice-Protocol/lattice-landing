// "use client";
import type { BlogsHeroProps } from "@/utils/types/blogs.types";
import Image from "next/image";
import Link from "next/link";

// import { useState } from "react";

export const BlogsHero: React.FC<BlogsHeroProps> = ({ blogs }) => {
  const defaultBannerSrc = "/images/blogs/milkyway.jpg";

  // const [bannerSrc, setBannerSrc] = useState<string>(defaultBannerSrc);

  return (
    <section className="mx-auto w-9/12 p-8">
      <div className="relative h-96">
        <Image
          src={defaultBannerSrc}
          alt="Lattice AI Blog"
          fill
          unoptimized
          className="object-cover object-center"
        />

        <h1 className="text-[rgb(23,17,15)] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold">
          Lattice Blogs
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <Link
            key={blog.data.title}
            href={blog.url}
            className="border-primary/20 border p-4"
            // onMouseEnter={() => {
            //   setBannerSrc(blog.data.image);
            // }}
            // onMouseLeave={() => {
            //   setBannerSrc(defaultBannerSrc);
            // }}
          >
            <h3 className="text-foreground font-bold">{blog.data.title}</h3>

            <p className="text-foreground/80 mt-2 text-sm">
              {blog.data.description}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-foreground/80 mt-2 text-sm">
                {blog.data.author}
              </p>

              <p className="text-foreground/80 mt-2 text-sm">
                {blog.data.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
