import { blogsSource, docsSource, litepaperSource } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export const docsLoader = loader({
  baseUrl: "/docs",
  source: createMDXSource(docsSource),
});

export const blogsLoader = loader({
  baseUrl: "/blogs",
  source: createMDXSource(blogsSource),
});

export const litepaperLoader = loader({
  baseUrl: "/litepaper",
  source: createMDXSource(litepaperSource),
});
