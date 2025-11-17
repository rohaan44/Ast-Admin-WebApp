import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Method from "@/components/Method";
import About from "@/components/About";
import App from "@/components/App";
import Features from "@/components/Features";
import Position from "@/components/Position";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Method />
        <About />
        <App />
        <Features />
        <Position />
        <Testimonials />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
