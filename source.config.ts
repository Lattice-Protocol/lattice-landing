import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// Options: https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docsSource = defineCollections({
  type: "doc",
  dir: "content/docs",
});

export const blogsSource = defineCollections({
  type: "doc",
  dir: "content/blogs",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()).optional(),
    image: z.string(),
  }),
});

export const litepaperSource = defineCollections({
  type: "doc",
  dir: "content/litepaper",
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
