
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ArrowLeft, Star, CheckCircle, Calendar, Target, TrendingUp, Filter, Play, ExternalLink, Calculator, Beaker, BookOpen, Facebook, Instagram } from 'lucide-react';

const Combo = () => {

  const scrollToCheckout = () => {
    const element = document.getElementById('checkout-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">ScoreMAX</Link>
              <span className="ml-2 text-sm text-gray-500">Blueprint</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/maths" className="text-gray-700 hover:text-purple-600 transition-colors">Maths</Link>
              <Link to="/science" className="text-gray-700 hover:text-teal-600 transition-colors">Science</Link>
              <Link to="/social" className="text-gray-700 hover:text-orange-600 transition-colors">Social</Link>
              <Link to="/combo" className="text-blue-600 font-semibold">Combo</Link>
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Unlock the <span className="text-blue-600">Ultimate</span> Exam Prep with Our Combo Blueprint
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Get all three subjects - Maths, Science, and Social Science - in one strategic package.
              Plan smarter, not harder, and maximize your score.
            </p>
            <div className="flex justify-center mb-12 animate-fade-in">
              <Button onClick={scrollToCheckout} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get the Combo Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside the Combo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What's Inside the Combo
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-100">
              <CardContent className="p-6">
                <div className="bg-purple-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maths Blueprint</h3>
                <p className="text-gray-600">Strategic formula priorities and problem patterns based on 10-year trends</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-teal-100">
              <CardContent className="p-6">
                <div className="bg-teal-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Science Blueprint</h3>
                <p className="text-gray-600">Physics, Chemistry, Biology diagrams and concepts that score consistently</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-100">
              <CardContent className="p-6">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Science Blueprint</h3>
                <p className="text-gray-600">History dates, geography maps, and civic concepts that appear frequently</p>
              </CardContent>
            </Card>
          </div>

          {/* Image Preview Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Preview of What You'll Get
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="border-2 border-purple-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo1.png" 
                    alt="Combo Preview 1" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-teal-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo2.png" 
                    alt="Combo Preview 2" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-orange-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo3.png" 
                    alt="Combo Preview 3" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo4.png" 
                    alt="Combo Preview 4" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-green-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo5.png" 
                    alt="Combo Preview 5" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-red-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo6.png" 
                    alt="Combo Preview 6" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-indigo-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo7.png" 
                    alt="Combo Preview 7" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="border-2 border-pink-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <AspectRatio ratio={3 / 4}>
                  <img 
                    src="/images/combo8.png" 
                    alt="Combo Preview 8" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
            <div className="text-center">
              <Button onClick={scrollToCheckout} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Buy Now - ₹299
              </Button>
            </div>
          </div>

          {/* Bonus Planning Tools */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Plus: Bonus Planning Tools
            </h2>
            <p className="text-gray-600">Maximize your study efficiency with these exclusive tools</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Personalized Study Calendar</h3>
                </div>
                <p className="text-gray-600">Plan your entire syllabus with ease</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-green-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Goal Tracker</h3>
                </div>
                <p className="text-gray-600">Stay motivated by tracking your progress</p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-500 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Performance Analysis</h3>
                </div>
                <p className="text-gray-600">Identify your strengths and weaknesses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Why our Combo Blueprint is the best choice</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-600">All three core subjects covered in detail</p>
              </div>
            </div>
            <div className="flex items-start">
              <Star className="w-8 h-8 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertly Curated Content</h3>
                <p className="text-gray-600">Created by experienced educators and exam experts</p>
              </div>
            </div>
            <div className="flex items-start">
              <Filter className="w-8 h-8 text-orange-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Prioritization</h3>
                <p className="text-gray-600">Focus on high-scoring topics and key concepts</p>
              </div>
            </div>
            <div className="flex items-start">
              <Play className="w-8 h-8 text-teal-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h3>
                <p className="text-gray-600">Engaging content to make studying fun</p>
              </div>
            </div>
            <div className="flex items-start">
              <ExternalLink className="w-8 h-8 text-red-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">External Resources</h3>
                <p className="text-gray-600">Links to additional study materials</p>
              </div>
            </div>
            <div className="flex items-start">
              <ArrowLeft className="w-8 h-8 text-purple-500 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Navigation</h3>
                <p className="text-gray-600">User-friendly design for seamless learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="checkout-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Get the ScoreMAX Combo Blueprint Today!
          </h2>
          <p className="text-blue-100 mb-8 text-xl">
            Transform your exam preparation and achieve your academic goals.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Purchase Now for ₹299
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">ScoreMAX</div>
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
                <a 
                  href="https://www.facebook.com/scoremaxblueprint" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/scoremax.blueprint" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
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
