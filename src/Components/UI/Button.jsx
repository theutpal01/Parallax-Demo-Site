function Button({
	className,
	type = "button",
	variant = "outlined",
	name,
	id,
	text = "Click Me",
	size = "lg",
	children,
	onClick = () => {},
	iconType,
}) {
	const btnStyles = {
		outlined: "border-2 rounded-full border-[#E7CC46] text-[#F4BC1E] bg-transparent transition duration-300 font-inter text-xl font-black leading-6 text-left",
		gradient: "rounded-full bg-black font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4BC1E] to-[#8E6E12] text-2xl font-extrabold leading-6",

		xs: "text-xs",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
		xl: "text-xl",
	};

	return (
		<button
			name={name}
			id={id}
			type={type}
			className={`flex items-center justify-center w-full active:scale-95 origin-bottom px-8 py-4 text-center ${btnStyles[variant]} ${btnStyles[size]} ${className}`}
			onClick={onClick}
		>
			{text}
			{iconType === 'arrow' && <img src="/images/arrow.png" alt="Arrow" className="ml-2 w-6 h-6" />}
			{iconType === 'tick' && <img src="/images/tick.png" alt="Tick Icon" style={{ width: '30px', marginLeft: '10px' }} />}
			{children}
		</button>
	);
}

export default Button;
