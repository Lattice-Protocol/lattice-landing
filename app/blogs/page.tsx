import { BlogPreview } from "@/components/shared";
import { blogsLoader } from "@/lib/source";
import { type BlogsPreviewProps } from "@/utils/types/shared.types";
import { type NextPage } from "next";

export const BlogsPage: NextPage = () => {
  const blogs = [...blogsLoader.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  console.log(blogs);

  return (
    <section className="container max-sm:px-0 md:py-12">
      <div>
        <h1 className="mb-4 border-b-4 border-fd-foreground pb-2 text-4xl font-bold md:text-5xl">
          Lattice AI Blog
        </h1>

        <p className="text-sm md:text-base">
          Light and gorgeous. like the moon
        </p>
      </div>

      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {blogs.map((blog) => (
          <BlogPreview key={blog.data.title} {...(blog as BlogsPreviewProps)} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
