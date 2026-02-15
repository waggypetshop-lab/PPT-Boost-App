import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Palette } from 'lucide-react';

export default function Services() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section - The Split */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What do you <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">need?</span>
          </h1>
          <p className="text-xl text-gray-400">
            Choose your path to presentation perfection
          </p>
        </div>

        {/* Two Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Card 1: Premium Templates */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer hover:border-orange-500/50">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] transition-all">
                <Sparkles size={40} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Premium Templates
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Ready-to-use, professionally designed templates. Download instantly and customize to match your brand.
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Instant access to our full library</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Fully editable in PowerPoint</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Professional design guaranteed</span>
                </li>
              </ul>
              <Link 
                to="/templates"
                className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] active:scale-95 flex items-center justify-center gap-2"
              >
                Browse Templates <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Card 2: Custom Design */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer hover:border-orange-500/50">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] transition-all">
                <Palette size={40} className="text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Custom Design
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Need something unique? We'll design a custom presentation tailored to your exact needs and brand.
              </p>
              <ul className="space-y-3 text-left w-full">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>100% custom design from scratch</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Unlimited revisions included</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Dedicated designer for your project</span>
                </li>
              </ul>
              <a
                href="#contact-form"
                onClick={handleSmoothScroll}
                className="w-full mt-6 px-8 py-4 bg-white/10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-600 text-white hover:text-black font-bold rounded-xl text-lg transition-all border border-white/20 hover:border-transparent flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact-form" className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Vision</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Project Type Dropdown */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                required
              >
                <option value="" className="bg-black">Select a type...</option>
                <option value="pitch-deck" className="bg-black">Pitch Deck</option>
                <option value="sales-presentation" className="bg-black">Sales Presentation</option>
                <option value="corporate-training" className="bg-black">Corporate Training</option>
                <option value="conference-talk" className="bg-black">Conference Talk</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Tell us about your presentation
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] active:scale-95"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>

      {/* Footer Spacing */}
      <div className="h-20"></div>
    </div>
  );
}
