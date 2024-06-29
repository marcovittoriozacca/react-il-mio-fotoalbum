import { useEffect, useState } from "react";
import { useGlobal } from "../contexts/GlobalContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from '../axios/axiosClient.js';
import { IoMdCheckmark as Check } from "react-icons/io";
import { handleErrors } from '../utils.jsx';

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
       const [image, setImage] = useState('')

       const [errors, setErrors] = useState([]);

        const fetchCategories = async () => {
            try{
                const response = await getCategories();
                setCategories(response);
                setLoading(false);
            }catch(err){
                console.error(err)
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
                setErrors(err.response.data.errors);
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
                    setImage(URL.createObjectURL(e.target.files[0]))
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
            <section className="flex justify-center my-5">
                <form action="" onSubmit={handleSubmit} className="bg-[#eff4f8] p-5 rounded-md w-[700px]">
                    <div className="flex flex-col gap-y-5 w-full">
                        <div>
                            <label className="flex flex-col">
                                Title
                                <input className={`${errors.length>0? "border-red-500 bg-red-100" : ""} border-[1.5px] w-full py-1 px-1 rounded-sm outline-none focus:border-[#fc6e51]`}  type="text" name="title" id="title" value={formData.title} onChange={handleInputFields}/>
                                {handleErrors(errors, "title")}
                            </label>
                        </div>

                        <div>
                            <label className="flex flex-col">
                                Description
                                <textarea name="description" id="description" className={`border-[1.5px] w-full px-1 rounded-sm outline-none focus:border-[#fc6e51]`} rows="5" value={formData.description} onChange={handleInputFields}></textarea>
                                {handleErrors(errors, "description")}
                            </label>
                        </div>
                        <div>
                            Image
                            <div className="w-full flex items-center gap-x-2 p-2">
                                <div className="flex items-center justify-center w-2/3">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 bg-gray-100 border-gray-600 hover:border-gray-500">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                                        </div>
                                        <input id="dropzone-file" className="hidden" type="file" name="image" onChange={handleInputFields}/>
                                    </label>
                                </div>
                                {formData?.image && <>
                                    <div className="w-1/3">
                                        <figure className="w-full h-auto">
                                            <img src={image} alt=""/>
                                        </figure>
                                    </div>
                                </>}
                            </div>
                            {handleErrors(errors, "image")}
                        </div>

                        <div>
                            <label className="flex flex-col">
                                <div className="flex items-center gap-x-2">
                                    Visible
                                    <div className="w-5 h-5 relative">
                                        <input type="checkbox" name="visible" id="visible" className=" appearance-none w-full h-full rounded-sm bg-white border-2 border-slate-400 checked:border-orange-500 checked:bg-orange-50"  checked={formData.visible} onChange={handleInputFields}/>
                                        {formData.visible && <>
                                            <div className="absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
                                                <Check/>
                                            </div>
                                        </>}
                                    </div>
                                </div>
                                <em className="text-slate-500 text-sm">(by checking this, you make the photo visible for <span className="text-red-500">everyone</span>)</em>
                            </label>
                        </div>

                        <div>
                            <ul>
                                {categories?.map((c,i) => (
                                    <li key={`categories-create-photo-${c.id}-${i}`}>
                                        <label className="flex flex-col">
                                            <div className="flex items-center gap-x-2">
                                                {c.name}
                                                <div className="w-5 h-5 relative">
                                                    <input type="checkbox" name="categories" id={`categories-${c.id}`} className=" appearance-none w-full h-full rounded-sm bg-white border-2 border-slate-400 checked:border-orange-500 checked:bg-orange-50"  checked={formData.categories.includes(c.id)} onChange={() => handleMultipleCheckboxes(c.id)}/>
                                                    {formData.categories.includes(c.id) && <>
                                                        <div className="absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
                                                            <Check/>
                                                        </div>
                                                    </>}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                ))}
                                {handleErrors(errors, "categories")}
                            </ul>
                        </div>
                        
                        <button type="submit" className="bg-orange-500 hover:bg-orange-400 py-2 rounded-sm text-white transition-all duration-200 hover:scale-[101%] ">Create</button>
                    </div>
                </form>
            </section>
            }
       </>)
}