import { useEffect, useState } from "react";
import { useGlobal } from "../../contexts/GlobalContext"
import axios from '../../axios/axiosClient.js';
import ContactUsImage from '../../assets/undraw_mail_re_duel.svg';

export default function(){
    const initialFormData = {
        email: "",
        message: "",
    };

    const { baseUrl } = useGlobal();

    const [formData, setFormData] = useState(initialFormData);
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/contact-us', formData);
            setSent(true);
        }catch(err){
            setErrors(err.response.data.errors)
            setSent(false);
        }

    }
    const handleErrors = (errsArray, field) => {
        const errors = errsArray.filter(e => e.path === field);
        if(errors.length > 0){
            return (<span className="text-red-500 italic">{errors[0].msg}</span>)
        }
    }

    useEffect(()=>{
        if(sent){
            setFormData(initialFormData);
            setErrors([]);
        }
    },[sent]);

    return(<>
    <div className="mt-10 bg-[#eff4f8]">
        <div className="flex items-center py-5 container mx-auto">
            <div className="w-1/3 py-3">
                <h1 className="text-3xl font-bolder pb-5">Contact us!</h1>
                <figure>
                    <img src={ContactUsImage} alt="Contact-us" />
                </figure>
            </div>
            <form action="" onSubmit={handleSubmit} className="w-2/3 rounded-md p-5">

                <div className="mb-3">
                    <label>
                        <span>Email <span className="text-red-500"><strong>*</strong></span></span>
                        <input className={`${errors.length>0? "border-red-500 bg-red-100" : ""} border-[1.5px] w-full py-1 px-1 rounded-sm outline-none focus:border-[#fc6e51]`} type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData(curr => ({...curr, email: e.target.value}))} />
                        {errors.length > 0 && handleErrors(errors, "email")}
                    </label>
                </div>
                <div className="mb-3">
                    <label>
                        <span>Message <span className="text-red-500"><strong>*</strong></span></span>
                        <textarea className={`${errors.length>0? "border-red-500 bg-red-100" : ""} border-[1.5px] w-full px-1 rounded-sm outline-none focus:border-[#fc6e51]`} name="message" id="message" rows="10" value={formData.message} onChange={(e) => setFormData(curr => ({...curr, message: e.target.value}))} ></textarea>
                        {errors.length > 0 && handleErrors(errors, "message")}
                    </label>
                </div>
                <button type="submit" className=" self-start bg-[#fc6e51] px-7 py-2 rounded-md text-slate-100 hover:bg-[#fc6e10] transition-all duration-200 ease-in-out hover:scale-105">Send</button>
            </form>
        </div>
    </div>
    </>)
}