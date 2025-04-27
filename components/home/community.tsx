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
    <section className="px-16 py-24 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 px-20">
        <div className="text-3xl font-mono text-left flex flex-col gap-2 justify-center">
          <h5 className="text-orange-500/80">
            People's AI. Co
            <span className="text-sm">[munnity]</span> Owned.
          </h5>

          <h5>Earn from LLM model usage</h5>
        </div>

        <div className="text-left">
          <h3 className="text-2xl mb-4 font-bold">
            Invest into the latest LLM model and earn by powering Lattice chat
          </h3>

          <button className="glass-button bg-linear-to-r from-primary/80 to-[#FFB067]/80 p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
            Contribute to Node
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-32">
        {copy.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col px-20 border-r border-secondary/20 last:border-r-0"
          >
            <div>
              <figure className="mb-6">{icon}</figure>

              <div className="flex flex-col gap-2 text-left">
                <h5 className="text-xl font-bold">{title}</h5>
                <p className="text-foreground/80">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
