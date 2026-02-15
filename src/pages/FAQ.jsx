import { Link } from 'react-router-dom';
import { Mail, Download, CreditCard, FileText } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Questions</span>
        </h1>
        <p className="text-gray-400 mb-12">Everything you need to know about PPT Boost templates</p>

        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <Download className="text-orange-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">How do I receive my template?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  After completing your purchase, you'll receive your template in two ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li><strong>Instant Email:</strong> A download link will be sent to your email immediately after payment</li>
                  <li><strong>On-Site Download:</strong> You can also download your template directly from your account dashboard</li>
                  <li><strong>Forever Access:</strong> Your purchase is saved to your account, so you can re-download anytime</li>
                </ul>
                <p className="text-gray-400 text-sm mt-4">
                  💡 Tip: Check your spam folder if you don't see the email within 5 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <CreditCard className="text-orange-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Do I need a subscription?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>No subscription required!</strong> PPT Boost operates on a simple one-time purchase model.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Pay once, own forever</li>
                  <li>No recurring charges</li>
                  <li>No hidden fees</li>
                  <li>Buy only what you need, when you need it</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Each template is a standalone purchase. You can buy one template or multiple - it's completely up to you!
                </p>
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <FileText className="text-orange-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Can I return a digital product?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Due to the digital nature of our products, <strong>all sales are final</strong>.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  However, we do offer refunds in specific circumstances, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>The file is technically defective or corrupted</li>
                  <li>We are unable to fix a technical issue</li>
                  <li>You purchased the wrong product by accident (before downloading)</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  For complete details, please read our{' '}
                  <Link to="/refunds" className="text-orange-500 hover:text-orange-400 underline font-semibold">
                    Refund Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <FileText className="text-orange-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">What software do I need?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All PPT Boost templates are designed for <strong>Microsoft PowerPoint</strong>.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Compatible with PowerPoint 2016 and later</li>
                  <li>Works on Windows and Mac</li>
                  <li>Can also be used with Google Slides (with some limitations)</li>
                  <li>Fully editable - no special software required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                <FileText className="text-orange-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Can I use templates for client work?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>Yes, absolutely!</strong> Our license allows both personal and commercial use.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Use for client projects</li>
                  <li>Use for your business presentations</li>
                  <li>Modify and customize as needed</li>
                  <li>Create unlimited presentations</li>
                </ul>
                <p className="text-red-300 mt-4 font-semibold">
                  ⚠️ Important: You cannot resell or redistribute the template files themselves. See our{' '}
                  <Link to="/terms" className="text-orange-500 hover:text-orange-400 underline">
                    Terms of Service
                  </Link>{' '}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
          <Mail className="mx-auto text-orange-500 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Our support team is here to help you with any questions or issues.
          </p>
          <a 
            href="mailto:support@pptboost.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-black font-bold rounded-full text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] active:scale-95"
          >
            <Mail size={20} />
            support@pptboost.com
          </a>
          <p className="text-gray-400 text-sm mt-4">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
