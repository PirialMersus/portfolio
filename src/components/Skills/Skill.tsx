import React from "react";
import s from './Skill.module.css'

type SkillPropsType = {
    imgAddress: string
    skillName: string
    skillDescription: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skillWrap}>
            <img src={props.imgAddress} alt="icon"/>
            <p className={s.skillName}>{props.skillName}</p>
            <p className={s.skillDescription}>{props.skillDescription}</p>
        </div>
    )
}
export default Skill