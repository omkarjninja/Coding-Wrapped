import "./wrapped.css"
import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import { useEffect,useState } from "react";
function Eight(props){
    const [classic,setclassic]=useState('pfp')
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/7"
    //     }, 30000)
    //   }, [])
    const change=()=>{
        setclassic('pfp-show')
    }
    return(
        <>
        <div className="eight">
        <Left path="#slide7"></Left>
            <Right path="#final"></Right>
            <center>
                {/* first text starts */}
           <div className="eight">
            <h2 className="avatar-text text-4xl">Tap To Reveal Your Avatar!</h2>
            <img className={`pfp ${classic}`} src={props.pdp} width="30%" onClick={change}></img>
            {/* <p>You Did Great This Year!</p> */}
           </div>
           
            </center>
       
        </div>
        <p className="e-para text-2xl">You Did Great This Year!</p>
        </>
    )
}
export default Eight;