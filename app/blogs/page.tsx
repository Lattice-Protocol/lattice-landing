"use client";

import { blogsLoader } from "@/lib/source";
import { type NextPage } from "next";

export const BlogsPage: NextPage = () => {
  const posts = [...blogsLoader.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  console.log(posts);

  return <div>Blogs</div>;
};

export default BlogsPage;
