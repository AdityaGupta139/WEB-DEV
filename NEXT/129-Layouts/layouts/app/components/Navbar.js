import React from 'react'

const Navbar = () => {
return (
    <div className="bg-black shadow">
        <nav className="flex items-center justify-between px-6 py-4">
            <div className="logo flex items-center">
                <h1 className="text-2xl font-bold text-white">My Website</h1>
            </div>
            <ul className="nav-links flex space-x-6">
                <li><a href="/" className="text-gray-200 hover:text-blue-400 transition">Home</a></li>
                <li><a href="/about" className="text-gray-200 hover:text-blue-400 transition">About</a></li>
                <li><a href="/contact" className="text-gray-200 hover:text-blue-400 transition">Contact</a></li>
                <li><a href="/services" className="text-gray-200 hover:text-blue-400 transition">Services</a></li>
                <li><a href="/blog" className="text-gray-200 hover:text-blue-400 transition">Blog</a></li>
                <li><a href="/login" className="text-gray-200 hover:text-blue-400 transition">Login</a></li>
                <li><a href="/signup" className="text-gray-200 hover:text-blue-400 transition">Sign Up</a></li>
            </ul>
            <div className="search-bar flex items-center space-x-2">
                <input type="text" placeholder="Search..." className="border border-gray-700 bg-black text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Search</button>
            </div>
            <div className="user-profile flex items-center space-x-2">
                <img src="/profile-pic.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover border border-gray-700" />
                <span className="text-gray-200 font-medium">Username</span>
            </div>
            <div className="notifications relative flex items-center">
                <img src="/notification-icon.png" alt="Notifications" className="w-6 h-6" />
                <span className="notification-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">3</span>
            </div>
            <div className="settings flex items-center ml-4">
                <img src="/settings-icon.png" alt="Settings" className="w-6 h-6" />
            </div>
            <div className="logout ml-4">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Logout</button>
            </div>
        </nav>
    </div>
)
}

export default Navbar
