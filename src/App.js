import NavBar from "./NavBar";
import "./App.css"
import About from "./About";
import {Skills} from "./Skills";
import {Projects} from "./Components/Projects";
import {Recommendation} from "./Recommendation";
import RecommendationForm from "./RecommendationForm";

export default function App(prop) {
    return (<>
        <NavBar/>
        <About/>
       <Skills/>
            <Projects/>
            <Recommendation/>
            <RecommendationForm/>
        </>
    )


            }





