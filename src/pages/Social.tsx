import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Target, Clock, CheckCircle, Users, Play, ExternalLink } from 'lucide-react';

const Social = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 text-gray-600" />
              <div className="text-2xl font-bold text-orange-600">ScoreMAX</div>
              <span className="ml-2 text-sm text-gray-500">Blueprint</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/maths" className="text-gray-700 hover:text-orange-600 transition-colors">Maths</Link>
              <Link to="/science" className="text-gray-700 hover:text-orange-600 transition-colors">Science</Link>
              <Link to="/social" className="text-orange-600 font-medium">Social</Link>
              <Link to="/combo" className="text-gray-700 hover:text-orange-600 transition-colors">Combo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
                🗺️ Social Science Blueprint
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Master <span className="text-orange-600">History, Geography, Civics & Economics</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategic focus on maps, dates, and concepts that consistently appear in CBSE Social Science papers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full">
                  Get Social Blueprint
                </Button>
                <Button asChild variant="outline" className="px-8 py-3 text-lg rounded-full border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Link to="/combo">View Combo Pack</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What This Blueprint Is</h3>
              <p className="text-orange-100 text-lg leading-relaxed">
                "This is not a textbook. It's a scoring guide built from 10 years of CBSE trend data. 
                Focus on maps, dates, and concepts that consistently appear in exams."
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
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Focus on High-Yield Topics</h3>
              <p className="text-gray-600">Identify which maps, dates, and concepts appear most frequently in papers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⏱️ Saves Time During Revision</h3>
              <p className="text-gray-600">Skip low-probability topics and master what consistently scores in exams</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Built to Help You Prioritize</h3>
              <p className="text-gray-600">Not memorize everything, but strategically focus on proven scoring topics</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside - Product Showcase Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">🔍 What's Inside? | Preview the Pages</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-orange-600 font-semibold">social1.png</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📅</div>
                  <p className="text-orange-600 font-semibold">social2.png</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-orange-600 font-semibold">social3.png</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚖️</div>
                  <p className="text-orange-600 font-semibold">social4.png</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Video Embed */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-xl border-2 border-orange-100">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center relative">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">social_video.mp4</h3>
                    <p className="text-orange-100">Master maps, dates, and concepts that score consistently</p>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">All Four Areas Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">History</h3>
                <p className="text-gray-600 text-sm">Key dates, movements, and personalities that frequently appear</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Geography</h3>
                <p className="text-gray-600 text-sm">Important maps, resources, and locations to prioritize</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Civics</h3>
                <p className="text-gray-600 text-sm">Government processes and concepts that score consistently</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Economics</h3>
                <p className="text-gray-600 text-sm">Key economic concepts and sectors to focus on</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
            <Users className="w-8 h-8 text-purple-600 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who It's For</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "Students who want to <strong className="text-purple-600">revise smart</strong> before the boards, 
              not <strong className="text-gray-500">start from scratch.</strong> 
              Perfect for focused preparation when you need to prioritize what matters most in Social Science."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Students Say</h2>
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  P
                </div>
                <div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "The map practice priorities helped me so much! I knew exactly which geographical features and historical locations to focus on for my boards."
                  </blockquote>
                  <p className="text-purple-600 font-medium">— Priya M., Class 10 Student</p>
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
                <p className="text-gray-600">➤ Neither. It's a visual trend guide to help you focus on maps, dates, and concepts that matter most.</p>
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
      <section id="buy-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Master Social Science Strategically?</h2>
          
          {/* Pricing Display */}
          <div className="bg-white rounded-lg p-6 mb-6 inline-block">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Class 10 Social Science Blueprint</h3>
              <div className="text-sm text-gray-500 line-through">MRP: ₹299</div>
              <div className="text-2xl font-bold text-orange-600 mb-2">₹199</div>
            </div>
          </div>
          
          <p className="text-orange-100 text-lg mb-6">Focus on what scores. Skip what doesn't.</p>
          
          {/* Delivery Info */}
          <div className="bg-orange-800 bg-opacity-50 rounded-lg p-4 mb-8 text-orange-100">
            <p className="text-sm">✅ Instant delivery via email + download link after payment.</p>
            <p className="text-sm">🔁 No refunds on digital products. Please read before purchasing.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBuyNow}
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-bold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Buy Now – ₹199
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg rounded-full">
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
              <div className="text-2xl font-bold text-orange-400 mb-4">ScoreMAX</div>
              <p className="text-gray-400 mb-4">Strategic exam planning for CBSE Class 10 students</p>
              <div className="text-sm text-gray-400">
                <p>Email: scoremax.blueprint@gmail.com</p>
                <p>Grievance Officer: Abhinand</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2">
                <Link to="/maths" className="block text-gray-400 hover:text-white transition-colors">Maths Blueprint</Link>
                <Link to="/science" className="block text-gray-400 hover:text-white transition-colors">Science Blueprint</Link>
                <Link to="/social" className="block text-orange-400 font-medium">Social Blueprint</Link>
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
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center text-gray-400 text-sm">
              <p className="mb-2">&copy; 2024 ScoreMAX Blueprint. All rights reserved.</p>
              <p className="text-xs">ScoreMAX is a digital scoring guide, not a textbook. All purchases are final.</p>
              <p className="text-xs">For support, contact scoremax.blueprint@gmail.com.</p>
              <p className="text-xs">Products are delivered instantly via download + email confirmation after payment.</p>
              <p className="text-xs">Compliant with Indian consumer law and RBI e-commerce guidelines.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Social;
