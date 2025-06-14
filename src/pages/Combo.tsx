
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, CheckCircle, Calendar, Target, TrendingUp, Filter, Play, ExternalLink } from 'lucide-react';

const Combo = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById('checkout-section');
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyNow = () => {
    window.open('https://abhi-tzp.myinstamojo.com/checkout/v2/customer-info', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
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
              <Link to="/social" className="text-gray-700 hover:text-orange-600 transition-colors">Social</Link>
              <Link to="/combo" className="text-orange-600 font-medium">Combo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6 animate-pulse">
              <img src="/images/best-value-icon.jpg" alt="Best Value" className="w-4 h-4 mr-2" />
              BEST VALUE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-orange-600">3 Subjects.</span> <span className="text-yellow-600">1 Smart Guide.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Maths, Science, and Social Science – Strategically Planned for CBSE Boards
            </p>
            
            {/* Pricing Display */}
            <div className="bg-white rounded-lg p-6 mb-6 inline-block shadow-lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Combo Pack (All 3 Subjects)</h3>
                <div className="text-sm text-gray-500 line-through">MRP: ₹599</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">₹299</div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm font-medium animate-pulse">
                  💡 BEST VALUE
                </div>
              </div>
            </div>
            
            {/* Delivery Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-8 text-blue-900 max-w-lg mx-auto">
              <p className="text-sm">✅ Instant delivery via email + download link after payment.</p>
              <p className="text-sm">🔁 No refunds on digital products. Please read before purchasing.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={handleBuyNow}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Buy Now – ₹299
              </Button>
              <div className="flex items-center text-sm text-gray-600">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>Save 50% vs individual purchases</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Inside the Combo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img src="/images/maths-icon.jpg" alt="Mathematics" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maths Blueprint</h3>
                <p className="text-gray-600">Strategic formula priorities and problem patterns based on 10-year trends</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-green-100">
              <CardContent className="p-6">
                <div className="bg-green-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img src="/images/science-icon.jpg" alt="Science" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Science Blueprint</h3>
                <p className="text-gray-600">Physics, Chemistry, Biology diagrams and concepts that score consistently</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-100">
              <CardContent className="p-6">
                <div className="bg-purple-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img src="/images/social-icon.jpg" alt="Social Science" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Science Blueprint</h3>
                <p className="text-gray-600">History dates, geography maps, and civic concepts that appear frequently</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-100">
              <CardContent className="p-6">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10-Year Question Trend Charts</h3>
                <p className="text-gray-600">Visual analysis of topic frequency across all three subjects</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-yellow-100">
              <CardContent className="p-6">
                <div className="bg-yellow-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Filter className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Weightage Topic Filters</h3>
                <p className="text-gray-600">Quick-reference guides to prioritize your study time effectively</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2x4 Product Images Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Inside? | Preview the Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo1.png" 
                  alt="All Subjects, One Blueprint" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">All Subjects, One Blueprint</h3>
                <p className="text-sm text-gray-600">Maths, Science & Social — everything students need, in one compact guide.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo2.png" 
                  alt="Simplified for Quick Revision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Simplified for Quick Revision</h3>
                <p className="text-sm text-gray-600">Core formulas, concepts, diagrams & case studies — all high-yield.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo3.png" 
                  alt="Social Science Made Easy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Social Science Made Easy</h3>
                <p className="text-sm text-gray-600">Important chapters broken down into scoring-friendly pointers.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo4.png" 
                  alt="10-Year Trends for SST" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">10-Year Trends for SST</h3>
                <p className="text-sm text-gray-600">Identify scoring patterns in History, Civics, Geography & Eco.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo5.png" 
                  alt="Science: What to Focus On" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Science: What to Focus On</h3>
                <p className="text-sm text-gray-600">Diagrams, reactions & high-weightage concepts, decoded by trends.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo6.png" 
                  alt="Repeated Questions: Science" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Repeated Questions: Science</h3>
                <p className="text-sm text-gray-600">Know which topics keep reappearing across Physics, Chem & Bio.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo7.png" 
                  alt="Maths: Chapter Clarity" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Maths: Chapter Clarity</h3>
                <p className="text-sm text-gray-600">Each chapter's scoring potential explained with expert summaries.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-200">
              <div className="aspect-[3/4] relative">
                <img 
                  src="/images/combo8.png" 
                  alt="10-Year Maths Trend Graphs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">10-Year Maths Trend Graphs</h3>
                <p className="text-sm text-gray-600">Strategic overview of mark distribution across every maths chapter.</p>
              </div>
            </div>
          </div>
          
          {/* Buy Now Button below images */}
          <div className="text-center">
            <Button 
              onClick={handleBuyNow}
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Buy Now – ₹299
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose the Combo?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Strategic Coverage</h4>
                    <p className="text-gray-600">All three major subjects covered with consistent methodology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">40% Cost Savings</h4>
                    <p className="text-gray-600">Significantly cheaper than buying individual subject blueprints</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bonus Planning Tools</h4>
                    <p className="text-gray-600">Exclusive calendar and filters not available in individual purchases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Unified Study Strategy</h4>
                    <p className="text-gray-600">Coordinated approach across all subjects for maximum efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for Students Who Want:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-3" />
                  Complete board exam strategy
                </li>
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-3" />
                  Maximum score with minimum time
                </li>
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-3" />
                  Data-driven study priorities
                </li>
                <li className="flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-3" />
                  Structured revision planning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Students Say</h2>
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  R
                </div>
                <div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "Without ScoreMAX Combo, I wasted time on low-priority chapters. This told me where to focus across all three subjects. The 30-day calendar was a game-changer for my final prep."
                  </blockquote>
                  <p className="text-orange-600 font-medium">— Raj Mehta, Class 10</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Combo-Specific FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Combo Pack FAQs</h2>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it based on real data?</h3>
                <p className="text-gray-600">➤ Yes. All topics are identified using actual CBSE papers from 2014–2024 across all three subjects.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Will I still need textbooks?</h3>
                <p className="text-gray-600">➤ Yes. This blueprint only tells you where to double down — not what a concept means. Use it with your regular study materials.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What makes Combo better?</h3>
                <p className="text-gray-600">➤ You get all 3 subjects, the 30-day calendar, high-weightage filters, and bonus planner tools not available individually.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How much time will this save me?</h3>
                <p className="text-gray-600">➤ Students typically save 20-30 hours by focusing only on high-probability topics instead of trying to cover everything equally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="checkout-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Master All Three Subjects Strategically?</h2>
          <p className="text-orange-100 text-xl mb-8">Join thousands of students who've optimized their board preparation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleBuyNow}
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <ExternalLink className="w-6 h-6 mr-2" />
              Buy Now – ₹299
            </Button>
          </div>
          <div className="flex items-center justify-center text-orange-100">
            <Star className="w-5 h-5 mr-2" />
            <span className="text-lg">Best value • Complete strategy • Proven results</span>
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
                <Link to="/social" className="block text-gray-400 hover:text-white transition-colors">Social Blueprint</Link>
                <Link to="/combo" className="block text-orange-400 font-medium">Combo Pack</Link>
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

export default Combo;
