import { createContext, useContext } from "react";
import axios from "../axios/axiosClient.js";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const getPhoto = (slug) => {
        return axios.get(`/photos/${slug}`)
                    .then((res) => res.data.photo);
    }

    const getCategories = () => {
            return axios.get('/categories')
                    .then((res) => res.data.categories);
    }


    const values = {
        getPhoto,
        getCategories,
        baseUrl
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