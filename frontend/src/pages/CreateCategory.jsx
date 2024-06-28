import { useState } from "react"
import { useGlobal } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import axios from '../axios/axiosClient.js';

export default function(){
    const navigate = useNavigate();

    const { baseUrl } = useGlobal();
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name){
           try{
            const response = await axios.post('/categories', {name});
            navigate("/dashboard/categories/list");
           }catch(err){
            console.error(err);
           }
        }

    }

    return(
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label>
                    Name
                    <input className="p-1 bg-slate-100" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}