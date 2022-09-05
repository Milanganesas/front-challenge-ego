import axios from "axios";
import { createContext, useContext, useState } from "react";

const URL = "https://challenge.agenciaego.tech/api/models/";

const apiContext = createContext();

export const useApi = () => {
    return useContext(apiContext);
};

export const ApiProvider = ( {children} ) => {

    const getAllModels = async () => {
        const response = await axios.get(URL)
        const models = await response.data;
        return models;
    };

    const getModelId = async (id) => {
        const response = await axios.get(URL+id)
        const models = await response.data
        return models;
    };

    const [models, setModels] = useState();

    const [filterOrder, setFilterOrder] = useState();

    const [page, setPage] = useState();

    return (
        
        <apiContext.Provider value={{models, setModels, filterOrder, setFilterOrder, getAllModels, getModelId, page, setPage}}>
            {children}
        </apiContext.Provider>
    )
};