import { useEffect, useState } from 'react';
import axios from '../axios/axiosClient.js';
import { useGlobal } from '../contexts/GlobalContext';
import HomePagePhotoCard from '../components/main/HomePagePhotoCard.jsx';
import ContactForm from '../components/main/ContactForm.jsx';

export default function(){
    const { baseUrl } = useGlobal();
    const [photos, setPhotos] = useState([]);
    const [filter, setFilter] = useState("");

    const [loading, setLoading] = useState(true);

    const fetchPhotos = async () => {

        try{
            const response = await axios.get(`/photos?filter=${filter}`);
            setPhotos(response.data.photos);
            setLoading(false);
        }catch(err){
            console.error(err)
            setLoading(true);
        }
    };
    useEffect(()=>{
        fetchPhotos();
    },[filter]);




    return(<>
        {!loading && <>
            <section>
                <input type="text" name="filter" id="filter" value={filter} onChange={(e) => setFilter(e.target.value)} />
                <div className='flex gap-5 flex-wrap'>
                    {photos.map((p,i)=>(
                        p.visible &&
                        <HomePagePhotoCard 
                            photo={p}
                            key={`homepage-photo-card-${p.id}`}
                        />
                    ))}
                </div>
            </section>
            <ContactForm/>
        </>}
    </>)
}