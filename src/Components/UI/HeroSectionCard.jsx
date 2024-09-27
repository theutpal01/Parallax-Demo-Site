import Button from "./Button";

function HeroSectionCard() {
	return (
		<div className="mx-auto h-[75vh] rounded-3xl text-white flex flex-col items-center justify-center border border-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 bg-white/5">
			<div className="text-center flex flex-col gap-10 font-manrope">
				<h2 className="text-5xl sm:text-6xl md:text-10xl font-bold font-manrope text-gray-400 ">
					READY TO SEEK
				</h2>
				<h2 className="text-5xl sm:text-6xl md:text-10xl font-bold text-transparent bg-clip-text leading-10 bg-gradient-to-r from-primary-dark from-50% to-neutral-700 font-manrope">
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
