import { baseOptions } from "@/lib/fuma-config";
import { blogsLoader } from "@/lib/source";
import { DocsLayout as FumaDocsLayout } from "fumadocs-ui/layouts/docs";
import { type NextPage } from "next";

const DocsLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <FumaDocsLayout tree={blogsLoader.pageTree} {...baseOptions}>
      {children}
    </FumaDocsLayout>
  );
};

export default DocsLayout;
