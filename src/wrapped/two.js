import "./wrapped.css"
import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import { useEffect, } from "react";
function Two(props){
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/3"
    //     }, 30000)
    //   }, [])
    return(
        <>
        <div className="two">
        <Left path="#slide1"></Left>
            <Right path="#slide3"></Right>
            <center>
                {/* first text starts */}
            <div className="second text-4xl">
           <h2 className="text-4xl">2023 was a Feast for Your<br></br> Brains and Fingers</h2>
           <p className="sec-para text-2xl">You Created <span>{props.repo}</span> Repositories This Year</p>
           </div>
            </center>
       
        </div>
        
        </>
    )
}
export default Two;