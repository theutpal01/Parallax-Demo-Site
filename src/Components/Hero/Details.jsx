import { useState, useRef } from "react";

function Details() {
	return (
		<div className="min-h-screen text-gray-400 bg-background font-manrope !leading-loose">
			<div className="flex h-fit overflow-hidden gap-5 p-10 bg-background cursor-grab">
				<p className="text-7xl md:text-10xl font-bold font-manrope text-gray-400 leading-relaxed">
					THE CURRENT PERIOD OF ECONOMIC STAGNATION AND HYPERINFLATION
					HAS LED TO AN INCREASE IN RELATIVE POVERTY IN THE WORLD!
				</p>
				<img className="h-96" src="images/fire.png" alt="" />
				{/* <p className="text-7xl md:text-10xl font-bold font-manrope text-gray-400 leading-relaxed">
					AS JOBS PER CAPITA DECLINE OVER TIME, IT IS NOW IMPERATIVE
					TO TURN TOWARDS ENTREPRENEURSHIP AND INDEPENDENCE.
				</p> */}
			</div>
			<p className="text-md md:text-lg lg:text-xl xl:text-3xl font-semibold font-manrope text-gray-400 !leading-loose mt-20">
				<span className="text-primary">WEALTH CREATIONS UNIVERSITY</span>{" "}
				IS AN ONLINE EDUCATION PLATFORM THAT{" "}
				<span className="text-primary">TEACHES</span> INDIVIDUALS FROM ALL
				AROUND THE GLOBE, THE{" "}
				<span className="text-primary">STRATEGIC METHODS</span> ON HOW TO
	theme = "default",
				MAKE <span className="text-primary">MONEY</span>, THROUGH ITS
				PROVIDENCE OF EDUCATION AND{" "}
				<span className="text-primary">GUIDANCE</span> IN OVER 20
				MODERNISTIC{" "}
				<span className="text-primary">WEALTH ACQUISITION</span>{ " " }
				METHODS.
			</p>
		</div>
	);
}

export default Details;
