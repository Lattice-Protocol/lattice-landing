import { pageOptions } from "@/lib/fuma-config";
import { HomeLayout as FumaHomeLayout } from "fumadocs-ui/layouts/home";
import { type NextPage } from "next";

const HomeLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <FumaHomeLayout
      {...pageOptions}
      className="flex flex-1 flex-col justify-center pt-0"
    >
      {children}
    </FumaHomeLayout>
  );
};

export default HomeLayout;
