import { baseOptions } from "@/components/shared";
import { HomeLayout as FumaHomeLayout } from "fumadocs-ui/layouts/home";
import { type NextPage } from "next";

const HomeLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <FumaHomeLayout
      {...baseOptions}
      className="flex flex-1 flex-col justify-center text-center"
    >
      {children}
    </FumaHomeLayout>
  );
};

export default HomeLayout;
