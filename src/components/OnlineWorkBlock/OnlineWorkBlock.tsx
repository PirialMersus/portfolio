import React from 'react';
import s from './OnlineWorkBlock.module.css'
import common from '../../common/style/Common.module.css'


function OnlineWorkBlock() {
    return (
        <div className={s.onlineBlock}>
            <div className={common.container}>
                <div className={s.onlineBlockContent}>
                    <h3>Рассматриваю варианты удаленной работы</h3>
                    <button>Нанять меня</button>
                </div>
            </div>
        </div>
    );
}

export default OnlineWorkBlock;
