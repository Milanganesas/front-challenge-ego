import { useState } from "react";

const Slider = ({model_features}) => {

    const [slider, setSlider] = useState("slide-0");

    const selectSlider = (e) => {
        setSlider(e.target.id);
    };

    return (
        <div className="mb-[45px] bg-[#e6e6e6] py-[15px]">
            <div className="flex flex-nowrap justify-center">
                {model_features.map((m, idx) => {
                    return (
                        <div key={`slide-${idx}`} className={`w-[250px] grid gap-[10px] mb-[10px] ${slider === `slide-${idx}` ? "grid" : "hidden"}`}>
                            <img src={m.image} alt={m.name} className="rounded-[10px]"/>
                            <div className="grid text-center h-[80px] gap-[15px">
                                <h3 className="text-[20px] font-semibold">{m.name}</h3>
                                <p className="text-[16px]">{m.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex mx-auto mt-7 w-full justify-evenly px-5 md:justify-center space-x-2 md:space-x-8">
                <div id="slide-0" onClick={selectSlider} className={`duration-300 cursor-pointer w-4 bg-gray-300 h-4 rounded-full ${slider === "slide-0" ? 'w-14 bg-gray-400' : 'w-4 bg-gray-300'}`}></div>
                <div id="slide-1" onClick={selectSlider} className={`duration-300 cursor-pointer w-4 bg-gray-300 h-4 rounded-full ${slider === "slide-1" ? 'w-14 bg-gray-400' : 'w-4 bg-gray-300'}`}></div>
            </div>
        </div>
    )
};

export default Slider;