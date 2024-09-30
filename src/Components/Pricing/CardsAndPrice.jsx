import DisplayCards from "./DisplayCards";
import Pricing from "./Pricing";
export default function CardsAndPrice(){
    return(
        <div className="relative py-5 mt-10">
            <div className="absolute inset-0 flex justify-center items-center z-0">
				{/* Oval shapes - different width and height */}
				<div className="top-[30%] w-[95vw] h-[180vh] rounded-full border border-yellow-400 opacity-40 absolute" />
				<div className="top-[37%] w-[75vw] h-[175vh] rounded-full border border-yellow-400 opacity-40 absolute" />
				<div className="top-[40%] w-[57vw] h-[120vh] rounded-full border border-yellow-400 opacity-40 absolute" />
			</div>
            <div className="flex flex-col gap-5">
            <DisplayCards />
            {/* <DisplayCards /> */}
            </div>
            <Pricing />
        </div>
    )
}