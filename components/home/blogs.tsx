import { BlogPreview } from "../shared";
import { type BlogsProps } from "@/utils/types/home.types";

export const Blogs: React.FC<BlogsProps> = ({ blogs }) => {
  return (
    <section className="px-36 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Latest Blogs
      </h2>

      <main className="flex gap-8">
        {blogs.map((blog) => (
          <BlogPreview key={blog.data.title} {...blog} />
        ))}
      </main>
    </section>
  );
};
