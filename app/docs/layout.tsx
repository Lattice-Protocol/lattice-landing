import { baseOptions } from "@/components/shared";
import { source } from "@/lib/source";
import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { type NextPage } from "next";

const DocsLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <FumaDocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </FumaDocsLayout>
  );
};

export default DocsLayout;
