import { Link, NavLink } from 'react-router-dom';
import DashNavIcon from '../../../assets/dashboard/dash-nav-icon.png'
import { useAuth } from '../../../contexts/AuthContext'
import UserDropdown from './UserDropdown';


const links = [
    {
        name: "Home Page",
        href: "/",
    },
    {
        name: "Photos",
        href: "/dashboard",
    }
];

export default function(){
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const LoggedUserNavbar = () => {
        return (<>
            {links.map((l,i) => (
                <li key={`logged-user-link-${i}`}>
                    <NavLink to={l.href} className={"navlink"} end>
                        {l.name}
                    </NavLink>
                </li>
            ))}
        </>)
    }

    const { user } = useAuth();

    return(<>
        <header className='border-b border-black py-2'>
            <nav className=' px-5 flex items-center justify-between gap-x-3'>

                <ul className='flex items-center gap-x-3'>
                    <li>
                        <figure className='w-[25px]'>
                            <img src={DashNavIcon} alt="dash-nav-icon"/>
                        </figure>
                    </li>
                    <LoggedUserNavbar/>
                </ul>
            {user && <>
                <UserDropdown
                    username={user.username}
                    image={`${baseUrl}/${user.image}`}
                />
            </>}
                
            </nav>
        </header>
    </>)

}