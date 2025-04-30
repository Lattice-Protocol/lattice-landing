"use client";

import type { BlogsHeroProps } from "@/utils/types/blogs.types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const BlogsHero: React.FC<BlogsHeroProps> = ({ blogs }) => {
  const defaultBannerSrc = "/images/home/hero-bg.png";

  const [bannerSrc, setBannerSrc] = useState<string>(defaultBannerSrc);

  return (
    <section className="p-8 w-9/12 mx-auto">
      <div className="relative h-96">
        <Image
          src={bannerSrc}
          alt="Lattice AI Blog"
          fill
          unoptimized
          className="object-cover object-center"
        />

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-foreground">
          Lattice AI Blog
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <Link
            key={blog.data.title}
            href={blog.url}
            className="p-4 border border-primary/20"
            onMouseEnter={() => {
              setBannerSrc(blog.data.image);
            }}
            onMouseLeave={() => {
              setBannerSrc(defaultBannerSrc);
            }}
          >
            <h3 className="font-bold text-foreground">{blog.data.title}</h3>

            <p className="text-foreground/80 text-sm mt-2">
              {blog.data.description}
            </p>

            <div className="flex items-center justify-between">
              <p className="text-foreground/80 text-sm mt-2">
                {blog.data.author}
              </p>

              <p className="text-foreground/80 text-sm mt-2">
                {blog.data.date.toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
