import React from 'react';
import Header from "./components/Header/Header";
import Acquaintance from "./components/Acquaintance/Acquaintance";
import SkillsComponent from "./components/SkillsComponent/SkillsComponent";
import Works from "./components/Works/Works";
import OnlineWorkBlock from './components/OnlineWorkBlock/OnlineWorkBlock';
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Acquaintance/>
            <SkillsComponent/>
            <Works/>
            <OnlineWorkBlock/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
