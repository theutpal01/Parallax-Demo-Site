import React from "react";
import Button from "../UI/Button";

function Join() {
	return (
		<div className="h-screen text-white">
			<div className="w-10/12 gap-4 p-5 border rounded-3xl border-white  mx-auto text-center flex flex-col items-center justify-center h-3/4">
				<h3 className="text-7xl md:text-10xl font-bold font-manrope text-gray-400 leading-relaxed">
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
			</div>
		</div>
	);
}

export default Join;
