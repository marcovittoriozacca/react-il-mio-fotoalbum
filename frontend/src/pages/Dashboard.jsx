import { useState, useEffect } from "react";
import axios from '../axios/axiosClient.js';
import { useAuth } from "../contexts/AuthContext";
import TableRecord from "../components/dashboard/dashboardMain/TableRecord.jsx";
import './Dashboard.css';

export default function(){
    const { user } = useAuth();
    const [records, setRecords] = useState([]);
    const [filter, setFilter] = useState('');

    const getRecords = async () => {
        try{
            const response = await axios.get(`/photos?filter=${filter}`);
            setRecords(response.data.photos);
        }catch(err){
            console.error(err)
        }
    }

    useEffect(()=>{
        if(!user){
            return
        }
        getRecords();
    },[user?.id, filter]);


    return(<>
    <section>
        <div id="filterSection" className="py-2">
            <input className="border focus:border-transparent" placeholder={"Filter photos..."} type="text" name="filter" id="filter"  value={filter} onChange={(e)=>setFilter(curr => e.target.value)}/>
        </div>

        <table className="table-auto w-full text-center">
            <thead className="border-b">
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Categories</th>
                    <th>Visible</th>
                    <th>User</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {records?.map((r,i) => (
                    <tr key={`photo-${r.id}`}>
                        <TableRecord
                            image={r.image}
                            title={r.title}
                            slug={r.slug}
                            visible={r.visible === true? "true" : "false"}
                            categories={r.categories.map(c => c.name)}
                            user={{ id: r.user.id, username: r.user.username }}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
    </>)
}