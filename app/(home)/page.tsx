import {
  HomeHero,
  Community,
  Users,
  LLMOS,
  VibeStudio,
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
    </>
  );
};

export default HomePage;
