import About from "@/components/homepage/about";
import Blog from "@/components/homepage/blog";
import Discover from "@/components/homepage/discover";
import { Hero } from "@/components/homepage/hero";
import Shop from "@/components/homepage/shop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Discover />
      <Shop />
      <Blog />
    </>
  );
}
