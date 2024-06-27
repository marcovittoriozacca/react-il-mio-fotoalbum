import { Link } from 'react-router-dom';
import NavLogo from '../../assets/nav-logo.png';

const navLinks = [
    {
        name: "home",
        href: "/",
    },
]
export default function(){
    return(<>
        <header>
            <nav>
                <ul className='flex'>
                    <li>
                        <Link to="/">
                            <figure className='w-[50px]'>
                                <img src={NavLogo} alt="LensCrafted" />
                            </figure>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}