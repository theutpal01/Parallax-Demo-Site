// import { FaRocket } from "react-icons/fa"

// function HeroSectionCard() {
//     return (
//         <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-50 text-center px-4 py-16 relative">
//             <div className="relative z-10 w-full max-w-3xl mx-auto p-8 rounded-3xl bg-gray-800 bg-opacity-20 backdrop-blur-md shadow-lg text-white flex flex-col items-center justify-center h-full">
//                 <div className="mb-8">
//                     <h1 className="text-7xl md:text-10xl font-bold font-manrope text-gray-400 my-10">READY TO SEEK</h1>
//                     <h2 className="text-7xl md:text-10xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-manrope">
//                         FORTUNE??
//                     </h2>
//                 </div>

//                 <button className="bg-opacity-20 mt-4 p-6 text-5xl font-bold bg-black text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:bg-opacity-70 transition-all duration-300 font-manrope flex items-center justify-center relative group">
//                     Explore
//                     <FaRocket className="text-black mx-2 hidden group-hover:block" />
//                 </button>
//             </div>

//             {/* This is just for checking the transparency of the card */}
//             <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-30"
//                 style={{ backgroundImage: "url('../images/cube-dynamic-premium.png')" }}>
//             </div>
//         </div>
//     );
// }

// export default HeroSectionCard;

import { FaRocket } from "react-icons/fa";

function HeroSectionCard() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black bg-opacity-50 text-center px-0 py-16 relative">
            <div className="relative z-10 w-full h-full max-w-none mx-auto p-8 rounded-3xl bg-gray-800 bg-opacity-20 backdrop-blur-md shadow-lg text-white flex flex-col items-center justify-center border border-white">
                <div className="mb-8">
                    <h1 className="text-7xl md:text-10xl font-bold font-manrope text-gray-400 my-20">READY TO SEEK</h1>
                    <h2 className="text-7xl md:text-10xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 font-manrope my-10">
                        FORTUNE??
                    </h2>
                </div>

                <button className="bg-opacity-20 mt-4 p-6 text-5xl font-bold bg-black text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black hover:shadow-lg hover:bg-opacity-70 transition-all duration-300 font-manrope flex items-center justify-center relative group">
                    Explore
                    <FaRocket className="text-black mx-2 hidden group-hover:block" />
                </button>
            </div>

            {/* Background image to test transparency */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('../images/cube-dynamic-premium.png')" }}>
            </div> */}
        </div>
    );
}

export default HeroSectionCard;