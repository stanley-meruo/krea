import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-900">
      <NavBar />
      <HeroSection />
      <Section />
    </main>
  );
}
