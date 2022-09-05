import { Link } from "react-router-dom";
import { useApi } from "../Context/Models";

const ListModels = () => {
    const { filterOrder} = useApi();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 min-h-screen min-w-screen sm:mx-[150px]">
            {filterOrder ? 
                filterOrder.map(m => {
                    return (
                        <div key={m.id} className="grid text-center h-[300px] sm:mx-2 mb-[45px] sm:mb-0 hover:text-[#EB0A1E]">
                            <Link to={`/${m.id}`}>
                            <div id={`car${m.id}`} className="peer grid justify-center">
                                <h3 className="font-semibold text-[28px]">{m.name}</h3>
                                <p className="text-black text-[14px]">{m.year} | ${m.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
                                <div className="flex items-center h-[225px]">
                                    <img src={m.thumbnail} alt={m.name} />
                                </div>
                            </div>
                            <div htmlFor={`car${m.id}`} className="opacity-0 text-black peer-hover:opacity-100 hover:opacity-100">
                                <button className="w-2/3 p-2 relative -top-9 cursor-pointer rounded-full text-lg bg-[#191919] text-white duration-200">Ver Modelo</button>
                            </div>                       
                            </Link>
                        </div>
                    )
                }) :
                <h2>Loading...</h2>
            }
        </div>
    )
};

export default ListModels;