import { pageOptions } from "@/lib/fuma-config";
import { HomeLayout as FumaHomeLayout } from "fumadocs-ui/layouts/home";
import { type NextPage } from "next";

const DocsLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <FumaHomeLayout {...pageOptions}>{children}</FumaHomeLayout>;
};

export default DocsLayout;
