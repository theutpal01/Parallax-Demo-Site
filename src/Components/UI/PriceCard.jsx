import { FaCheckSquare } from "react-icons/fa";
import Button from "./Button";

function PriceCard({ plan, price, features, buttonText, className }) {
	return (
		<div
			className={`w-full h-full rounded-3xl p-10 backdrop-blur bg-gradient-to-tr from-primary-dark/25 via-white/10 z-10 to-white/5 text-gray-100 max-w-4xl flex gap-10 flex-col ${className}`}
		>
			<div>
				<h2 className="text-2xl font-bold mb-1 font-manrope text-gray-400">
					{plan}
				</h2>

				<p className="text-5xl font-semibold mb-12 font-manrope">
					{price}
				</p>
			</div>
			<ul className="mb-6">
				{features.map((feature, index) => (
					<li
						key={index}
						className="mb-4 flex items-center font-inter"
					>
						<FaCheckSquare className="text-white mx-2 border-yellow-500" />
						{feature}
					</li>
				))}
			</ul>

			{/* Button (Centered) */}
			<div className="flex pt-10 justify-center">
				<Button
					variant="filled"
					className="!w-fit !px-4"
					text={buttonText}
				>
					<img
						className="w-10 pl-2"
						src="images/tick.png"
						alt="Arrow"
					/>
				</Button>
			</div>
		</div>
	);
}

export default PriceCard;
