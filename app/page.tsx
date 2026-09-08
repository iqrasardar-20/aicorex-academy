import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrainingPrograms from "./components/TrainingPrograms";
import AboutPreview from "./components/AboutPreview";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrainingPrograms />
        <AboutPreview />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}