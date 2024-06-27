import DashNavIcon from '../../../assets/dashboard/dash-nav-icon.png'

export default function(){
    return(<>
        <header className='border-b border-black py-2'>
            <nav className=' px-3 sm:px-0 container mx-auto'>
                <ul className='flex'>
                    <li>
                        <figure className='w-[25px]'>
                            <img src={DashNavIcon} alt="dash-nav-icon"/>
                        </figure>
                    </li>
                </ul>
            </nav>
        </header>

    </>)

}