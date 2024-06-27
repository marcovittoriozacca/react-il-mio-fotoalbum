import { useState } from "react";
import { IoEye as Visible, IoEyeOff as Hidden} from "react-icons/io5";
import './Login.css';

export default function(){
    const initialUser = {
        email: "",
        password: "",
    };

    const [user, setUser] = useState(initialUser);
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInputs = (e) => {
        setUser(curr => ({...curr, [e.target.name]: e.target.value}));
    }

    return(<>
        <section>
            <form action="" onSubmit={handleSubmit} className="form">
                <div className="form-wrapper">
                    <div>
                        <label>
                            Email
                                <input type="text" name="email" id="email" value={user.email} onChange={handleInputs} />
                        </label>
                    </div>

                    <div>
                        <label>
                            Password
                            <div className="password-wrapper">
                                <input className="password" type={showPassword? "text" : "password"} name="password" id="password" value={user.password} onChange={handleInputs} />
                                <button className="show-password" onClick={() => setShowPassword(curr => !curr)}>
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