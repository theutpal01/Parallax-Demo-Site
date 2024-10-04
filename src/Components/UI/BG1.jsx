import { Parallax } from "react-scroll-parallax";

const BG1 = () => {
	return (
		<div className="inset-0 !bg-background">
			<div className="absolute w-[135rem] h-[135rem] rounded-full border border-yellow-600 origin-center top-[14.5%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute w-[150rem] origin-center h-16 border border-yellow-600 top-[16%] left-1/2 -translate-x-1/2 rotate-[25deg]"></div>
			{/* <div className="absolute w-[130rem] h-[130rem] rounded-full border border-yellow-600 origin-center top-[39%] left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
			<div className="absolute w-[45%] h-[13%] rounded-[50%] border border-yellow-600 origin-center top-[63.5%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute w-[70%] h-[23%] rounded-[50%] border border-yellow-600 origin-center top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute w-[80%] h-[20%] rounded-[50%] border border-yellow-600 origin-center top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
		</div>
	);
};

export default BG1;
