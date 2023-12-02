import "./wrapped.css"
import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import { useEffect, } from "react";
function Three(props){
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/4"
    //     }, 30000)
    //   }, [])
    return(
        <>
        <div className="three">
        <Left path="#slide2"></Left>
            <Right path="#slide4"></Right>
            <center>
                {/* first text starts */}
           <div className="third">
            <h2 className="text-3xl">You Coded <span>{props.days}</span> days in<br></br>2023</h2>
            <p className="sec-para text-1xl">And The One Language that Really Connected!</p>
           </div>
            </center>
       
        </div>
        
        </>
    )
}
export default Three;