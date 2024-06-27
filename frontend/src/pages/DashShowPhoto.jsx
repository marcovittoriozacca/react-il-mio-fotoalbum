import { useParams } from 'react-router-dom';
import axios from '../axios/axiosClient.js';
import { useEffect, useState } from 'react';
import { useGlobal } from '../contexts/GlobalContext.jsx';
import DashSinglePhoto from '../components/dashboard/dashboardMain/DashSinglePhoto.jsx';


export default function(){

    const { getPhoto } = useGlobal();
    const { slug } = useParams();
    const [photo, setPhoto] = useState({});

    const fetchPhoto = async () => {
        try{
            const photo = await getPhoto(slug);
            setPhoto(photo);
        }catch(err){
            console.error(err);
        };
        
    }

    useEffect(()=>{
        fetchPhoto();
    },[slug]);


    return(<>
        <section>

            <DashSinglePhoto
                photo={photo}
                user={{ username: photo?.user?.username, image: photo?.user?.image }}
            />
        
        </section>
    </>)

    

}