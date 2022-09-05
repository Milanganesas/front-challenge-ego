import { useEffect } from "react";
import { useApi } from "../Context/Models";

import FilterAndOrder from "../Components/FilterAndOrder";
import ListModels from "../Components/ListModels";

const Home = () => {

    const {setPage} = useApi();

    useEffect(() => {
        setPage(true)
    }, []);

    return (
        <>
            <h1 className="text-[#373737] font-bold text-[35px] sm:text-[50px] mx-[15px] sm:mx-[150px] mt-[50px]">Descubrí todos los modelos</h1>
            <FilterAndOrder />
            <ListModels />
        </>
    )
};

export default Home;