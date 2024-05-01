import "./Component.css"
export function FirstComponent(){
    const elements ={
        backgroundColor: "blue",
        fontSize:"20px"
    };
    const person = {
        name : "islam" , 
        email : "galal@g.com"
    }
    return(
          <div>
            <div>
                <h1 style={elements}>{person.name} GALAL</h1>
                <button>My Profile</button>
                <h2 className={"active redBg"}>HELLOOOOOOOOO</h2>
            </div>
        </div>
       
    )
    
}