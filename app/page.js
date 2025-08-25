import Image from "next/image";
import Hero from "@/Components/Hero/Hero";
import Porto from "@/Components/Porto/porto";
import Navbar from "@/Components/Navbar/Navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Porto />
    </div>
  );
}
