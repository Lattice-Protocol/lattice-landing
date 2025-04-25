import { HomeLayout as FumaHomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/components/shared";
import { type NextPage } from "next";

const HomeLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <FumaHomeLayout {...baseOptions}>{children}</FumaHomeLayout>;
};

export default HomeLayout;
