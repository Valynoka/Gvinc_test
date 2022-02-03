import React from "react";
import './Header.css'
import logo from '../Img/logo.png'
import {Link} from "react-router-dom";

function Header() {
    return(
        <header className={'header'}>
            <div className={'header__wrapper'}>
                <Link className={'header__logo-link'} to = {'/'}>
                    <img className={'header__logo'} src={logo} alt={'logo'}/>
                    <p className={'header__title'}>Gramota</p>
                </Link>
                <nav className={'header__menu'}>
                    <ul className={'header__menu-list'}>
                        <li className={'header__item'}>
                            <Link className={'header__item-link'} to = {'/'}>Главная</Link>
                        </li>
                        <li className={'header__item'}>
                            <Link className={'header__item-link'} to = {'Contacts'}>Контакты</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
