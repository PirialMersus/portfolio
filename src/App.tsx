import React from 'react';
import s from './App.module.css'
import userAva from './img/userAva.jpg'
import reactLogo from './img/react-logo.png'
import Skill from "./components/Skills/Skill";


function App() {
    return (
        <div className="App">
            <div className={s.header}>
                <div className={s.container}>
                    <h2 className={s.logo}>Header</h2>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Скилы</a></li>
                        <li><a href="#">Работы</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
            </div>
            <div className={s.acquaintance}>
                <div className={s.container}>
                    <div className={s.acquaintanceContent}>
                        <p>Привет!<br/>Меня зовут Антон Иванов.<br/>Я front-end разработчик</p>
                        <img src={userAva} alt="user photo"/>
                    </div>
                </div>
            </div>
            <div className={s.skills}>
                <div className={s.container}>
                    <div className={s.skillsHeader}>
                        <h4>Мои скилы:</h4>
                    </div>
                    <div className={s.skillsContent}>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                    </div>
                </div>
            </div>
            <div className={s.works}>
                <div className={s.container}>
                    <div className={s.worksHeader}>
                        <h4>Мои работы:</h4>
                    </div>
                    <div className={s.worksContent}>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                        <Skill imgAddress={reactLogo} skillDescription='Подробное описание навыка' skillName="React"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
