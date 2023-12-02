import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import "./wrapped.css";
import { useEffect,useState } from "react";
import LeftBtm from "../components/leftbottom";
import RightBtm from "../components/rightbottom";
function Final(props){
    const [bgcolor,setbgcolor]=useState('orange-bg')
    // const [box,setbox]=useState('current')
    const [textcolor,settextcolor]=useState('text-setBlack')

    return(
        <>
        {/* <div className="one"> */}
            <Left path="#slide8"></Left>
            <Right  path="#slide1"></Right>
            <LeftBtm></LeftBtm>
            <RightBtm></RightBtm>
        {/* </div> */}
    <div className={`w-full grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ${bgcolor} ${textcolor}`}>
        <div className="h-32 rounded-lg">
        <div className="swatches flex">
    <h2 className="pl-20 text-2xl pt-5">Select a Color:</h2>
        <div className={`orange circle ${bgcolor==='orange-bg'?"current":"none"}`} onClick={()=>{settextcolor('');setbgcolor('');settextcolor('text-setBlack'); setbgcolor('orange-bg')}}></div>
        <div className={`blue circle ${bgcolor==='blue-bg'?"current":"none"}`} onClick={()=>{settextcolor('');setbgcolor('');settextcolor('text-setBlack'); setbgcolor('blue-bg')}}></div>
        <div className={`yellow circle ${bgcolor==='yellow-bg'?"current":"none"}`} onClick={()=>{settextcolor('');setbgcolor('');settextcolor('text-setBlack'); setbgcolor('yellow-bg')}}></div>
        <div className={`light circle ${bgcolor==='light-bg'?"current":"none"}`} onClick={()=>{settextcolor('');setbgcolor('');settextcolor('text-setBlack'); setbgcolor('light-bg')}}></div>
        <div className={`dark circle ${bgcolor==='dark-bg'?"current":"none"}`} onClick={()=>{settextcolor('');setbgcolor('');settextcolor('text-setWhite'); setbgcolor('dark-bg')}}></div>
        <div className={`black circle ${bgcolor==='black-bg'?"current":"none"}`} onClick={()=>{settextcolor('');setbgcolor('');settextcolor('text-setWhite'); setbgcolor('black-bg')}}></div>
        </div>
        </div>
        <div className="h-32 rounded-lg flex">
        <img className={`pfp-show2`} src={props.pdp} width="30%"></img>
        <div className="titles px-6 pt-10 mt-10">
                <h2 className={`text-2xl text-black ${textcolor}`}>Favorite Languages</h2>
                    <ol>
                    <li>1.{props.langone}</li>
                    <li>2.{props.langtwo}</li>
                    <li>3.{props.langthree}</li>
                    <li>4.{props.langfour}</li>
                    <li>5.{props.langfive}</li>
                    </ol>
                </div>
                <div className="titles">
                <h2 className={`text-2xl text-black pt-10 mt-10 ${textcolor}`}>Favorite Projects</h2>
                <ol>
                    <li>1.{props.pro1}</li>
                    <li>2.{props.pro2}</li>
                    <li>3.{props.pro3}</li>
                    <li>4.{props.pro4}</li>
                    <li>5.{props.pro5}</li>
                    </ol>
                </div>
            <div className="bottomG flex">
                <div className="mins px-10 text-3xl">
                <h2>Minutes<br></br> Coded</h2>
                <h2 className="pt-5"><span>{props.min}</span></h2>

                </div>
                <div className="fav px-10 text-3xl">

                <h2>Favorite<br></br> Language</h2>
                <h2 className="pt-5"><span>{props.favlang}</span></h2>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Final;
