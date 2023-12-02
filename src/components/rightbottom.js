import "./btn.css"
const goto=()=>{
    window.open("https://github.com/omkarjninja", '_blank');
}
function RightBtm(props){

    return(
        <>
        {/* <button className="btn left" onClick={go}>Prev</button> */}
        <h2 className="btm righty text-2xl" onClick={goto}>Github.com/omkarjninja</h2>
        </>
    )
}
export default RightBtm;