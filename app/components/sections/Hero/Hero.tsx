import HeroIntro from "./HeroIntro";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-32 bg-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <HeroIntro />
        <HeroTitle />
        <HeroSubtitle />
        <HeroCTA />
      </div>
    </section>
  );
};

export default Hero;
