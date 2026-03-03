const FLOAT_CLASS = {
  slow: 'animate-float-slow',
  medium: 'animate-float-medium',
  fast: 'animate-float-fast',
};

const HIDE_CLASS = {
  none: '',
  md: 'hidden md:block',
  lg: 'hidden lg:block',
};

export default function FloatingSlide({
  src,
  alt,
  width,
  delay,
  floatSpeed = 'medium',
  positionClass,
  hideBelow = 'none',
}) {
  return (
    <div className={`${HIDE_CLASS[hideBelow]} absolute ${positionClass} z-20`}>
      <div
        className={`animate-fade-in-up ${width}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className={FLOAT_CLASS[floatSpeed]}>
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}
