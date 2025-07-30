// import React from 'react'

// const Footer = () => {
//   const currentYear=new Date().getFullYear();
//   return (
//     <footer className='bg-slate-900 backdrop-blur-3xl  border border-pink-500/20 text-white flex items-center justify-center px-4 h-16'>
//         <p>
// Copyright &copy; {currentYear} GetmeAchai-All rights reserved!
//         </p>
//     </footer>
//   )
// }

// export default Footer
// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Footer() {
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '0px 0px -100px 0px'
//       }
//     );

//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const fadeInUp = (id, delay = 0) => ({
//     opacity: isVisible[id] ? 1 : 0,
//     transform: isVisible[id] ? 'translateY(0)' : 'translateY(50px)',
//     transition: `all 0.8s ease-out ${delay}s`
//   });

//   return (
//     <>
      
      
//       <footer className=" bg-opacity-100 text-white border border-pink-500/20 py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8 animate-on-scroll" 
//                id="footer-content" 
//                style={fadeInUp('footer-content')}>
            
//             {/* Logo and Description */}
//             <div className="md:col-span-2">
//               <div className="flex items-center gap-2 mb-4">
//                 <img className="invertImg" src="/tea.gif" width={40} alt="" />
//                 <h3 className="text-xl font-bold">CupFund</h3>
//               </div>
//               <p className="text-gray-400 mb-4 max-w-md">
//                 Empowering creators worldwide through community support. Join thousands of creators who are already funded by their fans.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.750.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
//                   </svg>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
//                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
//                 <li><Link href="/how-it-works" className="hover:text-white transition-colors duration-200">How It Works</Link></li>
//                 <li><Link href="/pricing" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
//                 <li><Link href="/creators" className="hover:text-white transition-colors duration-200">For Creators</Link></li>
//                 <li><Link href="/supporters" className="hover:text-white transition-colors duration-200">For Supporters</Link></li>
//               </ul>
//             </div>

//             {/* Support */}
//             <div>
//               <h4 className="font-semibold text-lg mb-4">Support</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/help" className="hover:text-white transition-colors duration-200">Help Center</Link></li>
//                 <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
//                 <li><Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
//                 <li><Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
//                 <li><Link href="/security" className="hover:text-white transition-colors duration-200">Security</Link></li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom Footer */}
//           <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 animate-on-scroll" 
//                id="footer-bottom" 
//                style={fadeInUp('footer-bottom', 0.2)}>
//             <p>&copy; 2024 Buy me a chai. All rights reserved. Made with ❤️ for creators worldwide.</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  // Track which elements are visible for animation
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    // Observe all elements to animate
    document
      .querySelectorAll(".footer-anim")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Custom fade-in-up style for each animated element
  function fadeInUp(id, delay = 0) {
    return {
      opacity: isVisible[id] ? 1 : 0,
      transform: isVisible[id] ? "translateY(0px)" : "translateY(40px)",
      transition: `all 0.8s cubic-bezier(.23,1.15,.53,1.09) ${delay}s`,
      willChange: "opacity, transform",
    };
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10  border-t border-pink-400/30 px-4 py-12">
      <div className="container max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Brand logo and social */}
        <div
          id="footer-main"
          className="footer-anim md:col-span-2 flex flex-col"
          style={fadeInUp("footer-main", 0)}
        >
          <div className="flex items-center mb-4 gap-2">
            <img src="/tea.gif" alt="Logo" width={36} className="invertImg" />
            <span className="text-xl font-semibold text-pink-400 tracking-wide">ChaiChain</span>
          </div>
          <p className="text-gray-400 max-w-sm mb-6">
            Empowering creators by connecting them with supporters, one cup at a time. Join our global creator community!
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              className="hover:text-pink-400 text-gray-400 transition-colors"
              target="_blank" rel="noopener"
            >
              {/* Twitter SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              aria-label="Instagram"
              className="hover:text-pink-400 text-gray-400 transition-colors"
              target="_blank" rel="noopener"
            >
              {/* Instagram SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584..."></path>
              </svg>
            </a>
            <a
              href="https://github.com/"
              aria-label="GitHub"
              className="hover:text-pink-400 text-gray-400 transition-colors"
              target="_blank" rel="noopener"
            >
              {/* Github SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 ..."></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div
          id="footer-links"
          className="footer-anim"
          style={fadeInUp("footer-links", 0.1)}
        >
          <h4 className="font-medium text-lg mb-4 text-pink-300">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-pink-200 transition">About Us</Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-pink-200 transition">How It Works</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-pink-200 transition">Pricing</Link>
            </li>
            <li>
              <Link href="/creators" className="hover:text-pink-200 transition">For Creators</Link>
            </li>
            <li>
              <Link href="/supporters" className="hover:text-pink-200 transition">For Supporters</Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div
          id="footer-support"
          className="footer-anim"
          style={fadeInUp("footer-support", 0.2)}
        >
          <h4 className="font-medium text-lg mb-4 text-pink-300">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/help" className="hover:text-pink-200 transition">Help Center</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-200 transition">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-pink-200 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-pink-200 transition">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div
        id="footer-bottom"
        className="footer-anim text-sm text-gray-400 border-t border-gray-800 mt-10 pt-5 text-center"
        style={fadeInUp("footer-bottom", 0.35)}
      >
        &copy; {currentYear} ChaiChain. Made with <span className="text-pink-400">♥</span> for creators worldwide.
      </div>
    </footer>
  );
}