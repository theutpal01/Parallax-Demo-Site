import Button from "../UI/Button";

function Enroll() {
	return (
		<div className="h-screen text-white">
			<div className="w-10/12 border rounded-3xl bg-gray-800 border-white  mx-auto text-center flex flex-row items-center justify-center h-3/4">
				<h2 className="text-5xl sm:text-6xl md:text-10xl font-bold w-3/4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-manrope">
					YOU HAVE 2 OPTIONS,<br />JOIN NOW SEEK YOUR FORTUNE <br/>OR <br/>WASTE YOUR
					POTENTIAL AND HAVE PERMANENT REGRET
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
		</div>
	);
}

export default Enroll;
