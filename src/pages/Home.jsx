import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroLaptop from '../assets/best-hero-laptop.png';
import fantaSlide from '../assets/Fanta-Slide-Good.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      {/* Atmospheric Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(249,115,22,0.15),transparent_70%)]"></div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center overflow-hidden">
        {/* Container - Increased max-width and added gap to separate groups */}
        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-20 pt-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-40 items-center">

            {/* =========================================
    GROUP 1: LEFT SIDE (Text & Buttons)
    ========================================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-start text-left justify-center z-20 max-w-2xl lg:ml-12 xl:ml-24 lg:-mt-8"
            >
              {/* Subheadline */}
              <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-widest uppercase mb-2">
                No Static.
              </h2>

              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9]">
                NO MORE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600">
                  BORING SLIDES.
                </span>
              </h1>

              {/* Value Proposition - Updated Copy */}
              <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Stop starting from scratch. Download 50+ conversion-ready templates used by industry leaders, or master the art of presentation design with our expert-led courses.
              </p>

              {/* Buttons Group */}
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

            {/* =========================================
    GROUP 2: RIGHT SIDE - PREMIUM ORBITAL COMPOSITION
    Architecture: 3-level wrapper per element
      L1 = Absolute positioning (no animation)
      L2 = Entrance animation (fade-in-up / ring-reveal)
      L3 = Perpetual float animation
    ========================================= */}
            <div className="relative flex items-center justify-center min-h-[800px] lg:min-h-[900px]">
              <div className="relative w-full max-w-[950px] h-[850px] mx-auto">

                {/* ====== ORBIT RINGS - Staggered Reveal ======
                     Middle ring first at 600ms, then +200ms each */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                  {/* Middle Ring (appears first at 600ms) */}
                  <div
                    className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px] border border-orange-500/15 rounded-full animate-ring-reveal"
                    style={{ animationDelay: '600ms', opacity: 0 }}
                  ></div>
                  {/* Inner Ring (800ms) */}
                  <div
                    className="absolute w-[350px] h-[350px] md:w-[440px] md:h-[440px] border border-white/10 rounded-full animate-ring-reveal"
                    style={{ animationDelay: '800ms', opacity: 0 }}
                  ></div>
                  {/* Outer Ring (1000ms) */}
                  <div
                    className="absolute w-[750px] h-[750px] md:w-[950px] md:h-[950px] border border-white/10 rounded-full animate-ring-reveal"
                    style={{ animationDelay: '1000ms', opacity: 0 }}
                  ></div>
                </div>

                {/* ====== CENTER: SLIDE 1 - LAPTOP (delay: 0ms) ====== */}
                <div className="absolute inset-0 flex items-center justify-center z-50">
                  <div className="animate-fade-in-up w-[480px] md:w-[580px]" style={{ animationDelay: '0ms' }}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/30 blur-[100px] scale-110 -z-10"></div>
                      <img
                        src={heroLaptop}
                        alt="Hero Laptop - Slide 1"
                        className="w-full h-auto drop-shadow-[0_30px_80px_rgba(249,115,22,0.4)]"
                      />
                    </div>
                  </div>
                </div>

                {/* ====== SATELLITE SLIDES - Organic Asymmetric Positioning ====== */}

                {/* FAR LEFT: SLIDE 2 — pushed further left, slightly high */}
                <div className="hidden lg:block absolute top-[42%] -translate-y-1/2 left-[-5%] z-20">
                  <div className="animate-fade-in-up w-[170px]" style={{ animationDelay: '150ms' }}>
                    <div className="animate-float-fast">
                      <img src={fantaSlide} alt="Slide 2" className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* BOTTOM CENTER: SLIDE 3 — offset right from center */}
                <div className="hidden md:block absolute bottom-[-3%] left-[55%] -translate-x-1/2 z-20">
                  <div className="animate-fade-in-up w-[200px]" style={{ animationDelay: '250ms' }}>
                    <div className="animate-float-medium">
                      <img src={fantaSlide} alt="Slide 3" className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* TOP LEFT DIAGONAL: SLIDE 4 — pushed further into corner */}
                <div className="hidden lg:block absolute top-[8%] left-[5%] z-20">
                  <div className="animate-fade-in-up w-[150px]" style={{ animationDelay: '350ms' }}>
                    <div className="animate-float-slow">
                      <img src={fantaSlide} alt="Slide 4" className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* TOP RIGHT DIAGONAL: SLIDE 5 — higher and wider than Slide 4 */}
                <div className="hidden lg:block absolute top-[5%] right-[3%] z-20">
                  <div className="animate-fade-in-up w-[155px]" style={{ animationDelay: '450ms' }}>
                    <div className="animate-float-fast">
                      <img src={fantaSlide} alt="Slide 5" className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* FAR RIGHT: SLIDE 6 — pushed further right, slightly low */}
                <div className="hidden lg:block absolute top-[55%] -translate-y-1/2 right-[-6%] z-20">
                  <div className="animate-fade-in-up w-[170px]" style={{ animationDelay: '550ms' }}>
                    <div className="animate-float-medium">
                      <img src={fantaSlide} alt="Slide 6" className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* TOP CENTER: SLIDE 7 — offset left from center */}
                <div className="hidden md:block absolute top-[-3%] left-[42%] -translate-x-1/2 z-20">
                  <div className="animate-fade-in-up w-[180px]" style={{ animationDelay: '650ms' }}>
                    <div className="animate-float-slow">
                      <img src={fantaSlide} alt="Slide 7" className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 hover:scale-105 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* ====== SVG GLOW CONNECTOR LINES ======
                     Ultra-thin bezier curves from laptop center to each label.
                     viewBox matches the container (950 x 850). */}
                <svg className="hidden md:block absolute inset-0 w-full h-full z-40 pointer-events-none overflow-visible" viewBox="0 0 950 850" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Center point = ~(475, 400) */}

                  {/* Line to MORPH TRANSITIONS (far left) */}
                  <path
                    d="M 475 400 Q 300 420, 60 480"
                    stroke="rgba(249,115,22,0.2)"
                    strokeWidth="1"
                    filter="url(#glow-line)"
                    className="animate-line-draw"
                    style={{ animationDelay: '1400ms' }}
                    pathLength="1"
                  />

                  {/* Line to ASSET LIBRARY (bottom right) */}
                  <path
                    d="M 475 400 Q 580 520, 720 630"
                    stroke="rgba(249,115,22,0.2)"
                    strokeWidth="1"
                    filter="url(#glow-line)"
                    className="animate-line-draw"
                    style={{ animationDelay: '1550ms' }}
                    pathLength="1"
                  />

                  {/* Line to DATA VISUALIZATION (far right) */}
                  <path
                    d="M 475 400 Q 680 360, 920 310"
                    stroke="rgba(249,115,22,0.15)"
                    strokeWidth="1"
                    filter="url(#glow-line)"
                    className="animate-line-draw"
                    style={{ animationDelay: '1700ms' }}
                    pathLength="1"
                  />

                  {/* Line to FULLY EDITABLE (bottom center) */}
                  <path
                    d="M 475 400 Q 460 560, 430 720"
                    stroke="rgba(249,115,22,0.15)"
                    strokeWidth="1"
                    filter="url(#glow-line)"
                    className="animate-line-draw"
                    style={{ animationDelay: '1850ms' }}
                    pathLength="1"
                  />
                </svg>

                {/* ====== 4 CHARACTERISTIC LABELS ======
                     Staggered entrance after slides (1200ms+)
                     Primary = full opacity, Secondary = opacity-70 */}
                <div className="hidden md:block absolute inset-0 z-[60] pointer-events-none">

                  {/* PRIMARY: MORPH TRANSITIONS — far left, vertically centered-low */}
                  <div
                    className="absolute left-[-14%] top-[58%] animate-label-fade flex items-center pointer-events-auto cursor-default hover:text-orange-400 transition-colors"
                    style={{ animationDelay: '1400ms' }}
                  >
                    <span className="text-yellow-400 mr-2 text-lg font-bold">+</span>
                    <span className="font-black text-sm tracking-widest text-white uppercase">MORPH TRANSITIONS</span>
                  </div>

                  {/* PRIMARY: ASSET LIBRARY — below laptop, right side */}
                  <div
                    className="absolute bottom-[22%] right-[16%] animate-label-fade flex items-center pointer-events-auto cursor-default hover:text-orange-400 transition-colors"
                    style={{ animationDelay: '1550ms' }}
                  >
                    <span className="text-yellow-400 mr-2 text-lg font-bold">+</span>
                    <span className="font-black text-sm tracking-widest text-white uppercase">ASSET LIBRARY</span>
                  </div>

                  {/* SECONDARY: DATA VISUALIZATION — far right */}
                  <div
                    className="absolute right-[-18%] top-[33%] animate-label-fade flex items-center pointer-events-auto cursor-default hover:text-orange-400 transition-colors opacity-70"
                    style={{ animationDelay: '1700ms' }}
                  >
                    <span className="text-yellow-400/70 mr-2 text-lg font-bold">+</span>
                    <span className="font-black text-sm tracking-widest text-white/70 uppercase">DATA VISUALIZATION</span>
                  </div>

                  {/* SECONDARY: FULLY EDITABLE — bottom center, offset left */}
                  <div
                    className="absolute bottom-[12%] left-[42%] -translate-x-1/2 animate-label-fade flex items-center pointer-events-auto cursor-default hover:text-orange-400 transition-colors opacity-70"
                    style={{ animationDelay: '1850ms' }}
                  >
                    <span className="text-yellow-400/70 mr-2 text-lg font-bold">+</span>
                    <span className="font-black text-sm tracking-widest text-white/70 uppercase">FULLY EDITABLE</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                10K+
              </div>
              <div className="text-gray-500 text-sm mt-2">Downloads</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                4.9★
              </div>
              <div className="text-gray-500 text-sm mt-2">Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">
                50+
              </div>
              <div className="text-gray-500 text-sm mt-2">Templates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              Popular Templates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Card 1 */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center">
                  <div className="text-6xl">🎨</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Creative Morph</h3>
                  <p className="text-gray-400 text-sm mb-4">Dynamic transitions for modern presentations</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-lg">$19</span>
                    <button className="px-4 py-2 bg-orange-500/20 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-black transition-all">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl">✨</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Business Pro</h3>
                  <p className="text-gray-400 text-sm mb-4">Professional slides for executives</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-lg">$29</span>
                    <button className="px-4 py-2 bg-orange-500/20 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-black transition-all">
                      View
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Startup Pitch</h3>
                  <p className="text-gray-400 text-sm mb-4">Impress investors with bold visuals</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-lg">$24</span>
                    <button className="px-4 py-2 bg-orange-500/20 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-black transition-all">
                      View
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              What Creators Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Testimonial 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">👨‍💼</div>
                  <div>
                    <div className="font-bold">John Smith</div>
                    <div className="text-gray-400 text-sm">Marketing Director</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "These templates completely transformed our pitch decks. The morph transitions are insane!"
                </p>
                <div className="flex mt-4 text-yellow-400">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">👩‍🎨</div>
                  <div>
                    <div className="font-bold">Sarah Johnson</div>
                    <div className="text-gray-400 text-sm">Creative Director</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "Finally, templates that don't look like templates. Worth every penny!"
                </p>
                <div className="flex mt-4 text-yellow-400">
                  ★★★★★
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">👨‍💻</div>
                  <div>
                    <div className="font-bold">Mike Chen</div>
                    <div className="text-gray-400 text-sm">Startup Founder</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "Helped us raise our Series A. Investors were genuinely impressed by our deck."
                </p>
                <div className="flex mt-4 text-yellow-400">
                  ★★★★★
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Stop the Scroll?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Browse our collection of premium PowerPoint templates and start creating presentations that perform.
            </p>
            <Link
              to="/templates"
              className="inline-block px-12 py-5 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-bold text-xl text-black hover:scale-105 transition-transform shadow-[0_0_40px_rgba(249,115,22,0.4)]"
            >
              Browse Templates
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}