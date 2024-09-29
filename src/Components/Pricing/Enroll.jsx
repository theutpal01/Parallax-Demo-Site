import Button from "../UI/Button";

function Enroll() {
	return (
		<div className="flex justify-center items-center w-3/4 mx-auto pb-40">
			<h2 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold w-3/4 text-gray-400 bg-clip-text font-manrope !leading-relaxed">
				YOU HAVE 2 OPTIONS,
				<br />
				JOIN NOW <span className="text-primary">SEEK</span> YOUR{" "}
				<span className="text-primary">FORTUNE</span> <br />
				OR <br />
				WASTE YOUR
				<span className="text-primary">POTENTIAL</span> AND HAVE
				PERMANENT
				<span className="text-secondary-dark"> REGRET</span>
			</h2>
			<div className="w-1/4 mx-auto">
				<Button
					variant="filled"
					size="xl"
					className="!py-3 !w-fit"
					text="Enroll Now"
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

export default Enroll;
