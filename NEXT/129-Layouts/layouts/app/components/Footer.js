import React from 'react'

const Footer = () => {
return (
    <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
                <p className="text-sm">&copy; 2023 My Website. All rights reserved.</p>
            </div>
            <ul className="flex flex-wrap gap-4 mb-4 md:mb-0">
                <li><a href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-gray-400 transition">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-gray-400 transition">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-gray-400 transition">FAQ</a></li>
            </ul>
            <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Instagram</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">LinkedIn</a>
            </div>
        </div>
    </footer>
)
}

export default Footer
