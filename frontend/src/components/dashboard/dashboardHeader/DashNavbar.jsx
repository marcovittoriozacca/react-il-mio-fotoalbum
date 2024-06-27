import { Link, NavLink } from 'react-router-dom';
import DashNavIcon from '../../../assets/dashboard/dash-nav-icon.png'
import { useAuth } from '../../../contexts/AuthContext'

const links = [
    {
        name: "Photos",
        href: "/dashboard",
    }
];

export default function(){

    const LoggedUserNavbar = () => {
        return (<>
            {links.map((l,i) => (
                <li>
                    <NavLink to={l.href} key={`logged-user-link-${l.i}`}>
                        {l.name}
                    </NavLink>
                </li>
            ))}
        </>)
    }

    const NormalUser = () => {
        return(<>
            <li>
                <NavLink to="/login">
                    Login
                </NavLink>
            </li>
        </>)
    }

    const { user } = useAuth();

    return(<>
        <header className='border-b border-black py-2'>
            <nav className=' px-3 sm:px-0 container mx-auto flex items-center justify-between'>
                <ul className='flex'>
                    <li>
                        <figure className='w-[25px]'>
                            <img src={DashNavIcon} alt="dash-nav-icon"/>
                        </figure>
                    </li>
                </ul>
                <ul>
                    {user? <LoggedUserNavbar/> : <NormalUser/>}
                </ul>
            </nav>
        </header>
    </>)

}