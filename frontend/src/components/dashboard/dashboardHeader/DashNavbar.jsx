import DashNavIcon from '../../../assets/dashboard/dash-nav-icon.png'

export default function(){
    return(<>
        <header>
            <nav>
                <ul>
                    <li>
                        <figure>
                            <img src={DashNavIcon} alt="dash-nav-icon"/>
                        </figure>
                    </li>
                </ul>
            </nav>
        </header>

    </>)

}