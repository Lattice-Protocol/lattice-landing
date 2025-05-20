"use client";

import { Terminal, TerminalText, TerminalTextAnimated } from "../shared";
import { motion } from "framer-motion";

export const VibeStudio: React.FC = () => {
  const copy: {
    text: string;
    delay: number;
    animated: boolean;
    className?: string;
  }[] = [
    {
      animated: false,
      delay: 1000,
      text: ">> Initializing Deployment Agent...",
      className: "text-primary",
    },
    {
      animated: false,
      delay: 2000,
      text: "? Github: lorem-coder",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 3000,
      text: "? Description: Chat with subreddit agents",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 4000,
      text: "? Deploy to: Lattice Cloud",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 5000,
      text: "? Post on Lattice Community? Yes",
      className: "text-foreground/80",
    },
    {
      animated: true,
      delay: 6000,
      text: "⚡ Initializing...",
      className: "text-primary",
    },
    {
      animated: false,
      delay: 7000,
      text: "✔ Copying MCP base node",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 8000,
      text: "✔ Adding your plugin",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 9000,
      text: "✔ Deploying to cloud",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 10000,
      text: "✔ Adding to community RSS feed",
      className: "text-foreground/80",
    },
    {
      animated: false,
      delay: 11000,
      text: "✔ Deployment complete! : https://latticeai.net/reddit-mcp",
      className: "text-green-600",
    },
  ];

  return (
    <section className="flex flex-col-reverse items-center gap-x-16 gap-y-12 px-12 pb-20 md:px-20 xl:flex-row xl:px-36">
      <div className="mx-auto w-full md:w-10/12 xl:w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[1.75rem] font-bold text-[#CE8E54] sm:text-[2rem] md:text-[3.5rem] lg:mb-6"
        >
          Lattice Vibe Studio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground/80 item mb-6 flex flex-col gap-3 font-mono text-[1rem] font-semibold sm:text-[1.1rem] md:text-[1.25rem] lg:mb-8"
        >
          <p>Vibe code AI functionality</p>

          <p>
            Publish and deploy Agents
            <span className="text-primary">{"/"}</span>Plugins with MCP
            <span className="text-primary">{"/"}</span>A2A
          </p>

          <p>Distribute and earn from Lattice community</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-mono text-[#EA580B]/60 uppercase transition-all duration-300 hover:cursor-pointer hover:underline hover:underline-offset-2"
        >
          <span className="">Build</span>
        </motion.button>
      </div>

      <Terminal className="bg-background border-primary/20 mr-auto -translate-x-48 scale-50 sm:-translate-x-20 sm:scale-75 md:translate-x-0 md:scale-none">
        <TerminalText
          delay={500}
          className="text-primary font-mono text-xs whitespace-pre"
        >
          {`
         _             _                 _          _          _           _             _      
        _\\ \\          / /\\              /\\ \\       /\\ \\       /\\ \\       /\\ \\           /\\ \\    
       /\\__ \\        / /  \\             \\_\\ \\      \\_\\ \\      \\ \\ \\     /  \\ \\         /  \\ \\   
      / /_ \\_\\      / / /\\ \\            /\\__ \\     /\\__ \\     /\\ \\_\\   / /\\ \\ \\       / /\\ \\ \\  
     / / /\\/_/     / / /\\ \\ \\          / /_ \\ \\   / /_ \\ \\   / /\\/_/  / / /\\ \\ \\     / / /\\ \\_\\ 
    / / /         / / /  \\ \\ \\        / / /\\ \\ \\ / / /\\ \\ \\ / / /    / / /  \\ \\_\\   / /_/_ \\/_/ 
   / / /         / / /___/ /\\ \\      / / /  \\/_// / /  \\/_// / /    / / /    \\/_/  / /____/\\    
  / / / ____    / / /_____/ /\\ \\    / / /      / / /      / / /    / / /          / /\\____\\/    
 / /_/_/ ___/\\ / /_________/\\ \\ \\  / / /      / / /   ___/ / /__  / / /________  / / /______    
/_______/\\__\\// / /_       __\\ \\_\\/_/ /      /_/ /   /\\__\\/_/___\\/ / /_________\\/ / /_______\\   
\\_______\\/    \\_\\___\\     /____/_/\\_\\/       \\_\\/    \\/_________/\\/____________/\\/__________/   
                                                                                                
`}
        </TerminalText>

        <div className="mt-2 w-fit text-sm">
          {copy.map(({ text, delay, animated, className }) =>
            animated ? (
              <TerminalTextAnimated
                key={text}
                delay={delay}
                className={className}
              >
                {text}
              </TerminalTextAnimated>
            ) : (
              <TerminalText key={text} delay={delay} className={className}>
                {text}
              </TerminalText>
            )
          )}
        </div>
      </Terminal>
    </section>
  );
};
