import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from '../axios/axiosClient.js';

export default function(){
    const navigate = useNavigate();
    const { slug } = useParams();

    const { getPhoto, getCategories, baseUrl } = useGlobal();

    const [formData, setFormData] = useState();
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try{
            setFormData(await getPhoto(slug));
            setFormData(curr => ({...curr, categories: curr.categories.map(c => c.id)}));
            setCategories(await getCategories());
            setLoading(false);
        }catch(err){
            console.error(err);
            setLoading(true);
        };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.put(`/photos/${slug}`, formData, {headers:{
                "Content-type": "multipart/form-data",
            }});
            const newSlug = response.data.photo.slug;
            navigate(`/dashboard/${newSlug}`);
        }catch(err){
            console.error(err);
        }
    }

    const handleInputFields = (e) => { 
        switch(e.target.type){
            case "file":
                setFormData(curr => ({...curr, [e.target.name]: e.target.files[0]}));
                break;
            case "checkbox":
                setFormData(curr => ({...curr, [e.target.name]: e.target.checked}));
                break;
            default:
                setFormData(curr => ({...curr, [e.target.name]: e.target.value}));
            }
    };

    useEffect(()=> {
        fetchData();
    },[slug]);

    return(<>
        {!loading && <>
            <section>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Title
                            <input type="text" name="title" id="title" value={formData.title} onChange={handleInputFields}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Description
                            <textarea name="description" id="description" className="w-full" rows="10" value={formData.description} onChange={handleInputFields}></textarea>
                        </label>
                    </div>
                    <div>
                        <label>
                            Change Image
                            <input type="file" name="image" id="image" onChange={handleInputFields} />
                            <img className="w-32" src={`${baseUrl}/${formData.image}`} alt="" />
                        </label>
                    </div>
                    <div>
                        <label>
                            Visible <em>(by checking this, you make the photo visible for everyone)</em>
                            <input type="checkbox" name="visible" id="visible" checked={formData.visible} onChange={handleInputFields}/>
                        </label>
                    </div>
                    <div>
                        <ul>
                            {categories?.map((c,i) => (
                                <li key={`categories-create-photo-${c.id}-${i}`}>
                                    <label>
                                        {c.name}
                                        <input type="checkbox" name="categories" id={`categories-${c.id}`} checked={formData.categories.includes(c.id)} onChange={() => handleMultipleCheckboxes(c.id)}/>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button type="submit">Edit</button>
                </form>
            </section>
        
        </>}
    </>)
}