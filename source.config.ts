import { defineConfig, defineDocs } from "fumadocs-mdx/config";

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docsSource = defineDocs({
  dir: "components/docs",
});

export const blogsSource = defineDocs({
  dir: "components/blogs",
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
