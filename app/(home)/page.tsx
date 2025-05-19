import {
  HomeHero,
  Community,
  Users,
  LLMOS,
  VibeStudio,
  Waitlist,
} from "@/components/home";
import { DEPLOYED_URL, PROPER_NAME, TAGLINE } from "@/utils/constants";
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
      <Waitlist />
    </>
  );
};

export default HomePage;
