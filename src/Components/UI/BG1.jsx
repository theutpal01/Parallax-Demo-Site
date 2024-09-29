

const BG1 = () => {
    return (
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `url('/images/sphere.png'), url('/images/dollar.png')`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "-5% 9%, 110% 2%",
                backgroundSize: "20%, 30%",
            }}
        >
            <div
                className="absolute w-[120rem] h-[120rem] rounded-full border-[1px] border-yellow-800"
                style={{
                    top: "16%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            ></div>
        </div>
    )
}

export default BG1;