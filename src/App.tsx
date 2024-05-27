import './App.css';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Projects} from "./layout/sections/projects/Projects";
import {Technologies} from "./layout/sections/technologies/Technologies";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Projects/>
            <Technologies/>
        </div>
    );
}

export default App;
