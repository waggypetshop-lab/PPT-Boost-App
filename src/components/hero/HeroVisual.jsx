import heroLaptop from '../../assets/best-hero-laptop.png';
import fantaSlide from '../../assets/Fanta-Slide-Good.png';
import FloatingSlide from './FloatingSlide';

const SATELLITE_SLIDES = [
  {
    alt: 'Slide 2',
    positionClass: 'top-[42%] -translate-y-1/2 left-[-5%]',
    width: '170px',
    delay: 150,
    floatSpeed: 'fast',
    hideBelow: 'lg',
  },
  {
    alt: 'Slide 3',
    positionClass: 'bottom-[-3%] left-[55%] -translate-x-1/2',
    width: '200px',
    delay: 250,
    floatSpeed: 'medium',
    hideBelow: 'md',
  },
  {
    alt: 'Slide 4',
    positionClass: 'top-[8%] left-[5%]',
    width: '150px',
    delay: 350,
    floatSpeed: 'slow',
    hideBelow: 'lg',
  },
  {
    alt: 'Slide 5',
    positionClass: 'top-[5%] right-[3%]',
    width: '155px',
    delay: 450,
    floatSpeed: 'fast',
    hideBelow: 'lg',
  },
  {
    alt: 'Slide 6',
    positionClass: 'top-[55%] -translate-y-1/2 right-[-6%]',
    width: '170px',
    delay: 550,
    floatSpeed: 'medium',
    hideBelow: 'lg',
  },
  {
    alt: 'Slide 7',
    positionClass: 'top-[-3%] left-[42%] -translate-x-1/2',
    width: '180px',
    delay: 650,
    floatSpeed: 'slow',
    hideBelow: 'md',
  },
];

export default function HeroVisual() {
  return (
    <div className="flex items-center justify-center min-h-[500px] sm:min-h-[700px] lg:min-h-[900px]">
      <div className="w-full max-w-[950px] h-[500px] sm:h-[700px] lg:h-[850px] mx-auto flex items-center justify-center">

        {/* Asymmetrical Mobile Glow */}
        <div className="absolute -top-[10%] -right-[20%] w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full md:hidden pointer-events-none -z-10" />

        {/* Fluid, responsive laptop wrapper */}
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none lg:w-[120%] mx-auto lg:-right-[10%] animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/30 blur-[100px] scale-110 -z-10" />
            <img
              src={heroLaptop}
              alt="Hero Laptop - Slide 1"
              className="w-full h-auto object-contain drop-shadow-[0_30px_80px_rgba(249,115,22,0.4)]"
            />
          </div>
        </div>

        {/* Satellite Slides — hide on mobile */}
        {/*
        <div className="hidden md:block">
          {SATELLITE_SLIDES.map((slide) => (
            <FloatingSlide
              key={slide.alt}
              src={fantaSlide}
              {...slide}
            />
          ))}
        </div>
        */}

      </div>
    </div>
  );
}
