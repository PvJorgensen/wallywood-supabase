import { NavLink } from 'react-router-dom'
import style from './NavMain.module.scss'



export const NavMain = () => {
    return(
        <nav className={style.navMain}>
            <ul>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/posters/action'>PLAKATER</NavLink></li>
                <li><NavLink to='/Om'>OM OS</NavLink></li>
                <li><NavLink to='/Kontakt'>KONTAKT</NavLink></li>
                <li><NavLink to='/Login'>LOGIN</NavLink></li>

            </ul>
        </nav>
    )
}