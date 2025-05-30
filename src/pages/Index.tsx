
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Clock, TrendingUp } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">ScoreMAX</div>
              <span className="ml-2 text-sm text-gray-500">Blueprint</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/maths" className="text-gray-700 hover:text-blue-600 transition-colors">Maths</Link>
              <Link to="/science" className="text-gray-700 hover:text-blue-600 transition-colors">Science</Link>
              <Link to="/social" className="text-gray-700 hover:text-blue-600 transition-colors">Social</Link>
              <Link to="/combo" className="text-gray-700 hover:text-blue-600 transition-colors">Combo</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Prep Less, <span className="text-blue-600">Score More</span>
              <br />
              <span className="text-green-600">Strategically</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Crafted for students who need to plan, not start from scratch. 
              Focus on what matters most for CBSE Class 10 boards.
            </p>
            <div className="flex justify-center mb-12 animate-fade-in">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Link to="/combo">Explore All Blueprints</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Strategic Blueprint
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Maths Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mathematics</h3>
                <p className="text-gray-600 mb-4">Strategic focus on high-scoring topics and formula patterns</p>
                <Button asChild variant="outline" className="w-full group-hover:bg-blue-50 group-hover:border-blue-300">
                  <Link to="/maths">View Maths Blueprint</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Science Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Science</h3>
                <p className="text-gray-600 mb-4">Physics, Chemistry, Biology - All covered strategically</p>
                <Button asChild variant="outline" className="w-full group-hover:bg-green-50 group-hover:border-green-300">
                  <Link to="/science">View Science Blueprint</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Social Science Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Science</h3>
                <p className="text-gray-600 mb-4">History, Geography, Civics, Economics made strategic</p>
                <Button asChild variant="outline" className="w-full group-hover:bg-purple-50 group-hover:border-purple-300">
                  <Link to="/social">View Social Blueprint</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Combo Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50 shadow-lg relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                BEST VALUE
              </div>
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-orange-500 to-yellow-500 h-32 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">🌟</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Combo Pack</h3>
                <p className="text-gray-600 mb-4">All 3 subjects + bonus planning tools</p>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Link to="/combo">Get Combo Blueprint</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why ScoreMAX Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why ScoreMAX Works</h2>
            <p className="text-xl text-gray-600">Built on data, designed for results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">10-Year Trend Analysis</h3>
              <p className="text-gray-600">Based on actual CBSE papers from 2014-2024</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Target className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clarity, Not Coverage</h3>
              <p className="text-gray-600">Focus on what matters, skip what doesn't</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Prioritization</h3>
              <p className="text-gray-600">Know exactly what not to skip</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Clock className="w-8 h-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Textbook Clutter</h3>
              <p className="text-gray-600">Just what you must not ignore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Strip */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Study Smarter, Not Harder?
          </h2>
          <p className="text-blue-100 mb-6 text-lg">
            Join thousands of students who've already optimized their board prep
          </p>
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Link to="/combo">See Combo Blueprint →</Link>
          </Button>
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
                <Link to="/maths" className="block text-gray-400 hover:text-white transition-colors">Maths Blueprint</Link>
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
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

export default Index;
