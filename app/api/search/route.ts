import { docsLoader } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

// TODO: check for blogs & litepaper
export const { GET } = createFromSource(docsLoader);
