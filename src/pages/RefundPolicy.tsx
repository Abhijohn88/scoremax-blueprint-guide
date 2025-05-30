
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const RefundPolicy = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Our products are digital and delivered instantly. Hence, we maintain a strict No Refund Policy.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Eligibility</h2>
            <p className="text-gray-700 mb-4">Refunds will not be issued unless:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>A duplicate payment has been made</li>
              <li>The product is defective and cannot be accessed despite technical support</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How to Request</h2>
            <p className="text-gray-700 mb-6">
              In such rare cases, email us at scoremax.blueprint@gmail.com within 2 days of purchase. Attach payment proof and screenshots.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Evaluation & Processing</h2>
            <p className="text-gray-700 mb-6">
              Each request will be evaluated within 5 working days. Refunds (if applicable) will be credited to the original payment method within 7–10 working days.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Disqualification</h2>
            <p className="text-gray-700 mb-4">Refunds will not be provided if:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>You simply change your mind</li>
              <li>You didn't read the product description carefully</li>
              <li>You downloaded the product successfully</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Chargebacks</h2>
            <p className="text-gray-700 mb-6">
              Unlawful chargebacks will result in blacklisting from future purchases and legal action under Section 66C of the IT Act.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
