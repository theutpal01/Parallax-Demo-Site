const BG1 = () => {
	return (
		<div className="inset-0 bg-background">
			{/* Outer circle */}
			<div className="absolute w-[80rem] sm:w-[90rem] md:w-[100rem] lg:w-[120rem] xl:w-[135rem] h-[80rem] sm:h-[90rem] md:h-[100rem] lg:h-[120rem] xl:h-[135rem] rounded-full border border-yellow-600 origin-center top-[17%] md:top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
			
			{/* Slanted line */}
			<div className="absolute w-[90rem] sm:w-[110rem] md:w-[120rem] lg:w-[135rem] xl:w-[150rem] h-10 sm:h-11 md:h-12 lg:h-14 xl:h-16 border border-yellow-600 top-[17%] md:top-[15%] left-1/2 -translate-x-1/2 rotate-[25deg]" />
			
			{/* Inner circles */}
			<div className="absolute w-[30%] sm:w-[35%] md:w-[40%] lg:w-[45%] xl:w-[45%] h-[8%] sm:h-[9%] md:h-[10%] lg:h-[12%] xl:h-[13%] rounded-[50%] border border-yellow-600 origin-center top-[63.5%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
			
			<div className="absolute w-[50%] sm:w-[55%] md:w-[60%] lg:w-[65%] xl:w-[70%] h-[15%] sm:h-[17%] md:h-[18%] lg:h-[20%] xl:h-[23%] rounded-[50%] border border-yellow-600 origin-center top-[68%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
			
			<div className="absolute w-[60%] sm:w-[65%] md:w-[70%] lg:w-[75%] xl:w-[80%] h-[12%] sm:h-[13%] md:h-[15%] lg:h-[18%] xl:h-[20%] rounded-[50%] border border-yellow-600 origin-center top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
		</div>
	);
};

export default BG1;
