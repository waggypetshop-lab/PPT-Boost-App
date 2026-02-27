import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center z-20 max-w-2xl mx-auto lg:mx-0 lg:ml-12 xl:ml-24 lg:-mt-8 mt-12 sm:mt-16"
    >
      <h2 className="text-[clamp(1rem,1.5vw,1.5rem)] font-bold text-orange-500 tracking-widest uppercase mb-2">
        No Static.
      </h2>

      <h1 className="text-[clamp(3rem,8vw,5.5rem)] lg:text-[clamp(3.5rem,5vw,7rem)] font-black text-white leading-[0.9] tracking-tight">
        NO MORE{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600">
          BORING SLIDES.
        </span>
      </h1>

      <p className="mt-8 text-[clamp(1rem,1.5vw,1.25rem)] text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Stop starting from scratch. Download 50+ conversion-ready templates used
        by industry leaders, or master the art of presentation design with our
        expert-led courses.
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
        <Link
          to="/templates"
          className="text-[clamp(0.875rem,1.2vw,1.125rem)] px-[clamp(1.5rem,2.5vw,2rem)] py-[clamp(0.75rem,1.2vw,1rem)] whitespace-nowrap bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-bold text-white hover:scale-105 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.4)]"
        >
          Get All Access
        </Link>

        <Link
          to="/templates"
          className="text-[clamp(0.875rem,1.2vw,1.125rem)] px-[clamp(1.5rem,2.5vw,2rem)] py-[clamp(0.75rem,1.2vw,1rem)] whitespace-nowrap bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition-colors"
        >
          Explore templates
        </Link>
      </div>
    </motion.div>
  );
}
