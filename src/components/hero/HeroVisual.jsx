import heroLaptop from '../../assets/best-hero-laptop.png';
import fantaSlide from '../../assets/Fanta-Slide-Good.png';
import FloatingSlide from './FloatingSlide';

const SATELLITE_SLIDES = [
  // --- The Core 3 (Mobile Arch -> Desktop Orbit) ---
  {
    alt: 'Top Left Slide',
    // Mobile: Center. Desktop: High above the left edge of the laptop.
    positionClass: 'left-1/2 -translate-x-1/2 -top-[55%] sm:-top-[65%] xl:translate-x-0 xl:left-[10%] xl:-top-[40%]',
    width: 'w-[120px] sm:w-[160px] xl:w-[140px]',
    delay: 150,
    floatSpeed: 'slow',
  },
  {
    alt: 'Middle Left Slide',
    // Mobile: Left. Desktop: Tucked perfectly in the gap between text and laptop.
    positionClass: 'left-[2%] sm:-left-[5%] md:-left-[20%] -top-[20%] sm:-top-[25%] xl:-left-[15%] xl:top-[10%]',
    width: 'w-[90px] sm:w-[130px] xl:w-[180px]',
    delay: 300,
    floatSpeed: 'medium',
  },
  {
    alt: 'Middle Right Slide',
    // Mobile: Right. Desktop: Floating to the right of the laptop screen.
    positionClass: 'right-[2%] sm:-right-[5%] md:-right-[20%] -top-[20%] sm:-top-[25%] xl:-right-[0%] xl:top-[30%]',
    width: 'w-[90px] sm:w-[130px] xl:w-[130px]',
    delay: 450,
    floatSpeed: 'fast',
  },

  // --- The 3 Desktop Expanders ---
  {
    alt: 'Bottom Left Slide',
    // Desktop only: Below the laptop on the left.
    positionClass: 'hidden xl:block xl:left-[10%] xl:top-[110%]',
    width: 'w-[140px]',
    delay: 600,
    floatSpeed: 'slow',
  },
  {
    alt: 'Top Right Slide',
    // Desktop only: High up, far right, smallest size to create depth.
    positionClass: 'hidden xl:block xl:right-[15%] xl:-top-[35%]',
    width: 'w-[100px]',
    delay: 750,
    floatSpeed: 'medium',
  },
  {
    alt: 'Bottom Right Slide',
    // Desktop only: Bottom right corner, massive size.
    positionClass: 'hidden xl:block xl:-right-[0%] xl:top-[115%]',
    width: 'w-[180px]',
    delay: 900,
    floatSpeed: 'fast',
  },
];


export default function HeroVisual() {
  return (
    <div className="flex items-center justify-center min-h-[500px] sm:min-h-[700px] lg:min-h-[900px]">
      <div className="relative w-full max-w-[950px] h-[500px] sm:h-[700px] lg:h-[850px] mx-auto flex items-center justify-center">

        {/* Fluid, responsive laptop wrapper */}
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] xl:max-w-none xl:w-[120%] mx-auto xl:-right-[10%] animate-fade-in-up">
          <div className="relative">
            <div className="absolute -top-[20%] -left-[10%] w-[150%] h-[150%] bg-orange-500/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10 xl:inset-0 xl:w-full xl:h-full xl:scale-110 xl:top-0 xl:left-0 xl:bg-orange-500/30" />
            <img
              src={heroLaptop}
              alt="Hero Laptop - Slide 1"
              className="w-full h-auto object-contain drop-shadow-[0_30px_80px_rgba(249,115,22,0.4)]"
            />
            <div className="absolute inset-0 pointer-events-none z-40">
              {SATELLITE_SLIDES.map((slide) => (
                <FloatingSlide
                  key={slide.alt}
                  src={fantaSlide}
                  alt={slide.alt}
                  positionClass={slide.positionClass}
                  width={slide.width}
                  delay={slide.delay}
                  floatSpeed={slide.floatSpeed}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
