import "../first/first.css"
import alc from "../assets/images/alchemist.jpg"
import vamp from "../assets/images/vamp.jpg"
import ava3 from "../assets/images/illuminist.jpg"
import ava4 from "../assets/images/begi.jpg"
import ava5 from "../assets/images/master.jpg"
import ava6 from "../assets/images/time.jpg"

import one from "../assets/images/3.png"
import { useState } from "react";
import One from "../wrapped/one";
import Two from "../wrapped/two";
import Three from "../wrapped/three";
import Four from "../wrapped/four";
import Five from "../wrapped/five";
import Six from "../wrapped/six";
import Seven from "../wrapped/seven";
import Eight from "../wrapped/eight";
import Final from "../wrapped/final"
function First(){
const avatars=[alc,vamp,ava3,ava4,ava5,ava6];
var rand=Math.random();
var ranom=rand*(avatars.length-1)
var final=Math.floor(ranom);
    const [name,setname]=useState('')
    const [repos,setrepos]=useState('')
    const [days,setdays]=useState('')
    const [lang1,setlang1]=useState('')
    const [lang2,setlang2]=useState('')
    const [lang3,setlang3]=useState('')
    const [lang4,setlang4]=useState('')
    const [lang5,setlang5]=useState('')
    const [pro1,setpro1]=useState('')
    const [pro2,setpro2]=useState('')
    const [pro3,setpro3]=useState('')
    const [pro4,setpro4]=useState('')
    const [pro5,setpro5]=useState('')
    const [show,setShow]=useState('hide')
    const [avatar,setavatar]=useState('hide')
    const goto=()=>{
        window.location.href="#carousel";
        setShow('show')
        setavatar(avatars[final])
    }
    const minutes=days*3*60;
    const totaldays=minutes/(24*60);
    const round=Math.round(totaldays);
    


    return(
    <> 
        <div className="w-full h-screen flex">
        <img src={one} alt="background" className="object-left h-screen w-4/12" />
        <div className="bg-white flex flex-col justify-center items-center w-8/12 shadow-lg">
      <h1 className="text-3xl font-bold text-orange-500 mb-2">Info For Coding Wrapped</h1>
      <div className="w-3/4 text-center">
        <input type="text" name="username" placeholder="Name" autocomplete="off" value={name} onChange={(e) => setname(e.target.value)}
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
        <input type="text" name="password" placeholder="No of Repos created" autocomplete="off"  value={repos} onChange={(e) => setrepos(e.target.value)}
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
        <input type="text" name="password" placeholder="No of Days Coded" autocomplete="off" value={days} onChange={(e) => setdays(e.target.value)}
            className="shadow-md border w-full h-10 px-3 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
       <h1 className="text-xl font-bold text-orange-500 mb-2">Top 5 Languages and Projects</h1>
        
        <input type="text" name="username" placeholder="Language" autocomplete="off"  value={lang1} onChange={(e) => setlang1(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
        <input type="text" name="username" placeholder="Language" autocomplete="off"  value={lang2} onChange={(e) => setlang2(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            <input type="text" name="username" placeholder="Language" autocomplete="off"  value={lang3} onChange={(e) => setlang3(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            <input type="text" name="username" placeholder="Language" autocomplete="off"  value={lang4} onChange={(e) => setlang4(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            <input type="text" name="username" placeholder="Language" autocomplete="off"  value={lang5} onChange={(e) => setlang5(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            
            <input type="text" name="username" placeholder="Projects" autocomplete="off"  value={pro1} onChange={(e) => setpro1(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
        <input type="text" name="username" placeholder="Projects" autocomplete="off"  value={pro2} onChange={(e) => setpro2(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            <input type="text" name="username" placeholder="Projects" autocomplete="off"  value={pro3} onChange={(e) => setpro3(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            <input type="text" name="username" placeholder="Projects" autocomplete="off"  value={pro4} onChange={(e) => setpro4(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />
            <input type="text" name="username" placeholder="Projects" autocomplete="off" value={pro5} onChange={(e) => setpro5(e.target.value)}
            className="shadow-md border w-1/5 h-10 px-1 py-2 text-orange-500 focus:outline-none focus:border-orange-500 mb-3 rounded" />

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-lg focus:outline-none shadow mt-3" onClick={goto}>Let's Go!</button>
      </div>
    </div>
  </div>
  <div>
  <div className={`carousel w-full ${show}`} id="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <One name={name}></One>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a> */}
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
   <Two repo={repos}></Two>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a> */}
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
        <Three days={days}></Three>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a> */}
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
        <Four favlang={lang1}></Four>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
        <Five langone={lang1} langtwo={lang2} langthree={lang3}
        langfour={lang4} langfive={lang5}
        ></Five>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
        <Six
        pro1={pro1} pro2={pro2} pro3={pro3} pro4={pro4} pro5={pro5}
        ></Six>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}
    </div>
  </div>
  <div id="slide7" className="carousel-item relative w-full">
        <Seven min={minutes} total={round}></Seven>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}
    </div>
  </div>
  <div id="slide8" className="carousel-item relative w-full">
        <Eight pdp={avatar}></Eight>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}
    </div>
  </div>
  <div id="final" className="carousel-item relative w-full">
        <Final  min={minutes} favlang={lang1} langone={lang1} langtwo={lang2} langthree={lang3}
        langfour={lang4} langfive={lang5}
        pro1={pro1} pro2={pro2} pro3={pro3} pro4={pro4} pro5={pro5}
        pdp={avatar}
        ></Final>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      {/* <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a> */}
    </div>
  </div>

</div>
  </div>
        </>
    )
}
export default First;
