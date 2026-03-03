import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Refunds from './pages/Refunds';
import FAQ from './pages/FAQ';
import Templates from './pages/Templates';

// Testimonials Page Component (Placeholder)
const Testimonials = () => (
  <div className="pt-24 min-h-screen bg-[#0a0a0a] px-4 pb-12">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold text-white">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Testimonials</span>
        </h1>
        <p className="text-gray-400 text-lg">
          What our clients say about working with us
        </p>
      </div>

      {/* Placeholder Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-12 text-center">
          <p className="text-2xl text-gray-400 mb-8">
            Testimonials coming soon...
          </p>
          <p className="text-gray-500">
            We're gathering feedback from our amazing clients. Check back soon!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500/30 relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}