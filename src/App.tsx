import './App.css';
import {Header} from "./layout/header/Header";
import {Hero} from "./layout/sections/hero/Hero";
import {Projects} from "./layout/sections/projects/Projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Projects/>
        </div>
    );
}

export default App;
