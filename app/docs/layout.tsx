import { docsOptions } from "@/lib/fuma-config";
import { docsLoader } from "@/lib/source";
import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { type NextPage } from "next";
import { notFound } from "next/navigation";

const DocsLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return notFound();

  return (
    <FumaDocsLayout tree={docsLoader.pageTree} {...docsOptions}>
      {children}
    </FumaDocsLayout>
  );
};

export default DocsLayout;
