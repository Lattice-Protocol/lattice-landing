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
import { type BlogType } from "@/utils/types/shared.types";
import { type NextPage } from "next";

const HomePage: NextPage = () => {
  const blogs = [...blogsLoader.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  );

  return (
    <>
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
