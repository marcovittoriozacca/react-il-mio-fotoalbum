import { useEffect, useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext"
import axios from '../../axios/axiosClient.js';

export default function(){
    const initialFormData = {
        email: "",
        message: "",
    };

    const { baseUrl } = useGlobal();

    const [formData, setFormData] = useState(initialFormData);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/contact-us', formData);
            setSent(true);
        }catch(err){
            console.error(err);
            setSent(false);
        }

    }

    useEffect(()=>{
        if(sent){
            setFormData(initialFormData);
        }
    },[sent])

    return(<>
    <div className="border-[.5px]">
        <form action="" onSubmit={handleSubmit}>

            <div className="mb-3">
                <label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData(curr => ({...curr, email: e.target.value}))} />
                </label>
            </div>
            <div className="mb-3">
                <label>
                    <textarea name="message" id="message" rows="10" value={formData.message} onChange={(e) => setFormData(curr => ({...curr, message: e.target.value}))} ></textarea>
                </label>
            </div>
            {console.log(formData.email, formData.message)}
            <button type="submit">Send</button>

        </form>
    </div>
    </>)
}