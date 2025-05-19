import {
  HomeHero,
  Community,
  Users,
  LLMOS,
  VibeStudio,
  Waitlist,
  Blogs,
} from "@/components/home";
import { blogsLoader } from "@/lib/source";
import { DEPLOYED_URL, PROPER_NAME, TAGLINE } from "@/utils/constants";
import { type BlogType } from "@/utils/types/shared.types";
import { type NextPage, type Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home",
    description: TAGLINE,
    openGraph: {
      title: "Lattice AI - Next Generation AI Platform",
      description: TAGLINE,
    },
    twitter: {
      title: "Lattice AI - Next Generation AI Platform",
      description:
        "Build, customize, and deploy advanced AI applications with Lattice AI platform",
    },
  };
};

const HomePage: NextPage = () => {
  const blogs = [...blogsLoader.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  // Home page JSON-LD
  const homePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PROPER_NAME,
    description: TAGLINE,
    url: DEPLOYED_URL,
    isPartOf: {
      "@type": "WebSite",
      name: PROPER_NAME,
      url: DEPLOYED_URL,
    },
    about: {
      "@type": "SoftwareApplication",
      name: PROPER_NAME,
      applicationCategory: "AIApplication",
      operatingSystem: "All",
      description: TAGLINE,
    },
  };

  return (
    <>
      {/* Add JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <HomeHero />
      <Community />
      <Users />
      <LLMOS />
      <VibeStudio />
      <Blogs blogs={blogs.slice(0, 2) as BlogType[]} />
      <Waitlist />
    </>
  );
};

export default HomePage;
