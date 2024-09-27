import Button from "./Button";

function HeroSectionCard() {
	return (
		<div className="mx-auto h-[75vh] rounded-3xl backdrop-blur-sm shadow-sm text-white flex flex-col items-center justify-center border border-white">
			<div className="text-center">
				<h1 className="text-5xl sm:text-6xl md:text-10xl font-bold font-manrope text-gray-400">
					READY TO SEEK
				</h1>
				<br />
				<br />
				<h2 className="text-5xl sm:text-6xl md:text-10xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-manrope">
					FORTUNE??
				</h2>
				<br />
				<br />
			</div>

			<Button
				variant="outlined"
				size="xl"
				className="!w-fit !py-3"
				text="Explore"
			>
				<img className="w-10 pl-2" src="images/arrow.png" alt="Arrow" />
			</Button>
		</div>
	);
}

export default HeroSectionCard;
