import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import SelectedWorks from "@/components/SelectedWorks";
import OurExpertise from "@/components/OurExpertise";
import OurProcess from "@/components/OurProcess";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <SelectedWorks />
      <OurExpertise />
      <OurProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
