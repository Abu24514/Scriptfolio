import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Navbar */}
            <nav className="static top-0 left-0 w-full z-60 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img className="h-18 w-auto" src="src/assets/scriptfolio-logo.svg" alt="logo" />
                    <span className="text-lg sm:text-xl font-semibold hover:text-indigo-600">
                        Scriptfolio
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700">
                    <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
                    <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
                    <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Testimonials</a>
                    <a href="#cta" className="hover:text-indigo-600 transition-colors">Contact</a>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        to="/app?state=register"
                        className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full text-sm transition-colors"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/app?state=login"
                        className="px-5 py-2 border rounded-full text-sm hover:bg-gray-100 transition-colors"
                    >
                        Login
                    </Link>
                </div>

                {/* Hamburger Toggle Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu*/}
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-50 md:hidden">

                    {/* Close Button */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="absolute top-8 right-5 text-white p-1"
                        aria-label="Close menu"
                    >
                        <X size={30} />
                    </button>

                    {/* Menu Items */}
                    <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-lg">
                        <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Home</a>
                        <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Features</a>
                        <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Testimonials</a>
                        <a href="#cta" onClick={() => setMenuOpen(false)} className="hover:text-indigo-400 transition-colors">Contact</a>

                        <Link
                            to="/app?state=register"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-700 rounded-full transition-colors"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/app?state=login"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-2 border rounded-full hover:bg-white/10 transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;