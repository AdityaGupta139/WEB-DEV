import React from 'react';
import { Users, Heart, Zap, Star, Shield, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Creator-First Platform",
      description: "Built specifically for creators to connect with their fanbase and receive direct support for their projects."
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Join a supportive community where fans can directly contribute to the creative projects they love."
    },
    {
      icon: Zap,
      title: "Easy to Use",
      description: "Simple, intuitive interface that makes it easy for both creators and supporters to get started."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your contributions and projects are protected with industry-standard security measures."
    }
  ];

  const benefits = [
    "Direct fan-to-creator funding",
    "No middleman fees",
    "Global reach for your projects",
    "Real-time project updates",
    "Supportive creator community",
    "Flexible funding options"
  ];

  return (
    <div className="min-h-screen ">


      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold  mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About ChaiChain
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
            ChaiChain is a crowdfunding platform designed for creators to fund their projects with the support of their fans. 
            Unlock the potential of your fanbase and bring your projects to life.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-white">For Creators</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-pink-400" />
              <span className="text-white">By Fans</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose ChaiChain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-3 flex-shrink-0">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Creative Community</h2>
            <p className="text-lg text-gray-300 mb-6">
              Connect with fellow creators, find your supporters, and bring your projects to life.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;