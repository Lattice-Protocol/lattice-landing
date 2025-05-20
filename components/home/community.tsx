import { BulbIcon, ChatIcon } from "@/public/icons";
import { BoltIcon } from "lucide-react";

export const Community: React.FC = () => {
  const iconClassName: string = "text-foreground/80 w-12 h-12";

  const copy: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[] = [
    {
      icon: <BulbIcon className={iconClassName} />,
      title: "Invest & Power OSS Models",
      description:
        "Pool capital to fund open-source language models. These models power the Lattice platform, with revenue shared as reward.",
    },
    {
      icon: <ChatIcon className={iconClassName} />,
      title: "AI Chat, Powered by the Crowd",
      description:
        "Open-source. Crypto-native. Agent-integrated. No subscriptions. No gatekeepers. Just pay-per-query freedom.",
    },
    {
      icon: <BoltIcon className={iconClassName} />,
      title: "Own the Network",
      description:
        "Power node or use platform with the LAI token. Decentralized and Uncensored - the future of intelligence.",
    },
  ];

  return (
    <section className="mx-auto px-4 py-12 sm:px-8 md:px-16 md:py-20 lg:px-24 lg:py-24 xl:px-36">
      <div className="flex flex-col justify-center gap-2 text-center font-mono text-2xl sm:text-3xl">
        <h5 className="text-orange-500/80">
          People's AI. Co
          <span className="text-xs sm:text-sm">[munnity]</span> Owned.
        </h5>
        <h5 className="text-lg sm:text-2xl">Earn from LLM model usage</h5>
      </div>

      <div className="mt-12 flex flex-col gap-8 md:mt-24 lg:flex-row lg:gap-0">
        {copy.map(({ icon, title, description }, idx) => (
          <div
            key={title}
            className={`flex flex-col px-4 py-8 sm:px-8 lg:py-0 xl:px-20 ${idx !== copy.length - 1 ? "lg:border-secondary/20 lg:border-r" : ""}`}
          >
            <div>
              <figure className="mb-6">{icon}</figure>
              <div className="flex flex-col gap-2">
                <h5 className="text-lg font-bold sm:text-xl">{title}</h5>
                <p className="text-foreground/80 text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
