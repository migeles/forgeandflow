import Image from "next/image";
import Hero from "@/Components/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import Goals from "@/Components/Goals/Goals";
import Porto from "../Components/Porto/Porto";
import Service from "@/Components/Service/Service";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <Porto />
      <Goals />
      <Service />
      <Footer />
    </div>
  );
}
