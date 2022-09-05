import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "../Components/Slider";
import { useApi } from "../Context/Models";

const Details = () => {

    const {id} = useParams();

    const {getModelId, setPage} = useApi();

    const [model, setModel] = useState();

    const getModel = async () => {
        const newModel = await getModelId(id)
        setModel(newModel)
    };

    useEffect(() => {
        getModel();
        setPage(false);
    }, [])

    return (
            model ? 
                <div className="text-[#373737]">
                    <div className="flex flex-col lg:flex-row mx-[15px] gap-[10px] md:mx-[50px] items-center mb-[35px] px-8">
                        <div className="flex items-center flex-1 md:min-h-[400px]">
                            <img src={model.photo} alt={model.name} className="min-w-[250px] md:min-h-[300px]"/>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-[20px] font-semibold">{model.name}</h2>
                            <h1 className="text-[35px] lg:text-[50px] font-semibold">{model.title}</h1>
                            <p className="text-[16px]">{model.description.replace(/(<([^>]+)>)/gi, "")}</p>
                        </div>
                    </div>
                    <div>
                        <Slider model_features={model.model_features}/>
                    </div>
                    <div className="grid mx-[15px] gap-[45px] md:mx-[150px]">
                        {model.model_highlights.map((m, idx) => {
                            return (
                                <div className="grid gap-[17px] lg:flex lg:odd:flex-row-reverse lg:even:flex-row lg:items-center lg:content-between" key={idx}>
                                    <div className="flex-1">
                                        <img src={m.image} alt={m.title} className="rounded-[10px]"/>
                                    </div>
                                    <div className="lg:flex-1 lg:flex lg:flex-col lg:justify-center lg:items-center">
                                        <div className="grid w-3/4 gap-[17px]">
                                            <h3 className="text-[20px] font-semibold">{m.title}</h3>
                                            <p className="text-[16px]">{m.content.replace(/(<([^>]+)>)/gi, "")}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div> :
                <h1>Loading...</h1>
    )
};

export default Details;