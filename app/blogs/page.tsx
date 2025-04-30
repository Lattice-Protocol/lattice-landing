"use client";

import { BlogsHero } from "@/components/blogs";
import { blogsLoader } from "@/lib/source";
import type { BlogType } from "@/utils/types/shared.types";
import { type NextPage } from "next";

export const BlogsPage: NextPage = () => {
  const blogs = [...blogsLoader.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <>
      <BlogsHero blogs={blogs as BlogType[]} />
    </>
  );
};

export default BlogsPage;
