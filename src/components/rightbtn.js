import "./btn.css"

function Right(props){
    const go=()=>{
        window.location.href=`${props.path}`;
    }

    return(
        <>
        <button className="btn right" onClick={go}>Next</button>
        </>
    )
}
export default Right;