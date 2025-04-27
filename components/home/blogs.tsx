import Image from "next/image";
import Link from "next/link";

export const Blogs: React.FC = () => {
  const copy: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[] = [
    {
      title: "Future of LLM is Token Powered and Community Owned",
      description:
        "Explore how decentralized networks are reshaping AI ownership and development. It's time to take control of your AI. Know your AI.",
      image: "/images/home/blog-1.png",
      link: "/blogs/future-of-llm-is-token-powered-and-community-owned",
    },
    {
      title: " The Future of Freelance and Org AI with MCP and A2A",
      description:
        "Discover how AI-powered protocols are transforming organizational structures. How MCP and A2A are changing the game for freelancers and organizations alike. Tempor mollit nulla sunt velit laborum sint culpa laborum. Eu proident tempor magna laborum minim enim do sunt est eu deserunt enim nulla.",
      image: "/images/home/blog-2.png",
      link: "/blogs/future-of-llm-is-token-powered-and-community-owned",
    },
  ];

  return (
    <section className="px-36 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-8">
        Latest Blogs
      </h2>

      <main className="flex gap-8">
        {copy.map(({ title, description, image, link }) => (
          <article
            key={title}
            className="flex flex-col w-2xl items-center bg-[#1A1310]/70 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            <figure className="relative w-full h-48 md:h-96">
              <Image
                src={image}
                alt="Lattice AI"
                fill
                className="object-cover object-center"
              />
            </figure>

            <div className="p-4 md:p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">
                {title}
              </h3>

              <p className="text-foreground/80 mb-4 line-clamp-3 [text-overflow:clip]">
                {description}
              </p>

              <Link
                href={link}
                className="text-primary hover:text-[#FFB067] transition-colors"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </main>
    </section>
  );
};
