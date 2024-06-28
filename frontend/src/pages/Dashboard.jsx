import { useState, useEffect } from "react";
import axios from '../axios/axiosClient.js';
import { useAuth } from "../contexts/AuthContext";
import TableRecord from "../components/dashboard/dashboardMain/TableRecord.jsx";
import './Dashboard.css';
import DeleteModal from '../components/dashboard/dashboardMain/DeleteModal.jsx';

export default function(){
    const { user } = useAuth();
    const [records, setRecords] = useState([]);
    const [filter, setFilter] = useState('');

    const [isOpen, setIsOpen] = useState(false)
    const [photoToDelete, setPhotoToDelete] = useState({
        title: null,
        slug: null,
    });
    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const handleGetRecordToDelete = (slug, title) => {
        setPhotoToDelete({title, slug});
    };

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
    },[user?.id, filter, photoToDelete]);

    useEffect(()=>{
        if(photoToDelete.slug){
            setIsOpen(true);
        }else{
            setIsOpen(false);
        }
    },[photoToDelete.slug]);


    return(<>
    <section>
        <DeleteModal
            open={isOpen}
            close={handleGetRecordToDelete}
            photo={photoToDelete}
        />
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
                            handleGetRecordToDelete={handleGetRecordToDelete}
                        />
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
    </>)
}