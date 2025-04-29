import { docsSource } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

// TODO: check for blogs
export const { GET } = createFromSource(docsSource);
