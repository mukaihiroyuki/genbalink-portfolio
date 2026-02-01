import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}
