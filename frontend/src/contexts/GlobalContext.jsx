import { createContext, useContext } from "react";
import axios from "../axios/axiosClient.js";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const getPhoto = async (slug) => {
        try{
            const response = await axios.get(`/photos/${slug}`);
            return response.data.photo;
        }catch(err){
            console.error(err);
        };
    }

    const values = {
        getPhoto,
    };

    return(
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )

}

const useGlobal = () => {
    return useContext(GlobalContext);
};

export{
    GlobalProvider,
    useGlobal,
};