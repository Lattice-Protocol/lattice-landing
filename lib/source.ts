import { blogsSource, docsSource, litepaperSource } from "@/.source";
import { loader } from "fumadocs-core/source";

export const docsLoader = loader({
  baseUrl: "/docs",
  source: docsSource.toFumadocsSource(),
});

export const blogsLoader = loader({
  baseUrl: "/blogs",
  source: blogsSource.toFumadocsSource(),
});

export const litepaperLoader = loader({
  baseUrl: "/litepaper",
  source: litepaperSource.toFumadocsSource(),
});
