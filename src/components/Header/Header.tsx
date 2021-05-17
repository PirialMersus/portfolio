import React from 'react';
import s from './Header.module.css'
import common from '../../common/style/Common.module.css'


function Header() {
    return (
        <div className={s.header}>
            <div className={common.container}>
                <div className={s.headerContent}>
                    <h2 className={s.logo}>Header</h2>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Скилы</a></li>
                        <li><a href="#">Работы</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
