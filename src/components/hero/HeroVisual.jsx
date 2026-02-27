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

const ORBIT_RINGS = [
  {
    size: 'w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]',
    border: 'border-orange-500/15',
    delay: 600,
  },
  {
    size: 'w-[200px] h-[200px] sm:w-[270px] sm:h-[270px] md:w-[350px] md:h-[350px] lg:w-[440px] lg:h-[440px]',
    border: 'border-white/10',
    delay: 800,
  },
  {
    size: 'w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] md:w-[750px] md:h-[750px] lg:w-[950px] lg:h-[950px]',
    border: 'border-white/10',
    delay: 1000,
  },
];


export default function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[700px] lg:min-h-[900px] overflow-hidden">
      <div className="relative w-full max-w-[950px] h-[500px] sm:h-[700px] lg:h-[850px] mx-auto">

        {/* Orbit Rings — staggered reveal from center outward */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          {ORBIT_RINGS.map((ring, i) => (
            <div
              key={i}
              className={`absolute ${ring.size} border ${ring.border} rounded-full animate-ring-reveal`}
              style={{ animationDelay: `${ring.delay}ms`, opacity: 0 }}
            />
          ))}
        </div>

        {/* Center Laptop */}
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="animate-fade-in-up w-[260px] sm:w-[360px] md:w-[480px] lg:w-[580px]" style={{ animationDelay: '0ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 blur-[100px] scale-110 -z-10" />
              <img
                src={heroLaptop}
                alt="Hero Laptop - Slide 1"
                className="w-full h-auto drop-shadow-[0_30px_80px_rgba(249,115,22,0.4)]"
              />
            </div>
          </div>
        </div>

        {/* Satellite Slides */}
        {SATELLITE_SLIDES.map((slide) => (
          <FloatingSlide
            key={slide.alt}
            src={fantaSlide}
            {...slide}
          />
        ))}


      </div>
    </div>
  );
}
