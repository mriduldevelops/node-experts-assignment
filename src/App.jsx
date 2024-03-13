import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

export default function App() {
  return (
    <div>
      <img
        src="/src/assets/woman-in-blue-crew-neck-shirt-using-black-laptop-computer-3994051.png"
        alt="background-image"
        className="absolute z-0"
      />
      <div className="absolute z-1 w-full h-full bg-[#4324be80]">
        <Nav />
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer/>
      </div>
    </div>
  );
}
