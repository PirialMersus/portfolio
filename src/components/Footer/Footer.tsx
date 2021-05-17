import React from 'react';
import s from './Footer.module.css'
import common from '../../common/style/Common.module.css'


function Footer() {
    return (
        <div className={s.footer}>
            <div className={common.container}>
                <div className={s.footerContent}>
                    <h3>Иванов Иван</h3>
                    <div className={s.socialNetworksIcons}>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                    <p>@2021 Все права защищены</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
