"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
export default function Home() {

  const [isVisible, setIsVisible] = useState({});
  const [showReadMore, setShowReadMore] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const fadeInUp = (id, delay = 0) => ({
    opacity: isVisible[id] ? 1 : 0,
    transform: isVisible[id] ? 'translateY(0)' : 'translateY(50px)',
    transition: `all 0.8s ease-out ${delay}s`
  });
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[44vh] gap-4  text-white">
        <div className="font-bold text-5xl flex justify-center items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ChaiChain <span><img className="invertImg" width={88} src="/tea.gif" alt="" /></span></div>
        <p>Crowd funding for your favorite chai</p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-pink-500 bg-slate-900 border border-pink-500 backdrop-blur-3xl hover:text-white hover:bg-gradient-to-br hover:from-pink-600 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-pink-500/30 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200">
              Start Here
            </button>
          </Link>
          <Link href={"/about"}>
            <button
              type="button"
              className="text-pink-500 bg-slate-900 border border-pink-500 backdrop-blur-3xl hover:text-white hover:bg-gradient-to-br hover:from-pink-600 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-pink-500/30 focus:ring-2 focus:ring-pink-500/30 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-200"> Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">

      </div>
      {/* <div className="text-white container mx-auto pb-32 pt-14 ">
        <h2 className="text-3xl font-bold mb-14 text-center">Your fans can buy you a chai</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
        </div>
      </div> */}
      <div className="text-white container mx-auto pb-32 pt-14">
  <h2 className="text-3xl font-bold mb-14 text-center">
    Let Your Fans Support You—One Chai at a Time
  </h2>
  <div className="flex gap-5 justify-around flex-wrap">
    {/* Step 1 */}
    <div className="item space-y-4 flex flex-col items-center max-w-xs animate-on-scroll" id="step-1">
      <img className="bg-slate-400 rounded-full p-3" width={90} src="/man.gif" alt="Happy Fan" />
      <p className="font-bold text-lg">Your Fans Discover You</p>
      <p className="text-center text-gray-300">
        Share your unique Chai link and reach people who want to see you succeed.
      </p>
    </div>

    {/* Step 2 */}
    <div className="item space-y-4 flex flex-col items-center max-w-xs animate-on-scroll" id="step-2">
      <img className="bg-slate-400 rounded-full p-3" width={90} src="/coin.gif" alt="Fan Donation" />
      <p className="font-bold text-lg">They Buy You a Chai ☕</p>
      <p className="text-center text-gray-300">
        Fans show their love by buying you a chai (or two) with an uplifting message.
      </p>
    </div>

    {/* Step 3 */}
    <div className="item space-y-4 flex flex-col items-center max-w-xs animate-on-scroll" id="step-3">
      <img className="bg-slate-400 rounded-full p-3" width={90} src="/group.gif" alt="Community Support" />
      <p className="font-bold text-lg">Grow Your Community</p>
      <p className="text-center text-gray-300">
        Each cup strengthens your creative journey—build lasting connections with your supporters.
      </p>
    </div>
  </div>
</div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* <div className="text-white container mx-auto pb-32 pt-14 ">
        <h2 className="text-3xl font-bold mb-14 text-center">Learn More About Us</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center ">Your fans are available for you to help you</p>
          </div>
        </div>
      </div> */}
      <div className="text-white container mx-auto py-10">
        {/* Expanded Content (Always Visible) */}
        <div className=" rounded-lg p-6 mt-6 animate-on-scroll" id="expanded-content"
          style={fadeInUp('expanded-content')}>

          {/* Mission Section */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl hover:scale-110 transition-transform duration-300">🍵</span>
              <h3 className="text-2xl font-bold text-center">Our Mission</h3>
              <span className="text-4xl hover:scale-110 transition-transform duration-300">🍵</span>
            </div>
            <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
              At <span className="text-white font-semibold">ChaiChain</span>, our mission is to help creators, freelancers, and changemakers get the support they need from their fans, followers, and community — directly, instantly, and meaningfully. Whether it's funding a project, buying tools, or just a warm cup of chai to keep going, every contribution counts.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: "👤", title: "🚀 Easy Setup", desc: "Get started in minutes with our simple onboarding process. No technical skills required." },
              { icon: "💰", title: "💰 Quick Payouts", desc: "Receive your funds quickly with multiple payment options and instant notifications." },
              { icon: "🌍", title: "📊 Analytics", desc: "Track your progress with detailed insights and analytics to grow your support base." }
            ].map(({ icon, title, desc }, idx) => (
              <div key={idx} className="text-center bg-slate-800 backdrop-blur-3xl bg-opacity-65 shadow-xl rounded-lg p-6 hover:bg-opacity-50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-2 hover:scale-110 transition-transform duration-300 w-16 h-16 flex items-center justify-center">
                    <span className="text-2xl">{icon}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-gray-300 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-center mb-6">How It Works</h4>
            <div className="flex justify-center items-center gap-4 max-sm:flex-col">
              {[
                { icon: "👤", title: "1. Create Profile", desc: "Set up your creator profile" },
                { icon: "📢", title: "2. Share Link", desc: "Share with your community" },
                { icon: "☕", title: "3. Receive Support", desc: "Get funded by your fans" }
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-full p-4 mb-3">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <h5 className="font-semibold mb-1">{step.title}</h5>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                  {idx < 2 && <div className="hidden sm:block text-2xl text-gray-400">→</div>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-gray-200">Active Creators</div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-600 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">₹50L+</div>
              <div className="text-gray-200">Total Funded</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-gray-200">Supporters</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
