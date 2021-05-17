import React from 'react';
import s from './SkillsComponent.module.css'
import common from '../../common/style/Common.module.css'
import Skill from "./Skill/Skill";
import reactLogo from "../../img/react-logo.png";


function SkillsComponent() {
    return (
        <div className={s.skills}>
            <div className={common.container}>
                <div className={s.skillsWrap}>
                    <div className={s.skillsHeader}>
                        <h3>Мои скилы:</h3>
                    </div>
                    <div className={s.skillsContent}>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;
