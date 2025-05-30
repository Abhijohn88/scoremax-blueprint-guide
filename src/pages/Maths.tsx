
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Target, Clock, CheckCircle, Users } from 'lucide-react';

const Maths = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 text-gray-600" />
              <div className="text-2xl font-bold text-blue-600">ScoreMAX</div>
              <span className="ml-2 text-sm text-gray-500">Blueprint</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/maths" className="text-blue-600 font-medium">Maths</Link>
              <Link to="/science" className="text-gray-700 hover:text-blue-600 transition-colors">Science</Link>
              <Link to="/social" className="text-gray-700 hover:text-blue-600 transition-colors">Social</Link>
              <Link to="/combo" className="text-gray-700 hover:text-blue-600 transition-colors">Combo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
                📊 Mathematics Blueprint
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Master <span className="text-blue-600">High-Scoring</span> Math Topics
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Strategic focus on formulas, theorems, and problem patterns that consistently appear in CBSE boards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full">
                  Get Math Blueprint
                </Button>
                <Button asChild variant="outline" className="px-8 py-3 text-lg rounded-full">
                  <Link to="/combo">View Combo Pack</Link>
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What This Blueprint Is</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
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
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Focus on High-Yield Topics</h3>
              <p className="text-gray-600">Identify which theorems, formulas, and problem types appear most frequently in papers</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⏱️ Saves Time During Revision</h3>
              <p className="text-gray-600">Skip low-probability topics and double down on what consistently scores marks</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Built to Help You Prioritize</h3>
              <p className="text-gray-600">Not memorize everything, but strategically focus on proven scoring patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6">
            <Users className="w-8 h-8 text-blue-600 mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who It's For</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "Students who want to <strong className="text-blue-600">revise smart</strong> before the boards, 
              not <strong className="text-gray-500">start from scratch.</strong> 
              Perfect for focused preparation in the final months."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Students Say</h2>
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "I used ScoreMAX to map out my last month. It helped me decide what not to ignore. 
                    The formula priority list was exactly what I needed for quick revision."
                  </blockquote>
                  <p className="text-blue-600 font-medium">— Anjali S., Class 10 Student</p>
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
                <p className="text-gray-600">➤ No. It highlights scoring topics within chapters, based on trends. You still need your textbook for learning concepts.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is it a question bank or notes?</h3>
                <p className="text-gray-600">➤ Neither. It's a visual trend guide to help you focus on what matters most for scoring.</p>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Will it teach me topics?</h3>
                <p className="text-gray-600">➤ No. It points you to high-priority topics — not explain them. Use it alongside your textbooks and classes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Focus Your Math Preparation?</h2>
          <p className="text-blue-100 text-lg mb-8">Get strategic with your revision. Know what to prioritize.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full">
              Get Math Blueprint Now
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-full">
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
              <div className="text-2xl font-bold text-blue-400 mb-4">ScoreMAX</div>
              <p className="text-gray-400">Strategic exam planning for CBSE Class 10 students</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <div className="space-y-2">
                <Link to="/maths" className="block text-blue-400 font-medium">Maths Blueprint</Link>
                <Link to="/science" className="block text-gray-400 hover:text-white transition-colors">Science Blueprint</Link>
                <Link to="/social" className="block text-gray-400 hover:text-white transition-colors">Social Blueprint</Link>
                <Link to="/combo" className="block text-gray-400 hover:text-white transition-colors">Combo Pack</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/refund-policy" className="block text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
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

export default Maths;
