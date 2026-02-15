export default function Refunds() {
  return (
    <div className="pt-24 min-h-screen bg-[#0a0a0a] px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">
          Refund <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Policy</span>
        </h1>
        <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Digital Product Policy</h2>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 my-6">
                <p className="font-semibold text-orange-400 mb-4">Important Notice</p>
                <p className="text-lg">
                  <strong>Due to the digital nature of our products, all sales are final.</strong>
                </p>
              </div>
              <p>
                Once you have downloaded a template, we cannot "take it back" or verify deletion from your computer. Therefore, we do not offer refunds on digital downloads under normal circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Exceptions</h2>
              <p>
                We understand that technical issues can occur. We will consider refund requests in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Technical Defects:</strong> If the downloaded file is corrupted, incomplete, or technically defective</li>
                <li><strong>Inability to Fix:</strong> If we cannot resolve the technical issue within a reasonable timeframe</li>
                <li><strong>Wrong Product:</strong> If you accidentally purchased the wrong template and contact us immediately (before downloading)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How to Request a Refund</h2>
              <p>If you believe you qualify for a refund under our exception policy:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us at <a href="mailto:support@pptboost.com" className="text-orange-500 hover:text-orange-400 underline">support@pptboost.com</a> within <strong>7 days</strong> of purchase</li>
                <li>Include your order number and a detailed description of the issue</li>
                <li>If claiming a technical defect, include screenshots or error messages</li>
                <li>Allow us 24-48 hours to review your request</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What We'll Do</h2>
              <p>When you report an issue, we will:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Investigate the problem promptly</li>
                <li>Attempt to provide a fix or replacement file</li>
                <li>Offer technical support to resolve compatibility issues</li>
                <li>Issue a refund only if we cannot resolve the issue</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Non-Refundable Situations</h2>
              <p>We <strong>cannot</strong> issue refunds for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Change of mind after downloading</li>
                <li>"I don't like the design" (all templates have previews before purchase)</li>
                <li>User error or lack of software knowledge</li>
                <li>Compatibility issues with your specific setup (all system requirements are listed)</li>
                <li>Buyer's remorse or budgetary reasons</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Preview Before Purchase</h2>
              <p>
                To help you make informed decisions, we provide:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Detailed preview images for every template</li>
                <li>Full slide previews showing all included layouts</li>
                <li>Clear descriptions of what's included</li>
                <li>System requirements and compatibility information</li>
              </ul>
              <p className="mt-4">
                Please review these carefully before making a purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Chargeback Policy</h2>
              <p className="text-yellow-400 font-semibold">
                ⚠️ Important: Filing a chargeback instead of contacting us may result in account suspension.
              </p>
              <p className="mt-4">
                We take chargebacks seriously. If you file a chargeback without attempting to resolve the issue with us first:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your account will be suspended</li>
                <li>You will lose access to any previously purchased templates</li>
                <li>We reserve the right to pursue legal action for fraudulent chargebacks</li>
              </ul>
              <p className="mt-4">
                <strong>Always contact us first at support@pptboost.com</strong> - we're here to help!
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Payment Processing</h2>
              <p>
                All refunds are processed through the original payment method via Stripe. Please allow 5-10 business days for the refund to appear in your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Questions?</h2>
              <p>
                If you have any questions about our refund policy, please don't hesitate to reach out to us at <a href="mailto:support@pptboost.com" className="text-orange-500 hover:text-orange-400 underline">support@pptboost.com</a> before making a purchase.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
