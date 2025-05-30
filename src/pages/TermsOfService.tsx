
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Terms of Service – ScoreMAX Blueprint</strong><br />
              <strong>Effective Date:</strong> [Insert Date]
            </p>
            
            <p className="text-gray-700 mb-6">
              Welcome to ScoreMAX Blueprint. By purchasing or accessing our products, you agree to the following Terms of Service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Product Usage</h2>
            <p className="text-gray-700 mb-6">
              ScoreMAX Blueprints are digital PDF files meant for academic planning and scoring strategy. They are for individual use only and cannot be redistributed or resold.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content, trademarks, and graphics are owned by ScoreMAX Blueprint and protected under Indian copyright laws. Unauthorized reproduction is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Obligations</h2>
            <p className="text-gray-700 mb-4">Users agree:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Not to misuse the site or Blueprints</li>
              <li>Not to reverse engineer or distribute the files</li>
              <li>To provide accurate contact information during checkout</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Access & Availability</h2>
            <p className="text-gray-700 mb-6">
              Upon successful payment, access to the files is immediate. If you face any issues, contact support within 48 hours.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Refunds</h2>
            <p className="text-gray-700 mb-6">
              All purchases are final and non-refundable. For exceptional cases, see our Refund Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              We do not guarantee any academic results. These guides are designed to help students prioritize, not replace study material.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              In case of dispute, you agree to arbitration in Bangalore, Karnataka under Indian Arbitration laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of India. Any disputes will be under the exclusive jurisdiction of courts in Bangalore.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
