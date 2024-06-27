import { createContext, useContext, useState } from "react";
import axios from "../axios/axiosClient.js";
const AuthContext = createContext();
import { useNavigate } from "react-router-dom";



const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const initialUserValue = () => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));

        if(!token || !user){
            return null
        }

        return user
    }


    const [user, setUser] = useState(initialUserValue);

    const handleLogin = async (data) => {
        try{
            const response = await axios.post('/auth/login', data, {headers:{
                "Content-Type": "multipart/form-data"
            }});

            const { token } = response.data;
            const { email, username, image, id } = response.data.user;
            const user = {
                id,
                username,
                email,
                image
            };
            
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);

            setUser(user)
        }catch(err){
            throw err
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(initialUserValue);
        return navigate("/");
    }


    const values = {
        user,
        handleLogin,
        handleLogout
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth = () => {
    return useContext(AuthContext);
}

export{
    AuthProvider,
    useAuth,
}