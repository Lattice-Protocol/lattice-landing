import { HomeHero, Community, Users } from "@/components/home";
import { type NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <HomeHero />
      <Community />
      <Users />
    </>
  );
};

export default HomePage;
