import { useState } from "react";
import { LuXCircle, LuMenu } from "react-icons/lu";
import Button from "../UI/Button";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="text-white font-inter">
			<div className="mx-auto px-4 sm:px-6 lg:px-10 border border-white bg-background rounded-3xl backdrop-blur-sm">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center">
						<span className="text-2xl font-bold">
							Vellore University
						</span>
					</div>
					<div className="hidden xl:flex space-x-8 items-center">
						<a href="#" className="hover:text-primary-light">
							Home
						</a>
						<a href="#" className="hover:text-primary-light">
							WCU
						</a>
						<a href="#" className="hover:text-primary-light">
							Campuses
						</a>
						<a href="#" className="hover:text-primary-light">
							Axioms
						</a>
						<a href="#" className="hover:text-primary-light">
							Pricing
						</a>
						<a href="#" className="hover:text-primary-light">
							Contact
						</a>
						<a href="#" className="hover:text-primary-light">
							Testimonials
						</a>
						<a href="#">
							<Button variant="outlined" text="Join">
								<img
									className="w-7 pl-2"
									src="images/arrow.png"
									alt="Arrow"
								/>
							</Button>
						</a>
					</div>
					<div className="xl:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-primary focus:outline-none"
						>
							<LuMenu className="h-8 w-8" />
						</button>
					</div>
				</div>
			</div>

			<div
				className={`fixed z-0 top-0 right-0 w-64 h-full bg-background text-white transition-transform transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					className="absolute top-4 right-4 text-primary focus:outline-none"
					onClick={() => setIsOpen(false)}
				>
					<LuXCircle className="h-8 w-8" />
				</button>
				<nav className="mt-16 space-y-4">
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Home
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						WCU
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Campuses
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Axioms
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Pricing
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Contact
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm hover:bg-primary-light hover:text-black"
					>
						Testimonials
					</a>
					<a
						href="#"
						className="flex px-4 py-2 text-md bg-primary-light text-black items-center justify-items-center"
					>
						<b>Join</b>
						<img src="images/arrow.png" alt="icon" width="30px" />
					</a>
				</nav>
			</div>
		</header>
	);
}
