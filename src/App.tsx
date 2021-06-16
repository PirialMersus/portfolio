import React, {useLayoutEffect, useState} from 'react';
import Header from "./components/Header/Header";
import Acquaintance from "./components/Acquaintance/Acquaintance";
import SkillsComponent from "./components/SkillsComponent/SkillsComponent";
import Works from "./components/Works/Works";
import OnlineWorkBlock from './components/OnlineWorkBlock/OnlineWorkBlock';
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import s from './App.module.scss'
import anime from "animejs";

function App() {
        const blocks = []
    for (let i = 0; i < 600; i++) {
        blocks.push(<div className='block' key={i}></div>)
    }
    const animationRef = React.useRef<any>(null);
    React.useEffect(() => {
        animationRef.current = anime({
            targets: '.block',
            translateX: function () {
                return anime.random(0, 3000)
            },
            translateY: function () {
                return anime.random(0, 3000)
            },
            scale: function () {
                return anime.random(1, 5)
            },
        });
    }, []);
    return (

        <div className="app">
            <div>
                {blocks}
                <button onClick={() => animationRef.current?.restart()} className={s.btnGenerate}>Click</button>
            </div>
            <div className={s.commonContainerApp}>
                <Header/>
                <Acquaintance/>
                <SkillsComponent/>
                <Works/>
                <OnlineWorkBlock/>
                <Contacts/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
