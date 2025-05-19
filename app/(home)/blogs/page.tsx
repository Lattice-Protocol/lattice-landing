import { BlogsHero } from "@/components/blogs";
import { blogsLoader } from "@/lib/source";
import { DEPLOYED_URL, PROPER_NAME } from "@/utils/constants";
import type { BlogType } from "@/utils/types/shared.types";
import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Lattice AI Blogs",
};

const BlogsPage: NextPage = () => {
  const blogs = [...blogsLoader.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  // Create Blog Collection schema
  const blogsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Lattice AI Blog",
    description: "Articles and insights about AI from Lattice AI team",
    url: `${DEPLOYED_URL}/blogs`,
    isPartOf: {
      "@type": "WebSite",
      name: PROPER_NAME,
      url: DEPLOYED_URL,
    },
    about: {
      "@type": "Thing",
      name: "Artificial Intelligence",
    },
    genre: "tech blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.slice(0, 10).map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${DEPLOYED_URL}/blogs/${blog.slugs[0]}`,
        item: {
          "@type": "BlogPosting",
          headline: blog.data.title,
          description: blog.data.description,
          author: {
            "@type": "Person",
            name: blog.data.author,
          },
          datePublished:
            blog.data.date || new Date(blog.file.name).toISOString(),
          url: `${DEPLOYED_URL}/blogs/${blog.slugs[0]}`,
        },
      })),
    },
  };

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogsJsonLd) }}
      />
      <BlogsHero blogs={blogs as BlogType[]} />
    </>
  );
};

export default BlogsPage;
