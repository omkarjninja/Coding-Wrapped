import "./wrapped.css"
import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import { useEffect, } from "react";
function Four(props){
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/5"
    //     }, 30000)
    //   }, [])
    return(
        <>
        <div className="four">
        <Left path="#slide3"></Left>
            <Right path="#slide5"></Right>
            <center>
                {/* first text starts */}
                <div className="fourth">
                <img className="img-four" src="https://source.unsplash.com/random" width="30%"></img>
                <p className="sec-para text-2xl">{props.favlang} was Your Favorite Language</p>
                </div>
            </center>
       
        </div>
        
        </>
    )
}
export default Four;