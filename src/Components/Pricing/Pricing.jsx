import React from "react";
import PriceCard from "../UI/PriceCard";
import coinIcon from "../UI/Images/circleCoin.png";
import puzzleIcon from "../UI/Images/puzzleIcon.png";
import ballIcon from "../UI/Images/circleBall.png";

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
		<div className="min-h-screen w-full flex flex-col justify-center items-center">
			
			<div className="relative grid lg:grid-cols-3 gap-16 py-10 mt-20">
			<img
				src={puzzleIcon}
				alt="coin icon"
				className="absolute left-10 top-20 lg:left-[25%] lg:top-0 w-24 h-24 lg:w-48 lg:h-48 opacity-60"
			/>
			<img
				src={coinIcon}
				alt="coin icon"
				className="absolute left-[50%] top-[58%] lg:left-[57%] lg:top-[65%] w-24 h-24 lg:w-48 lg:h-48 opacity-60"
			/>
			<img
				src={ballIcon}
				alt="coin icon"
				className="absolute right-10 top-[28%] lg:right-10 lg:top-0 w-24 h-24 lg:w-48 lg:h-48 opacity-60"
			/>

				{plans.map((plan, index) => (
					<PriceCard
						key={index}
						plan={plan.plan}
						price={plan.price}
						features={plan.features}
						buttonText={plan.buttonText}
						theme={plan.theme}
					/>
				))}
			</div>
			<p className="w-1/2 py-16 text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold font-manrope text-gray-400 !leading-relaxed">
				“TO <span className="text-red-400">PROCRASTINATE</span> IS A
				CHOICE BUT TO <span className="text-primary">TAKE ACTION</span>{" "}
				IS A NECESSITY.” <br />- AS, CEO of WCU
			</p>
		</div>
	);
}

export default Pricing;
