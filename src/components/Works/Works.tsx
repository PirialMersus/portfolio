import React from 'react';
import s from './Works.module.css'
import common from '../../common/style/Common.module.css'
import Work from "./Work/Work";
import siteScreen from './../../img/siteScreenYDS.jpg'


function Works() {
    return (
        <div className={s.works}>
            <div className={common.container}>
                <div className={s.worksWrapper}>
                    <div className={s.worksHeader}>
                        <h4>Мои работы:</h4>
                    </div>
                    <div className={s.worksContent}>
                        <Work
                            projectName='Название проекта'
                            projectDescription='Краткое описание'
                            imgAddress={siteScreen}/>
                        <Work
                            projectName='Название проекта'
                            projectDescription='Краткое описание'
                            imgAddress={siteScreen}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;
