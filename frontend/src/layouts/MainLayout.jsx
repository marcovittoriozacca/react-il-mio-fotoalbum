import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
export default function(){
    return(<>
        <NavBar/>
        <Outlet/>
    </>)
}