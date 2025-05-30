
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Disclaimer = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              All information provided in our ScoreMAX Blueprints is based on past paper trends and academic pattern analysis. We do not claim to predict or guarantee exact questions in any CBSE exam.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our content is:</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Not a replacement for full classroom learning or NCERT books</li>
              <li>Only a strategic support tool to help students identify high-frequency topics</li>
              <li>Not meant for rote memorization but planning support</li>
            </ul>

            <p className="text-gray-700 mb-6">
              We are not responsible for exam outcomes, incorrect usage, or technical issues arising from third-party platforms (payment gateways or PDF viewers).
            </p>

            <p className="text-gray-700 mb-6">
              Use of our product signifies acceptance of this disclaimer. If in doubt, consult a qualified educator before relying solely on our guides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
