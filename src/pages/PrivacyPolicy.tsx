
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
              At ScoreMAX Blueprint, we are committed to safeguarding your privacy and ensuring that your personal data is handled responsibly, transparently, and in compliance with the laws of India, including the Information Technology Act, 2000 and all applicable rules framed thereunder.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Data Collection & Purpose</h2>
            <p className="text-gray-700 mb-4">We may collect the following information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (if provided voluntarily)</li>
              <li>Billing address (during purchase)</li>
              <li>IP address, device details, browser type (automatically collected)</li>
              <li>Student class/board preferences (for product customization)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Purpose of Collection:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>To provide access to purchased digital blueprints</li>
              <li>To notify users of updates and new product releases</li>
              <li>For payment processing via secure third-party payment gateways (e.g., Instamojo)</li>
              <li>For remarketing and analytics to improve user experience</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Legal Basis & Consent</h2>
            <p className="text-gray-700 mb-4">Your data is collected only:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>With your explicit consent</li>
              <li>For fulfilling contractual obligations (e.g., sending purchased files)</li>
              <li>For legitimate educational interests</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Payment Information</h2>
            <p className="text-gray-700 mb-6">
              All payments are securely processed via third-party payment platforms like Instamojo. We do not store or access your full payment credentials (e.g., card numbers, CVV, UPI pins).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Storage & Retention</h2>
            <p className="text-gray-700 mb-6">
              Your data is stored securely with limited access. We retain data only as long as necessary for the purpose for which it was collected or as required by Indian tax/accounting laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights Under Indian Law</h2>
            <p className="text-gray-700 mb-4">As a user, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Request access to your data</li>
              <li>Correct inaccurate or outdated information</li>
              <li>Withdraw consent at any time</li>
              <li>Request deletion of your personal data</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Email us at scoremax.blueprint@gmail.com for any such requests.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies and Meta Pixel tracking only for:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Understanding user behavior</li>
              <li>Serving better ads</li>
              <li>Notifying users about relevant offers</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You may choose to disable cookies from your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Disclosure to Third Parties</h2>
            <p className="text-gray-700 mb-4">We never sell your data. We may share it with:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Payment partners (e.g., Instamojo)</li>
              <li>Hosting providers</li>
              <li>Email marketing tools (with your permission)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Only essential data is shared under strict data security policies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data Protection Measures</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>SSL encryption on all data transactions</li>
              <li>Limited access to admin panels</li>
              <li>Secure cloud storage</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy periodically. Users will be notified of significant changes via email.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Grievance Redressal</h2>
            <p className="text-gray-700 mb-4">
              In accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, our designated Grievance Officer is:
            </p>
            <ul className="list-none text-gray-700 mb-6">
              <li><strong>Name:</strong> Abhinand</li>
              <li><strong>Email:</strong> scoremax.blueprint@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
