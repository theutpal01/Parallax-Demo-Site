import React from "react";
import PriceCard from "../UI/PriceCard";

function Pricing() {
	const plans = [
		{
			plan: "Per Month",
			price: "£29.99",
			features: [
				"Step by Step Guidance",
				"Practical world-class education",
				"1 to 1 support",
				"High-Income Skills Acquisition",
				"World Class Platform",
				"0 Experience Required",
				"50GB Cloud Storage",
			],
			buttonText: "Join this one?",
			theme: "primary",
		},
		{
			plan: "6 Month",
			price: "£149.99",
			features: [
				"Step by Step Guidance",
				"Practical world-class education",
				"1 to 1 support",
				"High-Income Skills Acquisition",
				"World Class Platform",
				"0 Experience Required",
				"50GB Cloud Storage",
			],
			buttonText: "Join this one?",
			theme: "primary",
		},
		{
			plan: "12 Month",
			price: "£299.99",
			features: [
				"Step by Step Guidance",
				"Practical world-class education",
				"1 to 1 support",
				"High-Income Skills Acquisition",
				"World Class Platform",
				"0 Experience Required",
				"50GB Cloud Storage",
			],
			buttonText: "Join this one?",
			theme: "primary",
		},
	];

	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center p-6">
			<div className="grid md:grid-cols-3 gap-16">
				{plans.map((plan, index) => (
					<PriceCard
						key={index}
						plan={plan.plan}
						price={plan.price}
						features={plan.features}
						buttonText={plan.buttonText}
						theme={plan.theme}
						size="md"
					/>
				))}
			</div>
			<p className="w-3/4 py-16 text-7xl md:text-10xl font-bold font-manrope text-gray-400 leading-relaxed">
				“TO <span className="text-red-400">PROCRASTINATE</span> IS A
				CHOICE BUT TO <span className="text-primary">TAKE ACTION</span>{" "}
				IS A NECESSITY.” – AS, CEO of WCU
			</p>
		</div>
	);
}

export default Pricing;
