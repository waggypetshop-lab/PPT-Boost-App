import HeroText from './HeroText';
import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <>
      {/* Atmospheric Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(249,115,22,0.15),transparent_70%)]" />

      <section className="relative z-10 min-h-screen flex items-center w-full">
        <div className="w-full px-6 lg:px-20 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full max-w-[1600px] mx-auto">
            <HeroText />
            <HeroVisual />
          </div>
        </div>
      </section>
    </>
  );
}
