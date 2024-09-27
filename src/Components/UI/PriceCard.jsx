import { FaCheckSquare, FaCheck } from "react-icons/fa";
import Button from "./Button";

function PriceCard({
	plan,
	price,
	features,
	buttonText,
	theme = "default",
	size = "md",
	className,
}) {
	const styles = {
		primary:
			"text-white border-primary-light dark:border-primary-dark bg-opacity-50",
		secondary:
			"text-white border-secondary-light dark:border-secondary-dark bg-opacity-50",
		tertiary:
			"text-white border-tertiary-light dark:border-tertiary-dark bg-opacity-50",
		default: "text-white bg-opacity-50",
		xs: "max-w-sm",
		sm: "max-w-md",
		md: "max-w-lg",
		lg: "max-w-xl",
		xl: "max-w-2xl",
	};

	return (
		<div
			className={`w-full h-full border rounded-xl shadow p-6 bg-slate-800 ${styles[theme]} ${styles[size]} ${className}`}
		>
			{/* Plan */}
			<h2 className="text-2xl font-bold mb-1 font-manrope text-gray-400">
				{plan}
			</h2>

			{/* Price */}
			<p className="text-4xl font-semibold mb-12 font-manrope">{price}</p>

			{/* Features */}
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
			<div className="flex justify-center">
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

// Example Use of Price Card

// const plans = [
//     {
//       plan: "Per Month",
//       price: "£29.99",
//       features: [
//         "Step by Step Guidance",
//         "Practical world-class education",
//         "1 to 1 support",
//         "High-Income Skills Acquisition",
//         "World Class Platform",
//         "0 Experience Required",
//         "50GB Cloud Storage",
//       ],
//       buttonText: "Join this one?",
//     },
//   ];

// {plans.map((plan, index) => (
//   <PriceCard
//     key={index}
//     plan={plan.plan}
//     price={plan.price}
//     features={plan.features}
//     buttonText={plan.buttonText}
//   />
// ))}
