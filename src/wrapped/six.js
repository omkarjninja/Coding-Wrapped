import "./wrapped.css"
import Right from "../components/rightbtn";
import Left from "../components/leftbtn";
import { useEffect, } from "react";
function Six(props){
    const arr=[
        {num:1,name:props.pro1},
        {num:2,name:props.pro2},
        {num:3,name:props.pro3},
        {num:4,name:props.pro4},
        {num:5,name:props.pro5},
        ]
    // useEffect(() => {
    //     setTimeout(() => {
    //       window.location.href="/wrapped/7"
    //     }, 30000)
    //   }, [])
    return(
        <>
        <div className="six">
        <Left path="#slide5"></Left>
            <Right path="#slide7"></Right>
            <center>
            <h2 className="text-3xl pb-5 mt-5 text-semibold">Your Top 5 Projects</h2>
                {arr.map((lang)=>(
                    <article className="flex bg-white transition hover:shadow-xl mt-3 mr-3 w-1/2 h-1/2">
                    <div className="rotate-180  [writing-mode:_vertical-lr]">
                        <span>Wrapped</span>
                     
                    </div>
                  
                    <div className="hidden sm:block sm:basis-56">
                    </div>
                  
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                          <h3 className="font-bold uppercase text-gray-900 text-2xl">
                           {lang.num}{") "}{lang.name}
                          </h3>
                        {/* <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                          pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                          quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                          atque dignissimos. Molestias explicabo corporis voluptatem?
                        </p> */}
                      </div>
                  
                    </div>
                  </article>
                ))}
              <p className="text-xl pt-5">You Built Many Projects!</p>
            </center>
       
        </div>
        
        </>
    )
}
export default Six;