import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import GenerateSection from "@/components/GenerateSection";
import GallerySection from "@/components/GallerySection";
// import PopButton from "@/components/PopButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen dark:bg-gray-900">
      <NavBar />
      <HeroSection />
      <GenerateSection />
      <GallerySection />
      {/* <PopButton /> */}
      <Footer />
    </main>
  );
}
