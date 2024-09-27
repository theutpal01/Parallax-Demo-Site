import {useState, useRef} from "react";

function Details() {
	return (
		<div className="min-h-screen text-gray-400 bg-background font-manrope">
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
			<p className="text-3xl md:text-4xl font-bold font-manrope text-gray-400 leading-loose my-20">
				WEALTH CREATIONS UNIVERSITY IS AN ONLINE EDUCATION PLATFORM THAT
				TEACHES INDIVIDUALS FROM ALL AROUND THE GLOBE, THE STRATEGIC
				METHODS ON HOW TO MAKE MONEY, THROUGH ITS PROVIDENCE OF
				EDUCATION AND GUIDANCE IN OVER 20 MODERNISTIC WEALTH ACQUISITION
				METHODS.
			</p>
		</div>
	);
}

export default Details;
