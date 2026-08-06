import Hero from "@/components/Hero";
import ActionCards from "@/components/ActionCards";
import About from "@/components/About";
import PreviewGrid from "@/components/PreviewGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ActionCards />
      <About />
      <PreviewGrid />
      <Footer />
    </main>
  );
}
