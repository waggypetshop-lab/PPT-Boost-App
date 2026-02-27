import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/hero/HeroSection';
import { supabase } from '../lib/supabaseClient';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      <HeroSection />

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