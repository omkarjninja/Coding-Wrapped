import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import "./wrapped.css";
import { useEffect, } from "react";
function One(props){
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/2"
    //     }, 30000)
    //   }, [])
    return(
        <>
        <div className="one">
            <Left path="#final"></Left>
            <Right  path="#slide2"></Right>
            <center>
                {/* first text starts */}
            <h2 className="text-5xl one-text">2023 Wrapped<br></br>Coding</h2>
            {/* first text ends */}
            <div className="text-5xl two-text">
            <h2>Hello {props.name}</h2>
            <br></br>
            <p className="text-2xl">Its Wrapped Time Ready?Lets do This!</p>
            </div>
            
            </center>
       
        </div>
        
        </>
    )
}
export default One;