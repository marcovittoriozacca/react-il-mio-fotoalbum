import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext"
import { useAuth } from "../contexts/AuthContext"
import { FaTrash as Delete } from "react-icons/fa";
import axios from '../axios/axiosClient.js';

export default function(){
    const { user } = useAuth();

    const { getCategories } = useGlobal();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try{
            setCategories(await getCategories());
            setLoading(false)
        }catch(err){
            setLoading(true)
            console.error(err);
        }
    }
    const handleDelete = async (slug) => {
        try{
            await axios.delete(`/categories/${slug}`);
            fetchCategories();
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchCategories();
    },[user])

    return(<>
        {!loading && <>
            <ul className="flex flex-col items-start gap-y-3">
                <div></div>
                {categories.map((c,i)=>(
                    <li key={`categories-list-${c.id}-${i}`} className="flex items-center gap-x-3">
                        <div className="bg-slate-100 p-3">
                            {c.name}
                        </div>
                        <button onClick={() => handleDelete(c.slug)}>
                            <Delete className="text-red-600 bg-rose-100 p-1 rounded-sm text-2xl"/>
                        </button>
                    </li>
                ))}
            </ul>
        
        </>}
    </>)
}