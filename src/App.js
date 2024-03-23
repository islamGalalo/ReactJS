import Cards from "./Components/Cards";

export default function App() {
    return(
    <div>
        <Cards title = {"1st title"} desc={"desc1"}  />
        <Cards game = {"2nd title"}  desc={"desc2"} />
        <Cards game = {"3rd title"} desc={"desc3"}  />

    </div>
    )
}