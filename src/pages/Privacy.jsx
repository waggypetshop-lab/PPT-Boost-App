export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Policy</span>
        </h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p>
                Welcome to PPT Boost. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our website and purchase our digital products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p>We collect the following information to process your orders and provide our services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name and email address for order processing and delivery</li>
                <li><strong>Payment Information:</strong> Payment details processed securely through Stripe (we do not store card information)</li>
                <li><strong>Usage Data:</strong> Basic analytics to improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and deliver your template purchases</li>
                <li>Send order confirmations and download links</li>
                <li>Provide customer support</li>
                <li>Send important updates about our products (you can opt out anytime)</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Data Storage and Security</h2>
              <p>
                Your data is securely stored using <strong>Supabase</strong>, a trusted database platform with enterprise-grade security. We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.
              </p>
              <p className="mt-4">
                Payment processing is handled by <strong>Stripe</strong>, a PCI-compliant payment processor. We never store your credit card information on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Supabase:</strong> Database and authentication</li>
                <li><strong>Stripe:</strong> Payment processing</li>
                <li><strong>Email Service:</strong> For sending order confirmations and downloads</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies and handle your data according to their terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@pptboost.com" className="text-orange-500 hover:text-orange-400 underline">privacy@pptboost.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
              <p>
                We use essential cookies to maintain your session and improve your browsing experience. We do not use tracking cookies for advertising purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@pptboost.com" className="text-orange-500 hover:text-orange-400 underline">privacy@pptboost.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
