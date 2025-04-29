import { blogPosts, docs } from "@/.source";
import { loader } from "fumadocs-core/source";

export const docsSource = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});

export const blogsSource = loader({
  baseUrl: "/blogs",
  source: blogPosts.toFumadocsSource(),
});
