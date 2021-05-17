import React from 'react';
import s from './Acquaintance.module.css'
import common from '../../common/style/Common.module.css'

import userAva from "../../img/userAva.jpg";


function Acquaintance() {
    return (
        <div className={s.acquaintance}>
            <div className={common.container}>
                <div className={s.acquaintanceContent}>
                    <p>Привет!<br/>Меня зовут Антон Иванов.<br/>Я front-end разработчик</p>
                    <img src={userAva} alt="user photo"/>
                </div>
            </div>
        </div>
    );
}

export default Acquaintance;
