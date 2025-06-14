
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Target, Clock, CheckCircle, Users, ExternalLink } from 'lucide-react';

const Maths = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 text-gray-600" />
              <div className="text-2xl font-bold text-purple-600">ScoreMAX</div>
              <span className="ml-2 text-sm text-gray-500">Blueprint</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/maths" className="text-purple-600 font-medium">Maths</Link>
              <Link to="/science" className="text-gray-700 hover:text-purple-600 transition-colors">Science</Link>
              <Link to="/social" className="text-gray-700 hover:text-purple-600 transition-colors">Social</Link>
              <Link to="/combo" className="text-gray-700 hover:text-purple-600 transition-colors">Combo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
                  Mathematics Blueprint
                </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Master <span className="text-purple-600">High-Scoring</span> Math Topics
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                This guide is built for exam planning, not explanation. It flags important topics from CBSE's past 10-year trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full">
                  Get Math Blueprint
                </Button>
            <Button asChild className="px-8 py-3 text-lg font-medium text-purple-600 bg-white rounded-full shadow-md border border-purple-300 animate-pulse"
>
  <Link to="/combo">Save with Combo Pack</Link>
</Button>

              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What This Blueprint Is</h3>
              <p className="text-purple-100 text-lg leading-relaxed">
                "This is not a textbook. It's a scoring guide built from 10 years of CBSE trend data. 
                Focus on what consistently scores, skip what rarely appears."
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
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spot High-Scoring Topics Instantly</h3>
              <p className="text-gray-600">Identify which theorems, formulas, and problem types appear most frequently in papers</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Focused on CBSE Past 10 Years</h3>
              <p className="text-gray-600">Skip low-probability topics and double down on what consistently scores marks</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Saves Time During Final Revision</h3>
              <p className="text-gray-600">Built to help you prioritize, not memorize everything</p>
            </div>
          </div>
        </div>
      </section>

{/* What's Inside - Product Showcase Images */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      What's Inside? | Preview the Pages
    </h2>
<div className="grid md:grid-cols-4 gap-8">
  {/* Image 1 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-video">
      <img src="/images/maths1.png" alt="ScoreMAX Book Mockup" className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-bold text-purple-700 mb-1">Why ScoreMAX Blueprint?</h3>
      <p className="text-sm text-gray-600">Your shortcut to knowing what matters most.</p>
    </div>
  </div>

  {/* Image 2 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-video">
      <img src="/images/maths2.png" alt="Math Features Poster" className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-bold text-purple-700 mb-1">Built from Past 10 Years</h3>
      <p className="text-sm text-gray-600">Based on actual CBSE board paper data.</p>
    </div>
  </div>

  {/* Image 3 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-video">
      <img src="/images/maths3.png" alt="Chapter Page Preview" className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-bold text-purple-700 mb-1">Chapter Breakdown</h3>
      <p className="text-sm text-gray-600">Topic-wise focus areas to help you revise smarter.</p>
    </div>
  </div>

  {/* Image 4 */}
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="aspect-video">
      <img src="/images/maths4.png" alt="Marks Distribution Table" className="w-full h-full object-cover" />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-bold text-purple-700 mb-1">Trend Tables that Speak</h3>
      <p className="text-sm text-gray-600">See exactly how often each chapter is asked.</p>
    </div>
  </div>
</div>

    </div>
  </div>
</section>


      {/* Who Should Use It */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
            <Users className="w-8 h-8 text-purple-600 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Should Use It</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "Students who've <strong className="text-purple-600">studied once</strong> and want to 
              <strong className="text-purple-600"> revise smartly.</strong> 
              Perfect for focused preparation in the final months."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Real Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Real Testimonials</h2>
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "I followed ScoreMAX for Mathematics and every formula pattern was exactly what appeared in my paper. 
                    The priority list was exactly what I needed for quick revision."
                  </blockquote>
                  <p className="text-purple-600 font-medium">— Amit R., Class 10</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Does it explain chapters?</h3>
                <p className="text-gray-600">➤ No. It points to scoring parts only. No chapter-wise teaching.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it complete syllabus?</h3>
                <p className="text-gray-600">➤ It helps prioritize. Coverage isn't the aim — scoring is.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I use it best?</h3>
                <p className="text-gray-600">➤ Use this as a checklist to verify your prep is aligned with what's most often asked.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="buy-section" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Focus Your Math Preparation?</h2>
          
          {/* Pricing Display */}
          <div className="bg-white rounded-lg p-6 mb-6 inline-block">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Class 10 Maths Blueprint</h3>
              <div className="text-sm text-gray-500 line-through">MRP: ₹299</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">₹199</div>
            </div>
          </div>
          
          <p className="text-purple-100 text-lg mb-6">Get strategic with your revision. Know what to prioritize.</p>
          
          {/* Delivery Info */}
          <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 mb-8 text-purple-100">
            <p className="text-sm">✅ Instant delivery via email + download link after payment.</p>
            <p className="text-sm">🔁 No refunds on digital products. Please read before purchasing.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleBuyNow}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full font-bold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Buy Now – ₹199
            </Button>
           <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg rounded-full">
  <Link to="/combo">
    <span className="animate-blink">Save with Combo Pack</span>
  </Link>
</Button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-4">ScoreMAX</div>
              <p className="text-gray-400 mb-4">Strategic exam planning for CBSE Class 10 students</p>
              <div className="text-sm text-gray-400">
                <p>Email: scoremax.blueprint@gmail.com</p>
                <p>Grievance Officer: Abhinand</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2">
                <Link to="/maths" className="block text-purple-400 font-medium">Maths Blueprint</Link>
                <Link to="/science" className="block text-gray-400 hover:text-white transition-colors">Science Blueprint</Link>
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

export default Maths;
