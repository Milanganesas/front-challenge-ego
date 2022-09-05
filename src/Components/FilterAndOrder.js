import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useApi } from "../Context/Models";

const FilterAndOrder = () => {

    const {getAllModels, filterOrder, setFilterOrder, models, setModels} = useApi();
    
    const getModels = async () => {
        const arrModels = await getAllModels()
        setModels(arrModels);
        setFilterOrder(arrModels)
    };

    useEffect(() => {
        getModels();
    }, []);


    const typeFilter = ["Todos", "Autos", "Pickups y Comerciales", "SUVs"]
    const typeOrder = ["Nada", "De menor a mayor", "De mayor a menor", "Más nuevo", "Más viejo"]

    const [fOpen, setFOpen] = useState(true);

    const [oOpen, setoOpen] = useState(true);

    const [typeF, setTypeF] = useState("Todos")

    const [typeO, setTypeO] = useState("Nada")

    const filterOpen = () => {
        fOpen ? setFOpen(false) : setFOpen(true);
    };

    const orderOpen = () => {
        oOpen ? setoOpen(false) : setoOpen(true);
    };

    const filter = (e) => {
        const type = e.target.innerText;

        setTypeF(type)
        
        if(type === "Todos") setFilterOrder(models);
        if(type === "Autos") setFilterOrder(models.filter(m => m.segment === "Sedan" || m.segment === "Hatchback"));
        if(type === "Pickups y Comerciales") setFilterOrder(models.filter(m => m.segment === "Pickups y Comerciales"));
        if(type === "SUVs") setFilterOrder(models.filter(m => m.segment === "SUVs"));
    };

    const order = (e) => {
        const type = e.target.innerText;

        setTypeO(type)
        
        if(type === "Nada") {
            const aux = filterOrder.sort((a, b) => a.id - b.id);
            setFilterOrder([...aux]);
        }
        if(type === "De mayor a menor") {
            const aux = filterOrder.sort((a, b) => b.price - a.price);
            setFilterOrder([...aux]);
        }
        if(type === "De menor a mayor") {
            const aux = filterOrder.sort((a, b) => a.price - b.price);
            setFilterOrder([...aux]);
        }
        if(type === "Más nuevo") {
            const aux = filterOrder.sort((a, b) => b.year - a.year);
            setFilterOrder([...aux]);
        }
        if(type === "Más viejo") {
            const aux = filterOrder.sort((a, b) => a.year - b.year);
            setFilterOrder([...aux]);
        }

    };

    return (
        <div className="flex text-[14px] mt-[40px] sm:mt-[75px] mx-[15px] sm:mx-[150px] justify-between border-b-2 border-[#D8D8D8] pb-[15px] mb-[50px] sm:mb-[60px]">
            <div className="lg:flex lg:items-center">
                <button onClick={filterOpen} className="flex gap-1 items-center px-4 py-2 mr-[60px] lg:pointer-events-none font-semibold">
                    Filtrar por {fOpen ? <BiChevronDown className="lg:hidden"/> : <BiChevronUp className="lg:hidden"/>}
                </button>
                <div className={`grid absolute lg:relative text-[10px] sm:text-[14px] lg:flex lg:gap-[45px] ${fOpen && "hidden"} lg:shadow-none shadow-md rounded-[6px]`}>
                    {typeFilter.map((f, idx) => {
                        return (
                            <a key={idx} id={`filter-${idx}`} onClick={filter} className={`hover:cursor-pointer px-[18px] py-[8px] lg:rounded-[18px] bg-white hover:bg-[#ebebeb] ${typeF === f && "bg-[#ebebeb]"} lg:border-none border border-gray-100`}>{f}</a>
                        )
                    })}
                </div>
            </div>
            <div>
                <button onClick={orderOpen} className="flex px-4 py-2 font-semibold items-center gap-1">
                    Ordenar por {oOpen ? <BiChevronDown /> : <BiChevronUp />}
                </button>
                <div className={`grid text-[10px] sm:text-[14px] absolute ${oOpen && "hidden"} shadow-md rounded-[6px]`}>
                    {typeOrder.map((o, idx) => {
                        return (
                            <a key={idx} onClick={order} className={`hover:cursor-pointer px-[18px] py-[8px] bg-white hover:bg-[#ebebeb] ${typeO === o && "bg-[#ebebeb]"} border border-[#ebebeb]`}>{o}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default FilterAndOrder;