
import About from "./About";
import { Headers } from "./Headers";
import { Post } from "./Post";

export default function App() {

  return (
    <>
      <div> 
        <Headers />
        <div style={{width:"50%"}}>
            <About/>
          <Post />
        </div>
      </div>
    </>
  );
}
