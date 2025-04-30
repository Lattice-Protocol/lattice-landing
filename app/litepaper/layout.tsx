import { docsOptions } from "@/lib/fuma-config";
import { litepaperLoader } from "@/lib/source";
import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { type NextPage } from "next";

const DocsLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <FumaDocsLayout tree={litepaperLoader.pageTree} {...docsOptions}>
      {children}
    </FumaDocsLayout>
  );
};

export default DocsLayout;
