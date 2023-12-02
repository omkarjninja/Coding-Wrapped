import "./btn.css"
function Left(props){
    const go=()=>{
        window.location.href=`${props.path}`;
    }

    return(
        <>
        <button className="btn left" onClick={go}>Prev</button>
        </>
    )
}
export default Left;