import React from "react";

import './Contacts.css'

import telegram from "../Img/telegram.png";
import instagram from "../Img/instagram.png";
import whatsapp from "../Img/whatsapp.png";
import git from "../Img/git.png";

function Contacts(){
    return(
        <footer className={'contacts'}>
            <ul className={'contacts__list'}>
                <li className={'contacts__item'}>
                    <a href = {'https://t.me/Rostislav_Kastov'} className={'contacts__link'}>
                        <img src={telegram}  className={'contacts__icon-img'} alt={'icon'}/>
                    </a>
                </li>
                <li className={'contacts__item'}>
                    <a href = {'https://www.instagram.com/kastovrostislav/'} className={'contacts__link'}>
                        <img src={instagram} className={'contacts__icon-img'} alt={'icon'}/>
                    </a>
                </li>
                <li className={'contacts__item'}>
                    <a href = {'https://api.whatsapp.com/send/?phone=79035983964'} className={'contacts__link'}>
                        <img src={whatsapp} className={'contacts__icon-img'} alt={'icon'}/>
                    </a>
                </li>
                <li className={'contacts__item'}>
                    <a href = {'https://github.com/Valynoka/Gvinc_test'} className={'contacts__link'}>
                        <img src={git} className={'contacts__icon-img'} alt={'icon'}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Contacts;
