export default function Terms() {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">
          Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Service</span>
        </h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using PPT Boost ("the Service"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property & License</h2>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 my-6">
                <p className="font-semibold text-orange-400 mb-4">IMPORTANT: License Terms</p>
                <p className="mb-4">
                  When you purchase a template from PPT Boost, you are granted a <strong>non-exclusive, non-transferable license</strong> to use the template for your personal or commercial projects.
                </p>
                <p className="mb-4">
                  <strong>You MAY:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li>Use the template for personal projects</li>
                  <li>Use the template for client work and commercial projects</li>
                  <li>Modify and customize the template to fit your needs</li>
                  <li>Create unlimited presentations using the template</li>
                </ul>
                <p className="mb-4">
                  <strong className="text-red-400">You MAY NOT:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                  <li className="text-red-300"><strong>Resell, redistribute, or share the original template file</strong></li>
                  <li className="text-red-300"><strong>Sublicense or transfer your license to another person</strong></li>
                  <li className="text-red-300"><strong>Offer the template for download on any website or platform</strong></li>
                  <li className="text-red-300"><strong>Include the template in any template marketplace or bundle</strong></li>
                  <li className="text-red-300">Claim the template design as your own original work</li>
                </ul>
                <p className="font-semibold">
                  <strong>PPT Boost retains full ownership</strong> of all templates and intellectual property. Your purchase grants you usage rights only, not ownership of the design files.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Digital Products</h2>
              <p>
                All products sold on PPT Boost are digital downloads. Upon successful payment, you will receive immediate access to download your purchased template(s).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Account Responsibility</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Prohibited Uses</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Share or distribute purchased templates illegally</li>
                <li>Attempt to reverse engineer or extract source files</li>
                <li>Use automated systems to scrape or download content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Copyright Infringement</h2>
              <p>
                We take copyright infringement seriously. If you believe your work has been copied in a way that constitutes copyright infringement, please contact us at <a href="mailto:legal@pptboost.com" className="text-orange-500 hover:text-orange-400 underline">legal@pptboost.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <p>
                PPT Boost provides templates "as is" without warranties of any kind. We are not liable for any damages arising from the use or inability to use our templates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to the Service immediately, without prior notice, for violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at <a href="mailto:legal@pptboost.com" className="text-orange-500 hover:text-orange-400 underline">legal@pptboost.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
