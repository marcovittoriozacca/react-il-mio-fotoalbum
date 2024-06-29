import { Link, NavLink } from 'react-router-dom';
import NavLogo from '../../assets/nav-logo.png';
import { useAuth } from '../../contexts/AuthContext';
import UserDropdown from '../dashboard/dashboardHeader/UserDropdown';
import { useGlobal } from '../../contexts/GlobalContext';

export default function(){

    const { user } = useAuth();
    const { baseUrl } = useGlobal();

    return(<>
        <header>
            <nav className='flex items-center container mx-auto py-3 gap-x-3'>
                <ul>
                    <li>
                        <Link to="/">
                            <figure className='w-[50px]'>
                                <img src={NavLogo} alt="LensCrafted" />
                            </figure>
                        </Link>
                    </li>
                </ul>
                <div className='w-full'>
                    <ul className='flex items-center w-full justify-between'>
                        {!user && <>
                            <li>
                                <NavLink to={"/login"}>
                                    Login
                                </NavLink>
                            </li>
                        {/* 
                            <li>
                                <NavLink to={"/register"}>
                                    Register
                                </NavLink>
                            </li>
                        */}
                        </>}


                        {user && <>
                            <li>
                                <NavLink to={"/dashboard"}>
                                    My Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <UserDropdown
                                    username={user.username}
                                    image={`${baseUrl}/${user.image}`}
                                />
                            </li>
                        </>}
                    </ul>
                </div>
            </nav>
        </header>
    </>)
}