import { baseOptions } from "@/lib/fuma-config";
import { blogsSource } from "@/lib/source";
import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { type NextPage } from "next";

const DocsLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <FumaDocsLayout tree={blogsSource.pageTree} {...baseOptions}>
      {children}
    </FumaDocsLayout>
  );
};

export default DocsLayout;
