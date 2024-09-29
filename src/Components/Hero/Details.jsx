import { useState, useRef } from "react";

function Details() {
	return (
		<div className="min-h-screen text-gray-400 bg-background font-manrope !leading-loose -z-50">
			<div
				className="absolute w-[120rem] h-[120rem] rounded-full border-[1px] border-yellow-800"
				style={{
					top: "34%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			></div>
			<div className="flex h-fit overflow-hidden gap-5 p-10 bg-background cursor-grab">
				<p className="text-[3.2rem] md:text-10xl font-bold font-manrope text-gray-400 leading-relaxed flex-1">
					THE CURRENT PERIOD OF <span className="text-primary-light">ECONOMIC STAGNATION</span> AND HYPERINFLATION
					HAS LED TO <span className="text-white">AN</span> <span className="text-primary-light">INCREASE</span> IN RELATIVE <span className="text-red-500">POVERTY</span> IN THE WORLD!
				</p>
				<img
					className="relative right-[-20%] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] xl:aspect-auto object-contain"
					src="images/fire.png"
					alt="Fire Icon"
				/>
			</div>
			<div className="absolute left-[5%] bottom-[67%] xl:w-[20rem]">
				<img src="/images/wallet.png" alt="" />
			</div>
			<p className="text-md md:text-lg lg:text-xl xl:text-3xl font-semibold font-manrope text-gray-400 !leading-loose mt-20">
				<span className="text-primary">WEALTH CREATIONS UNIVERSITY</span>{" "}
				IS AN ONLINE EDUCATION PLATFORM THAT{" "}
				<span className="text-primary">TEACHES</span> INDIVIDUALS FROM ALL
				AROUND THE GLOBE, THE{" "}
				<span className="text-primary">STRATEGIC METHODS</span> ON HOW TO
				MAKE <span className="text-primary">MONEY</span>, THROUGH ITS
				PROVIDENCE OF EDUCATION AND{" "}
				<span className="text-primary">GUIDANCE</span> IN OVER 20
				MODERNISTIC{" "}
				<span className="text-primary">WEALTH ACQUISITION</span>{" "}
				METHODS.
			</p>
		</div>
	);
}

export default Details;