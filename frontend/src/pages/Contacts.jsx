import { useEffect, useState } from "react";
import axios from '../axios/axiosClient.js';
import { useAuth } from "../contexts/AuthContext.jsx";
import { dateTimeFormatter } from '../utils.js';

export default function(){
    const { user } = useAuth();
    const [ contacts, setContacts ] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {

        try{
            const response = await axios.get('/contact-us');
            setContacts(response.data.contacts);
            setLoading(false);
        }catch(err){
            console.error(err);
            setLoading(true);
        }
    };

    useEffect(()=>{
        fetchData();
    },[user])


    return(<>
        {!loading && <>
            <table className="text-center w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-300 py-1 bg-sky-100/50">
                            Email
                        </th>
                        <th className="border border-slate-300 py-1">
                            Message
                        </th>
                        <th className="border border-slate-300 py-1">
                            Date Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map((c,i)=>(
                    <tr key={`contacts-table-${c.i}-${i}`}>
                        <td className="border border-slate-300 py-1 bg-sky-100/50">
                            <a href={`mailto:${c.email}`}>
                                {c.email}
                            </a>
                        </td>
                        <td className="border border-slate-300 py-1">
                            {c.message}
                        </td>
                        <td className="border border-slate-300 py-1">
                            {dateTimeFormatter(c.createdAt)}

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>}
    </>)
}