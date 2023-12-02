import "./wrapped.css"
import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import { useEffect, } from "react";
function Seven(props){
    
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/7"
    //     }, 30000)
    //   }, [])
    return(
        <>
        <div className="three">
        <Left path="#slide6"></Left>
            <Right path="#slide8"></Right>
            <center>
                {/* first text starts */}
           <div className="third">
            <h2 className="text-4xl">Time is Construct But<br></br>We kept track Anyway</h2>
            <p className="sec-para text-2xl">You Coded for <span>{props.min}</span> Minutes</p>
            <p className="sec-para text-2xl">Thats <span>{props.total}</span> days NonStop</p>
           </div>
            </center>
       
        </div>
        
        </>
    )
}
export default Seven;