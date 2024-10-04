import React from "react";
import Button from "../UI/Button";
import { Parallax } from "react-scroll-parallax";

function Join() {
	return (
		<div className="h-fit py-36 mx-auto px-10 flex items-end">
			<div className="relative w-full gap-10 p-10 border-b border-l rounded-3xl border-b-violet-950 border-l-violet-950 font-manrope mx-auto text-center flex flex-col items-center justify-center py-10 pt-28 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 bg-white/5 bg-gradient-to-tr from-primary-dark/25 via-white/5 to-transparent">
				<h3 className="text-xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold text-gray-400 !leading-relaxed">
					UNLOCK YOUR{" "}
					<span className="text-primary">TRUE POTENTIAL</span> THROUGH
					LEARNING PRACTICAL
					<span className="text-primary"> MONEY</span>-MAKING SKILLS.
				</h3>
				<Button
					variant="outlined"
					size="xl"
					className="!w-fit !py-3"
					text="Join Now!!"
				>
					<img
						className="w-10 pl-2"
						src="images/arrow.png"
						alt="Arrow"
					/>
				</Button>
				<Parallax translateX={[500, -40]} className="absolute -top-[40%] left-5 -translate-x-full -translate-y-full">
					<img
					className="w-96"
						src="images/key.png"
						alt="Key"
					/>
				</Parallax>
			</div>
		</div>
	);
}

export default Join;
