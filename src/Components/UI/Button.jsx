function Button({
	className,
	type = "button",
	variant = "filled",
	name,
	id,
	text = "Click Me",
	size = "md",
	children,
	onClick = () => {},
}) {
	const btnStyles = {
		outlined:
			"border rounded-full border-primary text-primary bg-transparent",
		filled: "rounded-full bg-background text-primary font-bold",
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
			className={`flex items-center justify-center w-full active:scale-95 origin-bottom px-8 py-3 text-center ${btnStyles[variant]} ${btnStyles[size]} ${className} transition-transform transform hover:scale-105`}
			onClick={onClick}
		>
			{text}
			{children}
		</button>
	);
}

export default Button;
