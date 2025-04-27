import {
  HomeHero,
  Community,
  Users,
  LLMOS,
  VibeStudio,
  Blogs,
  Waitlist,
} from "@/components/home";
import { type NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <HomeHero />
      <Community />
      <Users />
      <LLMOS />
      <VibeStudio />
      <Blogs />
      <Waitlist />
    </>
  );
};

export default HomePage;
