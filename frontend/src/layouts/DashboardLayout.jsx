import { Outlet, useNavigate } from "react-router-dom";
import DashNavbar from "../components/dashboard/dashboardHeader/DashNavbar";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function(){

    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate("/login");
        }
    },[user])

    return(<>
        <DashNavbar/>
        <Outlet/>
    </>)
}