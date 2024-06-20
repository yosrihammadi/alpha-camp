import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/homepage/about";
import { Hero } from "@/components/homepage/hero";
import Shop from "@/components/homepage/shop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Shop />
      <Footer />
    </>
  );
}
