import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from '../axios/axiosClient.js';

export default function(){
    const navigate = useNavigate();
    const { user } = useAuth();
       const { getCategories } = useGlobal();
       
       const initialData = {
        title: "",
        description: "",
        image:[],
        visible: true,
        categories: [],
        userId: user.id,
       };

       const [categories, setCategories] = useState([]);
       const [loading, setLoading] = useState(true);
       
       const [formData, setFormData] = useState(initialData);

        const fetchCategories = async () => {
            try{
                const response = await getCategories();
                setCategories(response);
                setLoading(false);
            }catch(err){
                console.error(err);
                setLoading(true);
            }
        };

        const createNewPhoto = async (data) => {
            try{
                const response = await axios.post('/photos', data, {headers:{
                    "Content-type": "multipart/form-data"
                }});
                const { slug } = response.data.new_photo;
                navigate(`/dashboard/${slug}`);
            }catch(err){
                console.error(err);
            }
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            createNewPhoto(formData)
        };

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

        const handleMultipleCheckboxes = (id) => {
            setFormData(curr => ({...curr, categories: (!curr.categories.includes(id)? [...curr.categories, id] : curr.categories.filter(t => t !== id) ) }))
        }

       useEffect(()=>{
        fetchCategories();
       },[]);


       return(<>
       {!loading &&
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
                            Image
                            <input type="file" name="image" id="image" onChange={handleInputFields} />
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

                    <button type="submit">Create</button>
                </form>
            </section>
            }
       </>)
}