import Image from "next/image";
import Hero from "@/Components/Hero/Hero";
import Porto from "@/Components/Porto/Porto";
import Navbar from "@/Components/Navbar/Navbar";
import Goals from "@/Components/Goals/Goals";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Porto />
      <Goals />
    </div>
  );
}
