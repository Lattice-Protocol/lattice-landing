import { FullLogo, PageNavbar } from "@/components/shared";
import { BulbIcon, ChatIcon, RadioIcon, ScrollIcon } from "@/public/icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookOpenIcon, NewspaperIcon } from "lucide-react";

const commonNavLinks: BaseLayoutProps["links"] = [
  {
    text: "Litepaper",
    url: "/litepaper",
    icon: <ScrollIcon />,
  },
  // {
  //   text: "Community",
  //   url: "/community",
  //   icon: <RadioIcon />,
  // },
  // {
  //   text: "Documentation",
  //   url: "/docs",
  //   icon: <BookOpenIcon className="w-4 h-4" />,
  // },
  // {
  //   text: "Power Nodes",
  //   url: "/power-nodes",
  //   icon: <BulbIcon />,
  // },
  {
    text: "Blogs",
    url: "/blogs",
    icon: <NewspaperIcon className="w-4 h-4" />,
  },
  // {
  //   text: "Chat",
  //   url: "/chat",
  //   icon: <ChatIcon />,
  // },
];
export const pageOptions: BaseLayoutProps = {
  nav: {
    component: <PageNavbar commonLinks={commonNavLinks} />,
  },
};

export const docsOptions: BaseLayoutProps = {
  nav: {
    title: <FullLogo />,
  },
  links: commonNavLinks,
};
