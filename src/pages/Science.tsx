
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Target, Clock, CheckCircle, Users, Play, ExternalLink } from 'lucide-react';

const Science = () => {
  const scrollToBuySection = () => {
    const buySection = document.getElementById('buy-section');
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyNow = () => {
    window.open('https://abhi-tzp.myinstamojo.com/checkout/v2/customer-info', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100">
      {/* Sticky Buy Now Button */}
      <button 
        onClick={handleBuyNow}
        className="fixed bottom-5 right-5 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 font-bold"
      >
        Buy Now – ₹299
      </button>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 text-gray-600" />
              <div className="text-2xl font-bold text-teal-600">ScoreMAX</div>
              <span className="ml-2 text-sm text-gray-500">Blueprint</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/maths" className="text-gray-700 hover:text-teal-600 transition-colors">Maths</Link>
              <Link to="/science" className="text-teal-600 font-medium">Science</Link>
              <Link to="/social" className="text-gray-700 hover:text-teal-600 transition-colors">Social</Link>
              <Link to="/combo" className="text-gray-700 hover:text-teal-600 transition-colors">Combo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-800 text-sm font-medium mb-6">
                🔬 Science Blueprint
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excel in <span className="text-teal-600">Physics, Chemistry & Biology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategic coverage of diagrams, reactions, and concepts that consistently appear in CBSE boards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg rounded-full">
                  Get Science Blueprint
                </Button>
                <Button asChild variant="outline" className="px-8 py-3 text-lg rounded-full border-teal-300 text-teal-600 hover:bg-teal-50">
                  <Link to="/combo">View Combo Pack</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What This Blueprint Is</h3>
              <p className="text-teal-100 text-lg leading-relaxed">
                "This is not a textbook. It's a scoring guide built from 10 years of CBSE trend data. 
                Focus on diagrams, reactions, and concepts that consistently score marks."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps You */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Helps You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Target className="w-8 h-8 text-teal-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Focus on High-Yield Topics</h3>
              <p className="text-gray-600">Identify which diagrams, reactions, and processes appear most frequently in papers</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="w-8 h-8 text-teal-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⏱️ Saves Time During Revision</h3>
              <p className="text-gray-600">Skip low-probability topics and master what consistently appears in exams</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-teal-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Built to Help You Prioritize</h3>
              <p className="text-gray-600">Not memorize everything, but strategically focus on proven scoring concepts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Product Showcase</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-teal-100">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔬</div>
                  <p className="text-teal-600 font-semibold">Diagram Priorities</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-teal-100">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🧪</div>
                  <p className="text-teal-600 font-semibold">Reaction Patterns</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-teal-100">
              <div className="aspect-video bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌿</div>
                  <p className="text-teal-600 font-semibold">Process Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Video Embed */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-2 border-teal-100">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">Science Blueprint Walkthrough</h3>
                    <p className="text-teal-100">Master diagrams and reactions that score consistently</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subject Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">All Three Sciences Covered</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Physics</h3>
                <p className="text-gray-600">Light, electricity, magnetic effects, and natural phenomena - focus on diagrams and numerical patterns</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Chemistry</h3>
                <p className="text-gray-600">Acids, bases, metals, carbon compounds - prioritize reactions and equations that score consistently</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Biology</h3>
                <p className="text-gray-600">Life processes, control systems, reproduction - master diagrams and processes that appear frequently</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
            <Users className="w-8 h-8 text-green-600 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who It's For</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "Students who want to <strong className="text-green-600">revise smart</strong> before the boards, 
              not <strong className="text-gray-500">start from scratch.</strong> 
              Perfect for focused preparation when you need to prioritize what matters most."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Students Say</h2>
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  R
                </div>
                <div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "The diagram priority list saved me so much time. I knew exactly which biology processes and chemistry reactions to focus on for my boards."
                  </blockquote>
                  <p className="text-green-600 font-medium">— Ravi K., Class 10 Student</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Does this cover full chapters?</h3>
                <p className="text-gray-600">➤ No. It highlights scoring topics within chapters, based on trends. Use it with your textbook for complete understanding.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it a question bank or notes?</h3>
                <p className="text-gray-600">➤ Neither. It's a visual trend guide to help you focus on diagrams, reactions, and concepts that matter most.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Will it teach me topics?</h3>
                <p className="text-gray-600">➤ No. It points you to high-priority topics — not explain them. Perfect for strategic revision planning.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="buy-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Master Science Strategically?</h2>
          <p className="text-teal-100 text-lg mb-8">Focus on what scores. Skip what doesn't.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBuyNow}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-bold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Buy Now – ₹299
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 text-lg rounded-full">
              <Link to="/combo">Save with Combo Pack</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-teal-400 mb-4">ScoreMAX</div>
              <p className="text-gray-400">Strategic exam planning for CBSE Class 10 students</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2">
                <Link to="/maths" className="block text-gray-400 hover:text-white transition-colors">Maths Blueprint</Link>
                <Link to="/science" className="block text-teal-400 font-medium">Science Blueprint</Link>
                <Link to="/social" className="block text-gray-400 hover:text-white transition-colors">Social Blueprint</Link>
                <Link to="/combo" className="block text-gray-400 hover:text-white transition-colors">Combo Pack</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/refund-policy" className="block text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
                <Link to="/disclaimer" className="block text-gray-400 hover:text-white transition-colors">Disclaimer</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ScoreMAX Blueprint. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Science;
