
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ScoreMAX Blueprint</span>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Privacy Policy – ScoreMAX Blueprint</strong><br />
              <strong>Effective Date:</strong> [Insert Date]
            </p>
            
            <p className="text-gray-700 mb-6">
              At ScoreMAX Blueprint, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you purchase our digital products.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">When you purchase from us, we may collect:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Your name and email address (for product delivery)</li>
              <li>Payment information (processed securely by our payment gateway)</li>
              <li>IP address and browser information (for security purposes)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Deliver your purchased digital products via email</li>
              <li>Provide customer support when needed</li>
              <li>Send order confirmations and receipts</li>
              <li>Comply with legal requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information. Payment processing is handled by secure, PCI-compliant payment gateways.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              We use trusted third-party services for payment processing and email delivery. These services have their own privacy policies and security measures.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your information only as long as necessary to provide our services and comply with legal obligations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-6">
              You have the right to access, update, or delete your personal information. Contact us at scoremax.blueprint@gmail.com for any privacy-related requests.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this Privacy Policy, please contact us at scoremax.blueprint@gmail.com.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Contact: scoremax.blueprint@gmail.com | Grievance Officer: Abhinand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
