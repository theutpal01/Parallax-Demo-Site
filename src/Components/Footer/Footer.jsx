function Footer() {
	return (
		<div className="w-full p-5 px-10">
			<div className="mx-auto">
				<div className="w-full bg-primary h-1" />
			</div>
			<p className="text-lg md:text-md font-manrope text-gray-400 leading-loose p-5">
				WCU IS AN{" "}
				<span className="text-primary">ONLINE EDUCATIONAL</span>{" "}
				COMMUNITY PLATFORM. ANY MEMBERS ENROLLED MUST UNDERSTAND THAT
				THEY ARE RESPONSIBLE FOR IMPLEMENTING THE KNOWLEDGE TAUGHT
				INSIDE OF WCU. WCU DOES{" "}
				<span className="text-primary">NOT GUARANTEE</span> ANY PROFIT
				EARNINGS. WCU IS{" "}
				<span className="text-primary">NOT RESPONSIBLE</span> FOR ANY
				STUDENT'S DECISION AND/OR FAILURE TO MAKE MONEY.
			</p>

			<div className="mt-20 text-primary flex justify-between">
				<a href="#">PRIVACY POLICY</a>
				<a href="#">TERMS AND CONDITIONS</a>
				<a href="#">RIGHTS RESERVED BY ACE INSTITUTE</a>
			</div>
		</div>
	);
}

export default Footer;
