// src/pages/HomePage.jsx
import Hero from "../components/Hero/hero";
import Programs from "../components/Programs/Programs";
import Companies from "../components/Companies/Companies";
import Residentcies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Reasons from "../components/Reasons/Reasons";
import Plans from "../components/Plans/Plans";
import Testimonials from "../assets/Testimonials/Testimonials";
import Join from "../components/Join/Join";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Programs />
      <Companies />
      <Residentcies />
      <Value />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </>
  );
}
