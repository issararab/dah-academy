import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Gap } from "./components/sections/Gap";
import { Approach } from "./components/sections/Approach";
import { WhoWeServe } from "./components/sections/WhoWeServe";
import { Programs } from "./components/sections/Programs";
import { Books } from "./components/sections/Books";
import { WhyDah } from "./components/sections/WhyDah";
import { NewsletterCTA } from "./components/sections/NewsletterCTA";
import { Founder } from "./components/sections/Founder";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Gap />
      <Approach />
      <WhoWeServe />
      <Programs />
      <Books />
      <WhyDah />
      <NewsletterCTA />
      <Founder />
      <Footer />
    </div>
  );
}
