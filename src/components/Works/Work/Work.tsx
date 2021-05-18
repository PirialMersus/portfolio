import React from 'react';
import s from './Work.module.css'

type WorkPropsType = {
    imgAddress: string
    projectName: string
    projectDescription: string
}


function Work(props: WorkPropsType) {
    return (
        <div className={s.works}>
            <div className={s.imgPlusButton}>
                <img src={props.imgAddress} alt=""/>
                <a href="#" className={s.btn}>Смотреть</a>
            </div>
            <h4>{props.projectName}</h4>
            <p>{props.projectDescription}</p>
        </div>
    );
}

export default Work;
