import { Outlet } from "react-router-dom";
import DashNavbar from "../components/dashboard/dashboardHeader/DashNavbar";

export default function(){
    return(<>
        <DashNavbar/>
        <Outlet/>
    </>)
}