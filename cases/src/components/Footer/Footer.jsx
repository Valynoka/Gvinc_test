import React from "react";

import './Footer.css'

import telegram from "../Img/telegram.png";
import instagram from "../Img/instagram.png";
import whatsapp from "../Img/whatsapp.png";
import git from "../Img/git.png";

function Footer(){
    return(
        <footer className={'footer'}>
            <ul className={'footer__list'}>
                <li className={'footer__item'}>
                    <a href = {'https://t.me/Rostislav_Kastov'} className={'footer__link'}>
                        <img src={telegram}  className={'footer__icon-img'} alt={'icon'}/>
                    </a>
                </li>
                <li className={'footer__item'}>
                    <a href = {'https://www.instagram.com/kastovrostislav/'} className={'footer__link'}>
                        <img src={instagram} className={'footer__icon-img'} alt={'icon'}/>
                    </a>
                </li>
                <li className={'footer__item'}>
                    <a href = {'https://api.whatsapp.com/send/?phone=79035983964'} className={'footer__link'}>
                        <img src={whatsapp} className={'footer__icon-img'} alt={'icon'}/>
                    </a>
                </li>
                <li className={'footer__item'}>
                    <a href = {'https://github.com/Valynoka/Gvinc_test'} className={'contacts__link'}>
                        <img src={git} className={'footer__icon-img'} alt={'icon'}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;
