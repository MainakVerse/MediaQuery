import Image from "next/image";
import NavBar from "./components/nav-bar";
import Hero from "./components/hero";
import Blog from "./components/blog";
import Testimonials from "./components/testimonials";
import Pricing from "./components/pricing";
import Team from "./components/team";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Blog />
      <Testimonials />
    
      <Pricing/>
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
