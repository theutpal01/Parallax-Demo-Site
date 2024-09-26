import { useState } from "react";
import icon from "./logo.png";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <header className="text-white rounded-3xl font-inter bg-zinc-800 border border-white-400 m-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
                <span className="text-2xl font-bold">Vellore University</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
                <a href="#" className="hover:text-yellow-400">Home</a>
                <a href="#" className="hover:text-yellow-400">WCU</a>
                <a href="#" className="hover:text-yellow-400">Campuses</a>
                <a href="#" className="hover:text-yellow-400">Axioms</a>
                <a href="#" className="hover:text-yellow-400">Pricing</a>
                <a href="#" className="hover:text-yellow-400">Contact</a>
                <a href="#" className="hover:text-yellow-400">Testimonials</a>
                <a href="#" className="flex text-yellow-400 px-4 py-2 border border-yellow-400 rounded-full hover:bg-yellow-500 hover:text-black">
                    <b>Join</b>
                    <img src={icon} alt="icon" width='30px' />
                </a>
            </div>
            <div className="md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-yellow-400 focus:outline-none"
                >
                <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
                </button>
            </div>
            </div>
        </div>

        <div
            className={`fixed top-0 right-0 w-64 h-full bg-black text-white transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <button
            className="absolute top-4 right-4 text-yellow-400 focus:outline-none"
            onClick={() => setIsOpen(false)}
            >
            <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </button>
            <nav className="mt-16 space-y-4">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">Home</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">WCU</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">Campuses</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">Axioms</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">Pricing</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">Contact</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-yellow-400 hover:text-black">Testimonials</a>
            <a href="#" className="block px-4 py-2 text-md bg-yellow-400 text-black flex">
                <b>Join</b>
                <img src={icon} alt="icon" width='30px' />
            </a>
            </nav>
        </div>
        </header>
    )
}