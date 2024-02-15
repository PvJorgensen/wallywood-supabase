import style from './Header.module.scss'
import { NavMain } from '../NavMain/NavMain'


export const Header = () => {
    return (
        <>
            <header className={style.headerMain}>
                <h1>WALLYWOOD</h1>
                <NavMain></NavMain>
            </header>
        </>
    )
}