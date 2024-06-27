import { useEffect, useState } from "react";
import { IoEye as Visible, IoEyeOff as Hidden} from "react-icons/io5";
import './Login.css';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate();
    const { handleLogin, user } = useAuth();

    const initialData = {
        email: "",
        password: "",
    };
    const [formData, setFormData] = useState(initialData)
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            handleLogin(formData);
            navigate("/dashboard");
        }catch(err){
            console.error(err);
        }

    }

    const handleInputs = (e) => {
        setFormData(curr => ({...curr, [e.target.name]: e.target.value}));
    }

    useEffect(()=>{
        if(user){
            navigate("/dashboard");
        }
    },[user])

    return(<>
        <section>
            <form action="" onSubmit={handleSubmit} className="form">
                <div className="form-wrapper">
                    <div>
                        <label className="label">
                            Email
                                <input className="input-style" type="text" name="email" id="email" value={formData.email} onChange={handleInputs} />
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            Password
                            <div className="password-wrapper">
                                <input className="password input-style" type={showPassword? "text" : "password"} name="password" id="password" value={formData.password} onChange={handleInputs} />
                                <button type="button" className="show-password" onClick={() => setShowPassword(curr => !curr)}>
                                    {showPassword? <Hidden/> : <Visible/>}
                                </button>
                            </div>
                            
                        </label>
                    </div>
                    <button className="submit-button" type="submit">Login</button>
                </div>

            </form>
        </section>
    </>)
}