import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-start text-left justify-center z-20 max-w-2xl lg:ml-12 xl:ml-24 lg:-mt-8"
    >
      <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest uppercase mb-2">
        No Static.
      </h2>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9]">
        NO MORE{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600">
          BORING SLIDES.
        </span>
      </h1>

      <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
        Stop starting from scratch. Download 50+ conversion-ready templates used
        by industry leaders, or master the art of presentation design with our
        expert-led courses.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">
        <Link
          to="/templates"
          className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-bold text-lg text-white hover:scale-105 transition-transform shadow-[0_0_30px_rgba(249,115,22,0.4)]"
        >
          Get All Access
        </Link>

        <Link
          to="/templates"
          className="px-8 py-4 bg-white/10 border border-white/20 rounded-full font-bold text-lg text-white hover:bg-white/20 transition-colors"
        >
          Explore templates
        </Link>
      </div>
    </motion.div>
  );
}
